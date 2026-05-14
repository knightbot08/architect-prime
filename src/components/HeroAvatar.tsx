import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import karlAvatar from "@/assets/karl-avatar.png";

const SIZE = 220;
const PARTICLE_COUNT = 60;
const LINK_DIST = 45;
const DOT_SPACING = 22;

type Particle = { x: number; y: number; vx: number; vy: number; r: number };
type Bolt = { d: string; id: number };

const makeParticles = (): Particle[] =>
  Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * SIZE,
    y: Math.random() * SIZE,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.2 + 0.6,
  }));

const makeBoltPath = (): string => {
  const edge = Math.floor(Math.random() * 4);
  let sx = 0, sy = 0;
  if (edge === 0) { sx = Math.random() * SIZE; sy = 0; }
  else if (edge === 1) { sx = SIZE; sy = Math.random() * SIZE; }
  else if (edge === 2) { sx = Math.random() * SIZE; sy = SIZE; }
  else { sx = 0; sy = Math.random() * SIZE; }
  const cx = 110, cy = 150;
  const segments = 6 + Math.floor(Math.random() * 4);
  let d = `M ${sx.toFixed(1)} ${sy.toFixed(1)}`;
  for (let i = 1; i <= segments; i++) {
    const t = i / segments;
    const px = sx + (cx - sx) * t + (Math.random() - 0.5) * 22;
    const py = sy + (cy - sy) * t + (Math.random() - 0.5) * 22;
    d += ` L ${px.toFixed(1)} ${py.toFixed(1)}`;
  }
  return d;
};

const HeroAvatar = () => {
  const [active, setActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>(makeParticles());
  const rafRef = useRef<number>();
  const [bolts, setBolts] = useState<Bolt[]>([]);
  const boltIdRef = useRef(0);

  // Pre-compute LED grid positions
  const ledDots = useMemo(() => {
    const dots: { x: number; y: number; delay: number; dur: number; color: string; size: number }[] = [];
    const offset = DOT_SPACING / 2;
    for (let y = offset; y < SIZE; y += DOT_SPACING) {
      for (let x = offset; x < SIZE; x += DOT_SPACING) {
        dots.push({
          x,
          y,
          // staggered: earliest dots at ~0s, fully populated by ~0.5s, then loop
          delay: Math.random() * 0.5,
          dur: 0.8 + Math.random() * 1.6,
          color: Math.random() > 0.5 ? "#00d4ff" : "#0077cc",
          size: 3 + Math.random() * 1.2,
        });
      }
    }
    return dots;
  }, []);

  // Particle animation
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const tick = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      const ps = particlesRef.current;
      for (const p of ps) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > SIZE) p.vx *= -1;
        if (p.y < 0 || p.y > SIZE) p.vy *= -1;
      }
      ctx.lineWidth = 0.6;
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const a = 0.35 * (1 - d / LINK_DIST);
            ctx.strokeStyle = `rgba(0, 180, 255, ${a.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of ps) {
        ctx.fillStyle = Math.random() > 0.5 ? "#00d4ff" : "#0099ee";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active]);

  // Lightning bolts
  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    const spawn = () => {
      if (cancelled) return;
      const count = 1 + Math.floor(Math.random() * 2);
      const newBolts: Bolt[] = [];
      for (let i = 0; i < count; i++) {
        newBolts.push({ d: makeBoltPath(), id: ++boltIdRef.current });
      }
      setBolts((b) => [...b, ...newBolts]);
      const ids = newBolts.map((b) => b.id);
      setTimeout(() => {
        setBolts((b) => b.filter((x) => !ids.includes(x.id)));
      }, 120);
      const next = 400 + Math.random() * 500;
      setTimeout(spawn, next);
    };
    const t = setTimeout(spawn, 200);
    return () => { cancelled = true; clearTimeout(t); setBolts([]); };
  }, [active]);

  const onToggle = useCallback(() => setActive((a) => !a), []);

  return (
    <div className="flex flex-col items-center lg:items-start">
      <div
        className="relative group"
        style={{ width: SIZE, height: SIZE }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={onToggle}
      >
        <div
          className="relative w-full h-full overflow-hidden border-[1.5px] border-glow-green transition-all duration-[400ms] ease-out"
          style={{
            borderRadius: 16,
            boxShadow: active
              ? "inset 0 0 28px 0 rgba(0,180,255,0.35), 0 0 30px hsl(var(--glow-green) / 0.25)"
              : "0 0 30px hsl(var(--glow-green) / 0.25), 0 0 60px hsl(var(--glow-green) / 0.1)",
          }}
        >
          <img
            src={karlAvatar}
            alt="Karl Angelo Alamida"
            className="w-full h-full object-cover transition-[filter] duration-500 ease-out"
            style={{
              filter: active
                ? "brightness(0.72) saturate(1.4) hue-rotate(10deg)"
                : "none",
            }}
            draggable={false}
          />

          {/* Dual-side rim lighting */}
          <div
            className="absolute inset-y-0 left-0 pointer-events-none transition-opacity duration-500 ease-out"
            style={{
              width: "38%",
              opacity: active ? 0.55 : 0.35,
              background:
                "linear-gradient(to right, rgba(0,150,255,1) 0%, rgba(0,150,255,0.5) 35%, rgba(0,150,255,0) 100%)",
              mixBlendMode: "screen",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 pointer-events-none transition-opacity duration-500 ease-out"
            style={{
              width: "38%",
              opacity: active ? 0.55 : 0.35,
              background:
                "linear-gradient(to left, rgba(0,150,255,1) 0%, rgba(0,150,255,0.5) 35%, rgba(0,150,255,0) 100%)",
              mixBlendMode: "screen",
            }}
          />

          {/* LED grid - powering up dots */}
          <svg
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            style={{ opacity: active ? 1 : 0 }}
          >
            {ledDots.map((d, i) => (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                r={d.size / 2}
                fill={d.color}
                style={{
                  filter: `drop-shadow(0 0 2px ${d.color})`,
                  animation: active
                    ? `led-blink ${d.dur}s ease-in-out ${d.delay}s infinite`
                    : "none",
                  opacity: 0,
                }}
              />
            ))}
          </svg>

          {/* Particle canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none transition-opacity duration-[400ms] ease-out"
            style={{ width: SIZE, height: SIZE, opacity: active ? 1 : 0 }}
          />

          {/* Lightning */}
          <svg
            className="absolute inset-0 pointer-events-none transition-opacity duration-[400ms] ease-out"
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            style={{ opacity: active ? 1 : 0 }}
          >
            {bolts.map((b) => (
              <g key={b.id}>
                <path
                  d={b.d}
                  fill="none"
                  stroke="#88eeff"
                  strokeWidth={0.3 + Math.random() * 0.5}
                  strokeOpacity={0.7}
                  style={{ filter: "blur(1.5px)" }}
                />
                <path
                  d={b.d}
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth={0.8 + Math.random() * 1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            ))}
          </svg>

          {/* Scan line */}
          <div
            className="absolute inset-x-0 pointer-events-none transition-opacity duration-[400ms] ease-out"
            style={{
              opacity: active ? 1 : 0,
              top: 0,
              height: 2,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.9) 50%, transparent 100%)",
              boxShadow: "0 0 8px rgba(0,212,255,0.8)",
              animation: active ? "avatar-scan 2s linear infinite" : "none",
            }}
          />
        </div>
      </div>
      <span className="mt-2 font-mono text-[11px] text-glow-green/80">{">_"} karl.jpg</span>

      <style>{`
        @keyframes avatar-scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(${SIZE - 2}px); }
        }
        @keyframes led-blink {
          0%, 100% { opacity: 0; }
          40% { opacity: 0.8; }
          60% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default HeroAvatar;
