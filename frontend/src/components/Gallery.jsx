import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { galleryImages, cafe } from "../mock/mock";
import { stagger, viewport } from "./anim";

const tile = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

function ReelCard() {
  return (
    <motion.div
      variants={tile}
      className="break-inside-avoid mb-4 lg:mb-5 rounded-[2px] overflow-hidden bg-espresso relative"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-cream/10">
        <span className="flex items-center gap-2 text-cream text-[11px] tracking-luxe uppercase">
          <Instagram size={15} className="text-terracotta-light" />
          Watch
        </span>
        <a
          href={cafe.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream/60 hover:text-terracotta-light text-[11px] tracking-[0.14em] uppercase transition-colors"
        >
          @babylon
        </a>
      </div>
      <div className="relative w-full" style={{ height: 620 }}>
        <iframe
          title="Babylon reel"
          src={cafe.instagramReel}
          className="w-full h-full"
          style={{ border: 0 }}
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-sage-dark text-[12px] tracking-luxe uppercase mb-5">
              The Gallery
            </p>
            <h2 className="font-display text-espresso text-5xl lg:text-6xl leading-tight">
              Moments, plated<br />and poured
            </h2>
          </div>
          <p className="text-espresso/60 max-w-sm text-lg">
            A glimpse of the everyday at Babylon — the light, the craft and the
            small rituals in between. Press play for a morning with us.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="columns-2 lg:columns-3 gap-4 lg:gap-5 [column-fill:_balance]"
        >
          <ReelCard />
          {galleryImages.map((img, i) => (
            <motion.figure
              key={i}
              variants={tile}
              className="group relative overflow-hidden rounded-[2px] mb-4 lg:mb-5 break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
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
