"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Calendar, Send, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";

// Floating label input component
function FloatingLabelInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}) {
  const isFocused = value.length > 0;
  const hasError = !!error;

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`peer w-full px-4 pt-6 pb-2 bg-gray-900 border rounded-lg text-white placeholder-transparent focus:outline-none transition-colors ${
          hasError
            ? "border-red-500 focus:border-red-500"
            : "border-gray-800 focus:border-gray-600"
        }`}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isFocused
            ? "top-2 text-xs text-gray-400"
            : "top-4 text-sm text-gray-500"
        } ${hasError ? "text-red-400" : ""}`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

// Floating label textarea component
function FloatingLabelTextarea({
  id,
  label,
  value,
  onChange,
  required = false,
  error,
  rows = 6,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  rows?: number;
  placeholder?: string;
}) {
  const isFocused = value.length > 0;
  const hasError = !!error;

  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`peer w-full px-4 pt-6 pb-2 bg-gray-900 border rounded-lg text-white placeholder-transparent focus:outline-none transition-colors resize-none ${
          hasError
            ? "border-red-500 focus:border-red-500"
            : "border-gray-800 focus:border-gray-600"
        }`}
        placeholder={placeholder || label}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isFocused
            ? "top-2 text-xs text-gray-400"
            : "top-4 text-sm text-gray-500"
        } ${hasError ? "text-red-400" : ""}`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">Contact</h1>
          <p className="text-lg text-gray-300 leading-[1.6] font-normal">
            If you want to collaborate, discuss a project, or explore an automation idea, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <FloatingLabelInput
                id="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
                error={errors.name}
              />

              <FloatingLabelInput
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                error={errors.email}
              />

              <FloatingLabelTextarea
                id="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                error={errors.message}
                placeholder="Tell me what you want to build, what isn't working, or what you're trying to automate."
              />

              <motion.button
                type="submit"
                whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.05, filter: isSubmitting || isSuccess ? "none" : "brightness(1.1)" }}
                whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                disabled={isSubmitting || isSuccess}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-5 w-5" />
                      Message sent
                    </motion.span>
                  ) : isSubmitting ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="submit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Send message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <p className="text-sm text-gray-400 text-center">
                I'll reply as soon as I can.
              </p>
            </form>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                  <Mail className="h-5 w-5 text-purple-400 relative drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                </div>
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
              <a
                href="mailto:andrewryan763@gmail.com"
                className="text-gray-300 hover:text-white transition-colors leading-[1.6] font-normal"
              >
                andrewryan763@gmail.com
              </a>
            </div>

            {/* Calendly Link */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                  <Calendar className="h-5 w-5 text-purple-400 relative drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                </div>
                <h3 className="text-xl font-bold text-white">Schedule a call</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-[1.6] font-normal">
                Book a time to discuss your project.
              </p>
              <a
                href="https://calendly.com/andrewryan763/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors leading-[1.6] font-normal"
              >
                Open Calendly
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
