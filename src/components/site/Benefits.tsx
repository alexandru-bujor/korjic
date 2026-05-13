import { Sparkles, HandHeart, Palette, Truck, Package, MessageCircle, Users } from "lucide-react";

const items = [
  {
    i: Sparkles,
    t: "Ingrediente atent selectate",
    d: "Lucrăm doar cu produse premium, naturale, de la furnizori verificați.",
  },
  {
    i: HandHeart,
    t: "Torturi create manual",
    d: "Fiecare desert este realizat 100% artizanal, cu grijă și pasiune.",
  },
  {
    i: Palette,
    t: "Design personalizat",
    d: "Adaptăm fiecare creație stilului și viziunii tale unice.",
  },
  {
    i: Truck,
    t: "Livrare în Chișinău și suburbii",
    d: "Transport climatizat, cu mașini speciale, mereu la timp.",
  },
  {
    i: Package,
    t: "Ambalare sigură",
    d: "Cutii rigide și sisteme antișoc pentru livrarea perfectă.",
  },
  {
    i: MessageCircle,
    t: "Consultare rapidă pe WhatsApp",
    d: "Răspundem rapid și te ghidăm prin fiecare etapă.",
  },
  {
    i: Users,
    t: "Soluții pentru evenimente mari",
    d: "Candy bar-uri, mese de deserturi, comenzi peste 100 porții.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">De ce Korjic</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
            Detaliile fac diferența
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b) => (
            <div
              key={b.t}
              className="rounded-3xl bg-card border border-border/70 p-6 hover:border-caramel transition"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-gold grid place-items-center mb-4">
                <b.i className="w-5 h-5 text-gold-foreground" />
              </div>
              <h3 className="font-display text-xl text-primary">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
