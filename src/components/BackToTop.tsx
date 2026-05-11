import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-glow-green/40 bg-card/90 backdrop-blur-sm font-mono text-xs text-glow-green hover:bg-glow-green/10 hover:border-glow-green transition-all shadow-lg animate-fade-in"
    >
      <ArrowUp className="w-3.5 h-3.5" />
      top
    </button>
  );
};

export default BackToTop;
