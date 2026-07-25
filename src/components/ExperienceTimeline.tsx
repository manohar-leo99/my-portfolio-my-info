"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Calendar, Award, CheckCircle, Check } from "lucide-react";
import { educationData, TimelineItem } from "@/data/education";

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for vertical connecting line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-200/50 dark:bg-slate-950/80 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">
              Education & Timeline
            </h2>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              Academic Background & Milestones
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent flex-1 ml-4" />
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mb-12">
          My academic trajectory and foundation in Electronics, Communication Engineering, and foundational mathematics.
        </p>

        {/* Timeline Master Container */}
        <div ref={containerRef} className="relative">
          {/* Base Background Line Track */}
          <div className="absolute left-4 sm:left-6 top-7 bottom-7 w-[2px] bg-slate-300 dark:bg-slate-800 -translate-x-1/2 rounded-full" />
          
          {/* Scroll-Linked Animated Accent Line (Draws Downward) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-6 top-7 bottom-7 w-[2px] bg-gradient-to-b from-cyan-500 via-teal-400 to-violet-500 origin-top -translate-x-1/2 shadow-[0_0_10px_rgba(34,211,238,0.6)] rounded-full"
          />

          {/* Timeline Entries List */}
          <div className="space-y-8">
            {educationData.map((item: TimelineItem, idx: number) => {
              const isLatest = idx === 0;

              return (
                <div key={item.id} className="relative flex items-start gap-4 sm:gap-6 group">
                  {/* 
                    Timeline Node Column (w-8 = 32px wide on mobile, sm:w-12 = 48px wide on desktop).
                    Center of this column is at 16px (mobile) / 24px (desktop), matching line axis 100%!
                  */}
                  <div className="relative w-8 sm:w-12 shrink-0 flex justify-center pt-7">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.15 }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Outer Diamond Halo Ring */}
                      {isLatest ? (
                        /* Soft Pulsing Glow on Most Recent Entry Only */
                        <motion.div
                          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute w-7 h-7 rotate-45 rounded-sm bg-cyan-500/25 dark:bg-cyan-400/30 border border-cyan-500/50 dark:border-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                        />
                      ) : (
                        /* Static Lighter Halo Ring for Past Entries */
                        <div className="absolute w-7 h-7 rotate-45 rounded-sm bg-slate-300/40 dark:bg-slate-800/40 border border-slate-400/30 dark:border-slate-700/40" />
                      )}

                      {/* Core Rotated Diamond Node Marker with Subtle Gradient Fill */}
                      <motion.div
                        whileHover={{ scale: 1.25, rotate: 135 }}
                        transition={{ duration: 0.25 }}
                        className="w-3.5 h-3.5 rotate-45 rounded-sm bg-gradient-to-tr from-cyan-500 via-teal-400 to-cyan-300 dark:from-cyan-400 dark:via-teal-300 dark:to-cyan-200 border-2 border-white dark:border-slate-950 shadow-md shadow-cyan-500/50 z-10"
                      />
                    </motion.div>
                  </div>

                  {/* Card Content Column - Staggered entrance after marker */}
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.15 + 0.1 }}
                    className="flex-1 min-w-0 p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-200 shadow-md hover:shadow-lg space-y-4"
                  >
                    {/* Meta Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>

                        {/* Completed Status Label */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span>Completed</span>
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold">
                        <Award className="w-3.5 h-3.5" />
                        <span>{item.scoreOrDetail}</span>
                      </div>
                    </div>

                    {/* Title & Institution */}
                    <div>
                      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                        {item.institution}
                      </p>
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
