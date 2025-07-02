"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Lightbulb, Handshake } from "lucide-react";
import "animate.css";

export const Core: React.FC = () => {
  const gainItems = [
    {
      icon: Rocket,
      title: "Accelerated Growth",
      description:
        "A 4-week immersive sprint to sharpen your business model and growth strategy.",
    },
    {
      icon: Lightbulb,
      title: "Expert Guidance",
      description:
        "Work with seasoned CEOs and operators with proven track records.",
    },
    {
      icon: Handshake,
      title: "Supportive Network",
      description:
        "Join a vibrant community of ambitious CEOs, mentors, and investors.",
    },
  ];

  return (
    <div className="application w-full bg-black text-white overflow-hidden">
        <section className="relative py-24 px-6 lg:px-20 text-white">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            What You&apos;ll Gain
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {gainItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300 group relative overflow-hidden"
              >
                <div className="mb-5 p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-full w-fit transition-all group-hover:scale-110">
                  {React.createElement(item.icon, {
                    className: "w-6 h-6 text-white",
                  })}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};