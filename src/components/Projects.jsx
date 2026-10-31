import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ArrowUpRight } from 'lucide-react'

function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(project)}
      className="glass-card overflow-hidden cursor-pointer group flex flex-col justify-between h-full"
    >
      <div>
        {/* Image Frame with thin bottom line */}
        <div className="relative h-48 overflow-hidden border-b border-[#CCFF00]/40">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />

          {/* Rectangular Live Badge */}
          {project.live && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-[#CCFF00] text-black text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-black animate-ping" />
                LIVE
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="pt-6">
          <h3 className="font-bold text-lg text-white mb-3 group-hover:text-[#CCFF00] transition-colors uppercase tracking-[1px]">
            {project.title}
          </h3>
          <p className="text-[#CCCCCC] text-xs mb-5 line-clamp-2 leading-[1.6] opacity-80">
            {project.description}
          </p>
        </div>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="tag text-[9px] tracking-[1px] uppercase">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 border-t border-[#CCFF00]/10 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] tracking-[2px] font-bold text-white hover:text-[#CCFF00] flex items-center gap-1.5 uppercase transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-[#CCFF00]" />
            CODE
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[10px] tracking-[2px] font-bold text-white hover:text-[#CCFF00] flex items-center gap-1.5 uppercase transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#CCFF00]" />
              LIVE
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-black border-2 border-[#CCFF00] flex flex-col"
      >
        {/* Close Button Bracket */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-black border border-[#CCFF00] text-[#CCFF00] flex items-center justify-center hover:bg-[#CCFF00] hover:text-black transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 border-b border-[#CCFF00]/40">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
        </div>

        {/* Modal Info content */}
        <div className="p-8">
          <h3 className="font-bold text-2xl text-[#CCFF00] mb-4 uppercase tracking-[1px]">
            {project.title}
          </h3>
          <p className="text-[#CCCCCC] text-xs mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span key={tech} className="tag text-[9px] tracking-[1px] uppercase">{tech}</span>
            ))}
          </div>

          <div className="flex gap-4 border-t border-[#CCFF00]/10 pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[#CCFF00] text-[#CCFF00] font-bold text-xs tracking-[2px] uppercase hover:bg-[#CCFF00]/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              VIEW CODE
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-xs tracking-[2px]"
              >
                LIVE DEMO
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const allProjects = [...projects.featured]

  return (
    <section id="projects" className="py-24 relative bg-transparent">
      {/* Grid Connectors (Side 3) - Inspired by Screenshot 2 */}
      <div className="absolute top-1/4 right-6 w-[240px] h-[130px] opacity-80 pointer-events-none hidden xl:block z-10">
        <svg viewBox="0 0 280 150" className="w-full h-full">
          {/* Row 1 cells */}
          <rect x="10" y="10" width="25" height="25" fill="#CCFF00" />
          <rect x="45" y="10" width="25" height="25" fill="#CCFF00" />
          <rect x="80" y="10" width="25" height="25" fill="#CCFF00" />
          <rect x="115" y="10" width="25" height="25" fill="#CCFF00" />
          <rect x="150" y="10" width="25" height="25" fill="#CCFF00" />
          
          {/* Row 2 cells */}
          <rect x="10" y="45" width="25" height="25" fill="#CCFF00" />
          <rect x="45" y="45" width="25" height="25" fill="#CCFF00" />
          <rect x="80" y="45" width="25" height="25" fill="#CCFF00" />
          <rect x="115" y="45" width="25" height="25" fill="#CCFF00" />
          <rect x="150" y="45" width="25" height="25" fill="#CCFF00" />
          <rect x="185" y="45" width="25" height="25" fill="#CCFF00" />

          {/* Connected tracks */}
          <line x1="22.5" y1="35" x2="22.5" y2="45" stroke="#000" strokeWidth="6" />
          <line x1="57.5" y1="35" x2="57.5" y2="45" stroke="#000" strokeWidth="6" />
          <line x1="92.5" y1="35" x2="92.5" y2="45" stroke="#000" strokeWidth="6" />
          <line x1="127.5" y1="35" x2="127.5" y2="45" stroke="#000" strokeWidth="6" />
          <line x1="162.5" y1="35" x2="162.5" y2="45" stroke="#000" strokeWidth="6" />

          <line x1="35" y1="22.5" x2="45" y2="22.5" stroke="#000" strokeWidth="6" />
          <line x1="70" y1="22.5" x2="80" y2="22.5" stroke="#000" strokeWidth="6" />
          <line x1="105" y1="22.5" x2="115" y2="22.5" stroke="#000" strokeWidth="6" />
          <line x1="140" y1="22.5" x2="150" y2="22.5" stroke="#000" strokeWidth="6" />

          <line x1="35" y1="57.5" x2="45" y2="57.5" stroke="#000" strokeWidth="6" />
          <line x1="70" y1="57.5" x2="80" y2="57.5" stroke="#000" strokeWidth="6" />
          <line x1="105" y1="57.5" x2="115" y2="57.5" stroke="#000" strokeWidth="6" />
          <line x1="140" y1="57.5" x2="150" y2="57.5" stroke="#000" strokeWidth="6" />
          <line x1="175" y1="57.5" x2="185" y2="57.5" stroke="#000" strokeWidth="6" />

          {/* Row 3 cells */}
          <rect x="80" y="80" width="25" height="25" fill="#CCFF00" />
          <line x1="92.5" y1="70" x2="92.5" y2="80" stroke="#000" strokeWidth="6" />

          {/* Active selection node override */}
          <rect x="10" y="10" width="25" height="25" fill="#000000" stroke="#CCFF00" strokeWidth="1" />
          <rect x="20" y="20" width="5" height="5" fill="#CCFF00" />
          
          {/* Selector target dashed bracket */}
          <rect x="7" y="7" width="31" height="31" fill="none" stroke="#CCFF00" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-20 border-l-4 border-[#CCFF00] pl-6"
        >
          <span className="badge mb-6 inline-block">PORTFOLIO // SELECTED WORK</span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6 uppercase tracking-tight">
            Featured Projects
          </h2>
          <p className="text-[#CCCCCC] max-w-2xl text-sm leading-relaxed">
            Explore our curated archive of deployed systems, algorithm utilities, and enterprise architectures.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {allProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onSelect={setSelectedProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}