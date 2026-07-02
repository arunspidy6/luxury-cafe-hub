import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { ambianceImages, ambianceVideo } from "../mock/mock";
import { fadeUp, stagger, viewport } from "./anim";

export default function Ambiance() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <section id="ambiance" className="bg-sage-dark py-24 lg:py-36 text-cream overflow-hidden">
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
              className="font-display text-5xl lg:text-6xl leading-[1.02] mb-8"
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

          {/* Media — video is the hero */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <div className="relative rounded-[2px] overflow-hidden bg-espresso flex items-center justify-center">
              <video
                ref={videoRef}
                src={ambianceVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-auto max-h-[74vh] object-contain block"
              />
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-cream/90 hover:bg-cream text-espresso flex items-center justify-center transition-colors shadow-lg"
                aria-label={muted ? "Unmute video" : "Mute video"}
              >
                {muted ? <VolumeX size={19} /> : <Volume2 size={19} />}
              </button>
              <span className="absolute top-4 left-4 flex items-center gap-2 bg-espresso/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] tracking-[0.16em] uppercase text-cream/90">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-light animate-pulse" />
                Now Pouring
              </span>
            </div>

            {/* Supporting photo strip */}
            <div className="grid grid-cols-4 gap-3 mt-3">
              {ambianceImages.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-[2px] group">
                  <img
                    src={src}
                    alt={`Babylon interior ${i + 1}`}
                    loading="lazy"
                    className="w-full h-24 lg:h-28 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
