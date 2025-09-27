"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import "animate.css";

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Scale with Confidence",
      desc:
        "Tap into expert insight to de-risk decisions, refine your scale-up playbook, and push past growth ceilings with clarity and speed.",
      image: "images/icons/a.png",
    },
    {
      title: "Product-Market Fit Support",
      desc:
        "Refine your product to meet real customer needs with hands-on feedback, testing, and validation strategies.",
      image: "images/icons/b.png",
    },
    {
      title: "Growth Strategy Coaching",
      desc:
        "Build sustainable traction with tailored growth playbooks, marketing insights, and execution support.",
      image: "images/icons/c.png",
    },
    {
      title: "Fundraising Readiness",
      desc:
        "Prepare for investment with pitch support, fundraising strategy, and investor match-making.",
      image: "images/icons/d.png",
    },
    {
      title: "Strategic Business Refinement",
      desc:
        "Get support to sharpen your business model, pricing strategy, and go-to-market approach for long-term success.",
      image: "images/icons/e.png",
    },
    {
      title: "Access to Investor Network",
      desc:
        "Connect with VCs, angels, and institutional funders through curated introductions and Demo Day visibility.",
      image: "images/icons/f.png",
    },
    {
      title: "CEO Community",
      desc:
        "Collaborate with a driven cohort of fellow CEOs. Share ideas, build connections, and grow together.",
      image: "images/icons/g.png",
    },
    {
      title: "Visibility & Media Exposure",
      desc:
        "Get featured across press, partner channels, and demo day showcases. We help amplify your story to attract customers, investors, and collaborators.",
      image: "images/icons/h.png",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="benefits w-full py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="uppercase text-xs tracking-widest text-zinc-500 mb-3 animate__animated animate__fadeInDown">
            What&apos;s in it for my team?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate__animated animate__fadeInUp">
            Program Focus & Benefits
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div variants={cardVariants} key={idx} className="h-full flex">
              <Card
                className={`benefits-item h-full flex flex-col sm:flex-row group relative bg-zinc-900 transition-colors duration-300 border border-zinc-800 hover:border-white/20 rounded-3xl p-6 gap-6 overflow-hidden shadow-md hover:shadow-2xl animate__animated animate__fadeInUp ${
                  idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image/Icon */}
                <div className="flex-shrink-0 flex items-center justify-center sm:w-1/3">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="rounded-xl w-28 h-28 sm:w-full sm:h-44 object-contain grayscale group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <CardContent className="benefits-content w-full sm:w-2/3 flex-1 space-y-3 transition-colors duration-300 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                    {benefit.desc}
                  </p>
                </CardContent>

                {/* Overlay Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
