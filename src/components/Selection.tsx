"use client";
import React from "react";
import { motion } from "framer-motion";

export const Selection: React.FC = () => {
  const criteria = [
    "Post-revenue companies with traction and growth potential",
    "Strong team and vision",
    "Willingness to learn, adapt, and hustle",
  ];

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-pink-300/20 to-pink-100/10 blur-[140px] -z-10"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-300/20 to-blue-100/10 blur-[140px] -z-10"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Frosted card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto p-12 sm:p-16 bg-white/90 border border-black/10 dark:border-white/20 rounded-3xl shadow-sm backdrop-blur-xl flex flex-col gap-10" style={{ background: "var(--bg)", color: "var(--text)" }}
      >
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-900 dark:from-white dark:via-\-200 dark:to-zinc-100" style={{ color: "var(--text)" }}>
          Selection Criteria
        </h2>

        {/* Criteria list */}
        <ul className="space-y-6 text-lg sm:text-xl text-zinc-900 dark:text-zinc-100 list-disc list-inside leading-relaxed" style={{ color: "var(--text)" }}>
          {criteria.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.03, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer relative hover:text-gray-800 dark:hover:text-white"
              style={{ color: "var(--text)" }}
            >
              {item}
              <motion.span
                layoutId={`underline-${idx}`}
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-black dark:bg-white opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Proverb */}
        <p className="mt-4 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 italic text-center lg:text-left">
          Wisdom is like a baobab tree; no one individual can embrace it. <br /> — Ghanaian Proverb
        </p>

        {/* CTA button */}
        <motion.div
          className="mt-6 flex justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button className="px-10 py-4 font-bold rounded-full bg-black text-white dark:bg-white dark:text-black shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Apply Now →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
