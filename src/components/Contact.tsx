"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { validateContactForm } from "@/lib/validation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const errorAlertRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear field-specific error on change
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions if already sending
    if (isSubmitting) return;

    // Reset previous errors
    setSubmitError(null);

    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.details) {
          setFieldErrors(data.details);
        }
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      // Success State
      setIsSubmitted(true);
      // Reset all fields
      setFormData({
        name: "",
        email: "",
        message: "",
        honeypot: "",
      });
      setFieldErrors({});
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubmitError(message);
      // Focus error alert for accessibility
      setTimeout(() => {
        errorAlertRef.current?.focus();
      }, 50);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-100/60 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">
              Get in Touch
            </h2>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              Let's Connect & Collaborate
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent flex-1 ml-4" />
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mb-12">
          Feel free to reach out for full-time roles, software engineering internships, open-source collaborations, or technical inquiries!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">
                Let's Build Something Great
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                I am actively seeking full-time software engineering and frontend/full-stack developer opportunities. Send me a message or connect directly via social media.
              </p>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Email Me</div>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate block"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shrink-0 ml-2"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Social Channels
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://github.com/manohar-leo99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all flex items-center gap-3 group shadow-sm"
                  >
                    <Github className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    <div className="text-xs font-heading font-medium">GitHub Profile</div>
                  </a>

                  <a
                    href="https://linkedin.com/in/medabalam-manohar-93b241386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all flex items-center gap-3 group shadow-sm"
                  >
                    <Linkedin className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    <div className="text-xs font-heading font-medium">LinkedIn Profile</div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4" role="status" aria-live="polite">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-slate-100">
                    Message sent successfully!
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm max-w-md mx-auto">
                    I'll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-heading font-semibold hover:border-cyan-500/50 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-slate-100 mb-2">
                    Send a Message
                  </h3>

                  {/* Top Level Error Alert */}
                  {submitError && (
                    <div
                      ref={errorAlertRef}
                      tabIndex={-1}
                      role="alert"
                      aria-live="assertive"
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm flex items-start gap-3 outline-none"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div className="flex-1">{submitError}</div>
                    </div>
                  )}

                  {/* Honeypot Field for Spam Protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="honeypot">Do not fill this out if you are human</label>
                    <input
                      type="text"
                      id="honeypot"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 text-sm focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 ${
                        fieldErrors.name
                          ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1" role="alert">
                        <span>{fieldErrors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 text-sm focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 ${
                        fieldErrors.email
                          ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1" role="alert">
                        <span>{fieldErrors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Your Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Manohar, I'd like to discuss a project / role..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 text-sm focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none ${
                        fieldErrors.message
                          ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1" role="alert">
                        <span>{fieldErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-heading font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
