import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { DealCard } from "@/components/DealCard";
import { menu, deals } from "@/data/menu";
import heroBurger from "@/assets/hero-burger.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const featured = menu.slice(0, 6);
  const featuredDeals = deals.slice(0, 3);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative grain overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.30_0.05_60/0.6),transparent_60%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
          <div className="animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold-soft sm:px-4 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Karachi · Est. 2014
            </div>

            <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[0.95] tracking-tight sm:mt-6 sm:text-6xl lg:text-7xl">
              The Crown of
              <br />
              <span className="text-gradient-gold italic">Pakistani</span> Fast Food.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base lg:text-lg">
              From the sizzle of seekh on coal to the shatter of a perfectly fried
              broast — every dish at Karachi Crown is hand-crafted, house-spiced
              and served with quiet luxury.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <Link
                to="/deals"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-charcoal shadow-gold transition-transform hover:-translate-y-0.5 sm:gap-3 sm:px-7 sm:py-3.5"
              >
                See Today's Deals
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary sm:px-7 sm:py-3.5"
              >
                Full Menu
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:mt-14 sm:gap-6 sm:pt-8">
              {[
                { k: "10+", v: "Years of craft" },
                { k: "120k", v: "Loyal patrons" },
                { k: "100%", v: "Halal & fresh" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-float-up">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-gold opacity-20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/20 shadow-luxe sm:rounded-[2rem]">
              <img
                src={heroBurger}
                alt="Signature Crown Zinger Burger with melted cheese"
                width={1920}
                height={1080}
                className="h-[360px] w-full object-cover sm:h-[520px] lg:h-[640px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent p-5 sm:p-8">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold-soft sm:text-xs">
                      Tonight's Signature
                    </p>
                    <p className="mt-1.5 font-display text-lg sm:mt-2 sm:text-2xl">
                      Crown Zinger Burger
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-gradient-gold px-3 py-1.5 text-[11px] font-bold text-charcoal sm:px-4 sm:text-xs">
                    Rs 890
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider mx-auto max-w-5xl" />

      {/* DEALS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">
              — Hot Deals · Limited Time
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Combos that <span className="italic text-gradient-gold">save you more</span>.
            </h2>
          </div>
          <Link
            to="/deals"
            className="self-start text-sm font-semibold text-gold hover:underline md:self-auto"
          >
            View all deals →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {featuredDeals.map((d) => (
            <DealCard key={d.name} deal={d} />
          ))}
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">
              — Tasting Menu
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Our most loved <span className="italic text-gradient-gold">classics</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Six dishes that built our name across Karachi — each rooted in
            tradition, refined in our kitchen.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold backdrop-blur sm:left-4 sm:top-4 sm:px-3">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold sm:text-xl">
                    {item.name}
                  </h3>
                  <span className="whitespace-nowrap font-display text-base text-gradient-gold sm:text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {item.urdu}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-14">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3 text-sm font-semibold text-gold-soft hover:bg-gold/10 sm:px-8 sm:py-3.5"
          >
            View Full Menu →
          </Link>
        </div>
      </section>

      {/* AMBIENCE */}
      <section className="relative overflow-hidden bg-charcoal/60 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border shadow-luxe sm:rounded-[2rem]">
            <img
              src={cafeInterior}
              alt="Karachi Crown cafe interior with brass pendant lights"
              loading="lazy"
              width={1600}
              height={1067}
              className="h-[320px] w-full object-cover sm:h-[480px]"
            />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">
              — The Room
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              A cafe with the soul of <span className="italic text-gradient-gold">old Karachi</span>.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
              Brass pendant lights, dark walnut, cracked-leather banquettes and
              the gentle hush of a kitchen that takes its time. Karachi Crown is
              built for the long evening — chai that lingers, plates that arrive
              sizzling, conversations that wander till two in the morning.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-muted-foreground sm:mt-8">
              {[
                "Family-friendly seating for 80",
                "Private dining for events up to 30",
                "Dedicated valet · open till 2 AM",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline sm:mt-10"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
        <svg viewBox="0 0 24 24" className="mx-auto h-9 w-9 text-gold sm:h-10 sm:w-10" fill="currentColor">
          <path d="M9 7H5a3 3 0 00-3 3v7h7v-7H6c0-1.7 1.3-3 3-3V7zm10 0h-4a3 3 0 00-3 3v7h7v-7h-3c0-1.7 1.3-3 3-3V7z" />
        </svg>
        <p className="mt-7 font-display text-2xl italic leading-snug sm:mt-8 sm:text-3xl lg:text-4xl">
          "The zinger burger here is the gold standard of Karachi. I've tried
          every fast-food spot in the city — Crown is in a league of its own."
        </p>
        <div className="mt-7 sm:mt-8">
          <p className="font-semibold">Areeba Khan</p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
            Food Editor · Dawn Daily
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-24 lg:px-10">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/30 bg-gradient-to-br from-charcoal via-secondary to-charcoal p-8 text-center shadow-luxe sm:rounded-[2rem] sm:p-12 lg:p-20">
          <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.13_78/0.5),transparent_60%)]" />
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Hungry? <span className="text-gradient-gold italic">We're ready.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:mt-5 sm:text-base">
            Dine in, take away or order on WhatsApp for delivery hot to your door
            across Karachi. Open every day from 11 AM to 2 AM.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href="https://wa.me/923353700000?text=Assalamu%20Alaikum!%20I'd%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold text-white shadow-luxe sm:px-8 sm:py-3.5"
            >
              Order on WhatsApp
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium hover:bg-secondary sm:px-8 sm:py-3.5"
            >
              Find Our Cafe
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
