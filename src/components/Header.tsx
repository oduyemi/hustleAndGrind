"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      height: scrolled ? 64 : 96, // 64px = h-16, 96px = h-24
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  }, [scrolled, controls]);

  return (
    <motion.header
      animate={controls}
      className="w-full sticky top-0 z-50 bg-gray-500/10 blur-[120px]backdrop-blur-md border-b border-white/10 shadow-sm"
    >
      <div className="max-w-7xl mx-auto h-full flex justify-center items-center px-4 transition-all duration-300 ease-in-out">
        <Image
          src="/images/logo/stacked.png"
          alt="Site Logo"
          width={scrolled ? 120 : 160}
          height={scrolled ? 40 : 60}
          className="transition-all duration-300 ease-in-out object-contain"
          priority
        />
      </div>
    </motion.header>
  );
};
