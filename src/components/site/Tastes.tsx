import { tastes_list } from "@/lib/mock-data";
import tastesImg from "@/assets/cat-tastes.jpg";

export function Tastes() {
  return (
    <section id="tastes" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Gusturi semnătură</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
            Alege gustul perfect
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Combinații dezvoltate de cofetarii noștri, echilibrate ca dulceață și textură – pentru
            ca fiecare felie să fie o amintire.
          </p>
          <img
            src={tastesImg}
            alt="Slice de tort Korjic"
            loading="lazy"
            className="hidden lg:block mt-8 rounded-3xl shadow-soft aspect-[4/3] object-cover"
          />
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tastes_list.map((t, i) => (
            <div
              key={t.name}
              className="group rounded-2xl border border-border/70 bg-card p-5 hover:border-caramel transition-all hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl text-primary">{t.name}</h3>
                <span className="font-display text-sm text-caramel/70">0{i + 1}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
