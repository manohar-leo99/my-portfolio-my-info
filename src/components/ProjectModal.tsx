"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Layers } from "lucide-react";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Banner */}
          <div className="relative h-64 sm:h-80 w-full bg-slate-900 dark:bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 p-6 text-center">
                <Layers className="w-12 h-12 text-cyan-400 mb-3 opacity-60" />
                <span className="font-heading font-bold text-lg text-slate-300">
                  {project.title} Preview
                </span>
                <span className="text-xs text-slate-400 font-mono mt-1">
                  Interactive Front-End Architecture
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-80 dark:opacity-100" />
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-3">
                {project.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="space-y-3">
                <h4 className="font-heading font-semibold text-slate-900 dark:text-slate-200 text-sm tracking-wide uppercase">
                  Key Highlights & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="font-heading font-semibold text-slate-900 dark:text-slate-200 text-xs tracking-wide uppercase mb-3">
                Tech Stack & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-800 dark:text-cyan-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4">
              {project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-heading font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 text-slate-800 dark:text-slate-200 font-heading font-medium text-sm transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
