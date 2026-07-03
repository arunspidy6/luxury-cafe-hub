import React from "react";
import { motion } from "framer-motion";
import { reviews, cafe } from "../mock/mock";
import { Star } from "lucide-react";
import { fadeUp, stagger, viewport } from "./anim";

export default function Reviews() {
  return (
    <section className="bg-espresso py-20 sm:py-24 lg:py-36 text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-terracotta-light text-[12px] tracking-luxe uppercase mb-5">
            Kind Words
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-5xl lg:text-6xl">
            Loved across Limerick
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mt-5 text-cream/80">
            <span className="font-display text-3xl text-terracotta-light">{cafe.rating}</span>
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-terracotta-light text-terracotta-light" />
              ))}
            </span>
            <span className="text-sm">· {cafe.reviewsCount} reviews</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6"
        >
          {reviews.map((r) => (
            <motion.blockquote
              key={r.name}
              variants={fadeUp}
              className="bg-cream/[0.04] border border-cream/10 rounded-[2px] p-8 flex flex-col"
            >
              <span className="font-display text-6xl text-terracotta-light leading-none mb-3">“</span>
              <p className="text-cream/85 text-lg leading-relaxed flex-1">{r.text}</p>
              <div className="mt-6 flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-terracotta-light text-terracotta-light" />
                ))}
              </div>
              <footer className="mt-4">
                <p className="font-display text-xl">{r.name}</p>
                <p className="text-[11px] tracking-[0.12em] uppercase text-cream/50 mt-1">{r.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
