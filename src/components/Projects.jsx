import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Sparkles, Code, Cpu } from 'lucide-react'
import { projects } from '../data/data'
import DirectionalButton from './DirectionalButton'

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const allList = projects.featured

  const filteredProjects = activeFilter === 'all'
    ? allList
    : allList.filter(p => p.category === activeFilter)

  return (
    <section id="case-studies" className="bg-[#f8f8f6] py-24 sm:py-32 border-b-[2px] border-[#142127]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="text-style-tagline">
              Production Portfolio
            </div>
            <h2 className="heading-style-h1 text-[#142127]">
              Case studies with{' '}
              <span className="heading-style-italic font-editorial text-[1.12em]">
                measurable results
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#142127]/80 font-medium mt-4">
              Real commercial applications, diagnostic AI platforms, and open-source tools deployed to production.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-full border border-[#142127]/15 shadow-sm self-start lg:self-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web & SaaS' },
              { id: 'ai', label: 'AI & Vision' },
              { id: 'featured', label: 'Interactive Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-[#142127] text-white shadow-sm'
                    : 'text-[#142127]/70 hover:text-[#142127] hover:bg-[#142127]/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid (Broworks Card Style) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="case-card group bg-white rounded-3xl border-[1.5px] border-[#142127] overflow-hidden shadow-[0_12px_36px_rgba(20,33,39,0.06)] hover:shadow-[0_24px_54px_rgba(20,33,39,0.14)] transition-all duration-400 flex flex-col justify-between"
              >
                {/* Visual Area with Overlay Stats */}
                <div 
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-900 cursor-pointer"
                  onClick={() => onSelectProject && onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80'
                    }}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#142127]/90 text-[#fffa56] font-mono text-xs font-bold border border-[#fffa56]/30 backdrop-blur-sm">
                      {project.tagline || project.subtitle}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[#142127] font-mono text-xs font-bold border border-[#142127]/20 backdrop-blur-sm">
                      {project.year || '2024'}
                    </span>
                  </div>

                  {/* Broworks Signature Hover Stat Overlay */}
                  <div className="case-card-overlay absolute inset-0 bg-[#142127]/85 backdrop-blur-[2px] p-6 flex flex-col justify-end text-white z-20">
                    <div className="space-y-2 mb-4">
                      {project.stats?.map((stat, i) => (
                        <div
                          key={i}
                          className="case-card-stat flex items-center justify-between py-1.5 px-3 rounded-lg bg-white/10 border border-white/15"
                        >
                          <span className="text-xs font-mono text-[#fffa56]">{stat.label}</span>
                          <span className="text-sm font-bold font-mono text-white">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/20">
                      <span className="text-xs font-mono text-white/70">Click card for architecture breakdown</span>
                      <div className="w-8 h-8 rounded-full bg-[#fffa56] text-[#142127] flex items-center justify-center font-bold">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      className="text-2xl font-bold text-[#142127] tracking-tight hover:text-[#351593] transition-colors cursor-pointer mb-2 flex items-center justify-between"
                      onClick={() => onSelectProject && onSelectProject(project)}
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#142127]/40 group-hover:text-[#142127] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs font-mono text-[#142127]/60 mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-[#142127]/80 leading-relaxed font-medium line-clamp-3 mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-[#142127]/5 text-[#142127] text-xs font-mono font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[#142127]/10">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#142127] text-white hover:bg-[#fffa56] hover:text-[#142127] font-bold text-xs transition-colors border border-[#142127]"
                        >
                          <span>Live Platform</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-[#142127] hover:bg-[#142127] hover:text-white font-bold text-xs transition-colors border border-[#142127]"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}