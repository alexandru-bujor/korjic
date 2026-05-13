import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";

import { PageMeta } from "@/components/PageMeta";
import { OrderForm } from "@/components/site/OrderForm";
import { WHATSAPP } from "@/lib/mock-data";

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact & comenzi — Korjic"
        description="Solicită o ofertă personalizată pentru tortul tău. Răspuns în maxim 24h. WhatsApp, telefon, email."
      />
      <section className="py-16 lg:py-24 bg-gradient-warm">
        <div className="mx-auto max-w-4xl px-5 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Contact</p>
          <h1 className="font-display text-4xl lg:text-6xl text-primary leading-tight">
            Hai să creăm ceva dulce împreună
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Scrie-ne sau sună — îți răspundem rapid și pregătim oferta personalizată.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ContactCard
            icon={Phone}
            label="Telefon"
            value="+373 60 000 000"
            href="tel:+37360000000"
          />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value="Scrie-ne acum"
            href={WHATSAPP}
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value="hello@korjic.md"
            href="mailto:hello@korjic.md"
          />
          <ContactCard icon={Instagram} label="Instagram" value="@korjic" href="#" />
        </div>
      </section>

      <OrderForm />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-card border border-border p-6 lg:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-caramel mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Atelier
                </div>
                <div className="font-display text-2xl text-primary mt-1">str. Bucuriei 12</div>
                <div className="text-sm text-muted-foreground">Chișinău, Moldova</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-card border border-border p-6 lg:p-8">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-caramel mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Program
                </div>
                <div className="font-display text-2xl text-primary mt-1">
                  Lun–Sâm · 09:00 – 19:00
                </div>
                <div className="text-sm text-muted-foreground">Duminică închis</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group rounded-3xl bg-card border border-border p-6 hover:border-caramel hover:shadow-soft transition"
    >
      <div className="w-11 h-11 rounded-2xl bg-secondary grid place-items-center text-caramel group-hover:bg-gradient-gold group-hover:text-gold-foreground transition">
        <Icon className="w-5 h-5" />
      </div>
      <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-xl text-primary">{value}</div>
    </a>
  );
}
