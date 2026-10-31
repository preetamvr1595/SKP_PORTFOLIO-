import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink } from 'lucide-react'

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="glass-card p-10 text-center flex flex-col justify-between h-full group"
    >
      {/* Avatar with ring */}
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="w-24 h-24 border-2 border-[#CCFF00] bg-black flex items-center justify-center text-3xl font-bold text-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-all duration-300"
          >
            {member.name.split(' ').map(n => n[0]).join('')}
          </motion.div>
          {/* Animated ring */}
          <motion.div 
            className="absolute -inset-1 border border-[#CCFF00]/20"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-bold text-lg text-white mb-2 uppercase tracking-[1px] group-hover:text-[#CCFF00] transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-[#CCFF00] font-bold text-xs tracking-[1px] mb-6 uppercase font-mono">{member.role}</p>

        {/* Skills with stagger */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {member.skills.slice(0, 4).map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.08 }}
              whileHover={{ y: -2, borderColor: '#CCFF00' }}
              className="tag text-[9px] uppercase tracking-[1px]"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="flex gap-4 border-t border-[#CCFF00]/10 pt-6 mt-auto">
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary py-2.5 px-3 text-[10px] tracking-[1px] uppercase flex items-center justify-center gap-1.5 flex-1 group/btn"
        >
          <Github className="w-3.5 h-3.5 group-hover/btn:rotate-6 transition-transform" />
          GITHUB
        </a>
        <a
          href={`mailto:${member.email}`}
          className="btn-primary py-2.5 px-3 text-[10px] tracking-[1px] uppercase flex items-center justify-center gap-1.5 flex-1"
        >
          <Mail className="w-3.5 h-3.5" />
          EMAIL
        </a>
      </div>
    </motion.div>
  )
}

export default function Team({ members }) {
  return (
    <section id="team" className="py-24 relative bg-transparent">
      <div className="max-w-[1200px] w-full mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16 border-l-4 border-[#CCFF00] pl-6"
        >
          <span className="badge mb-6 inline-block">TEAM // CORE ENGINEERS</span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-4 uppercase tracking-tight">
            Our Developers
          </h2>
          <p className="text-[#CCCCCC]/70 max-w-2xl text-sm leading-relaxed">
            A cohesive cluster of systems engineers, full-stack builders, and algorithm researchers.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {members.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
