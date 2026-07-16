import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
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

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
    }, 5000);
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
    <section id="contact" className="relative overflow-hidden bg-cream py-24 md:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-20 h-48 w-48 rounded-full border-2 border-gold/20 animate-drift" />
        <div className="absolute -left-16 bottom-20 h-36 w-36 rounded-full bg-gold/10 blur-2xl animate-floaty" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15"
          >
            <Mail className="h-6 w-6 text-gold" />
          </motion.div>
          <h2
            className="text-display font-bold leading-[1.05] text-ink"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
          >
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink/70 md:text-lg">
            Have questions or ideas? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 rounded-2xl bg-white p-8 shadow-lg md:p-12"
          style={{ boxShadow: "0 25px 80px -25px rgba(232, 168, 56, 0.2)" }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
              >
                <CheckCircle className="h-10 w-10 text-green-600" />
              </motion.div>
              <h3 className="text-display text-2xl font-bold text-ink">Message Sent!</h3>
              <p className="mt-3 text-ink/70">
                Thank you for reaching out. We'll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeUp} className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-ink">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Adaobi Nwosu"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-12 border-ink/20 bg-cream/50 text-ink placeholder:text-ink/40 focus:border-gold focus:ring-gold ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-ink">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="adaobi@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-12 border-ink/20 bg-cream/50 text-ink placeholder:text-ink/40 focus:border-gold focus:ring-gold ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-2">
                <Label htmlFor="inquiryType" className="text-sm font-semibold text-ink">
                  Inquiry Type
                </Label>
                <div className="relative">
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => handleSelectChange(e.target.value)}
                    className={`flex h-12 w-full appearance-none rounded-md border border-ink/20 bg-cream/50 px-3 py-2 pr-10 text-base text-ink transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold md:text-sm ${
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

              <motion.div variants={fadeUp} className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-ink">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`min-h-[120px] resize-none border-ink/20 bg-cream/50 text-ink placeholder:text-ink/40 focus:border-gold focus:ring-gold ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message}</p>
                )}
              </motion.div>

              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-semibold text-gold transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                  style={{ boxShadow: "0 10px 40px -15px rgba(13, 13, 13, 0.4)" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={18}
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
