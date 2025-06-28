"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Lightbulb, Handshake } from "lucide-react";
import "animate.css";

export const Application: React.FC = () => {
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
        "Work with seasoned founders and operators with proven track records.",
    },
    {
      icon: Handshake,
      title: "Supportive Network",
      description:
        "Join a vibrant community of ambitious founders, mentors, and investors.",
    },
  ];

  return (
    <div className="application w-full bg-black text-white overflow-hidden">
      {/* Selection Criteria */}
      <section className="relative py-24 px-6 lg:px-20 bg-gradient-to-br from-white via-zinc-100 to-white text-zinc-900">
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
            * Check out seasonal discounts for the best offers.
          </p>
        </motion.div>
      </section>

      {/* Application Form */}
      <section className="relative py-24 px-6 lg:px-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-10 bg-transparent border border-zinc-800 rounded-3xl shadow-2xl animate__animated animate__fadeInUp"
        >
          <p className="text-sm uppercase tracking-widest text-white/60 mb-3">
            Apply Now
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
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

      {/* What You'll Gain */}
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
            What You'll Gain
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
