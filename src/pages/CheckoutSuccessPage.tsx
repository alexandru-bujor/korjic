import { Link } from "react-router-dom";
import { CheckCircle2, ShoppingBag } from "lucide-react";

import { PageMeta } from "@/components/PageMeta";

export default function CheckoutSuccessPage() {
  const ref = "KRJ-" + Math.floor(100000 + Math.random() * 900000);
  return (
    <>
      <PageMeta title="Comandă plasată — Korjic" description="Mulțumim pentru comandă!" />
      <div className="mx-auto max-w-2xl px-5 lg:px-10 py-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-gold grid place-items-center shadow-elegant">
          <CheckCircle2 className="w-10 h-10 text-gold-foreground" />
        </div>
        <h1 className="mt-7 font-display text-4xl lg:text-5xl text-primary leading-tight">
          Mulțumim pentru comandă!
        </h1>
        <p className="mt-4 text-muted-foreground">
          Comanda ta a fost înregistrată cu succes. Te vom contacta în scurt timp pentru confirmare.
        </p>
        <div className="mt-6 inline-block rounded-2xl bg-secondary px-5 py-3">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Număr comandă
          </div>
          <div className="font-display text-xl text-primary">{ref}</div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/catalog"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-primary/90 transition"
          >
            <ShoppingBag className="w-4 h-4" /> Continuă cumpărăturile
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm hover:border-caramel transition"
          >
            Acasă
          </Link>
        </div>
      </div>
    </>
  );
}
