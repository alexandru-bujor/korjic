import { Instagram, Facebook, Send, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP } from "@/lib/mock-data";
import logo from "@/assets/korjic-logo.png";

const footerNav: Array<{
  label: string;
  to: "/" | "/catalog" | "/events" | "/about" | "/contact";
}> = [
  { label: "Acasă", to: "/" },
  { label: "Catalog", to: "/catalog" },
  { label: "Evenimente", to: "/events" },
  { label: "Despre noi", to: "/about" },
  { label: "Contacte", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <img src={logo} alt="Korjic" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
            Patiserie de autor din Chișinău. Creăm torturi și deserturi premium pentru cele mai
            importante momente din viața ta.
          </p>
          <div className="mt-6 flex gap-3">
            <Social href="#" icon={Instagram} />
            <Social href="#" icon={Facebook} />
            <Social href={WHATSAPP} icon={Send} />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Navigare</div>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            {footerNav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Contacte</div>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 mt-0.5 text-gold" /> +373 60 000 000
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-gold" /> str. Bucuriei 12, Chișinău
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 mt-0.5 text-gold" /> Lun–Sâm · 09:00 – 19:00
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Info</div>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            <li>
              <a href="#" className="hover:text-gold transition">
                Livrare
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold transition">
                Plată
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold transition">
                Termeni
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold transition">
                Politică
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-1 text-xs">
            {["RO", "RU", "EN"].map((l, i) => (
              <span
                key={l}
                className={`px-2 py-1 rounded-full ${i === 0 ? "bg-gold text-gold-foreground" : "text-primary-foreground/60"}`}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Korjic Patisserie. Toate drepturile rezervate.
      </div>
    </footer>
  );
}

function Social({ href, icon: Icon }: { href: string; icon: typeof Instagram }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-full border border-primary-foreground/20 grid place-items-center hover:bg-gold hover:text-gold-foreground hover:border-gold transition"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
