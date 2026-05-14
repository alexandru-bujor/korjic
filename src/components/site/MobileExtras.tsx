import { ShoppingBag, MessageCircle, Send, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { WHATSAPP } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";
import { map } from "lodash";

export function MobileBottomBar() {
  const { count } = useCart();
  const { pathname } = useLocation();

  const iconMap = {
    ShoppingBag,
    ShoppingCart,
    Send,
    MessageCircle,
  };

  const links = [
    { label: "Catalog", to: "/catalog", icon: "ShoppingBag", badge: false },
    { label: "Coș", to: "/cart", icon: "ShoppingCart", badge: true },
    { label: "Plătește", to: "/checkout", icon: "Send", badge: false },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-card/95 backdrop-blur border-t border-border shadow-elegant">
      <div className="grid grid-cols-4 h-14">
        {map(links, (link) => {
          const Icon = iconMap[link.icon];
          const isActive = pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative flex flex-col items-center gap-0.5 py-2 text-xs transition-colors ${
                isActive ? "text-primary font-medium" : "text-foreground/80"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "stroke-[2.5]" : ""}`} />
              {link.badge && count > 0 && (
                <span className="absolute top-1 right-1/4 min-w-[16px] h-[16px] px-0.5 rounded-full bg-primary text-primary-foreground text-[9px] grid place-items-center">
                  {count}
                </span>
              )}
              {link.label}
            </Link>
          );
        })}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-0.5 py-2 text-xs text-foreground/80 active:text-primary"
        >
          <MessageCircle className="w-4 h-4" />
          Chat
        </a>
      </div>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="hidden lg:flex fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-gradient-gold shadow-elegant items-center justify-center hover:scale-105 transition animate-float-slow"
    >
      <MessageCircle className="w-6 h-6 text-gold-foreground" />
    </a>
  );
}
