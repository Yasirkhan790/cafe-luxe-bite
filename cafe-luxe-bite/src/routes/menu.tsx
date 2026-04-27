import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { menu, categories } from "@/data/menu";
import biryani from "@/assets/dish-biryani.jpg";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<(typeof categories)[number] | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? menu : menu.filter((m) => m.category === active)),
    [active],
  );

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="grain relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-44">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">— The Menu</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Crafted in <span className="italic text-gradient-gold">Karachi</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base">
            Every dish is hand-prepped daily, marinated overnight in our house
            spice blends and served the moment it's ready. No shortcuts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-24 lg:px-10">
        <div className="sticky top-[72px] z-20 -mx-5 mb-10 overflow-x-auto bg-background/80 px-5 py-3 backdrop-blur-xl sm:top-20 sm:-mx-6 sm:mb-12 sm:px-6 sm:py-4">
          <div className="flex min-w-max items-center gap-2 sm:justify-center">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:text-sm ${
                  active === c
                    ? "bg-gradient-gold text-charcoal shadow-gold"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
          {filtered.map((item) => (
            <article
              key={item.name}
              className="group flex gap-4 overflow-hidden rounded-2xl border border-border bg-card p-3 transition-all hover:border-gold/40 hover:shadow-gold sm:gap-6 sm:p-6"
            >
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-40">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                      {item.urdu} · {item.category}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-display text-lg text-gradient-gold">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3 sm:line-clamp-none">
                  {item.description}
                </p>
                {item.tag && (
                  <span className="mt-3 inline-block rounded-full border border-gold/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
                    {item.tag}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
