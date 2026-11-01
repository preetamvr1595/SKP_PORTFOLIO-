import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ArrowUpRight } from 'lucide-react'

// Pill label
function Pill({ label }) {
  return (
    <div className="pill-item inline-flex">
      <div className="pill-item-inner text-[11px]">{label}</div>
    </div>
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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0c0c10] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/[0.08] border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative h-56 border-b border-white/[0.08] bg-[#08080c]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent" />
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map(t => <Pill key={t} label={t} />)}
          </div>

          <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed mb-8">{project.description}</p>

          <div className="flex gap-3 pt-4 border-t border-white/[0.08]">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button is-secondary inline-flex items-center gap-2 text-sm"
            >
              <Github className="w-4 h-4" /> View Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="button inline-flex items-center gap-2 text-sm"
              >
                Live Demo <ArrowUpRight className="w-4 h-4" />
                <div className="button_hover" />
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
  const allProjects = [...(projects.featured || [])]

  return (
    <section id="work" className="py-28 relative overflow-hidden bg-[#040407]">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(37,119,249,0.06) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading_standard mb-4">
            Dive into the{' '}
            <span className="span_gradient">work.</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-2xl leading-relaxed">
            As engineers ourselves, we know that what you really want to see is the work we've
            actually built and shipped. Here's a showcase of recent projects across a range of domains.
          </p>
        </motion.div>

        {/* Phunk-style stacked project list */}
        <div className="space-y-0">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group border-t border-white/[0.06] py-10 flex flex-col lg:flex-row lg:items-center gap-8 cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 px-4 -mx-4 rounded-2xl"
              onClick={() => setSelectedProject(project)}
            >
              {/* Number + Pills */}
              <div className="lg:w-56 flex-shrink-0">
                <div className="text-[11px] text-neutral-500 font-medium mb-3 font-mono">
                  0{index + 1}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map(t => <Pill key={t} label={t} />)}
                </div>
              </div>

              {/* Title + description */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:span_gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-[1.75] max-w-2xl line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Image thumbnail */}
              <div className="lg:w-52 h-36 flex-shrink-0 rounded-xl overflow-hidden border border-white/[0.08] bg-[#0a0a0e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full border border-white/[0.15] flex items-center justify-center text-neutral-500 group-hover:bg-[#00E5D1] group-hover:border-[#00E5D1] group-hover:text-[#030303] transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "See all work" link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a href="#contact" className="button group">
            <span>Start a project</span>
            <div className="button_hover" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}