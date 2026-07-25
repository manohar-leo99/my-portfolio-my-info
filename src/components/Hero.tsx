"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Sparkles, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotating roles effect
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profileData.roleTitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Glowing Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-medium tracking-wide mb-8 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 dark:bg-cyan-400"></span>
          </span>
          <span>{profileData.statusText}</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 ml-1" />
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-6"
        >
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-violet-600 dark:from-cyan-400 dark:via-teal-300 dark:to-violet-400 bg-clip-text text-transparent">
            {profileData.name}
          </span>
        </motion.h1>

        {/* Rotating Role Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 sm:h-12 mb-6 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-cyan-600 dark:text-cyan-400"
            >
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-violet-500 dark:text-violet-400" />
              <span>{profileData.roleTitles[roleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Subtitle Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl font-body font-medium text-slate-800 dark:text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          "{profileData.headlineStatement}"
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {profileData.shortDescription}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-heading font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500/50 text-slate-800 dark:text-slate-200 font-heading font-medium text-sm hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700/80 flex items-center justify-center bg-white/60 dark:bg-slate-900/40"
          >
            <ArrowDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
