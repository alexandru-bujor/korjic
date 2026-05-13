import { ShoppingBag, MessageCircle, Send, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";

export function MobileBottomBar() {
  const { count } = useCart();
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-card/95 backdrop-blur border-t border-border shadow-elegant">
      <div className="grid grid-cols-4">
        <Link
          to="/catalog"
          className="flex flex-col items-center gap-1 py-3 text-xs text-foreground/80 active:text-primary"
        >
          <ShoppingBag className="w-5 h-5" /> Catalog
        </Link>
        <Link
          to="/cart"
          className="relative flex flex-col items-center gap-1 py-3 text-xs text-foreground/80 active:text-primary"
        >
          <ShoppingCart className="w-5 h-5" />
          {count > 0 && (
            <span className="absolute top-1.5 right-1/4 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center">
              {count}
            </span>
          )}
          Coș
        </Link>
        <Link
          to="/checkout"
          className="flex flex-col items-center gap-1 py-3 text-xs text-primary-foreground bg-primary mx-2 my-2 rounded-2xl"
        >
          <Send className="w-5 h-5" /> Plătește
        </Link>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs text-foreground/80 active:text-caramel"
        >
          <MessageCircle className="w-5 h-5" /> Chat
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
