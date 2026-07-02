import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cafe } from "../mock/mock";
import { useCart } from "../context/CartContext";

const links = [
  { label: "Story", href: "/#story" },
  { label: "Signatures", href: "/#signatures" },
  { label: "Ambiance", href: "/#ambiance" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Visit", href: "/#visit" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();
  const location = useLocation();
  const onMenuPage = location.pathname === "/menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || onMenuPage;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-cream/90 backdrop-blur-md border-b border-espresso/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={cafe.logo}
            alt="Babylon Coffee"
            className="w-11 h-11 rounded-full object-cover"
          />
          <span className="font-display text-2xl tracking-wide text-espresso leading-none hidden sm:block">
            Babylon
            <span className="block text-[9px] font-body tracking-luxe text-sage-dark mt-0.5">
              COFFEE · LIMERICK
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[13px] tracking-[0.15em] uppercase text-espresso/80 hover:text-terracotta transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/menu"
              className="relative text-[13px] tracking-[0.15em] uppercase text-terracotta font-medium group"
            >
              Order Now
              <span className="absolute -bottom-1 left-0 h-px w-full bg-terracotta/40" />
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-espresso hover:text-terracotta transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={22} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-terracotta text-cream text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-espresso"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-espresso text-cream flex flex-col"
          >
            <div className="h-20 px-6 flex items-center justify-between border-b border-cream/15">
              <span className="font-display text-3xl">Babylon</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <ul className="flex-1 flex flex-col justify-center gap-6 px-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl text-cream/90 hover:text-sage-light transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="m-8 text-center bg-terracotta text-cream py-4 tracking-[0.2em] uppercase text-sm"
            >
              Order for Pickup
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
