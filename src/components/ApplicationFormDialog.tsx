"use client";
import { useState, ReactNode } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

interface ApplicationFormDialogProps {
  children: ReactNode; // external trigger (button, link, etc.)
}

export default function ApplicationFormDialog({ children }: ApplicationFormDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const annualRevenue = parseInt((formData.get("annualRevenue") as string) || "0");

    if (annualRevenue < 50000) {
      setError("We are looking for startups with at least $50,000 annual revenue.");
      setStatus("idle");
      return;
    }
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mwprorod", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const closeDialog = () => {
    setIsOpen(false);
    setStatus("idle");
    setError("");
  };

  return (
    <>
      {/* External trigger (your button) */}
      <span onClick={() => setIsOpen(true)} className="inline-block cursor-pointer">
        {children}
      </span>

      <Dialog open={isOpen} onClose={closeDialog} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            <Dialog.Panel className="application application-item mx-auto rounded-2xl p-6 md:p-8 shadow-2xl relative">
              {/* Close button */}
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--text)] transition"
              >
                <X className="w-6 h-6" />
              </button>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-10">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <h2 className="text-2xl font-bold">Thank you!</h2>
                  <p className="text-[var(--muted)]">
                    Your application has been submitted successfully. We’ll get back to you soon.
                  </p>
                  <button
                    onClick={closeDialog}
                    className="mt-4 px-6 py-2 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 shadow-md transition"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <Dialog.Title className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Hustle & Grind Application
                  </Dialog.Title>

                  {/* Form */}
                  <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
                    {/* Founder Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                          required
                        />
                      </div>
                    </div>

                    {/* Website & Industry */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Website</label>
                        <input
                          type="url"
                          name="website"
                          className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Industry</label>
                        <select
                          name="industry"
                          className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                        >
                          <option value="">Select</option>
                          <option value="fintech">Fintech</option>
                          <option value="healthtech">HealthTech</option>
                          <option value="edtech">EdTech</option>
                          <option value="logistics">Logistics</option>
                          <option value="saas">SaaS</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Traction */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Annual Revenue (USD)</label>
                        <input
                          type="number"
                          name="annualRevenue"
                          className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Team Size</label>
                        <input
                          type="number"
                          name="teamSize"
                          className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                        />
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Why Hustle & Grind?</label>
                      <textarea
                        name="reason"
                        rows={3}
                        className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                      />
                    </div>

                    {/* Upload Pitch Deck */}
                    {/* <div>
                      <label className="block text-sm font-medium mb-1">Pitch Deck (PDF)</label>
                      <input
                        type="file"
                        name="pitchDeck"
                        accept="application/pdf"
                        className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                      />
                    </div> */}

                    {/* Error */}
                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                    {status === "error" && (
                      <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                    )}

                    {/* Submit */}
                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={closeDialog}
                        className="px-5 py-2 rounded-lg border border-[var(--application-border)] hover:bg-[var(--benefit-hover)] transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="px-6 py-2 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 shadow-md transition disabled:opacity-50"
                      >
                        {status === "submitting" ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </Dialog.Panel>
          </motion.div>
        </div>
      </Dialog>
    </>
  );
}
