import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Github, Send, CheckCircle2, Calendar, Phone, ArrowRight } from 'lucide-react'
import { teamMembers } from '../data/data'
import DirectionalButton from './DirectionalButton'

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    budget: '$5k - $15k',
    message: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // simulate auto-close or allow user to close
    }, 4000)
  }

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
          className="relative w-full max-w-3xl bg-white rounded-3xl border-[2px] border-[#142127] shadow-2xl overflow-hidden z-10 my-8 text-[#142127]"
        >
          {/* Header */}
          <div className="p-6 bg-[#fffa56] border-b-[1.5px] border-[#142127] flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#142127]/70">
                Discovery & Strategy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#142127] tracking-tight">
                Schedule a Consultation
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#142127] hover:bg-white text-white hover:text-[#142127] transition-colors border border-[#142127]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#fffa56] text-[#142127] border-[1.5px] border-[#142127] flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#142127] mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#142127]/80 max-w-md mx-auto mb-8 font-medium">
                  One of our 3 core engineers (Preetham, Sakshi, or Karun) will review your project requirements and email you within 24 hours.
                </p>
                <DirectionalButton
                  variant="dark"
                  onClick={onClose}
                  className="px-6 py-3 text-sm"
                >
                  Close Window
                </DirectionalButton>
              </div>
            ) : (
              <div>
                {/* Direct Engineer Reachout Row */}
                <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#f8f8f6] border border-[#142127]/15">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#142127]/60 mb-3">
                    Direct Contact with Core Engineers:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {teamMembers.map((m) => (
                      <a
                        key={m.id}
                        href={`mailto:${m.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                        className="p-3 rounded-xl bg-white border border-[#142127]/15 hover:border-[#142127] hover:bg-[#fffa56]/20 transition-all text-left group"
                      >
                        <div className="text-xs font-bold text-[#142127] group-hover:text-[#351593]">
                          {m.name}
                        </div>
                        <div className="text-[10px] font-mono text-[#142127]/60 truncate">
                          {m.badge}
                        </div>
                        <div className="text-[11px] font-mono text-[#142127]/80 truncate mt-1">
                          {m.email}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#142127]/70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elon Musk"
                        className="w-full px-4 py-3 rounded-xl bg-[#f8f8f6] border-[1.5px] border-[#142127]/20 focus:border-[#142127] focus:bg-white text-sm font-medium outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#142127]/70 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#f8f8f6] border-[1.5px] border-[#142127]/20 focus:border-[#142127] focus:bg-white text-sm font-medium outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#142127]/70 mb-1.5">
                        Project Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f8f8f6] border-[1.5px] border-[#142127]/20 focus:border-[#142127] focus:bg-white text-sm font-medium outline-none transition-colors"
                      >
                        <option>Full-Stack Web App (React / Node / Mongo)</option>
                        <option>AI / Machine Learning System (TensorFlow / Vision)</option>
                        <option>High-Converting E-Commerce / CMS</option>
                        <option>UI/UX Design System</option>
                        <option>Performance & Security Audit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#142127]/70 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f8f8f6] border-[1.5px] border-[#142127]/20 focus:border-[#142127] focus:bg-white text-sm font-medium outline-none transition-colors"
                      >
                        <option>&lt; $5k (Micro-Sprint)</option>
                        <option>$5k - $15k (Complete Application)</option>
                        <option>$15k - $30k (Enterprise / Deep Tech)</option>
                        <option>$30k+ (Quarterly Engineering Retainer)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#142127]/70 mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're building, target timeline, and key requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#f8f8f6] border-[1.5px] border-[#142127]/20 focus:border-[#142127] focus:bg-white text-sm font-medium outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#142127]/60">
                      ⚡ 24h response time guaranteed
                    </span>

                    <DirectionalButton
                      variant="dark"
                      className="px-8 py-3.5 text-sm"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </DirectionalButton>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
