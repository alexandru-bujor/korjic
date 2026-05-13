import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Clock, Scale, Users, Truck, ChevronRight, Calculator, Sparkles } from "lucide-react";

import { PageMeta } from "@/components/PageMeta";
import { products, tastes_list } from "@/lib/mock-data";
import { ProductCard } from "@/components/site/Catalog";
import { PriceCalculator } from "@/components/site/PriceCalculator";

export default function ProductPage() {
  const { productId } = useParams();
  const product = useMemo(() => products.find((p) => String(p.id) === productId), [productId]);
  const [open, setOpen] = useState(false);

  if (!product) {
    return (
      <>
        <PageMeta title="Produs negăsit — Korjic" />
        <div className="py-32 text-center">
          <h1 className="font-display text-4xl text-primary">Produs negăsit</h1>
          <Link to="/catalog" className="inline-block mt-6 text-caramel underline">
            Înapoi la catalog
          </Link>
        </div>
      </>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  const fallback = products.filter((p) => p.id !== product.id).slice(0, 4);
  const recs = related.length ? related : fallback;

  return (
    <>
      <PageMeta title={`${product.name} — Korjic`} description={product.desc} />
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-8 lg:pt-12">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-caramel">
              Acasă
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/catalog" className="hover:text-caramel">
              Catalog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        <section className="mx-auto max-w-7xl px-5 lg:px-10 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-gold opacity-15 blur-3xl rounded-full" />
            <img
              src={product.img}
              alt={product.name}
              className="relative w-full rounded-3xl shadow-elegant object-cover aspect-square"
            />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-caramel">
              {product.category}
            </span>
            <h1 className="mt-3 font-display text-4xl lg:text-5xl text-primary leading-tight">
              {product.name}
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">{product.desc}</p>

            <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
              <Info
                icon={Scale}
                label="Minim"
                value={product.kg > 0 ? `${product.kg} kg` : "set"}
              />
              <Info
                icon={Users}
                label="Recomandat"
                value={product.kg > 0 ? `~${Math.round(product.kg * 8)} pers.` : "12+ pers."}
              />
              <Info icon={Clock} label="Timp pregătire" value={product.time} />
              <Info icon={Truck} label="Livrare" value="Chișinău & suburbii" />
            </div>

            <div className="mt-7">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2.5">
                Gusturi disponibile
              </div>
              <div className="flex flex-wrap gap-2">
                {tastes_list.slice(0, 6).map((t) => (
                  <span
                    key={t.name}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-gradient-warm p-5 lg:p-6">
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center shrink-0">
                  <Sparkles className="w-4 h-4 text-gold-foreground" />
                </span>
                <div>
                  <div className="font-display text-lg text-primary leading-tight">
                    Personalizează & calculează prețul
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Alege numărul de niveluri, designul, umplutura și câte persoane vor fi — vei
                    vedea prețul exact și poți comanda direct.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Pornind de la
                  </div>
                  <div className="font-display text-3xl text-primary">
                    {product.price} <span className="text-base text-muted-foreground">lei</span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm hover:bg-primary/90 transition"
                >
                  <Calculator className="w-4 h-4" /> Configurează & comandă
                </button>
              </div>
            </div>
          </div>
        </section>

        {open && (
          <PriceCalculator
            eventTitle={product.name}
            productId={product.id}
            productImg={product.img}
            productCategory={product.category}
            onClose={() => setOpen(false)}
          />
        )}

        <section className="bg-secondary/40 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <h2 className="font-display text-3xl text-primary mb-8">Ai putea iubi și</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recs.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-secondary/60 px-4 py-3">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
        <Icon className="w-3.5 h-3.5" /> {label}
      </div>
      <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}
