"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Script from "next/script";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  MapPin,
  Clock,
  Upload,
  X,
  Calendar,
  Twitter,
  Loader2,
  ArrowRight,
} from "lucide-react";

const projectTypes = [
  "Custom AI Tool",
  "Workflow Automation",
  "Rapid Prototype",
  "Not Sure",
];

const budgetRanges = [
  "<$2K",
  "$2-5K",
  "$5-10K",
  "$10K+",
  "Let's Discuss",
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ar10000",
    label: "github.com/ar10000",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lets-move-forward/",
    label: "linkedin.com/in/lets-move-forward",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/AndrewR53368303",
    label: "@AndrewR53368303",
  },
];

// Floating label input component
function FloatingLabelInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  error,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
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
            : "border-gray-800 focus:border-purple-500"
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

// Floating label select component
function FloatingLabelSelect({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  const hasValue = value.length > 0;
  const hasError = !!error;

  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`peer w-full px-4 pt-6 pb-2 pr-10 bg-gray-900 border rounded-lg text-white focus:outline-none transition-colors appearance-none cursor-pointer ${
          hasError
            ? "border-red-500 focus:border-red-500"
            : "border-gray-800 focus:border-purple-500"
        } ${hasValue ? "text-white" : "text-transparent"}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          backgroundSize: '12px',
        }}
      >
        <option value="" disabled hidden>
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-gray-900 text-white">
            {option}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          hasValue
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
            : "border-gray-800 focus:border-purple-500"
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
    projectType: "",
    budgetRange: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
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
      newErrors.name = "I'd love to know your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "I need your email to get back to you";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "That email doesn't look quite right. Can you double-check it?";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Help me understand what you need";
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = "This helps me give you the right solution";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Tell me about your project—I'm listening";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "A bit more detail would help me understand your needs";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Limit file size to 10MB
      if (selectedFile.size > 10 * 1024 * 1024) {
        alert("That file is a bit too large. Can you keep it under 10MB?");
        return;
      }
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("projectType", formData.projectType);
      formDataToSend.append("budgetRange", formData.budgetRange);
      formDataToSend.append("message", formData.message);
      if (file) {
        formDataToSend.append("file", file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budgetRange: formData.budgetRange,
          message: formData.message,
          file: file ? { name: file.name, size: file.size } : null,
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
          projectType: "",
          budgetRange: "",
          message: "",
        });
        setFile(null);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      // Show error message to user
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and bring your ideas to
            life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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

              <FloatingLabelSelect
                id="projectType"
                label="Project Type"
                value={formData.projectType}
                onChange={handleChange}
                options={projectTypes}
                required
                error={errors.projectType}
              />

              <FloatingLabelSelect
                id="budgetRange"
                label="Budget Range"
                value={formData.budgetRange}
                onChange={handleChange}
                options={budgetRanges}
                required
                error={errors.budgetRange}
              />

              <FloatingLabelTextarea
                id="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                error={errors.message}
                placeholder="What problem are you trying to solve? What's your timeline? Any specific requirements?"
              />

              {/* File Upload */}
              <div>
                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Brief (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt"
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg cursor-pointer hover:border-purple-500 transition-colors"
                  >
                    <Upload className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-400 text-sm">
                      {file ? file.name : "Optional: Share your project brief or requirements (PDF, DOC, TXT - max 10MB)"}
                    </span>
                  </label>
                </div>
                {file && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg"
                  >
                    <span className="text-sm text-gray-300 flex-1 truncate">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                disabled={isSubmitting || isSuccess}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
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
                      Got it! I'll respond within 24 hours.
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
                      Brewing something awesome...
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
                      Send Project Inquiry
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Book a Call */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Book a Call</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Schedule a free 15-minute consultation to discuss your project
              </p>
              <a
                href="https://calendly.com/andrewryan763/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule on Calendly
                </motion.button>
              </a>
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <h3 className="font-semibold text-white">Response Time</h3>
              </div>
              <p className="text-gray-400 text-sm">
                I respond within 24 hours
              </p>
            </div>

            {/* Contact Info */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a
                    href="mailto:andrewryan763@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    andrewryan763@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white">Lisbon, PT</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-pink-400" />
                <div>
                  <div className="text-sm text-gray-400">Timezone</div>
                  <div className="text-white">CET / GMT+1</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      <link.icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white text-sm">{link.name}</div>
                      <div className="text-xs text-gray-400">{link.label}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Calendly Embed Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Or schedule a call directly
            </h2>
            <p className="text-gray-400">
              Pick a time that works for you
            </p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 overflow-hidden">
            {/* Calendly inline widget placeholder */}
            <div className="h-[700px] bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="h-16 w-16 text-gray-700 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">
                  Calendly widget would be embedded here
                </p>
                <a
                  href="https://calendly.com/andrewryan763/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  Open Calendly
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/andrewryan763/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
            <Script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            />
          </div>
        </motion.section>

        {/* Availability Calendar */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-lg border border-gray-800 bg-gray-900/50">
            <h3 className="text-xl font-semibold mb-4 text-white text-center">
              Typical Response Times
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  &lt; 2 hours
                </div>
                <div className="text-sm text-gray-400">Business hours</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  &lt; 24 hours
                </div>
                <div className="text-sm text-gray-400">Outside business hours</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <div className="text-2xl font-bold text-pink-400 mb-2">
                  Weekends
                </div>
                <div className="text-sm text-gray-400">Next business day</div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
