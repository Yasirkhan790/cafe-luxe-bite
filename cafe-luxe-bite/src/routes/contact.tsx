import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import cafeInterior from "@/assets/cafe-interior.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="grain relative pt-32 pb-10 sm:pt-40 sm:pb-12 lg:pt-44">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">— Visit</p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Come find <span className="italic text-gradient-gold">us</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:mt-6 sm:text-base">
            Karachi Crown is on Zamzama Boulevard — open every day from 11 AM
            until 2 AM. Walk-ins welcome. Reservations recommended on weekends.
          </p>
          <a
            href="https://wa.me/923353700000?text=Assalamu%20Alaikum!%20I'd%20like%20to%20book%20a%20table."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-luxe sm:mt-8"
          >
            <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M19.11 17.21c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.55.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.05 4C9.4 4 4 9.4 4 16.05c0 2.13.55 4.13 1.6 5.93L4 28l6.18-1.62a12 12 0 005.87 1.5h.01c6.65 0 12.05-5.4 12.05-12.05S22.7 4 16.05 4z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-5 lg:px-10">
        <div className="space-y-5 sm:space-y-8 lg:col-span-2">
          {[
            { t: "Address", l: ["Zamzama Boulevard, Lane 4", "DHA Phase 5, Karachi 75500"] },
            { t: "Hours", l: ["Mon – Sun · 11 AM – 2 AM", "Late-night kitchen till close"] },
            { t: "WhatsApp", l: ["+92 335 370 0000", "hello@karachicrown.pk"] },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">{b.t}</p>
              {b.l.map((line) => (
                <p key={line} className="mt-2 text-sm text-foreground sm:text-base">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-[1.5rem] border border-border bg-card p-6 sm:rounded-[2rem] sm:p-8 lg:col-span-3 lg:p-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl">Reserve a Table</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us when you'd like to come — we'll confirm within an hour.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Date" name="date" type="date" />
            <Field label="Guests" name="guests" type="number" defaultValue="2" />
          </div>

          <label className="mt-5 block">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Notes (optional)
            </span>
            <textarea
              name="notes"
              rows={4}
              placeholder="Window seat, birthday, dietary requests…"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            />
          </label>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-charcoal shadow-gold transition-transform hover:-translate-y-0.5"
          >
            {sent ? "✓ Reservation Sent — We'll be in touch" : "Request Reservation"}
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-24 lg:px-10">
        <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-luxe sm:rounded-[2rem]">
          <img src={cafeInterior} alt="The Karachi Crown dining room" loading="lazy" className="h-[280px] w-full object-cover sm:h-[420px]" />
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        required
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
      />
    </label>
  );
}
