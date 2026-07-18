import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Phone, Instagram, Facebook, Linkedin, Globe } from "lucide-react";
import { Music2 } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { staggerParent, fadeUp, viewportOnce } from "@/utils/animations";

const inquiryTypes = [
  "General Inquiry",
  "Partnership",
  "Volunteering",
  "Sponsorship",
  "Media & Press",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/meeyevoa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiryType: formData.inquiryType,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", inquiryType: "", message: "" });
      }, 5000);
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
    if (errors.inquiryType) {
      setErrors((prev) => ({ ...prev, inquiryType: "" }));
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-12 md:py-20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-10 top-10 h-32 w-32 rounded-full border-2 border-gold/20 animate-drift" />
        <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl animate-floaty" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold/15"
          >
            <Mail className="h-5 w-5 text-gold" />
          </motion.div>
          <h2
            className="text-display font-bold leading-[1.05] text-ink"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}
          >
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink/70 md:text-base">
            Have questions or ideas? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4 md:mt-10"
        >
          <a href="mailto:revampinitiatives@gmail.com" className="flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-2 text-sm text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <Mail size={16} className="text-gold" />
            revampinitiatives@gmail.com
          </a>
          <a href="tel:08130514772" className="flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-2 text-sm text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <Phone size={16} className="text-gold" />
            08130514772
          </a>
          <a href="https://wa.me/2348130514772" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-2 text-sm text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <WhatsAppIcon size={16} className="text-gold" />
            08130514772
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 flex justify-center gap-3"
        >
          <a href="https://instagram.com/therevamp_initiatives" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-white text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink">
            <Instagram size={18} />
          </a>
          <a href="https://facebook.com/TheRevampInitiatives" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-white text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink">
            <Facebook size={18} />
          </a>
          <a href="https://tiktok.com/@therevampinitiatives" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-white text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink">
            <Music2 size={18} />
          </a>
          <a href="https://linkedin.com/company/revamp-initiatives" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-white text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink">
            <Linkedin size={18} />
          </a>
          <a href="https://www.therevampinitiatives.org" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-white text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink">
            <Globe size={18} />
          </a>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 rounded-2xl bg-white p-5 shadow-lg md:mt-10 md:p-8"
          style={{ boxShadow: "0 20px 60px -20px rgba(232, 168, 56, 0.15)" }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100"
              >
                <CheckCircle className="h-7 w-7 text-green-600" />
              </motion.div>
              <h3 className="text-display text-xl font-bold text-ink">Message Sent!</h3>
              <p className="mt-2 text-sm text-ink/70">
                Thank you for reaching out. We'll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2 md:gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold text-ink md:text-sm">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Adaobi Nwosu"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-10 border-ink/20 bg-cream/50 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:ring-gold ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold text-ink md:text-sm">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="adaobi@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-10 border-ink/20 bg-cream/50 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:ring-gold ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-1.5">
                <Label htmlFor="inquiryType" className="text-xs font-semibold text-ink md:text-sm">
                  Inquiry Type
                </Label>
                <div className="relative">
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => handleSelectChange(e.target.value)}
                    className={`flex h-10 w-full appearance-none rounded-md border border-ink/20 bg-cream/50 px-3 py-2 pr-10 text-sm text-ink transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${
                      errors.inquiryType ? "border-red-500" : ""
                    }`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%230d0d0d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.inquiryType && (
                  <p className="text-xs text-red-500">{errors.inquiryType}</p>
                )}
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-semibold text-ink md:text-sm">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`min-h-[80px] resize-none border-ink/20 bg-cream/50 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:ring-gold ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message}</p>
                )}
                {errors.submit && (
                  <p className="text-xs text-red-500">{errors.submit}</p>
                )}
              </motion.div>

              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-gold transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:px-8 md:py-3.5"
                  style={{ boxShadow: "0 8px 30px -10px rgba(13, 13, 13, 0.4)" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
