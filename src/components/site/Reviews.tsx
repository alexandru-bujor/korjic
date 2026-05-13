import { reviews } from "@/lib/mock-data";
import { Star } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Recenzii</p>
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
              Iubiți de clienții noștri
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-3xl border border-border bg-card px-5 py-4">
            <div className="font-display text-5xl text-gradient-gold leading-none">4.9</div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-caramel text-caramel" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground mt-1">peste 500 evenimente create</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl bg-card border border-border/70 p-6 flex flex-col hover:shadow-soft transition"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-caramel text-caramel" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.event}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-gold-foreground font-display text-lg">
                  {r.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
