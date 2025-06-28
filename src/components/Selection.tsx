"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Lightbulb, Handshake } from "lucide-react";
import "animate.css";

export const Selection: React.FC = () => {
  return (
    <div className="application w-full bg-black text-white overflow-hidden">
      {/* Selection Criteria */}
      <section className="relative py-24 px-6 lg:px-20 bg-gradient-to-br from-black via-zinc-100 to-black text-zinc-900">
        <div className="absolute top-0 left-0 w-80 h-80 bg-pink-400/10 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 blur-[100px] rounded-full -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-10 bg-white border border-zinc-200 rounded-3xl shadow-xl animate__animated animate__fadeInUp"
        >
          <h2 className="text-3xl font-bold mb-6">Selection Criteria</h2>
          <ul className="space-y-4 text-lg text-zinc-700 list-disc list-inside leading-relaxed">
            <li>Post-revenue tech companies with traction and growth potential</li>
            <li>Strong team and vision</li>
            <li>Willingness to learn, adapt, and hustle</li>
          </ul>
          <p className="mt-6 text-sm text-zinc-400 italic">
            Wisdom is like a baobab tree; no one individual can embrace it. <br/> — Ghanaian Proverb
          </p>
        </motion.div>
      </section>
    </div>
  );
};