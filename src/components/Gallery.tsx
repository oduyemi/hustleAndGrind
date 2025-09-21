"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  "DSC00004","DSC00011","DSC00012","DSC00017","DSC00019","DSC00022",
  "DSC00025","DSC00030","DSC00036","DSC00040","DSC00045","DSC00049",
  "DSC00056","DSC00059","DSC00065","DSC00085","DSC00087","DSC00096",
  "DSC00381","DSC00385","DSC00387","DSC00406","DSC00413","DSC00418",
  "DSC00424","DSC00430","DSC00437","DSC00455","DSC09858","DSC09869",
  "DSC09874","DSC09876","DSC09897","DSC09900","DSC09905","DSC09910",
  "DSC09920","DSC09932","DSC09946","DSC09948","DSC09957","DSC09960",
  "DSC09963","DSC09980","DSC09985","DSC09994",
].map((name) => `/images/gallery/${name}.jpg`);

const IMAGES_PER_PAGE = 12;

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const currentImages = galleryImages.slice(
    page * IMAGES_PER_PAGE,
    (page + 1) * IMAGES_PER_PAGE
  );

  const nextImage = () =>
    setSelected((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () =>
    setSelected((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected !== null) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") setSelected(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <section className="w-full py-20 relative bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Gallery{" "}
            <span className="bg-gradient-to-r from-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Previous
            </span>{" "}
            Cohort
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[var(--muted)]">
            A glimpse into the energy, creativity, and community spirit of our past program.
          </p>
        </div>

        {/* Grid Layout with pagination */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[200px] md:auto-rows-[280px]"
          >
            {currentImages.map((src, idx) => {
              const globalIndex = page * IMAGES_PER_PAGE + idx;
              return (
                <motion.div
                  key={src}
                  whileHover={{ scale: 1.05 }}
                  className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group 
                    ${idx % 7 === 0 ? "col-span-2 row-span-2" : ""} 
                    ${idx % 11 === 0 ? "col-span-2" : ""}`}
                  onClick={() => setSelected(globalIndex)}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${globalIndex}`}
                    fill
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           (max-width: 1536px) 33vw,
                           20vw"
                    quality={90}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white w-8 h-8" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination controls */}
        <div className="flex justify-center items-center mt-10 gap-6">
          <button
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition 
              ${page === 0
                ? "bg-gray-200 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700 text-white shadow-md hover:shadow-lg"
              }`}
          >
            Previous
          </button>
          <span className="text-gray-700 dark:text-gray-300 text-sm">
            Page {page + 1} of {totalPages}
          </span>
          <button
            disabled={page === totalPages - 1}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition 
              ${page === totalPages - 1
                ? "bg-gray-200 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700 text-white shadow-md hover:shadow-lg"
              }`}
          >
            Next
          </button>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full flex items-center justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
                >
                  <X size={32} />
                </button>

                {/* Prev button */}
                <button
                  onClick={prevImage}
                  className="absolute left-0 p-3 text-white hover:text-gray-300"
                >
                  <ChevronLeft size={40} />
                </button>

                {/* Image */}
                <Image
                  src={galleryImages[selected]}
                  alt="Selected"
                  width={1600}
                  height={1067}
                  quality={100}
                  unoptimized
                  className="rounded-xl object-contain w-full max-h-[80vh] shadow-2xl"
                />

                {/* Next button */}
                <button
                  onClick={nextImage}
                  className="absolute right-0 p-3 text-white hover:text-gray-300"
                >
                  <ChevronRight size={40} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
