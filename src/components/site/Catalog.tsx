import { useState, useEffect } from "react";
import { products, filterOptions } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { Clock, Scale, Settings2 } from "lucide-react";
import { PriceCalculator } from "./PriceCalculator";

type P = (typeof products)[number];

export function Catalog({
  initialCategory = "Toate",
  compact = false,
}: {
  initialCategory?: string;
  compact?: boolean;
}) {
  const [active, setActive] = useState(initialCategory);

  useEffect(() => {
    setActive(initialCategory);
  }, [initialCategory]);

  const list = active === "Toate" ? products : products.filter((p) => p.category === active);

  return (
    <section className="py-16 lg:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {!compact && (
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Catalog</p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
              Lucrări selecționate
            </h1>
            <p className="mt-4 text-muted-foreground">
              O colecție atent curatoriată din torturile și deserturile noastre semnătură.
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filterOptions.category.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-xs transition border ${active === c ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground/80 border-border hover:border-caramel"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {!compact && (
          <div className="hidden md:flex flex-wrap gap-3 justify-center mb-12 text-xs">
            {[
              filterOptions.event,
              filterOptions.price,
              filterOptions.taste,
              filterOptions.persons,
            ].map((g, i) => (
              <select
                key={i}
                className="rounded-full bg-card border border-border px-4 py-2 text-foreground/80 focus:outline-none focus:border-caramel cursor-pointer"
              >
                {g.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ p }: { p: P }) {
  const [open, setOpen] = useState(false);

  const onConfigure = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <>
      <article className="group flex flex-col rounded-3xl bg-card border border-border/70 overflow-hidden hover:shadow-elegant hover:border-caramel/40 transition-all">
        <Link to={`/catalog/${p.id}`} className="relative aspect-square overflow-hidden block">
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-wider text-foreground/80">
            {p.category}
          </span>
        </Link>
        <div className="p-5 flex flex-col flex-1">
          <Link to={`/catalog/${p.id}`}>
            <h3 className="font-display text-xl text-primary leading-tight hover:text-caramel transition">
              {p.name}
            </h3>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>

          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            {p.kg > 0 && (
              <span className="inline-flex items-center gap-1">
                <Scale className="w-3.5 h-3.5" /> de la {p.kg} kg
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {p.time}
            </span>
          </div>

          <div className="mt-4 pt-4 border-t border-border/60 flex items-end justify-between gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                de la
              </div>
              <div className="font-display text-2xl text-primary">
                {p.price} <span className="text-sm text-muted-foreground">lei</span>
              </div>
            </div>
            <button
              onClick={onConfigure}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              <Settings2 className="w-3.5 h-3.5" /> Personalizează
            </button>
          </div>
        </div>
      </article>
      {open && (
        <PriceCalculator
          eventTitle={p.name}
          productId={p.id}
          productImg={p.img}
          productCategory={p.category}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
