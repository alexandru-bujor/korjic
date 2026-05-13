const steps = [
  { n: "01", t: "Alegi modelul", d: "Alegi un model din catalog sau ne trimiți inspirația ta." },
  { n: "02", t: "Stabilim detaliile", d: "Decidem împreună gustul, mărimea și data de livrare." },
  { n: "03", t: "Confirmăm comanda", d: "Confirmăm prin WhatsApp toate detaliile și avansul." },
  { n: "04", t: "Primești tortul", d: "Livrăm în siguranță, ambalat impecabil, la timp." },
];

export function HowToOrder() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Proces simplu</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
            Cum se comandă
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-border/70 bg-card p-7 hover:border-caramel transition-all hover:shadow-soft"
            >
              <div className="font-display text-5xl text-gradient-gold">{s.n}</div>
              <h3 className="mt-4 font-display text-xl text-primary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
