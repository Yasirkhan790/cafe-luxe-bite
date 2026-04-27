import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { menu, categories, type MenuItem } from "@/data/menu";
import biryani from "@/assets/dish-biryani.jpg";

const WHATSAPP_NUMBER = "923353700000";
const DELIVERY_FEE = 150;

export const Route = createFileRoute("/order")({
  component: OrderPage,
});

function parsePrice(p: string): number {
  // "Rs 1,250" -> 1250
  const n = parseInt(p.replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

function formatPrice(n: number): string {
  return `Rs ${n.toLocaleString("en-PK")}`;
}

type CartMap = Record<string, number>;

const detailsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s-]{7,20}$/, "Enter a valid phone number"),
  address: z
    .string()
    .trim()
    .min(8, "Address must be at least 8 characters")
    .max(300, "Address is too long"),
  city: z.string().trim().min(2, "Enter your city").max(60),
  notes: z.string().trim().max(300, "Notes are too long").optional(),
  method: z.enum(["delivery", "pickup"]),
  payment: z.enum(["cod", "card"]),
});

type Details = z.infer<typeof detailsSchema>;

function OrderPage() {
  const [active, setActive] = useState<(typeof categories)[number] | "All">("All");
  const [cart, setCart] = useState<CartMap>({});
  const [details, setDetails] = useState<Details>({
    name: "",
    phone: "",
    address: "",
    city: "Karachi",
    notes: "",
    method: "delivery",
    payment: "cod",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Details, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(
    () => (active === "All" ? menu : menu.filter((m) => m.category === active)),
    [active],
  );

  const itemsInCart = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, q]) => q > 0)
        .map(([name, qty]) => {
          const item = menu.find((m) => m.name === name)!;
          const unit = parsePrice(item.price);
          return { item, qty, unit, total: unit * qty };
        }),
    [cart],
  );

  const subtotal = itemsInCart.reduce((s, l) => s + l.total, 0);
  const deliveryFee = details.method === "delivery" && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;
  const totalQty = itemsInCart.reduce((s, l) => s + l.qty, 0);

  const add = (m: MenuItem) =>
    setCart((c) => ({ ...c, [m.name]: (c[m.name] ?? 0) + 1 }));
  const dec = (m: MenuItem) =>
    setCart((c) => {
      const next = Math.max(0, (c[m.name] ?? 0) - 1);
      const copy = { ...c };
      if (next === 0) delete copy[m.name];
      else copy[m.name] = next;
      return copy;
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemsInCart.length === 0) {
      setErrors({ name: "Add at least one item to your order" });
      return;
    }
    const result = detailsSchema.safeParse(details);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof Details, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Details;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const lines = [
      "*New Karachi Crown Order*",
      "",
      "*Items:*",
      ...itemsInCart.map(
        (l) => `• ${l.qty} × ${l.item.name} — ${formatPrice(l.total)}`,
      ),
      "",
      `Subtotal: ${formatPrice(subtotal)}`,
      ...(deliveryFee ? [`Delivery: ${formatPrice(deliveryFee)}`] : []),
      `*Total: ${formatPrice(total)}*`,
      "",
      `*${details.method === "delivery" ? "Delivery" : "Pickup"}*`,
      `Name: ${result.data.name}`,
      `Phone: ${result.data.phone}`,
      ...(details.method === "delivery"
        ? [`Address: ${result.data.address}`, `City: ${result.data.city}`]
        : []),
      `Payment: ${details.payment === "cod" ? "Cash on Delivery" : "Card on Delivery"}`,
      ...(result.data.notes ? ["", `Notes: ${result.data.notes}`] : []),
    ];

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="grain relative overflow-hidden pt-32 pb-10 sm:pt-40 sm:pb-14 lg:pt-44">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">
            — Order Online
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Build your <span className="italic text-gradient-gold">crown</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Pick your favourites, set quantities and we&apos;ll have it on its
            way — hot, fast, and crowned in flavour.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT — items */}
          <div>
            <div className="sticky top-[72px] z-20 -mx-5 mb-6 overflow-x-auto bg-background/85 px-5 py-3 backdrop-blur-xl sm:top-20 sm:-mx-6 sm:px-6 sm:py-4">
              <div className="flex min-w-max items-center gap-2">
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

            <div className="grid gap-4 sm:gap-5">
              {filtered.map((item) => {
                const qty = cart[item.name] ?? 0;
                return (
                  <article
                    key={item.name}
                    className="flex gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:border-gold/40 sm:gap-5 sm:p-5"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="truncate font-display text-base font-semibold leading-tight sm:text-lg">
                            {item.name}
                          </h3>
                          <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                            {item.urdu} · {item.category}
                          </p>
                        </div>
                        <span className="whitespace-nowrap font-display text-base text-gradient-gold sm:text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {item.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                        {item.tag ? (
                          <span className="rounded-full border border-gold/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
                            {item.tag}
                          </span>
                        ) : (
                          <span />
                        )}

                        {qty === 0 ? (
                          <button
                            onClick={() => add(item)}
                            className="rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-charcoal shadow-gold transition-transform hover:-translate-y-0.5 sm:text-sm"
                          >
                            + Add
                          </button>
                        ) : (
                          <div className="flex items-center gap-1 rounded-full border border-gold/40 bg-secondary p-1">
                            <button
                              onClick={() => dec(item)}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-foreground hover:bg-background"
                              aria-label={`Remove one ${item.name}`}
                            >
                              −
                            </button>
                            <span className="min-w-6 text-center text-sm font-semibold tabular-nums">
                              {qty}
                            </span>
                            <button
                              onClick={() => add(item)}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold text-charcoal hover:opacity-90"
                              aria-label={`Add another ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* RIGHT — cart & checkout */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-luxe sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-2xl font-semibold">Your order</h2>
                <span className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-gold">
                  {totalQty} {totalQty === 1 ? "item" : "items"}
                </span>
              </div>

              {itemsInCart.length === 0 ? (
                <p className="rounded-xl border border-dashed border-border bg-background/40 px-4 py-6 text-center text-sm text-muted-foreground">
                  Your basket is empty. Add a dish to get started.
                </p>
              ) : (
                <ul className="space-y-3">
                  {itemsInCart.map((l) => (
                    <li
                      key={l.item.name}
                      className="flex items-center gap-3 border-b border-border/60 pb-3 last:border-b-0 last:pb-0"
                    >
                      <img
                        src={l.item.image}
                        alt=""
                        className="h-12 w-12 shrink-0 rounded-lg object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{l.item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {l.qty} × {formatPrice(l.unit)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full border border-border p-0.5">
                        <button
                          onClick={() => dec(l.item)}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-xs hover:bg-secondary"
                          aria-label="decrease"
                        >
                          −
                        </button>
                        <span className="min-w-5 text-center text-xs tabular-nums">
                          {l.qty}
                        </span>
                        <button
                          onClick={() => add(l.item)}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-xs hover:bg-secondary"
                          aria-label="increase"
                        >
                          +
                        </button>
                      </div>
                      <span className="w-20 text-right text-sm font-semibold tabular-nums">
                        {formatPrice(l.total)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="tabular-nums">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>{details.method === "pickup" ? "Pickup" : "Delivery"}</span>
                  <span className="tabular-nums">
                    {details.method === "pickup" ? "Free" : formatPrice(deliveryFee)}
                  </span>
                </div>
                <div className="gold-divider my-2" />
                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span className="tabular-nums text-gradient-gold">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-4 rounded-2xl border border-border bg-card p-5 sm:p-6"
            >
              <h3 className="font-display text-xl font-semibold">Delivery details</h3>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {(["delivery", "pickup"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setDetails((d) => ({ ...d, method: m }))}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                      details.method === m
                        ? "border-gold bg-gradient-gold text-charcoal shadow-gold"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <Field
                  label="Full name"
                  value={details.name}
                  onChange={(v) => setDetails((d) => ({ ...d, name: v }))}
                  error={errors.name}
                  placeholder="Ahmed Khan"
                  maxLength={80}
                />
                <Field
                  label="Phone"
                  value={details.phone}
                  onChange={(v) => setDetails((d) => ({ ...d, phone: v }))}
                  error={errors.phone}
                  placeholder="+92 300 1234567"
                  type="tel"
                  maxLength={20}
                />
                {details.method === "delivery" && (
                  <>
                    <Field
                      label="Address"
                      value={details.address}
                      onChange={(v) => setDetails((d) => ({ ...d, address: v }))}
                      error={errors.address}
                      placeholder="House 12, Street 4, DHA Phase 6"
                      multiline
                      maxLength={300}
                    />
                    <Field
                      label="City"
                      value={details.city}
                      onChange={(v) => setDetails((d) => ({ ...d, city: v }))}
                      error={errors.city}
                      placeholder="Karachi"
                      maxLength={60}
                    />
                  </>
                )}
                <Field
                  label="Notes (optional)"
                  value={details.notes ?? ""}
                  onChange={(v) => setDetails((d) => ({ ...d, notes: v }))}
                  error={errors.notes}
                  placeholder="Extra spicy, no onions…"
                  multiline
                  maxLength={300}
                />

                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Payment
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {(["cod", "card"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setDetails((d) => ({ ...d, payment: p }))}
                        className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                          details.payment === p
                            ? "border-gold bg-secondary text-foreground"
                            : "border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {p === "cod" ? "Cash on Delivery" : "Card on Delivery"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={itemsInCart.length === 0}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3.5 text-sm font-semibold text-charcoal shadow-gold transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                Place order via WhatsApp
                <span aria-hidden>→</span>
              </button>

              {submitted && (
                <p className="mt-3 text-center text-xs text-gold">
                  WhatsApp opened — send the message to confirm your order.
                </p>
              )}
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                You&apos;ll be taken to WhatsApp to confirm with our chef on duty.
              </p>
            </form>
          </aside>
        </div>
      </section>

      {/* Mobile floating cart bar */}
      {itemsInCart.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-xl lg:hidden">
          <a
            href="#order-summary"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("aside")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="flex items-center justify-between gap-3 rounded-full bg-gradient-gold px-5 py-3 text-charcoal shadow-gold"
          >
            <span className="text-sm font-semibold">
              {totalQty} {totalQty === 1 ? "item" : "items"} · {formatPrice(total)}
            </span>
            <span className="text-sm font-semibold">View order →</span>
          </a>
        </div>
      )}

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  maxLength?: number;
}) {
  const base =
    "mt-1 w-full rounded-xl border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors";
  const borderClass = props.error ? "border-destructive" : "border-border";
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {props.label}
      </label>
      {props.multiline ? (
        <textarea
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          rows={2}
          className={`${base} ${borderClass} resize-none`}
        />
      ) : (
        <input
          type={props.type ?? "text"}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          className={`${base} ${borderClass}`}
        />
      )}
      {props.error && (
        <p className="mt-1 text-xs text-destructive">{props.error}</p>
      )}
    </div>
  );
}
