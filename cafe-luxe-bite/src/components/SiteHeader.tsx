import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/deals", label: "Deals" },
  { to: "/order", label: "Order" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Visit" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-charcoal shadow-gold transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M12 2l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 15.4 6.8 18.1l1-5.8L3.5 8.2l5.9-.9L12 2z"
                fill="currentColor"
              />
            </svg>
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold tracking-tight">
              Karachi <span className="text-gradient-gold">Crown</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Fast food · since 2014
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-gold" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/order"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-charcoal shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Order Now
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
          aria-label="Menu"
        >
          <span className="text-lg">{open ? "✕" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col p-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "text-foreground bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-semibold text-charcoal"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
