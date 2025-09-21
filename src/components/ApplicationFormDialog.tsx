"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ApplicationFormDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    industry: "",
    annualRevenue: "",
    teamSize: "",
    pitchDeck: null,
    reason: "",
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setForm((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
    }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parseInt(form.annualRevenue || "0") < 50000) {
        setError("We are looking for startups with at least $50,000 annual revenue.");
        return;
    }

    setError("");
    console.log("Form submitted:", form);
    setIsOpen(false);
    };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-white rounded-xl shadow-lg hover:opacity-90 transition duration-200 animate__animated animate__pulse"
        style={{ background: "var(--application-bg)", color: "var(--text)" }}
      >
        Apply Now
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            <Dialog.Panel
              className="application application-item mx-auto rounded-2xl p-6 md:p-8 shadow-2xl relative"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--text)] transition"
              >
                <X className="w-6 h-6" />
              </button>

              <Dialog.Title className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Hustle & Grind Application
              </Dialog.Title>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Founder Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
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
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
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
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Industry</label>
                    <select
                      name="industry"
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
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
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Team Size</label>
                    <input
                      type="number"
                      name="teamSize"
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
                    />
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-medium mb-1">Why Hustle & Grind?</label>
                  <textarea
                    name="reason"
                    rows={3}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
                  />
                </div>

                {/* Upload Pitch Deck */}
                <div>
                  <label className="block text-sm font-medium mb-1">Pitch Deck (PDF)</label>
                  <input
                    type="file"
                    name="pitchDeck"
                    accept="application/pdf"
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-[var(--application-border)] bg-[var(--application-bg)]"
                  />
                </div>

                {/* Error */}
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                {/* Submit */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2 rounded-lg border border-[var(--application-border)] hover:bg-[var(--benefit-hover)] transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 shadow-md transition"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </motion.div>
        </div>
      </Dialog>
    </>
  );
}
