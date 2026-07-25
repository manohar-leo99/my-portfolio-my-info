"use client";

import { motion } from "framer-motion";
import { User, Award, Code, MapPin, GraduationCap } from "lucide-react";
import Image from "next/image";
import { profileData } from "@/data/profile";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Education: <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    Certification: <Award className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
    "Projects Shipped": <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    Location: <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-100/60 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">About Me</h2>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              Background & Overview
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent flex-1 ml-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Decorative Glow Backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-violet-600 rounded-3xl blur-lg opacity-30 dark:opacity-40 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-2xl">
                <Image
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
                  priority
                />
                
                {/* Meta Certified Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-cyan-500/30 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-xs font-heading font-semibold text-slate-800 dark:text-slate-200">
                      Meta-Certified Front-End Dev
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-cyan-600 dark:text-cyan-400 leading-snug">
              Full-Stack & Generative AI Developer
            </h3>

            {profileData.bioParagraphs.map((para, idx) => (
              <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                {para}
              </p>
            ))}

            {/* Quick Facts Counter Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profileData.quickFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm group"
                >
                  <div className="mb-2">{iconMap[fact.label] || <User className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}</div>
                  <div className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {fact.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{fact.subtext}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
