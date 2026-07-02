import React from "react";
import { cafe } from "../mock/mock";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <p className="font-display text-5xl leading-none">Babylon</p>
            <p className="text-[10px] tracking-luxe uppercase text-terracotta-light mt-2">
              {cafe.city}
            </p>
            <p className="text-cream/60 mt-6 max-w-xs leading-relaxed">
              {cafe.tagline}
            </p>
          </div>

          <div className="md:text-center">
            <p className="text-[11px] tracking-[0.16em] uppercase text-cream/50 mb-4">Explore</p>
            <ul className="space-y-2">
              {["Story", "Signatures", "Ambiance", "Visit"].map((l) => (
                <li key={l}>
                  <a href={`/#${l.toLowerCase()}`} className="text-cream/75 hover:text-terracotta-light transition-colors">
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <a href="/menu" className="text-cream/75 hover:text-terracotta-light transition-colors">
                  Order / Menu
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <p className="text-[11px] tracking-[0.16em] uppercase text-cream/50 mb-4">Say Hello</p>
            <p className="text-cream/75">{cafe.address}</p>
            <p className="text-cream/75 mt-2">{cafe.email}</p>
            <p className="text-cream/75">{cafe.phone}</p>
            <div className="flex md:justify-end gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="w-10 h-10 border border-cream/25 rounded-full flex items-center justify-center hover:bg-terracotta hover:border-terracotta transition-colors duration-400"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between gap-3 text-cream/45 text-sm">
          <p>© {new Date().getFullYear()} Babylon Coffee. Every mug is a project.</p>
          <p>Made slowly in Limerick, Ireland.</p>
        </div>
      </div>
    </footer>
  );
}
