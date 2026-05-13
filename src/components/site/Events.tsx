import { useState } from "react";
import { events, WHATSAPP } from "@/lib/mock-data";
import { Check, Calculator } from "lucide-react";
import { PriceCalculator } from "./PriceCalculator";

export function Events() {
  const [openFor, setOpenFor] = useState<string | null>(null);

  return (
    <section id="events" className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Evenimente</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
            Creăm dulciuri pentru orice ocazie
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {events.map((e, i) => (
            <div
              key={e.id}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-14 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-6">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-3xl shadow-soft"
                />
              </div>
              <div className="lg:col-span-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-caramel">
                  0{i + 1} / 04
                </span>
                <h3 className="mt-3 font-display text-3xl lg:text-5xl text-primary leading-tight">
                  {e.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">{e.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {e.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm">
                      <span className="w-5 h-5 rounded-full bg-gradient-gold grid place-items-center">
                        <Check className="w-3 h-3 text-gold-foreground" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    onClick={() => setOpenFor(e.title)}
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-primary/90 transition"
                  >
                    <Calculator className="w-4 h-4" /> Află prețul
                  </button>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border px-6 py-3 text-sm hover:border-caramel transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openFor && <PriceCalculator eventTitle={openFor} onClose={() => setOpenFor(null)} />}
    </section>
  );
}
