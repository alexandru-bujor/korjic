import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { PageMeta } from "@/components/PageMeta";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { ProductCard } from "@/components/site/Catalog";
import { Tastes } from "@/components/site/Tastes";
import { Reviews } from "@/components/site/Reviews";
import { Benefits } from "@/components/site/Benefits";
import { products } from "@/lib/mock-data";

export default function HomePage() {
  const featured = products.slice(0, 4);
  return (
    <>
      <PageMeta
        title="Korjic — Torturi și deserturi premium pentru evenimente"
        description="Korjic creează torturi, candy bar-uri și deserturi premium pentru zile de naștere, nunți, botezuri și evenimente corporate în Chișinău."
      />
      <Hero />
      <Categories />

      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Best-seller</p>
              <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
                Cele mai dorite
              </h2>
            </div>
            <Link
              to="/catalog"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary hover:text-caramel transition"
            >
              Vezi tot catalogul <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      <Benefits />
      <Tastes />
      <Reviews />
    </>
  );
}
