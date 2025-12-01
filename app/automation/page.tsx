"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Send,
  CheckCircle,
  Loader2,
  ArrowRight,
  Building2,
  Globe,
  Target,
  DollarSign,
  Clock,
  Workflow,
  Zap,
} from "lucide-react";

const budgetRanges = [
  "€2,000 - €5,000",
  "€5,000 - €10,000",
  "€10,000 - €15,000",
  "€15,000+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP (within 1 week)",
  "1-2 weeks",
  "2-4 weeks",
  "1-2 months",
  "Flexible",
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
  const hasValue = value.length > 0;
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
  rows = 4,
  placeholder,
  icon: Icon,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  rows?: number;
  placeholder?: string;
  icon?: any;
}) {
  const hasValue = value.length > 0;
  const hasError = !!error;

  return (
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-4 text-gray-500">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`peer w-full px-4 ${Icon ? "pl-12" : ""} pt-6 pb-2 bg-gray-900 border rounded-lg text-white placeholder-transparent focus:outline-none transition-colors resize-none ${
          hasError
            ? "border-red-500 focus:border-red-500"
            : "border-gray-800 focus:border-purple-500"
        }`}
        placeholder={placeholder || label}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          hasValue
            ? "top-2 text-xs text-gray-400"
            : "top-4 text-sm text-gray-500"
        } ${hasError ? "text-red-400" : ""} ${Icon ? "left-12" : ""}`}
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
  icon: Icon,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  error?: string;
  icon?: any;
}) {
  const hasValue = value.length > 0;
  const hasError = !!error;

  return (
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-4 z-10 text-gray-500">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`peer w-full px-4 ${Icon ? "pl-12" : ""} pt-6 pb-2 pr-10 bg-gray-900 border rounded-lg text-white focus:outline-none transition-colors appearance-none cursor-pointer ${
          hasError
            ? "border-red-500 focus:border-red-500"
            : "border-gray-800 focus:border-purple-500"
        } ${!hasValue ? "text-transparent" : ""}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          backgroundSize: "12px",
        }}
      >
        <option value="" disabled hidden className="bg-gray-900 text-gray-500">
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
        } ${hasError ? "text-red-400" : ""} ${Icon ? "left-12" : ""}`}
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

export default function AutomationIntakePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    automationGoal: "",
    bottleneck: "",
    tools: "",
    idealOutcome: "",
    budgetRange: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateUrl = (url: string) => {
    if (!url) return true; // Optional field
    try {
      new URL(url.startsWith("http") ? url : `https://${url}`);
      return true;
    } catch {
      return false;
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (formData.website && !validateUrl(formData.website)) {
      newErrors.website = "Please enter a valid website URL";
    }

    if (!formData.automationGoal.trim()) {
      newErrors.automationGoal = "Please describe what you want to automate";
    } else if (formData.automationGoal.trim().length < 10) {
      newErrors.automationGoal = "Please provide more detail (at least 10 characters)";
    }

    if (!formData.bottleneck.trim()) {
      newErrors.bottleneck = "Please describe your biggest bottleneck";
    } else if (formData.bottleneck.trim().length < 10) {
      newErrors.bottleneck = "Please provide more detail (at least 10 characters)";
    }

    if (!formData.tools.trim()) {
      newErrors.tools = "Please list the tools you currently use";
    }

    if (!formData.idealOutcome.trim()) {
      newErrors.idealOutcome = "Please describe your ideal outcome";
    } else if (formData.idealOutcome.trim().length < 10) {
      newErrors.idealOutcome = "Please provide more detail (at least 10 characters)";
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = "Please select a budget range";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/automation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
          company: "",
          website: "",
          automationGoal: "",
          bottleneck: "",
          tools: "",
          idealOutcome: "",
          budgetRange: "",
          timeline: "",
        });
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setErrors({
        submit: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Automation <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Intake</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tell me about your automation needs. I'll review your requirements and get back to you within 24 hours with a proposal.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-6 p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingLabelInput
                  id="company"
                  label="Company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  error={errors.company}
                  icon={Building2}
                />

                <FloatingLabelInput
                  id="website"
                  label="Website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  error={errors.website}
                  placeholder="https://example.com"
                />
              </div>
            </div>

            {/* Automation Details */}
            <div className="space-y-6 p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h2 className="text-xl font-semibold text-white mb-4">Automation Details</h2>

              <FloatingLabelTextarea
                id="automationGoal"
                label="What do you want to automate?"
                value={formData.automationGoal}
                onChange={handleChange}
                required
                rows={4}
                error={errors.automationGoal}
                placeholder="Describe the process or workflow you want to automate..."
                icon={Workflow}
              />

              <FloatingLabelTextarea
                id="bottleneck"
                label="Biggest bottleneck right now?"
                value={formData.bottleneck}
                onChange={handleChange}
                required
                rows={4}
                error={errors.bottleneck}
                placeholder="What's slowing you down or causing the most manual work?"
                icon={Zap}
              />

              <FloatingLabelTextarea
                id="tools"
                label="What tools do you use?"
                value={formData.tools}
                onChange={handleChange}
                required
                rows={3}
                error={errors.tools}
                placeholder="List your current tools, software, and platforms (e.g., CRM, email, databases, payment processors)..."
              />

              <FloatingLabelTextarea
                id="idealOutcome"
                label="Ideal outcome?"
                value={formData.idealOutcome}
                onChange={handleChange}
                required
                rows={4}
                error={errors.idealOutcome}
                placeholder="What would success look like? What results are you hoping to achieve?"
                icon={Target}
              />
            </div>

            {/* Project Details */}
            <div className="space-y-6 p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h2 className="text-xl font-semibold text-white mb-4">Project Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingLabelSelect
                  id="budgetRange"
                  label="Budget range"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  options={budgetRanges}
                  required
                  error={errors.budgetRange}
                  icon={DollarSign}
                />

                <FloatingLabelSelect
                  id="timeline"
                  label="Timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  options={timelineOptions}
                  required
                  error={errors.timeline}
                  icon={Clock}
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
              disabled={isSubmitting || isSuccess}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
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
                    Submitted! I'll respond within 24 hours.
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
                    Submitting...
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
                    Submit Automation Request
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {errors.submit && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 text-center"
              >
                {errors.submit}
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="p-4 rounded-lg border border-gray-800 bg-gray-900/50">
            <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-gray-400">24-hour response time</p>
          </div>
          <div className="p-4 rounded-lg border border-gray-800 bg-gray-900/50">
            <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-gray-400">No obligation consultation</p>
          </div>
          <div className="p-4 rounded-lg border border-gray-800 bg-gray-900/50">
            <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Production-ready solutions</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

