import { PageMeta } from "@/components/PageMeta";
import { Benefits } from "@/components/site/Benefits";
import { Tastes } from "@/components/site/Tastes";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="Despre Korjic — patiserie de autor din Chișinău"
        description="Korjic este o patiserie de autor cu peste 500 de evenimente create. Ingrediente naturale, design personalizat, gust premium."
      />
      <section className="py-16 lg:py-24 bg-gradient-warm">
        <div className="mx-auto max-w-4xl px-5 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Despre noi</p>
          <h1 className="font-display text-4xl lg:text-6xl text-primary leading-tight">
            Patiserie de autor din inima Chișinăului
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Suntem o echipă de cofetari pasionați care transformă ingrediente naturale în obiecte de
            artă comestibile. Fiecare tort Korjic este creat manual, cu atenție pentru fiecare
            detaliu — pentru că momentele speciale merită deserturi pe măsură.
          </p>
        </div>
      </section>
      <Benefits />
      <Tastes />
      <Gallery />
      <Reviews />
    </>
  );
}
