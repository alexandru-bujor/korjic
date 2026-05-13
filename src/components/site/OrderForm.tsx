import { useState } from "react";
import { Upload, Send, CheckCircle2 } from "lucide-react";

export function OrderForm() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="order" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-caramel mb-3">Comandă rapidă</p>
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
              Spune-ne despre evenimentul tău
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Completează formularul și revenim cu o ofertă personalizată în maxim 24h. Pentru
              răspuns instant, scrie-ne pe WhatsApp.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <Detail label="Răspuns" val="în maxim 24h" />
              <Detail label="Consultare" val="gratuită" />
              <Detail label="Avans" val="30% la confirmare" />
            </div>
          </div>

          <form
            onSubmit={submit}
            className="lg:col-span-7 rounded-3xl bg-card border border-border p-6 lg:p-10 shadow-soft"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nume" placeholder="Numele tău" />
              <Field label="Telefon" placeholder="+373 ..." type="tel" />
              <Field
                label="Tip eveniment"
                as="select"
                options={["Aniversare", "Nuntă", "Botez", "Corporate", "Altul"]}
              />
              <Field label="Data evenimentului" type="date" />
              <Field label="Număr persoane" placeholder="ex. 30" />
              <Field
                label="Gust preferat"
                as="select"
                options={[
                  "Ciocolată & vișină",
                  "Vanilie & fructe de pădure",
                  "Caramel sărat",
                  "Red Velvet",
                  "Fistic & zmeură",
                ]}
              />
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Mesaj / idee pentru tort
              </label>
              <textarea
                rows={4}
                placeholder="Descrie pe scurt ideea ta..."
                className="mt-2 w-full rounded-2xl bg-secondary/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-caramel resize-none"
              />
            </div>
            <label className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-border bg-secondary/30 px-4 py-4 cursor-pointer hover:border-caramel transition">
              <Upload className="w-4 h-4 text-caramel" />
              <span className="text-sm text-muted-foreground">
                Adaugă imagine de inspirație (opțional)
              </span>
              <input type="file" className="hidden" />
            </label>

            <button
              type="submit"
              disabled={sent}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition disabled:opacity-80"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Cerere trimisă · Te contactăm în curând
                </>
              ) : (
                <>
                  Trimite cererea <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="mt-3 text-[11px] text-muted-foreground text-center">
              Prin trimiterea formularului ești de acord cu prelucrarea datelor pentru a primi
              oferta.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, val }: { label: string; val: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{val}</span>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  as,
  options,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  as?: "select";
  options?: string[];
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      {as === "select" ? (
        <select className="mt-2 w-full rounded-2xl bg-secondary/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-caramel">
          {options?.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="mt-2 w-full rounded-2xl bg-secondary/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-caramel"
        />
      )}
    </div>
  );
}
