import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ArrowUpRight } from "lucide-react";
import { cafe } from "../mock/mock";
import { fadeUp, stagger, viewport } from "./anim";

export default function Visit() {
  return (
    <section id="visit" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
            <motion.p variants={fadeUp} className="text-terracotta text-[12px] tracking-luxe uppercase mb-6">
              Visit Babylon
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-espresso text-5xl lg:text-6xl leading-[1.02] mb-8">
              Come sit with us
            </motion.h2>
            <motion.p variants={fadeUp} className="text-espresso/70 text-lg leading-relaxed mb-10 max-w-md">
              No reservations, no fuss. Just push the door on Henry Street, find
              a quiet corner and let the morning unfold. We keep a table for the
              unhurried.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-6 mb-10">
              <div className="flex gap-4">
                <MapPin className="text-terracotta shrink-0 mt-1" size={22} />
                <div>
                  <p className="text-[11px] tracking-[0.16em] uppercase text-espresso/50 mb-1">Find us</p>
                  <p className="text-espresso text-lg">{cafe.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-terracotta shrink-0 mt-1" size={22} />
                <div>
                  <p className="text-[11px] tracking-[0.16em] uppercase text-espresso/50 mb-1">Call</p>
                  <p className="text-espresso text-lg">{cafe.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-terracotta shrink-0 mt-1" size={22} />
                <div>
                  <p className="text-[11px] tracking-[0.16em] uppercase text-espresso/50 mb-1">Email</p>
                  <p className="text-espresso text-lg">{cafe.email}</p>
                </div>
              </div>
            </motion.div>

            <motion.a
              variants={fadeUp}
              href={cafe.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-4 text-[13px] tracking-[0.18em] uppercase transition-colors duration-400"
            >
              Get Directions
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

          {/* Opening hours poster + map */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            {/* Poster-style hours card */}
            <div className="relative rounded-[2px] overflow-hidden">
              <img
                src={cafe.hoursImage}
                alt="Babylon interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-espresso/75" />
              <div className="absolute inset-0 ring-1 ring-inset ring-cream/15 m-3 rounded-[2px] pointer-events-none" />

              <div className="relative p-8 lg:p-10 text-cream">
                <div className="flex items-center justify-between mb-8">
                  <span className="flex items-center gap-2 text-[11px] tracking-luxe uppercase text-cream/80">
                    <Clock size={15} className="text-terracotta-light" />
                    Opening Hours
                  </span>
                  <span className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-sage-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-light animate-pulse" />
                    Open Daily
                  </span>
                </div>

                <p className="font-display text-4xl lg:text-5xl leading-[1.05] mb-8">
                  Doors open<br />
                  <span className="italic text-terracotta-light">from 7:30 AM</span>
                </p>

                <ul className="space-y-0.5">
                  {cafe.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-baseline gap-3 py-2 border-b border-cream/10 last:border-0"
                    >
                      <span className="text-cream/85 text-lg font-display w-28">{h.day}</span>
                      <span className="flex-1 border-b border-dotted border-cream/20 translate-y-[-3px]" />
                      <span className="text-cream/70 tabular-nums">{h.time}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-cream/60 text-sm">
                  Full menu served all day · Kitchen closes 30 minutes before close.
                </p>
              </div>
            </div>

            {/* Map */}
            <a
              href={cafe.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block overflow-hidden rounded-[2px] border border-espresso/15 group"
            >
              <iframe
                title="Babylon location"
                src="https://www.google.com/maps?q=19+Henry+St,+Limerick,+Ireland&output=embed"
                className="w-full h-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
