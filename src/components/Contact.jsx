import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, MessageCircle, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { teamMembers } from '../data/data'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 relative bg-transparent">
      <div className="max-w-[1200px] w-full mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16 border-l-4 border-[#CCFF00] pl-6"
        >
          <span className="badge mb-6 inline-block">CONTACT // SYSTEM INGEST</span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-4 uppercase tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-[#CCCCCC]/70 max-w-2xl text-sm leading-relaxed">
            Submit a transaction request or connect directly with our engineering nodes below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-10 bg-black border border-[#CCFF00]"
          >
            <h3 className="font-bold text-xl text-white mb-8 uppercase tracking-[1px] flex items-center gap-3">
              <span className="w-2 h-2 bg-[#CCFF00]" />
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 border border-[#CCFF00] bg-[#CCFF00]/5"
                >
                  <CheckCircle className="w-5 h-5 text-[#CCFF00]" />
                  <span className="text-[#CCFF00] text-xs font-mono font-bold tracking-[1px]">MESSAGE TRANSMITTED SUCCESSFULLY</span>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-white uppercase tracking-[2px] mb-3 font-mono">
                    NAME <span className="text-[#CCFF00]">// *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: null }) }}
                    required
                    className={`w-full px-5 py-4 bg-black border text-white placeholder-[#CCCCCC]/30 focus:outline-none transition-all text-sm ${
                      errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-[#CCFF00]/40 focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]/20'
                    }`}
                    placeholder="ENTER YOUR NAME"
                  />
                  {errors.name && (
                    <p className="mt-2 text-[10px] font-mono text-red-400/80 tracking-[1px] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-white uppercase tracking-[2px] mb-3 font-mono">
                    EMAIL <span className="text-[#CCFF00]">// *</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: null }) }}
                    required
                    className={`w-full px-5 py-4 bg-black border text-white placeholder-[#CCCCCC]/30 focus:outline-none transition-all text-sm ${
                      errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-[#CCFF00]/40 focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]/20'
                    }`}
                    placeholder="YOUR@EMAIL.COM"
                  />
                  {errors.email && (
                    <p className="mt-2 text-[10px] font-mono text-red-400/80 tracking-[1px] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-[2px] mb-3 font-mono">
                  MESSAGE <span className="text-[#CCFF00]">// *</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: null }) }}
                  required
                  rows={5}
                  className={`w-full px-5 py-4 bg-black border text-white placeholder-[#CCCCCC]/30 focus:outline-none transition-all resize-none text-sm ${
                    errors.message ? 'border-red-500/60 focus:border-red-500' : 'border-[#CCFF00]/40 focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]/20'
                  }`}
                  placeholder="WRITE MESSAGE DETAILS..."
                />
                {errors.message && (
                  <p className="mt-2 text-[10px] font-mono text-red-400/80 tracking-[1px] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-4 text-xs tracking-[2px] group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Options - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Direct Email */}
            <div className="glass-card p-8 border border-[#CCFF00]">
              <h3 className="font-bold text-sm text-[#CCFF00] mb-6 uppercase tracking-[2px] font-mono">
                Email Us Directly //
              </h3>
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <a
                    key={member.id}
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-4 p-4 border border-[#CCFF00]/20 hover:border-[#CCFF00]/80 bg-black/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 border border-[#CCFF00]/30 flex items-center justify-center group-hover:scale-105 transition-transform bg-black group-hover:bg-[#CCFF00]/10">
                      <Mail className="w-4 h-4 text-[#CCFF00]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-white text-xs uppercase tracking-[1px] group-hover:text-[#CCFF00] transition-colors truncate">
                        {member.name}
                      </div>
                      <div className="text-[10px] text-[#CCCCCC]/60 font-mono mt-0.5 truncate">{member.email}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* GitHub */}
            <div className="glass-card p-8 border border-[#CCFF00]">
              <h3 className="font-bold text-sm text-[#CCFF00] mb-6 uppercase tracking-[2px] font-mono">
                Check Our Code //
              </h3>
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <a
                    key={member.id}
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-[#CCFF00]/20 hover:border-[#CCFF00]/80 bg-black/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 border border-[#CCFF00]/30 flex items-center justify-center group-hover:scale-105 transition-transform bg-black group-hover:bg-[#CCFF00]/10">
                      <Github className="w-4 h-4 text-[#CCFF00]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs uppercase tracking-[1px] group-hover:text-[#CCFF00] transition-colors">
                        {member.name}
                      </div>
                      <div className="text-[10px] text-[#CCCCCC]/60 font-mono mt-0.5">GITHUB PROFILE</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass-card p-8 border border-[#CCFF00] bg-black group hover:bg-[#CCFF00]/5 transition-all duration-300">
              <a
                href="https://wa.me/919999999999"
                className="flex items-center gap-4 p-4 border border-[#CCFF00]/20 hover:border-[#CCFF00] bg-black transition-all duration-300 group/link"
              >
                <div className="w-10 h-10 border border-[#CCFF00]/30 flex items-center justify-center group-hover/link:scale-105 transition-transform bg-black group-hover/link:bg-[#CCFF00]/10">
                  <MessageCircle className="w-4 h-4 text-[#CCFF00]" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-[1px] group-hover/link:text-[#CCFF00] transition-colors">
                    WhatsApp Chat //
                  </div>
                  <div className="text-[10px] text-[#CCCCCC]/60 font-mono mt-0.5">LAUNCH SECURE INSTANT CHAT</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
