import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import cafeInterior from "@/assets/cafe-interior.jpg";
import bbq from "@/assets/dish-bbq.jpg";
import broast from "@/assets/dish-broast.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="grain relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-44">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">— Our Story</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            From a single counter in <span className="italic text-gradient-gold">Saddar</span>,
            <br className="hidden sm:block" /> to a cafe Karachi calls home.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 sm:gap-12 sm:px-6 sm:pb-20 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-luxe sm:rounded-[2rem]">
          <img src={cafeInterior} alt="Karachi Crown interior" loading="lazy" className="h-[320px] w-full object-cover sm:h-[520px]" />
        </div>
        <div className="space-y-5 text-muted-foreground sm:space-y-6">
          <p className="text-sm leading-relaxed sm:text-base">
            It started in 2014 with a single broast counter in Saddar, a borrowed
            pressure fryer, and Abbu's 18-spice masala — written on the back of an
            old envelope that we still keep framed in the kitchen.
          </p>
          <p className="text-sm leading-relaxed sm:text-base">
            Ten years on, Karachi Crown has grown into a flagship cafe on Zamzama
            Boulevard — but the obsession hasn't changed. Every chicken is brined
            for 24 hours. Every paratha is rolled by hand. Every order leaves the
            pass within seven minutes of being plated.
          </p>
          <p className="text-sm leading-relaxed sm:text-base">
            We believe Pakistani fast food deserves the same craft, sourcing and
            care given to fine dining. So that's exactly what we serve.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Source", d: "Halal poultry from local Sindh farms, delivered fresh every morning." },
            { n: "02", t: "Marinate", d: "Hand-blended masalas, slow-rested for 24 hours before they touch heat." },
            { n: "03", t: "Serve", d: "Plated the moment it's ready — never under heat lamps, never reheated." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="font-display text-4xl text-gradient-gold sm:text-5xl">{s.n}</div>
              <h3 className="mt-3 font-display text-xl sm:mt-4 sm:text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:gap-6 sm:px-6 sm:pb-20 lg:grid-cols-2 lg:px-10">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-border sm:rounded-[2rem]">
          <img src={bbq} alt="Sizzling kebabs" loading="lazy" className="h-64 w-full object-cover sm:h-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 to-transparent p-5 flex items-end sm:p-6">
            <p className="font-display text-xl sm:text-2xl">Charcoal-grilled, never gas.</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-border sm:rounded-[2rem]">
          <img src={broast} alt="Crispy chicken broast" loading="lazy" className="h-64 w-full object-cover sm:h-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 to-transparent p-5 flex items-end sm:p-6">
            <p className="font-display text-xl sm:text-2xl">Pressure-fried in pure ghee.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 text-center lg:px-10">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-charcoal shadow-gold"
        >
          Taste the menu →
        </Link>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
