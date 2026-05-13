import { categories } from "@/lib/mock-data";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// map category id → catalog filter value
const idToFilter: Record<string, string> = {
  birthday: "Zi de naștere",
  wedding: "Nuntă",
  baptism: "Botez",
  kids: "Copii",
  corporate: "Corporate",
  candybar: "Candy Bar",
  individual: "Deserturi",
  tastes: "Toate",
};

export function Categories() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Colecții</p>
            <h2 className="font-display text-4xl lg:text-5xl text-primary max-w-2xl leading-tight">
              Pentru fiecare moment, un tort care îl face memorabil
            </h2>
          </div>
          <Link
            to="/catalog"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary hover:text-caramel transition"
          >
            Toate categoriile <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c, i) => {
            const filterVal = idToFilter[c.id] ?? "Toate";
            const to =
              filterVal === "Toate"
                ? "/catalog"
                : `/catalog?category=${encodeURIComponent(filterVal)}`;
            return (
              <Link
                key={c.id}
                to={to}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/70 hover:border-caramel/60 transition-all hover:shadow-elegant"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-cocoa/85 via-cocoa/45 to-transparent text-cream">
                  <h3 className="font-display text-xl leading-tight">{c.title}</h3>
                  <p className="text-xs opacity-80 mt-1.5 line-clamp-2">{c.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-gold">
                    Vezi colecția <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
