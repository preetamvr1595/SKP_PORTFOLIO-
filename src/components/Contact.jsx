import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react'
import { teamMembers } from '../data/data'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email'
    if (!formData.message.trim()) e.message = 'Message is required'
    else if (formData.message.trim().length < 10) e.message = 'Message too short'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setIsSubmitting(true)
    await new Promise(r => setTimeout(r, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-28 bg-[#040407] relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '32rem', height: '32rem',
          background: 'radial-gradient(circle, rgba(37,173,249,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          top: '20%', right: '0'
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '24rem', height: '24rem',
          background: 'radial-gradient(circle, rgba(0,229,209,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '10%', left: '5%'
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
          <h2 className="heading_standard mb-3">
            Let's get to{' '}
            <span className="span_gradient">work.</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-lg">
            We're ready to start your next project. Hit the button below or use any of the
            channels to get in touch with us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl border border-white/[0.08] bg-[#0c0c10] p-8 md:p-10"
          >
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: '#00E5D1' }}
              />
              Send a message
            </h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-[#00E5D1]/30 bg-[#00E5D1]/5 mb-6"
              >
                <CheckCircle className="w-5 h-5 text-[#00E5D1]" />
                <span className="text-[#00E5D1] text-sm font-medium">Message sent successfully!</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: null }) }}
                    placeholder="e.g. John Smith"
                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white text-sm placeholder-neutral-600 focus:outline-none transition-all ${
                      errors.name
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/[0.1] focus:border-[#00E5D1]/60'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: null }) }}
                    placeholder="hello@company.com"
                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white text-sm placeholder-neutral-600 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/[0.1] focus:border-[#00E5D1]/60'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={e => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: null }) }}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white text-sm placeholder-neutral-600 focus:outline-none transition-all resize-none ${
                    errors.message
                      ? 'border-red-500/60 focus:border-red-500'
                      : 'border-white/[0.1] focus:border-[#00E5D1]/60'
                  }`}
                />
                {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="button w-full justify-center gap-2">
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="w-4 h-4" /> Send message</>
                )}
                <div className="button_hover" />
              </button>
            </form>
          </motion.div>

          {/* Right sidebar — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick Contact links */}
            {[
              {
                icon: Mail,
                label: 'Email us',
                href: `mailto:${teamMembers[0].email}`,
                desc: teamMembers[0].email,
                color: '#00E5D1'
              },
              {
                icon: Github,
                label: 'GitHub',
                href: 'https://github.com/sakshichavandvg-sketch',
                desc: 'View our repositories',
                color: '#25ADF9'
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                href: '#',
                desc: 'Chat with us directly',
                color: '#7c3aed'
              },
            ].map(({ icon: Icon, label, href, desc, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.08] bg-[#0c0c10] hover:border-white/[0.18] transition-all duration-300 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-xs text-neutral-400 truncate">{desc}</div>
                </div>
              </a>
            ))}

            {/* Each team member direct contact */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c10] p-5">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Direct Line</div>
              {teamMembers.map((m, i) => (
                <a
                  key={m.id}
                  href={`mailto:${m.email}`}
                  className={`flex items-center gap-3 py-2.5 group ${i < teamMembers.length - 1 ? 'border-b border-white/[0.05]' : ''}`}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#030303]"
                    style={{ background: 'linear-gradient(135deg, #00E5D1, #2577F9)' }}
                  >
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white group-hover:text-[#00E5D1] transition-colors">{m.name}</div>
                    <div className="text-[11px] text-neutral-500">{m.role}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
