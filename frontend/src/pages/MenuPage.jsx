import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Check, ArrowUpRight } from "lucide-react";
import { menuCategories, cafe } from "../mock/mock";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

function MenuItem({ item }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (item.soldOut) return;
    addItem(item, false);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      className={`group flex items-start gap-4 py-5 border-b border-espresso/10 ${
        item.soldOut ? "opacity-50" : ""
      }`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-display text-2xl text-espresso leading-none">
            {item.name}
          </h3>
          {item.soldOut && (
            <span className="text-[10px] tracking-[0.16em] uppercase text-terracotta border border-terracotta/40 px-2 py-0.5">
              Out of stock
            </span>
          )}
        </div>
        {item.desc && (
          <p className="text-espresso/55 text-sm mt-2 max-w-md leading-relaxed">
            {item.desc}
          </p>
        )}
      </div>

      <span className="font-display text-2xl text-terracotta pt-1">
        €{item.price.toFixed(2)}
      </span>

      <button
        onClick={handleAdd}
        disabled={item.soldOut}
        className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
          item.soldOut
            ? "border border-espresso/15 text-espresso/25 cursor-not-allowed"
            : added
            ? "bg-sage text-cream"
            : "border border-espresso/25 text-espresso hover:bg-terracotta hover:border-terracotta hover:text-cream"
        }`}
        aria-label={`Add ${item.name}`}
      >
        {added ? <Check size={18} /> : <Plus size={18} />}
      </button>
    </div>
  );
}

export default function MenuPage() {
  const [active, setActive] = useState(menuCategories[0].id);
  const { setOpen, count } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handler = () => {
      for (const cat of menuCategories) {
        const el = document.getElementById(`cat-${cat.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActive(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToCat = (id) => {
    const el = document.getElementById(`cat-${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="grain-overlay" />

      {/* Header */}
      <section className="pt-32 pb-10 px-6 lg:px-10 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-terracotta text-[12px] tracking-luxe uppercase mb-5"
        >
          Order for Pickup
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-espresso text-6xl lg:text-7xl leading-[0.95] max-w-3xl"
        >
          The Babylon menu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-espresso/65 text-lg max-w-xl"
        >
          Add your favourites to the order, then check out securely through Toast
          for collection at 19 Henry Street.
        </motion.p>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-20 z-30 bg-cream/90 backdrop-blur-md border-y border-espresso/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center gap-3 overflow-x-auto py-4">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCat(cat.id)}
              className={`whitespace-nowrap px-5 py-2 text-[12px] tracking-[0.14em] uppercase border transition-colors duration-300 ${
                active === cat.id
                  ? "bg-espresso text-cream border-espresso"
                  : "bg-transparent text-espresso/70 border-espresso/20 hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-14">
        {menuCategories.map((cat) => (
          <div key={cat.id} id={`cat-${cat.id}`} className="mb-16 scroll-mt-40">
            <div className="flex items-baseline gap-4 mb-6">
              <h2 className="font-display text-4xl lg:text-5xl text-espresso">
                {cat.name}
              </h2>
              <span className="flex-1 border-b border-espresso/15" />
              <span className="text-espresso/40 text-sm">{cat.items.length} items</span>
            </div>
            {cat.items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        ))}
      </section>

      {/* Mobile floating cart button */}
      {count > 0 && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-terracotta text-cream px-8 py-4 rounded-full shadow-xl flex items-center gap-3 text-[13px] tracking-[0.14em] uppercase"
        >
          View Order ({count})
          <ArrowUpRight size={17} />
        </button>
      )}

      <Footer />
    </div>
  );
}
