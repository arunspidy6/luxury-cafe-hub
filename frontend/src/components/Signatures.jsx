import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus, ArrowRight } from "lucide-react";
import { signatures } from "../mock/mock";
import { useCart } from "../context/CartContext";
import { fadeUp, stagger, viewport } from "./anim";

export default function Signatures() {
  const { addItem } = useCart();

  return (
    <section id="signatures" className="bg-paper py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-terracotta text-[12px] tracking-luxe uppercase mb-5"
            >
              The Signatures
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-espresso text-5xl lg:text-6xl leading-[1.02]"
            >
              Made by hand,<br />worth the trip
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-espresso hover:text-terracotta text-[13px] tracking-[0.16em] uppercase border-b border-espresso/30 hover:border-terracotta pb-1 transition-colors"
            >
              View full menu
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Product grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
        >
          {signatures.map((p) => (
            <motion.article key={p.id} variants={fadeUp} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream mb-5">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  onClick={() => addItem(p)}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-cream text-espresso flex items-center justify-center shadow-lg hover:bg-terracotta hover:text-cream transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-label={`Add ${p.name} to order`}
                >
                  <Plus size={22} />
                </button>
              </div>

              <p className="text-[10px] tracking-[0.2em] uppercase text-sage-dark mb-2">
                {p.tag}
              </p>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl text-espresso leading-tight">
                  {p.name}
                </h3>
                <span className="font-display text-2xl text-terracotta shrink-0">
                  €{p.price.toFixed(2)}
                </span>
              </div>
              <p className="text-espresso/55 text-sm mt-2 leading-relaxed pr-4">
                {p.desc}
              </p>
              <button
                onClick={() => addItem(p)}
                className="mt-4 text-[12px] tracking-[0.16em] uppercase text-espresso/70 hover:text-terracotta border-b border-espresso/20 hover:border-terracotta pb-0.5 transition-colors"
              >
                Add to Order
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
