import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cafe, heroImage } from "../mock/mock";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-16 grid lg:grid-cols-12 gap-10 items-center min-h-screen">
        {/* Text */}
        <div className="lg:col-span-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 text-terracotta text-[12px] tracking-luxe uppercase mb-8"
          >
            <span className="h-px w-10 bg-terracotta" />
            {cafe.established} · {cafe.city}
          </motion.p>

          <h1 className="font-display text-espresso leading-[0.92] text-6xl sm:text-7xl lg:text-[6.5rem]">
            {["A café,", "distilled to", "its finest"].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span
                className="block italic text-terracotta"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                hour.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 max-w-md text-espresso/70 text-lg leading-relaxed"
          >
            Small-batch roasting, hand-poured coffee and slow mornings on Henry
            Street. A quiet luxury, one cup at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#menu"
              className="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-4 text-[13px] tracking-[0.18em] uppercase transition-colors duration-400"
            >
              Explore the Menu
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 text-espresso/70 hover:text-terracotta text-[13px] tracking-[0.18em] uppercase transition-colors"
            >
              Our Story
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[62vh] lg:h-[80vh] overflow-hidden rounded-[2px]"
          >
            <motion.img
              src={heroImage}
              alt="Babylon cafe interior"
              style={{ y: imgY, scale: imgScale }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-espresso/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute -bottom-6 -left-6 bg-olive-dark text-cream w-36 h-36 rounded-full flex flex-col items-center justify-center text-center hidden sm:flex"
          >
            <span className="font-display text-3xl leading-none">{cafe.rating}</span>
            <span className="text-[10px] tracking-[0.2em] uppercase mt-1 opacity-80">
              {cafe.reviewsCount} reviews
            </span>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-espresso/50 hidden lg:flex"
      >
        <span className="text-[10px] tracking-luxe uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
