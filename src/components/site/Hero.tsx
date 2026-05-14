import hero from "@/assets/hero-cake.jpg";
import { WHATSAPP } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { Sparkles, Leaf, Truck, Gift } from "lucide-react";

const badges = [
  { icon: Leaf, label: "Ingrediente naturale" },
  { icon: Sparkles, label: "Design personalizat" },
  { icon: Truck, label: "Livrare sigură" },
  { icon: Gift, label: "Comenzi pentru evenimente" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-warm">
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-caramel/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 pt-12 lg:pt-20 pb-16 lg:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
            Patiserie de autor · Chișinău
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] sm:text-5xl lg:text-7xl leading-[1.02] text-primary">
            Torturi și deserturi <em className="not-italic text-gradient-gold">personalizate</em>
            <br />
            pentru momente speciale
          </h1>

          <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Korjic creează torturi, candy bar-uri și deserturi premium pentru zile de naștere,
            nunți, botezuri și evenimente corporate.
          </p>

          {/* Image — mobile only, between text and buttons */}
          <div className="lg:hidden mt-8 relative animate-float-slow">
            <div className="absolute -inset-8 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <img
              src={hero}
              alt="Tort premium Korjic cu foiță de aur și flori naturale"
              width={1536}
              height={1536}
              className="relative w-full rounded-[2rem] shadow-elegant object-cover aspect-[4/5]"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition shadow-soft"
            >
              Vezi catalogul
            </Link>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-card border border-border text-foreground px-7 py-3.5 text-sm font-medium hover:border-caramel hover:text-caramel transition"
            >
              Comandă pe WhatsApp
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2.5 rounded-2xl border border-border/70 bg-card/60 backdrop-blur px-3.5 py-3"
              >
                <b.icon className="w-4 h-4 text-caramel shrink-0" />
                <span className="text-xs leading-tight text-foreground/80">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image — desktop only */}
        <div className="hidden lg:block lg:col-span-6 relative">
          <div className="relative animate-float-slow">
            <div className="absolute -inset-8 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <img
              src={hero}
              alt="Tort premium Korjic cu foiță de aur și flori naturale"
              width={1536}
              height={1536}
              className="relative w-full max-w-[560px] mx-auto rounded-[2rem] shadow-elegant object-cover aspect-[4/5]"
            />
          </div>
          <div className="hidden lg:flex absolute -left-6 bottom-12 items-center gap-3 rounded-2xl bg-card/95 backdrop-blur px-4 py-3 shadow-soft border border-border">
            <div className="w-9 h-9 rounded-full bg-gradient-gold grid place-items-center text-gold-foreground font-semibold">
              4.9
            </div>
            <div className="text-xs leading-tight">
              <div className="font-medium text-foreground">Apreciat de clienți</div>
              <div className="text-muted-foreground">+500 evenimente create</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
