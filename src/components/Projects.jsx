import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ArrowUpRight } from 'lucide-react'

function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect(project)}
      className="glass-card overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

        {/* Live Badge */}
        {project.live && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 rounded-full bg-gold/90 text-white text-xs font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Live
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-clash font-bold text-xl text-primary mb-3 group-hover:text-gold-dark transition-colors">
          {project.title}
        </h3>
        <p className="text-primary/60 text-sm mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm font-semibold text-primary/60 hover:text-gold-dark flex items-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm font-semibold text-primary/60 hover:text-gold-dark flex items-center gap-2 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </a>
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
      <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-white shadow-2xl shadow-gold/20"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-gold hover:text-white transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        </div>

        <div className="p-8">
          <h3 className="font-clash font-bold text-2xl text-primary mb-4">
            {project.title}
          </h3>
          <p className="text-primary/60 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/5 text-primary font-semibold hover:bg-gold hover:text-white transition-all"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo
              <ArrowUpRight className="w-5 h-5" />
            </a>
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
    <section id="projects" className="section bg-cream/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="badge mb-6 inline-block">Our Work</span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            Explore our portfolio of innovative solutions and cutting-edge applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {allProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
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