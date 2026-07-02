import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Story", href: "#story" },
  { label: "Signatures", href: "#signatures" },
  { label: "Menu", href: "#menu" },
  { label: "Ambiance", href: "#ambiance" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-espresso/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-3xl tracking-wide text-espresso leading-none">
          Babylon
          <span className="block text-[9px] font-body tracking-luxe text-terracotta mt-0.5">
            LIMERICK
          </span>
        </a>

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
        </ul>

        <a
          href="#menu"
          className="hidden lg:inline-flex items-center border border-espresso/30 text-espresso hover:bg-espresso hover:text-cream transition-colors duration-400 px-6 py-2.5 text-[12px] tracking-[0.18em] uppercase"
        >
          View Menu
        </a>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-espresso"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
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
                    className="font-display text-5xl text-cream/90 hover:text-terracotta-light transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="m-8 text-center border border-cream/40 py-4 tracking-[0.2em] uppercase text-sm"
            >
              View Menu
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
