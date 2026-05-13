import { PageMeta } from "@/components/PageMeta";
import { Events } from "@/components/site/Events";
import { HowToOrder } from "@/components/site/HowToOrder";
import { Gallery } from "@/components/site/Gallery";

export default function EventsPage() {
  return (
    <>
      <PageMeta
        title="Torturi pentru evenimente — Korjic"
        description="Torturi pentru nunți, zile de naștere, botezuri și evenimente corporate. Design personalizat, livrare la locație."
      />
      <section className="py-16 lg:py-24 bg-gradient-warm">
        <div className="mx-auto max-w-4xl px-5 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Evenimente</p>
          <h1 className="font-display text-4xl lg:text-6xl text-primary leading-tight">
            Tortul care devine amintirea zilei
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            De la nunți spectaculoase la botezuri delicate — creăm deserturi care marchează cele mai
            importante momente din viața ta.
          </p>
        </div>
      </section>
      <Events />
      <HowToOrder />
      <Gallery />
    </>
  );
}
