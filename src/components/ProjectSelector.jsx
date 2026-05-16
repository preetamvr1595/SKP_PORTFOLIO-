import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Github, ExternalLink } from 'lucide-react'

export default function ProjectSelector({ allProjects, onSelect, onClose }) {
  const [selectedIds, setSelectedIds] = useState(
    new Set(allProjects.featured.map(p => p.id))
  )

  const toggleProject = (id) => {
    const newSelected = new Set(selectedIds)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedIds(newSelected)
  }

  const handleContinue = () => {
    const selectedProjects = {
      featured: allProjects.featured.filter(p => selectedIds.has(p.id))
    }
    onSelect(selectedProjects)
  }

  const selectAll = () => setSelectedIds(new Set(allProjects.featured.map(p => p.id)))
  const deselectAll = () => setSelectedIds(new Set())

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden max-h-[85vh] flex flex-col bg-white shadow-2xl shadow-gold/20"
      >
        {/* Header */}
        <div className="p-8 border-b border-gold/10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-clash font-bold text-2xl text-primary">
              Select Projects to Display
            </h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-gold/20 transition-colors"
            >
              <X className="w-5 h-5 text-primary" />
            </button>
          </div>
          <p className="text-primary/60">
            Choose which projects to showcase on your portfolio.
          </p>

          <div className="flex gap-4 mt-6">
            <button onClick={selectAll} className="btn-primary text-sm py-2.5">
              Select All
            </button>
            <button onClick={deselectAll} className="btn-secondary text-sm py-2.5">
              Deselect All
            </button>
          </div>
        </div>

        {/* Project List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-4">
          {allProjects.featured.map((project) => {
            const isSelected = selectedIds.has(project.id)
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => toggleProject(project.id)}
                className={`p-5 rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-gold/10 border-2 border-gold/30'
                    : 'bg-cream/50 border-2 border-transparent hover:border-gold/20'
                } border-2`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-gold text-white'
                      : 'border-2 border-gold/30'
                  }`}>
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-primary mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/60 line-clamp-1 mb-3">
                      {project.description}
                    </p>
                    <div className="flex gap-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-primary/50 flex items-center gap-1.5 hover:text-gold-dark"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs text-primary/50 flex items-center gap-1.5 hover:text-gold-dark"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  {project.live && (
                    <span className="px-3 py-1.5 rounded-full bg-gold/20 text-gold-dark text-xs font-semibold">
                      Live
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gold/10">
          <div className="flex items-center justify-between">
            <p className="text-primary/60">
              <span className="text-primary font-semibold">{selectedIds.size}</span> projects selected
            </p>
            <button
              onClick={handleContinue}
              disabled={selectedIds.size === 0}
              className="btn-primary"
            >
              Continue ({selectedIds.size})
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}