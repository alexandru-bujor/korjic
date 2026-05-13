import { useEffect } from "react";
import { X, Clock, Scale, Users, Truck } from "lucide-react";
import { WHATSAPP, tastes_list } from "@/lib/mock-data";

type Product = {
  id: number;
  name: string;
  category: string;
  desc: string;
  price: number;
  kg: number;
  time: string;
  img: string;
};

export function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa/60 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-card shadow-elegant"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/95 border border-border grid place-items-center hover:bg-secondary transition"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto md:min-h-[520px] overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 lg:p-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-caramel">
              {product.category}
            </span>
            <h3 className="mt-2 font-display text-3xl lg:text-4xl text-primary leading-tight">
              {product.name}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{product.desc}</p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
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
              <Info icon={Truck} label="Livrare" value="Chișinău & supurbii" />
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Gusturi disponibile
              </div>
              <div className="flex flex-wrap gap-2">
                {tastes_list.slice(0, 5).map((t) => (
                  <span
                    key={t.name}
                    className="rounded-full border border-border px-3 py-1 text-xs"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Preț de la
                </div>
                <div className="font-display text-3xl text-primary">
                  {product.price} <span className="text-base text-muted-foreground">lei</span>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm hover:bg-primary/90 transition"
              >
                Comandă pe WhatsApp
              </a>
              <a
                href="#order"
                onClick={onClose}
                className="flex-1 text-center rounded-full border border-border px-5 py-3 text-sm hover:border-caramel hover:text-caramel transition"
              >
                Solicită ofertă
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
