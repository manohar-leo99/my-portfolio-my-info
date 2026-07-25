"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Eye, Sparkles } from "lucide-react";
import Image from "next/image";
import { projectsData, ProjectItem } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const categories = ["All", "Web Applications", "UI Clones", "Landing Pages"] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-100/60 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              Interactive Web Apps & UI Clones
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent flex-1 ml-4" />
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mb-8">
          A curated collection of web applications, landing pages, and pixel-perfect front-end clones demonstrating clean React components and responsive layouts.
        </p>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image Container */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="relative h-48 w-full bg-slate-900 dark:bg-slate-950 overflow-hidden cursor-pointer"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 p-4">
                      <Sparkles className="w-8 h-8 text-cyan-400/60 mb-2" />
                      <span className="font-heading font-semibold text-sm text-slate-300 text-center">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-heading font-bold text-xs shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mt-1">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/90 text-[10px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-heading">
                    {project.demoUrl !== "#" ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 font-semibold"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-slate-400 dark:text-slate-500">Demo Code Only</span>
                    )}

                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
