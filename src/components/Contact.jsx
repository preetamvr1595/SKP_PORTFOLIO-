import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, MessageCircle, Send, Loader2 } from 'lucide-react'
import { teamMembers } from '../data/data'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    alert('Message sent successfully!')
  }

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="badge mb-6 inline-block">Get In Touch</span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-primary mb-6">
            Let's Work Together
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <h3 className="font-clash font-bold text-2xl text-primary mb-8">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary/70 mb-3">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-cream/50 border border-gold/20 text-primary placeholder-primary/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary/70 mb-3">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-cream/50 border border-gold/20 text-primary placeholder-primary/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary/70 mb-3">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-cream/50 border border-gold/20 text-primary placeholder-primary/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-4 text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Direct Email */}
            <div className="glass-card p-8">
              <h3 className="font-clash font-bold text-xl text-primary mb-6">
                Email Us Directly
              </h3>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <a
                    key={member.id}
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-5 p-4 rounded-xl hover:bg-gold/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary group-hover:text-gold-dark transition-colors">
                        {member.name}
                      </div>
                      <div className="text-sm text-primary/50">{member.email}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* GitHub */}
            <div className="glass-card p-8">
              <h3 className="font-clash font-bold text-xl text-primary mb-6">
                Check Our Code
              </h3>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <a
                    key={member.id}
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-4 rounded-xl hover:bg-gold/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Github className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary group-hover:text-gold-dark transition-colors">
                        {member.name}
                      </div>
                      <div className="text-sm text-primary/50">GitHub Profile</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass-card p-8">
              <a
                href="https://wa.me/919999999999"
                className="flex items-center gap-5 p-4 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-primary group-hover:text-green-700 transition-colors">
                    WhatsApp
                  </div>
                  <div className="text-sm text-primary/50">Let's chat on WhatsApp</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}