import React from "react";
import { motion } from "framer-motion";
import { about } from "../mock/mock";
import { fadeUp, scaleIn, stagger, viewport } from "./anim";

export default function Story() {
  return (
    <section id="story" className="bg-cream py-20 sm:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Image side */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2px]">
            <img
              src={about.image}
              alt="Babylon signage"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute -top-5 -right-5 border border-sage w-full h-full rounded-[2px] -z-0 hidden lg:block" />
        </motion.div>

        {/* Text side */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-3 text-terracotta text-[12px] tracking-luxe uppercase mb-6"
          >
            <span className="h-px w-10 bg-terracotta" />
            {about.eyebrow}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-espresso text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-8"
          >
            {about.title}
          </motion.h2>

          {about.body.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-espresso/70 text-lg leading-relaxed mb-5 max-w-xl"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 gap-6 border-t border-espresso/15 pt-8"
          >
            {about.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-terracotta">{s.value}</p>
                <p className="text-[12px] tracking-[0.12em] uppercase text-espresso/60 mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
