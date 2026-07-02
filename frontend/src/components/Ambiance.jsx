import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ambianceImages } from "../mock/mock";
import { fadeUp, stagger, viewport } from "./anim";

export default function Ambiance() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="ambiance" ref={ref} className="bg-sage-dark py-24 lg:py-36 text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-5"
          >
            <motion.p
              variants={fadeUp}
              className="text-terracotta-light text-[12px] tracking-luxe uppercase mb-6"
            >
              The Ambiance
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl lg:text-6xl leading-[1.02] mb-8"
            >
              A room that slows<br />
              the whole day down
            </motion.h2>
            <motion.p variants={fadeUp} className="text-cream/70 text-lg leading-relaxed mb-5 max-w-md">
              Terracotta plaster, olive velvet, aged brass and candlelight. The
              tables are set with linen, the music kept low, the coffee brought
              to you with intention.
            </motion.p>
            <motion.p variants={fadeUp} className="text-cream/70 text-lg leading-relaxed max-w-md">
              Come for an hour and stay for three. Babylon is designed for
              lingering — an unhurried, quietly luxurious escape in the heart of
              Limerick.
            </motion.p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-5">
            <motion.div style={{ y: y1 }} className="overflow-hidden rounded-[2px]">
              <img src={ambianceImages[0]} alt="Ambiance" className="w-full h-[52vh] object-cover" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="space-y-5 mt-10">
              <div className="overflow-hidden rounded-[2px]">
                <img src={ambianceImages[1]} alt="Ambiance" className="w-full h-[30vh] object-cover" />
              </div>
              <div className="overflow-hidden rounded-[2px]">
                <img src={ambianceImages[2]} alt="Ambiance" className="w-full h-[24vh] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
