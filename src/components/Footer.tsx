"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "animate.css";

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="w-full text-white py-6 flex flex-col items-center justify-center animate__animated animate__fadeInUp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="flex items-center space-x-2 text-sm sm:text-base">
        <Heart size={16} className="text-red-500 animate-pulse" />
        <span>Hustle &amp; Grind by Adewale | All Rights Reserved</span>
      </div>
    </motion.footer>
  );
};

