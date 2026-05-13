import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, CreditCard, Truck, MapPin, User, Phone, Mail, ChevronLeft } from "lucide-react";

import { PageMeta } from "@/components/PageMeta";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <>
        <PageMeta
          title="Finalizare comandă — Korjic"
          description="Completează datele de livrare și plată pentru comanda ta."
        />
        <div className="mx-auto max-w-3xl px-5 lg:px-10 py-24 text-center">
          <h1 className="font-display text-3xl text-primary">Coșul este gol</h1>
          <Link to="/catalog" className="inline-block mt-6 text-caramel underline">
            Mergi la catalog
          </Link>
        </div>
      </>
    );
  }

  const delivery = 80;
  const grand = total + delivery;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      clear();
      navigate("/checkout/success");
    }, 1100);
  };

  return (
    <>
      <PageMeta
        title="Finalizare comandă — Korjic"
        description="Completează datele de livrare și plată pentru comanda ta."
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-12 lg:py-16">
        <Link
          to="/cart"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-caramel mb-4"
        >
          <ChevronLeft className="w-4 h-4" /> Înapoi la coș
        </Link>
        <h1 className="font-display text-4xl lg:text-5xl text-primary">Finalizare comandă</h1>

        <form onSubmit={onSubmit} className="mt-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <Section title="Date de contact" icon={User}>
              <div className="grid sm:grid-cols-2 gap-3">
                <Field icon={User} placeholder="Nume și prenume" required />
                <Field icon={Phone} placeholder="Telefon" type="tel" required />
                <Field
                  icon={Mail}
                  placeholder="Email"
                  type="email"
                  required
                  className="sm:col-span-2"
                />
              </div>
            </Section>

            <Section title="Livrare" icon={Truck}>
              <div className="grid sm:grid-cols-2 gap-3">
                <Field
                  icon={MapPin}
                  placeholder="Oraș"
                  defaultValue="Chișinău"
                  required
                  className="sm:col-span-2"
                />
                <Field placeholder="Stradă, număr" required className="sm:col-span-2" />
                <Field placeholder="Bloc / apt." />
                <Field placeholder="Cod poștal" />
                <Field
                  placeholder="Data dorită (ex: 25.05.2026)"
                  required
                  className="sm:col-span-2"
                />
                <textarea
                  placeholder="Note pentru curier (opțional)"
                  rows={3}
                  className="sm:col-span-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-caramel resize-none"
                />
              </div>
            </Section>

            <Section title="Plată" icon={CreditCard}>
              <div className="grid sm:grid-cols-2 gap-3">
                <Field
                  icon={CreditCard}
                  placeholder="Număr card  •  4242 4242 4242 4242"
                  required
                  className="sm:col-span-2"
                />
                <Field placeholder="Nume pe card" required />
                <div className="grid grid-cols-2 gap-3">
                  <Field placeholder="MM/AA" required />
                  <Field placeholder="CVV" required />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground flex items-center gap-1.5">
                <Lock className="w-3 h-3" /> Demonstrativ — nu se procesează plăți reale.
              </p>
            </Section>
          </div>

          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 rounded-3xl bg-gradient-warm border border-border p-6">
              <h2 className="font-display text-2xl text-primary">Comanda ta</h2>
              <div className="mt-4 space-y-3 max-h-64 overflow-y-auto pr-1">
                {items.map((it) => (
                  <div key={it.id} className="flex gap-3 items-center text-sm">
                    <div className="relative">
                      <img
                        src={it.img}
                        alt={it.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center">
                        {it.qty}
                      </span>
                    </div>
                    <div className="flex-1 leading-tight">
                      <div className="text-foreground line-clamp-1">{it.name}</div>
                      <div className="text-[11px] text-muted-foreground">{it.price} lei</div>
                    </div>
                    <div className="text-sm">{it.qty * it.price} lei</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border space-y-2 text-sm">
                <Row label="Subtotal" value={`${total} lei`} />
                <Row label="Livrare" value={`${delivery} lei`} />
                <div className="flex justify-between items-baseline pt-2">
                  <span>Total</span>
                  <span className="font-display text-3xl text-primary">
                    {grand} <span className="text-sm text-muted-foreground">lei</span>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3.5 text-sm hover:bg-primary/90 transition disabled:opacity-60"
              >
                {submitting ? (
                  "Se procesează…"
                ) : (
                  <>
                    <Lock className="w-4 h-4" /> Plătește {grand} lei
                  </>
                )}
              </button>
            </div>
          </aside>
        </form>
      </div>
    </>
  );
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-card border border-border p-6">
      <h2 className="font-display text-xl text-primary flex items-center gap-2">
        <Icon className="w-4 h-4 text-caramel" /> {title}
      </h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Field({
  icon: Icon,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ElementType }) {
  return (
    <div className={`relative ${className}`}>
      {Icon && (
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      )}
      <input
        {...props}
        className={`w-full rounded-full border border-border bg-card py-3 ${Icon ? "pl-10 pr-4" : "px-4"} text-sm focus:outline-none focus:border-caramel`}
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
