"use client";
import React from "react";
import { motion } from "framer-motion";
import "animate.css";
import ApplicationFormDialog from "./ApplicationFormDialog";
import { Button } from "./ui/button";


export const Application: React.FC = () => {
  return (
    <div
      className="application w-full overflow-hidden"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <section className="relative py-24 px-6 lg:px-20">
        {/* subtle patterned background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-10 border border-[var(--application-border)] rounded-3xl shadow-2xl animate__animated animate__fadeInUp"
          style={{ background: "var(--application-bg)", color: "var(--text)" }}
        >
          {/* Heading */}
          <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-3">
            Apply Now
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Hustle & Grind Application
          </h1>

          {/* Description */}
          <div className="mb-10 space-y-6 text-lg leading-relaxed text-[var(--muted)]">
            <p>
              <span className="font-bold text-[var(--text)]">
                Hustle & Grind Hackerhouse
              </span>{" "}
              is where post-revenue founders scale smarter, sharpen strategy, and
              unlock growth. Over 2 weeks and 4 intensive sessions, you’ll
              collaborate with peers, gain mentorship, and build investor-ready
              clarity.
            </p>
            <p>
              We’re looking for{" "}
              <span className="font-semibold text-[var(--text)]">
                CEOs generating at least $50,000 in annual revenue
              </span>{" "}
              who are ready to accelerate growth, dominate markets, and refine
              their execution.
            </p>
            <p>
              If you’re already building and earning, this is your next step. 🚀
            </p>
          </div>

          {/* Application Dialog */}
          <div className="w-full mx-auto rounded-xl overflow-hidden">
            <ApplicationFormDialog>
              <Button
                  style={{
                    background: "var(--text)",
                    color: "var(--bg)",
                  }}
                  className="rounded-full px-8 py-4 font-semibold tracking-wide hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">Apply Now →</span>
                </Button>
            </ApplicationFormDialog>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
