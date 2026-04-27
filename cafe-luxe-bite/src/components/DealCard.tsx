import { Link } from "@tanstack/react-router";
import type { Deal } from "@/data/menu";

export function DealCard({ deal }: { deal: Deal }) {
  const text = encodeURIComponent(
    `Assalamu Alaikum! I'd like to order the "${deal.name}" deal (${deal.price}).`,
  );
  const wa = `https://wa.me/923353700000?text=${text}`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold sm:rounded-3xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={deal.image}
          alt={deal.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-xs font-bold text-charcoal shadow-gold sm:right-4 sm:top-4 sm:px-4 ${
            deal.accent === "gold" ? "bg-gradient-gold" : "bg-gradient-ember"
          }`}
        >
          {deal.badge}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">
            {deal.urdu} · {deal.serves}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold leading-tight sm:text-2xl">
            {deal.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {deal.includes.map((line) => (
            <li key={line} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="text-xs text-muted-foreground line-through">
              {deal.oldPrice}
            </p>
            <p className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl">
              {deal.price}
            </p>
          </div>
          <span className="rounded-full border border-gold/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
            {deal.save}
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M19.11 17.21c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.55.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.05 4C9.4 4 4 9.4 4 16.05c0 2.13.55 4.13 1.6 5.93L4 28l6.18-1.62a12 12 0 005.87 1.5h.01c6.65 0 12.05-5.4 12.05-12.05S22.7 4 16.05 4z" />
            </svg>
            Order
          </a>
          <Link
            to="/deals"
            className="flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:bg-secondary"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
