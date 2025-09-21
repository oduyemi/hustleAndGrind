"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

type Testimonial = {
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Yagazie Eguare, CEO Gazmadu",
    text: "Transformative, It would be great to see hustle & grind move from here into a CEO retreat.",
  },
  {
    name: "Chude Osiegbu, CEO Venco",
    text: "It was a fantastic experience. I enjoyed sharing experiences with other founders and learning from experienced founders who are building at a scale that I aspire to.",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState<number>(0);

  // Autoplay every 7s
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background text-foreground py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
  {/* Header */}
  <div className="max-w-4xl mx-auto text-center mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold tracking-tight"
    >
      What People Are Saying
    </motion.h2>
    <p className="mt-2 text-muted-foreground text-lg">
      Honest words from founders who’ve experienced it.
    </p>
  </div>

  {/* Testimonials */}
  <div className="relative max-w-3xl mx-auto">
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="relative p-8 bg-card border rounded-2xl shadow-xl overflow-hidden">
          {/* Sketchy border overlay */}
          <svg
            className="absolute -top-2 -left-2 w-full h-full pointer-events-none"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
          >
            <path
              d="M2,10 Q200,0 398,10 M398,10 Q390,100 398,190 M398,190 Q200,200 2,190 M2,190 Q10,100 2,10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity="0.2"
            />
          </svg>

          <CardContent className="relative z-10 flex flex-col items-center text-center">
            <Quote className="w-10 h-10 text-muted-foreground mb-4" />
            <p className="text-foreground italic leading-relaxed mb-6 text-lg">
              “{testimonials[index].text}”
            </p>
            <span className="block text-sm font-semibold tracking-wide">
              — {testimonials[index].name}
            </span>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>

    {/* Dots navigation */}
    <div className="flex justify-center mt-6 space-x-2">
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-3 h-3 rounded-full transition-transform duration-300 ${
            i === index
              ? "bg-primary scale-110"
              : "bg-muted-foreground hover:scale-110"
          }`}
        />
      ))}
    </div>
  </div>
</section>

  );
};
