"use client";
import React from "react";
import { motion } from "framer-motion";
import "animate.css";

export const Application: React.FC = () => {
  return (
    <div className="application w-full bg-black text-white overflow-hidden">
      <section className="relative py-24 px-6 lg:px-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-10 bg-white border border-zinc-800 rounded-3xl shadow-2xl animate__animated animate__fadeInUp"
        >
          <p className="text-sm uppercase tracking-widest text-black/60 mb-3">
            Apply Now
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-zinc-800 mb-8 leading-tight tracking-tight">
            Hustle & Grind Application
          </h1>
          <div className="w-full h-[700px] mx-auto rounded-xl overflow-hidden">
            <iframe
              src="https://tally.so/r/3jrBQY?transparentBackground=1"
              loading="lazy"
              className="w-full h-full border-0"
              allowTransparency
              title="Hustle & Grind Application"
            ></iframe>
          </div>
        </motion.div>
      </section>      
    </div>
  );
};
