"use client";
import React from "react";
import { motion } from "framer-motion";

export const VideoEmbed: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 lg:px-16 " style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Behind the Hustle & Grind
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          A quick glimpse into what makes Hustle & Grind Accelerator one of the
          most transformative programs for serious founders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-white/10"
        >
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/1AwnwEOWdi4?rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3"
            title="Hustle & Grind Accelerator Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
