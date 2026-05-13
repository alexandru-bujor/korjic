import { useState } from "react";
import { galleryImgs } from "@/lib/mock-data";

const tabs = ["Toate", "Nuntă", "Copii", "Birthday", "Candy Bar", "Corporate"];

export function Gallery() {
  const [t, setT] = useState("Toate");
  return (
    <section id="candybar" className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Galerie</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
            Lucrări recente
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setT(tab)}
              className={`px-4 py-2 rounded-full text-xs border transition ${t === tab ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-caramel"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {galleryImgs.concat(galleryImgs).map((img, i) => (
            <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl group">
              <img
                src={img}
                alt=""
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
