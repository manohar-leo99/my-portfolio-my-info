"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Database,
  Cpu,
  Terminal,
  CheckSquare,
  Sparkles,
  Zap,
} from "lucide-react";
import { skillCategoriesData, SkillCategory } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  Database: <Database className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  Terminal: <Terminal className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  CheckSquare: <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-200/50 dark:bg-slate-950/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-slate-100">
              Technical Stack & Skills
            </h2>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              Tools, Technologies & Methodologies
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent flex-1 ml-4" />
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mb-12">
          A breakdown of my technical domain expertise ranging from modern frontend design to AI/LLM orchestration and backend database systems.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategoriesData.map((category: SkillCategory, idx: number) => (
            <motion.div
              key={category.categoryKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/90 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 group-hover:border-cyan-500/30 transition-colors">
                      {iconMap[category.iconName] || <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        skill.isHighlighted
                          ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-slate-100"
                      }`}
                    >
                      {skill.isHighlighted && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
