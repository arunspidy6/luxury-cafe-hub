import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menu } from "../mock/mock";
import { fadeUp, stagger, viewport } from "./anim";

export default function MenuSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="menu" className="bg-cream py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-terracotta text-[12px] tracking-luxe uppercase mb-5"
          >
            The Menu
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-espresso text-5xl lg:text-6xl"
          >
            Every mug is a project
          </motion.h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {menu.map((m, i) => (
            <button
              key={m.category}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 text-[12px] tracking-[0.16em] uppercase transition-colors duration-300 border ${
                active === i
                  ? "bg-espresso text-cream border-espresso"
                  : "bg-transparent text-espresso/70 border-espresso/20 hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {m.category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {menu[active].items.map((item) => (
              <div
                key={item.name}
                className="group flex items-baseline gap-4 py-5 border-b border-espresso/10"
              >
                <div className="flex-shrink-0">
                  <h3 className="font-display text-2xl text-espresso group-hover:text-terracotta transition-colors leading-none">
                    {item.name}
                  </h3>
                  <p className="text-espresso/55 text-sm mt-1.5">{item.desc}</p>
                </div>
                <span className="flex-1 border-b border-dotted border-espresso/25 mb-2" />
                <span className="font-display text-2xl text-terracotta mb-1">
                  {item.price}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
