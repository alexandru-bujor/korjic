import { useSearchParams } from "react-router-dom";

import { PageMeta } from "@/components/PageMeta";
import { Catalog } from "@/components/site/Catalog";

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") ?? undefined;

  return (
    <>
      <PageMeta
        title="Catalog torturi și deserturi — Korjic"
        description="Răsfoiește catalogul Korjic: torturi pentru zi de naștere, nunți, botezuri, candy bar și deserturi individuale premium."
      />
      <div className="pt-8">
        <Catalog initialCategory={category ?? "Toate"} />
      </div>
    </>
  );
}
