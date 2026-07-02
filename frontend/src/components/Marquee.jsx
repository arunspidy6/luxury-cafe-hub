import React from "react";
import { marqueeWords } from "../mock/mock";

export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="bg-sage-dark py-5 overflow-hidden border-y border-cream/10">
      <div className="marquee-track flex whitespace-nowrap w-max">
        {row.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display italic text-cream/90 text-2xl md:text-3xl px-8">
              {w}
            </span>
            <span className="text-terracotta text-xl">✵</span>
          </span>
        ))}
      </div>
    </div>
  );
}
