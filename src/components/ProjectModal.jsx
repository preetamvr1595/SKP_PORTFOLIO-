import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react'
import DirectionalButton from './DirectionalButton'

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#142127]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.625, 0.05, 0, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl border-[2px] border-[#142127] shadow-2xl overflow-hidden z-10 my-8 text-[#142127]"
        >
          {/* Header Bar */}
          <div className="p-6 bg-[#142127] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#fffa56] text-[#142127] font-mono text-xs font-bold uppercase tracking-wider">
                Case Study Breakdown
              </span>
              <span className="text-xs font-mono text-white/60">
                {project.year || '2024'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-[#fffa56] hover:text-[#142127] text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
            {/* Title & Subtitle */}
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#142127] tracking-tight mb-2">
                {project.title}
              </h2>
              <p className="text-base font-mono text-[#142127]/70">
                {project.subtitle || project.tagline}
              </p>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border-[1.5px] border-[#142127] mb-8 bg-neutral-900 shadow-inner">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80'
                }}
              />
            </div>

            {/* Metrics Row */}
            {project.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {project.stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#f8f8f6] border border-[#142127]/15">
                    <div className="text-xs font-mono text-[#142127]/60 mb-1">{stat.label}</div>
                    <div className="text-2xl font-black font-mono text-[#142127]">{stat.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#142127]/60 mb-2">
                System Overview & Architecture
              </h3>
              <p className="text-base text-[#142127]/85 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#142127]/60 mb-3">
                Technologies & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#142127] text-white text-xs font-mono font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#142127]/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#142127] text-white hover:bg-[#fffa56] hover:text-[#142127] font-bold text-sm transition-colors border border-[#142127]"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#142127] hover:bg-[#142127] hover:text-white font-bold text-sm transition-colors border border-[#142127]"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => {
                  onClose()
                  if (onOpenContact) onOpenContact()
                }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#142127] hover:underline"
              >
                <span>Request Similar Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
