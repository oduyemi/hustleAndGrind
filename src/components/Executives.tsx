"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/images/brands/microsoft.png",
  "/images/brands/paga.png",
  "/images/brands/breega.png",
  "/images/brands/seamlesshr.png",
  "/images/brands/nomba.png",
  "/images/brands/mastercard.png",
  "/images/brands/moniepoint.png",
];

export default function Executives() {
  return (
    <section className="w-full py-12" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Our speakers are CEOs and Top Executives from
        </h2>

        <div className="overflow-hidden relative">
          {/* Motion container */}
          <motion.div
            className="flex gap-12"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-40 h-20 relative grayscale-0 hover:grayscale transition"
              >
                <Image
                  src={logo}
                  alt={`brand-${idx}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
