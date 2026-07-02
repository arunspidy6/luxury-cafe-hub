import React from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { cafe } from "../mock/mock";
import { fadeUp, scaleIn, stagger, viewport } from "./anim";

const notes = [
  { k: "The Machine", v: "A green La Marzocco, dialled in daily" },
  { k: "The Cup", v: "House-designed, terracotta & olive" },
  { k: "The Roast", v: "Small-batch, single origin" }
];

export default function Counter() {
  return (
    <section id="counter" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        {/* Image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-7 relative"
        >
          <div className="overflow-hidden rounded-[2px]">
            <img
              src={cafe.counterImage}
              alt="Behind the Babylon counter"
              className="w-full h-[46vh] lg:h-[70vh] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 border border-terracotta w-full h-full rounded-[2px] -z-0 hidden lg:block" />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-5"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-3 text-sage-dark text-[12px] tracking-luxe uppercase mb-6"
          >
            <Coffee size={15} />
            Behind the Counter
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-espresso text-5xl lg:text-6xl leading-[1.02] mb-8"
          >
            Where the craft happens
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-espresso/70 text-lg leading-relaxed mb-5 max-w-xl"
          >
            Under the tree, in the golden light, our baristas pull every shot by
            hand on a green La Marzocco. Stacked Babylon cups, freshly ground
            beans and a rhythm that never rushes — this is the heart of the room.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-espresso/70 text-lg leading-relaxed mb-10 max-w-xl"
          >
            Come say hello, watch the pour, and let us make your morning.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid sm:grid-cols-3 gap-6 border-t border-espresso/15 pt-8"
          >
            {notes.map((n) => (
              <div key={n.k}>
                <p className="text-[11px] tracking-[0.14em] uppercase text-terracotta mb-2">
                  {n.k}
                </p>
                <p className="text-espresso/75 text-sm leading-relaxed">{n.v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
