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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-2xl bg-black border-2 border-[#CCFF00] max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-8 border-b border-[#CCFF00]/40 bg-black">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-xl text-[#CCFF00] uppercase tracking-[1px]">
              Select Projects to Display
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 border border-[#CCFF00] text-[#CCFF00] flex items-center justify-center hover:bg-[#CCFF00] hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[#CCCCCC] text-xs leading-[1.6]">
            Configure which active repositories and deployments are rendered in your client portfolio view.
          </p>

          <div className="flex gap-4 mt-6">
            <button onClick={selectAll} className="btn-primary text-xs py-2.5 px-5 tracking-[1px]">
              SELECT ALL
            </button>
            <button onClick={deselectAll} className="btn-secondary text-xs py-2.5 px-5 tracking-[1px]">
              DESELECT ALL
            </button>
          </div>
        </div>

        {/* Project List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-4 bg-black">
          {allProjects.featured.map((project) => {
            const isSelected = selectedIds.has(project.id)
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => toggleProject(project.id)}
                className={`p-5 cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#CCFF00]/5 border-[#CCFF00]'
                    : 'bg-black border-[#CCFF00]/20 hover:border-[#CCFF00]/50'
                }`}
              >
                <div className="flex items-start gap-5">
                  {/* Sharp Checkbox */}
                  <div className={`w-5 h-5 border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-[#CCFF00] border-[#CCFF00] text-black'
                      : 'border-[#CCFF00]/40'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-white mb-2 uppercase tracking-[0.5px]">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-[#CCCCCC]/70 line-clamp-1 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-5 border-t border-[#CCFF00]/10 pt-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[9px] font-bold text-[#CCFF00]/70 flex items-center gap-1.5 hover:text-[#CCFF00] uppercase tracking-[1px]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        CODE
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[9px] font-bold text-[#CCFF00]/70 flex items-center gap-1.5 hover:text-[#CCFF00] uppercase tracking-[1px]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          LIVE
                        </a>
                      )}
                    </div>
                  </div>

                  {project.live && (
                    <span className="px-2 py-0.5 border border-[#CCFF00] text-[#CCFF00] text-[8px] font-bold uppercase tracking-wider bg-black">
                      LIVE
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-[#CCFF00]/40 bg-black">
          <div className="flex items-center justify-between">
            <p className="text-[#CCCCCC] text-xs font-bold uppercase tracking-[1px]">
              <span className="text-[#CCFF00]">{selectedIds.size}</span> PROJECTS RUNNING
            </p>
            <button
              onClick={handleContinue}
              disabled={selectedIds.size === 0}
              className="btn-primary text-xs tracking-[1px]"
            >
              CONTINUE ({selectedIds.size})
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}