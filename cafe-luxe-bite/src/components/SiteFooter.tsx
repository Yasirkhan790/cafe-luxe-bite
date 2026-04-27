import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border bg-charcoal/60">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-charcoal">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 15.4 6.8 18.1l1-5.8L3.5 8.2l5.9-.9L12 2z" />
                </svg>
              </span>
              <span className="font-display text-2xl font-bold">
                Karachi <span className="text-gradient-gold">Crown</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              A modern Pakistani fast food cafe — where street-food soul meets
              fine-dining craft. Hand-cut, freshly fried, served with pride from
              Karachi to your table.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Open daily · 11 AM – 2 AM
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/menu" className="hover:text-foreground">Full Menu</Link></li>
              <li><Link to="/about" className="hover:text-foreground">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Visit Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Find Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Zamzama Boulevard</li>
              <li>DHA Phase 5, Karachi</li>
              <li>+92 21 3537 0000</li>
              <li>hello@karachicrown.pk</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 gold-divider" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Karachi Crown. Crafted with care.</p>
          <p className="uppercase tracking-[0.3em]">Halal · Hand-cut · House-spiced</p>
        </div>
      </div>
    </footer>
  );
}
