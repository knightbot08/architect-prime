import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Workflows Built" },
  { value: 3, suffix: "", label: "Automation Platforms" },
  { value: 2, suffix: "+", label: "Months Hands-On" },
  { value: 40, suffix: "+", label: "FB Accounts Managed" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(p * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const StatsBanner = () => (
  <section className="py-12 border-y border-border bg-card/30">
    <div className="container px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-3xl md:text-5xl font-heading font-bold text-foreground text-glow-blue">
              <Counter end={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono text-xs md:text-sm text-glow-green uppercase tracking-wider">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBanner;
