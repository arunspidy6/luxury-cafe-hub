import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { cafe } from "../mock/mock";

export default function CartDrawer() {
  const { items, open, setOpen, addItem, decrement, removeItem, total, count, clear } =
    useCart();

  const checkout = () => {
    // Hand off to Toast for payment / final pickup order
    window.open(cafe.toastUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-espresso/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 z-[80] h-full w-full sm:w-[420px] bg-cream flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-espresso/10">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-terracotta" />
                <h3 className="font-display text-2xl text-espresso">Your Order</h3>
                <span className="text-espresso/50 text-sm">({count})</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close cart" className="text-espresso/70 hover:text-terracotta transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                    <ShoppingBag size={26} className="text-sage-dark" />
                  </div>
                  <p className="font-display text-2xl text-espresso mb-2">Your order is empty</p>
                  <p className="text-espresso/55 text-sm max-w-[220px]">
                    Add a coffee, matcha or bowl to get started.
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-espresso/10">
                  {items.map((item) => (
                    <li key={item.id} className="py-4 flex items-start gap-3">
                      <div className="flex-1">
                        <p className="font-display text-xl text-espresso leading-tight">{item.name}</p>
                        <p className="text-terracotta text-sm mt-1">€{item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrement(item.id)}
                          className="w-7 h-7 border border-espresso/25 flex items-center justify-center hover:bg-espresso hover:text-cream transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-6 text-center text-espresso">{item.qty}</span>
                        <button
                          onClick={() => addItem(item, false)}
                          className="w-7 h-7 border border-espresso/25 flex items-center justify-center hover:bg-espresso hover:text-cream transition-colors"
                          aria-label="Increase"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-espresso/40 hover:text-terracotta transition-colors ml-1 mt-1"
                        aria-label="Remove"
                      >
                        <X size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-espresso/10 px-6 py-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-espresso/60 text-sm tracking-[0.12em] uppercase">Subtotal</span>
                  <span className="font-display text-3xl text-espresso">€{total.toFixed(2)}</span>
                </div>
                <p className="text-espresso/45 text-xs mb-4">
                  Final payment & pickup time confirmed securely via Toast.
                </p>
                <button
                  onClick={checkout}
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-cream py-4 text-[13px] tracking-[0.18em] uppercase flex items-center justify-center gap-2 transition-colors duration-400"
                >
                  Checkout for Pickup
                  <ArrowUpRight size={17} />
                </button>
                <button
                  onClick={clear}
                  className="w-full text-espresso/50 hover:text-terracotta text-xs tracking-[0.14em] uppercase mt-3 transition-colors"
                >
                  Clear order
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
