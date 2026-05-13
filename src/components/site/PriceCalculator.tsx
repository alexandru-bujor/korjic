import { useEffect, useMemo, useState } from "react";
import {
  X,
  Minus,
  Plus,
  Users,
  Scale,
  Check,
  Layers,
  Palette,
  Cookie,
  ShoppingBag,
} from "lucide-react";
import { tastes_list, cakeDesigns, tiers, WHATSAPP } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";
import { useNavigate } from "react-router-dom";

const GRAMS_PER_PERSON = 150;

type Props = {
  eventTitle: string;
  onClose: () => void;
  productId?: number;
  productImg?: string;
  productCategory?: string;
  initialDesignIdx?: number;
};

export function PriceCalculator({
  eventTitle,
  onClose,
  productId,
  productImg,
  productCategory,
  initialDesignIdx = 0,
}: Props) {
  const [persons, setPersons] = useState(20);
  const [fillingIdx, setFillingIdx] = useState(0);
  const [designIdx, setDesignIdx] = useState(initialDesignIdx);
  const [tierIdx, setTierIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const { add } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const filling = tastes_list[fillingIdx];
  const design = cakeDesigns[designIdx];
  const tier = tiers[tierIdx];

  const totals = useMemo(() => {
    const grams = persons * GRAMS_PER_PERSON;
    const kgRaw = Math.max(grams / 1000, tier.minKg);
    const kgRounded = Math.ceil(kgRaw * 2) / 2;
    const price = Math.round(
      kgRounded * filling.pricePerKg * design.priceMultiplier * tier.complexityMultiplier,
    );
    return { kgRounded, price };
  }, [persons, filling, design, tier]);

  // Hero image: product image if provided, else design image
  const heroImg = productImg ?? design.img;

  const handleAddToCart = () => {
    const name = `${eventTitle} • ${tier.label} • ${design.name} • ${filling.name} (${totals.kgRounded}kg)`;
    const id = productId
      ? Number(`${productId}${tierIdx}${designIdx}${fillingIdx}${persons}`)
      : Date.now();
    add(
      { id, name, price: totals.price, img: heroImg, category: productCategory ?? eventTitle },
      1,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => navigate("/checkout"), 200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa/60 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[94vh] overflow-y-auto rounded-3xl bg-card shadow-elegant"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/95 border border-border grid place-items-center hover:bg-secondary transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid lg:grid-cols-5">
          {/* Left: live preview */}
          <div className="lg:col-span-2 relative bg-gradient-warm">
            <div className="lg:sticky lg:top-0 p-6 lg:p-8">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={heroImg}
                  alt={design.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="mt-5 space-y-1.5 text-center">
                <div className="text-[10px] uppercase tracking-[0.25em] text-caramel">
                  Configurația ta
                </div>
                <div className="font-display text-xl text-primary leading-tight">{design.name}</div>
                <div className="text-sm text-muted-foreground">
                  {tier.label} • {filling.name}
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-card p-4 border border-border">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">
                      Greutate
                    </div>
                    <div className="mt-1 font-display text-lg text-primary flex items-center justify-center gap-1">
                      <Scale className="w-3.5 h-3.5" /> {totals.kgRounded}kg
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">
                      Pers.
                    </div>
                    <div className="mt-1 font-display text-lg text-primary">{persons}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">
                      Preț
                    </div>
                    <div className="mt-1 font-display text-lg text-primary">
                      {totals.price}
                      <span className="text-[10px] text-muted-foreground"> lei</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: configurator */}
          <div className="lg:col-span-3 p-6 lg:p-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-caramel">
              Configurator • {eventTitle}
            </span>
            <h3 className="mt-2 font-display text-3xl lg:text-4xl text-primary leading-tight">
              Construiește-ți tortul
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              O persoană savurează în medie <strong>{GRAMS_PER_PERSON}g</strong>. Personalizează
              fiecare detaliu.
            </p>

            {/* STEP 1 — Tiers */}
            <div className="mt-7">
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" /> 1. Numărul de niveluri
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {tiers.map((t, i) => {
                  const active = i === tierIdx;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTierIdx(i)}
                      className={`group relative rounded-2xl overflow-hidden border-2 transition text-left ${active ? "border-primary shadow-soft" : "border-transparent hover:border-border"}`}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={t.img}
                          alt={t.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      {active && (
                        <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-primary grid place-items-center">
                          <Check className="w-3.5 h-3.5 text-primary-foreground" />
                        </span>
                      )}
                      <div className="p-2">
                        <div className="text-xs font-medium text-foreground">{t.label}</div>
                        <div className="text-[10px] text-muted-foreground leading-tight">
                          {t.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2 — Design */}
            <div className="mt-7">
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Palette className="w-3.5 h-3.5" /> 2. Stilul / designul tortului
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {cakeDesigns.map((d, i) => {
                  const active = i === designIdx;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setDesignIdx(i)}
                      className={`group relative rounded-2xl overflow-hidden border-2 transition text-left ${active ? "border-primary shadow-soft" : "border-transparent hover:border-border"}`}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={d.img}
                          alt={d.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      {active && (
                        <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-primary grid place-items-center">
                          <Check className="w-3.5 h-3.5 text-primary-foreground" />
                        </span>
                      )}
                      <div className="p-2">
                        <div className="text-[11px] font-medium leading-tight text-foreground">
                          {d.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-muted-foreground italic">{design.note}</p>
            </div>

            {/* STEP 3 — Filling */}
            <div className="mt-7">
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Cookie className="w-3.5 h-3.5" /> 3. Umplutura — cum va fi în interior
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {tastes_list.map((t, i) => {
                  const active = i === fillingIdx;
                  return (
                    <button
                      key={t.name}
                      onClick={() => setFillingIdx(i)}
                      className={`group relative rounded-2xl overflow-hidden border-2 transition text-left ${active ? "border-primary shadow-soft" : "border-transparent hover:border-border"}`}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      {active && (
                        <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-primary grid place-items-center">
                          <Check className="w-3.5 h-3.5 text-primary-foreground" />
                        </span>
                      )}
                      <div className="p-2">
                        <div className="text-[11px] font-medium leading-tight text-foreground">
                          {t.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-muted-foreground italic">{filling.note}</p>
            </div>

            {/* STEP 4 — Persons */}
            <div className="mt-7">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Users className="w-3.5 h-3.5" /> 4. Număr de persoane
                </label>
                <span className="font-display text-2xl text-primary">{persons}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPersons((p) => Math.max(1, p - 1))}
                  className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-caramel transition"
                  aria-label="minus"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="range"
                  min={1}
                  max={200}
                  value={persons}
                  onChange={(e) => setPersons(Number(e.target.value))}
                  className="flex-1 accent-primary"
                />
                <button
                  onClick={() => setPersons((p) => Math.min(500, p + 1))}
                  className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-caramel transition"
                  aria-label="plus"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {[10, 20, 30, 50, 80, 120].map((n) => (
                  <button
                    key={n}
                    onClick={() => setPersons(n)}
                    className={`text-xs rounded-full px-3 py-1 border transition ${persons === n ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-caramel"}`}
                  >
                    {n} pers.
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-[11px] text-muted-foreground text-center">
              *Calcul orientativ: {GRAMS_PER_PERSON}g/pers • {filling.pricePerKg} lei/kg • design ×
              {design.priceMultiplier} • {tier.label} ×{tier.complexityMultiplier}.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-2">
              <button
                onClick={handleAddToCart}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm transition ${added ? "bg-gradient-gold text-gold-foreground" : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Adăugat în coș
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Adaugă în coș • {totals.price} lei
                  </>
                )}
              </button>
              <button
                onClick={handleBuyNow}
                className="rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm hover:bg-primary/90 transition"
              >
                Cumpără acum
              </button>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="sm:col-span-2 text-center rounded-full border border-border px-5 py-3 text-sm hover:border-caramel hover:text-caramel transition"
              >
                Sau trimite configurația pe WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
