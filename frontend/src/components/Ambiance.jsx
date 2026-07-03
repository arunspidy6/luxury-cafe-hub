import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ambianceImages, ambianceVideo } from "../mock/mock";
import { fadeUp, stagger, viewport } from "./anim";

export default function Ambiance() {
  const [idx, setIdx] = useState(0);

  // Rotate the supporting photos one at a time (full size, never all at once)
  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % ambianceImages.length),
      3800
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="ambiance" className="bg-sage-dark py-20 sm:py-24 lg:py-36 text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <motion.p
              variants={fadeUp}
              className="text-terracotta-light text-[12px] tracking-luxe uppercase mb-6"
            >
              The Ambiance
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-8"
            >
              A room that slows<br />the whole day down
            </motion.h2>
            <motion.p variants={fadeUp} className="text-cream/75 text-lg leading-relaxed mb-5 max-w-md">
              Terracotta benches, olive-green chairs and a living tree at its
              heart. Warm light, low music and coffee brought to you with
              intention.
            </motion.p>
            <motion.p variants={fadeUp} className="text-cream/75 text-lg leading-relaxed max-w-md">
              We're open and the coffee is pouring — come linger for an hour, or
              three.
            </motion.p>
          </motion.div>

          {/* Media — video is the priority (stable), photos rotate one at a time */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
              {/* Video — natural aspect, scaled to 80% and centered */}
              <div className="md:col-span-6 flex justify-center">
                <div className="relative w-[93%] rounded-[2px] overflow-hidden">
                  <video
                    src={ambianceVideo}
                    autoPlay
                    muted={true}
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-auto block"
                  />
                  <span className="absolute top-4 left-4 flex items-center gap-2 bg-espresso/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] tracking-[0.16em] uppercase text-cream/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-light animate-pulse" />
                    Now Pouring
                  </span>
                </div>
              </div>

              {/* Rotating full-size photo — offset for an asymmetric feel */}
              <div className="md:col-span-6 md:mt-20">
                <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden bg-sage-dark">
                  <AnimatePresence>
                    <motion.img
                      key={idx}
                      src={ambianceImages[idx]}
                      alt="Inside Babylon"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </AnimatePresence>

                  {/* progress dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {ambianceImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIdx(i)}
                        aria-label={`Show photo ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === idx ? "w-6 bg-cream" : "w-1.5 bg-cream/40 hover:bg-cream/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
