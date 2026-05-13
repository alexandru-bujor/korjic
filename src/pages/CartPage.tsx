import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

import { PageMeta } from "@/components/PageMeta";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, setQty, remove, total, count } = useCart();

  if (items.length === 0) {
    return (
      <>
        <PageMeta
          title="Coșul tău — Korjic"
          description="Verifică produsele din coș și finalizează comanda."
        />
        <div className="mx-auto max-w-3xl px-5 lg:px-10 py-24 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-secondary grid place-items-center">
            <ShoppingBag className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="mt-6 font-display text-4xl text-primary">Coșul tău este gol</h1>
          <p className="mt-3 text-muted-foreground">
            Descoperă creațiile noastre și adaugă-le în coș.
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 mt-7 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-primary/90 transition"
          >
            Mergi la catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageMeta
        title="Coșul tău — Korjic"
        description="Verifică produsele din coș și finalizează comanda."
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-12 lg:py-16">
        <h1 className="font-display text-4xl lg:text-5xl text-primary">Coșul tău</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {count} {count === 1 ? "produs" : "produse"}
        </p>

        <div className="mt-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it) => (
              <div key={it.id} className="flex gap-4 p-4 rounded-2xl bg-card border border-border">
                <img
                  src={it.img}
                  alt={it.name}
                  className="w-24 h-24 lg:w-28 lg:h-28 rounded-xl object-cover"
                />
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-caramel">
                        {it.category}
                      </div>
                      <h3 className="font-display text-lg text-primary leading-tight">{it.name}</h3>
                    </div>
                    <button
                      onClick={() => remove(it.id)}
                      className="text-muted-foreground hover:text-destructive transition"
                      aria-label="șterge"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="inline-flex items-center rounded-full border border-border">
                      <button
                        onClick={() => setQty(it.id, it.qty - 1)}
                        className="w-8 h-8 grid place-items-center hover:text-caramel"
                        aria-label="minus"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-sm w-8 text-center">{it.qty}</span>
                      <button
                        onClick={() => setQty(it.id, it.qty + 1)}
                        className="w-8 h-8 grid place-items-center hover:text-caramel"
                        aria-label="plus"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="font-display text-xl text-primary">
                      {it.qty * it.price} <span className="text-xs text-muted-foreground">lei</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl bg-gradient-warm border border-border p-6">
              <h2 className="font-display text-2xl text-primary">Sumar</h2>
              <div className="mt-5 space-y-2.5 text-sm">
                <Row label="Subtotal" value={`${total} lei`} />
                <Row label="Livrare" value="Estimată la checkout" muted />
                <div className="border-t border-border my-3" />
                <div className="flex justify-between items-baseline">
                  <span className="text-base">Total</span>
                  <span className="font-display text-3xl text-primary">
                    {total} <span className="text-sm text-muted-foreground">lei</span>
                  </span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3.5 text-sm hover:bg-primary/90 transition"
              >
                Finalizează comanda <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/catalog"
                className="mt-2 w-full inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm hover:border-caramel transition"
              >
                Continuă cumpărăturile
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={muted ? "text-muted-foreground text-xs" : ""}>{value}</span>
    </div>
  );
}
