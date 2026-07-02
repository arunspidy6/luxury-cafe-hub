import React from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../mock/mock";
import { stagger, viewport } from "./anim";

const tile = {
  hidden: { opacity: 0, scale: 1.06, y: 26 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-terracotta text-[12px] tracking-luxe uppercase mb-5">
              The Gallery
            </p>
            <h2 className="font-display text-espresso text-5xl lg:text-6xl leading-tight">
              Moments, plated<br />and poured
            </h2>
          </div>
          <p className="text-espresso/60 max-w-sm text-lg">
            A glimpse of the everyday at Babylon — the light, the craft and the
            small rituals in between.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {galleryImages.map((img, i) => (
            <motion.figure
              key={i}
              variants={tile}
              className={`group relative overflow-hidden rounded-[2px] ${
                i === 1 || i === 4 ? "row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                className={`w-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                  i === 1 || i === 4 ? "h-full min-h-[420px]" : "h-[260px]"
                }`}
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-colors duration-500" />
              <figcaption className="absolute bottom-4 left-4 text-cream text-[11px] tracking-luxe uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {img.label}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
