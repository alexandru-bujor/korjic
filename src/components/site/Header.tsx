import { useState } from "react";
import { Menu, X, Globe, ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "@/lib/cart-context";
import logo from "@/assets/korjic-logo.png";

const navLinks = [
  { to: "/", label: "Acasă", exact: true },
  { to: "/catalog", label: "Catalog" },
  { to: "/events", label: "Evenimente" },
  { to: "/about", label: "Despre noi" },
  { to: "/contact", label: "Contacte" },
] as const;

const langs = ["RO", "RU", "EN"] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<(typeof langs)[number]>("RO");
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Korjic" className="h-8 lg:h-10 w-auto" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.25em] text-muted-foreground border-l border-border pl-3">
            Patiserie de autor
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={"exact" in l ? l.exact : false}
              className={({ isActive }) =>
                `text-sm transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-caramel after:transition-all ${
                  isActive
                    ? "text-primary after:w-full"
                    : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 text-xs">
            <Globe className="w-3.5 h-3.5 text-muted-foreground" />
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded-full transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-secondary transition"
            aria-label="Coș"
          >
            <ShoppingBag className="w-5 h-5 text-foreground/80" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center font-medium">
                {count}
              </span>
            )}
          </Link>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:bg-primary/90 transition"
          >
            Comandă
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-foreground"
            aria-label="menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background animate-fade-up">
          <div className="px-5 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground py-1.5"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-1 pt-2 text-xs">
              <Globe className="w-3.5 h-3.5 text-muted-foreground" />
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded-full ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
