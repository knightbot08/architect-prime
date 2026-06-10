import { useState } from "react";
import { Menu, X, Terminal, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "How I Think", href: "#projects" },
  { label: "Workflows", href: "#workflows" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const ThemeToggle = ({ className = "" }: { className?: string }) => (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`inline-flex items-center justify-center w-8 h-8 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors ${className}`}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-14 px-6">
        <a href="#" className="flex items-center gap-2 font-mono text-sm text-foreground">
          <Terminal className="w-4 h-4 text-glow-green" />
          <span className="text-glow-green">~/</span>portfolio
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-muted-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-mono text-muted-foreground hover:text-primary border-b border-border/50"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
