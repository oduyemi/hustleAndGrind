"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Scale Without Limits.",
    description:
      "You’ve built. You’ve proven. Now it’s time to expand your edge. Hustle & Grind Hackerhouse is where post-revenue CEOs sharpen strategy, unlock growth, and dominate markets.",
  },
  {
    title: "Next-Level CEOs. Next-Level Growth.",
    description:
      "This isn’t about survival — it’s about scale. Join Hustle & Grind Hackerhouse to refine your playbook, forge powerful alliances, and push your company into market leadership.",
  },
  {
    title: "Beyond Traction. Into Domination.",
    description:
      "You already have momentum. We help you multiply it. Hustle & Grind Hackerhouse is built for ambitious CEOs ready to raise smarter, grow faster, and break through ceilings.",
  },
  {
    title: "From Growth to Greatness.",
    description:
      "Hustle & Grind Hackerhouse partners with CEOs who’ve proven the model and are hungry for market leadership. Two weeks. Four days. Infinite growth.",
  },
];

export const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // ✅ prevents SSR mismatch

  const heroSrc =
    resolvedTheme === "dark"
      ? "/images/hero1.png"
      : "/images/hero1_white.png";

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-20 py-24 sm:py-32 md:py-40 overflow-hidden isolate bg-[var(--bg)] text-[var(--text)]">
      {/* Background glows + pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.jpg')] bg-repeat opacity-5 mix-blend-overlay" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-fuchsia-500/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
        <svg
          className="absolute top-20 right-1/4 w-[300px] h-[300px] opacity-20"
          viewBox="0 0 300 300"
          fill="none"
        >
          <circle
            cx="150"
            cy="150"
            r="140"
            stroke="var(--text)"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">
        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <Badge
            className="px-4 py-1.5 text-sm uppercase tracking-wide font-semibold rounded-full backdrop-blur-sm"
            style={{
              background: "var(--benefit-bg)",
              color: "var(--benefit-text)",
              border: `1px solid var(--application-border)`,
            }}
          >
            Now Accepting
          </Badge>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
              className="space-y-6"
            >
              <div className="relative inline-block">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, var(--text), var(--text))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {slide.title}
                </h1>
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 400 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5,15 Q150,0 395,15"
                    stroke="var(--text)"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <p
                className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Quick facts */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-sm">
            {[
              { icon: <Check />, text: "2-Week Intensive" },
              { icon: <Clock />, text: "4 Days" },
              { icon: <TrendingUp />, text: "Infinite Growth" },
            ].map(({ icon, text }) => (
              <motion.div
                key={text}
                className="flex items-center gap-3 hover:translate-y-[-2px] transition-transform"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shadow-inner"
                  style={{ background: "var(--benefit-hover)" }}
                >
                  {React.cloneElement(icon, {
                    className: "w-3.5 h-3.5",
                    stroke: "var(--text)",
                  })}
                </div>
                <span className="font-medium" style={{ color: "var(--text)" }}>
                  {text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          {currentSlide === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Button
                style={{
                  background: "var(--text)",
                  color: "var(--bg)",
                }}
                className="rounded-full px-8 py-4 font-semibold tracking-wide hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">Apply Now →</span>
              </Button>
            </motion.div>
          )}
        </div>

        {/* RIGHT: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-lg sm:max-w-xl lg:max-w-none relative group"
        >
          <div className="relative">
            <Image
              key={heroSrc} // forces re-render when src changes
              src={heroSrc}
              alt="Hero"
              width={600}
              height={400}
              className="transition-opacity duration-500 opacity-100"
              priority
            />
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 400"
              preserveAspectRatio="none"
            >
              <path
                d="M5,20 Q300,0 595,20 M595,20 Q580,200 595,380 M595,380 Q300,400 5,380 M5,380 Q20,200 5,20 Z"
                fill="none"
                stroke="var(--text)"
                strokeWidth="2"
                strokeDasharray="6 6"
                opacity="0.4"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
