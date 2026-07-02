import React from "react";
import { motion } from "framer-motion";
import { signatures } from "../mock/mock";
import { fadeUp, stagger, viewport } from "./anim";

export default function Signatures() {
  return (
    <section id="signatures" className="bg-olive-dark py-24 lg:py-36 text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-terracotta-light text-[12px] tracking-luxe uppercase mb-5"
          >
            The House Signatures
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl lg:text-6xl leading-tight"
          >
            Drinks worth crossing town for
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-cream/70 text-lg">
            A short, considered list — each one built from a single idea and a
            great deal of patience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {signatures.map((d) => (
            <motion.article
              key={d.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="group bg-cream/[0.04] border border-cream/10 rounded-[2px] overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 right-4 bg-terracotta text-cream text-sm font-display px-3 py-1 rounded-full">
                  {d.price}
                </span>
              </div>
              <div className="p-6">
                <p className="text-[11px] tracking-[0.18em] uppercase text-terracotta-light mb-2">
                  {d.note}
                </p>
                <h3 className="font-display text-2xl mb-2">{d.name}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
