"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import "animate.css";

const slides = [
  {
    title: "Accelerate What You've Started.",
    description:
      "Already building. Already earning. Now it's time to refine your product, grow faster, and raise smarter. Hustle & Grind is for serious founders with serious traction.",
  },
  {
    title: "For Founders Who Mean Business.",
    description:
      "Post-revenue? Pre-seed? You're in the right place. Hustle & Grind delivers a month of intensive growth, mentorship, and fundraising strategy in Lagos.",
  },
  {
    title: "Built with Hustle. Refined for Growth.",
    description:
      "This isn't day one. It's the next level. Hustle & Grind Accelerator is for startups with revenue and the ambition to raise, grow, and break through.",
  },
];

export const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full mx-auto text-white px-6 sm:px-12 md:px-20 py-28 lg:py-36 overflow-hidden isolate border-b border-white/5">
    {/* Background Glow + Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5 mix-blend-overlay" />
            <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-purple-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/5 rounded-full blur-[180px] opacity-5 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 px-4 sm:px-8 md:px-10 lg:px-14 xl:px-20">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left space-y-6 moveright">
            <Badge className="bg-white/10 text-white/90 mb-6 px-4 py-1.5 text-sm uppercase tracking-wide font-semibold rounded-full border border-white/20 backdrop-blur-md shadow-md">
                Now Accepting
            </Badge>

            {/* Title + Description */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-5"
            >
                <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight transition-opacity duration-500 ${
                    animating ? "opacity-0" : "opacity-100"
                }`}
                >
                {slide.title}
                </h1>
                <p
                className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 transition-opacity duration-500 ${
                    animating ? "opacity-0" : "opacity-100"
                }`}
                >
                {slide.description}
                </p>
            </motion.div>

            {/* Trust Indicators */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 text-sm text-gray-400">
                {[
                { icon: <Check />, text: "10 Elite Teams Only" },
                { icon: <Clock />, text: "4-Week Intensive" },
                { icon: <TrendingUp />, text: "VC-Backed Curriculum" },
                ].map(({ icon, text }, i) => (
                <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                >
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shadow-inner">
                    {React.cloneElement(icon, {
                        className: "w-3.5 h-3.5 text-white",
                    })}
                    </div>
                    <span>{text}</span>
                </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            {currentSlide === 0 && (
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-14"
                >
                <Button className="rounded-full px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                    <span className="z-10 relative">&emsp;Apply Now&emsp;</span>
                    <span className="absolute right-4 z-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </Button>
                </motion.div>
            )}
            </div>

            {/* Right Image */}
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative group w-full"
            >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:40px_40px] opacity-5 mix-blend-overlay" />
            </div>
            <Image
                src="/images/hero.png"
                alt="Hero"
                width={600}
                height={400}
                className="w-full h-auto drop-shadow-2xl grayscale contrast-125 transition duration-700 group-hover:scale-[1.02] group-hover:contrast-150 rounded-xl z-10 relative"
                priority
            />
            </motion.div>
        </div>
    </section>
  );
};