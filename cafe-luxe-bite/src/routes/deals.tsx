import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { DealCard } from "@/components/DealCard";
import { deals } from "@/data/menu";
import dealFamily from "@/assets/deal-family.jpg";

export const Route = createFileRoute("/deals")({
  component: DealsPage,
});

function DealsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="grain relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold-soft sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Limited time · Save up to 32%
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Crown <span className="italic text-gradient-gold">Deals</span>.
            <br className="hidden sm:block" /> Big flavor, smaller bills.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
            Combo deals built for solo cravings, date nights and family feasts.
            All deals are available for dine-in, take-away and home delivery
            across Karachi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {deals.map((d) => (
            <DealCard key={d.name} deal={d} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 text-center sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-charcoal via-secondary to-charcoal p-8 shadow-luxe sm:p-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">
            Bulk & Corporate Orders
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Hosting an event? <span className="italic text-gradient-gold">Talk to us.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Custom platters and corporate catering with discounts starting at 15%
            for orders above Rs 25,000.
          </p>
          <a
            href="https://wa.me/923353700000?text=Hi%20Karachi%20Crown%2C%20I'd%20like%20a%20catering%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-luxe sm:px-8 sm:py-3.5"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
