import { motion } from 'framer-motion'
import { Github, Mail, Linkedin, ArrowUpRight } from 'lucide-react'

function TeamCard({ member, index }) {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55 }}
      className="group rounded-2xl border border-white/[0.08] bg-[#0c0c10] overflow-hidden hover:border-white/[0.16] transition-all duration-300 hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Top: gradient avatar block */}
      <div
        className="h-48 relative flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d1626 0%, #050a14 100%)'
        }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, rgba(${index === 0 ? '0,229,209' : index === 1 ? '37,119,249' : '124,58,237'},0.18) 0%, transparent 70%)`
          }}
        />

        {/* Avatar initials */}
        <div
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-[#030303] group-hover:scale-105 transition-transform duration-300"
          style={{
            background: 'linear-gradient(135deg, #00E5D1 0%, #2577F9 100%)',
            boxShadow: '0 8px 30px -5px rgba(0,229,209,0.4)'
          }}
        >
          {initials}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
        <p
          className="text-sm font-medium mb-4"
          style={{
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(158deg, #00e5d1 3%, #2577f9 99%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          {member.role}
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {member.skills.slice(0, 4).map(skill => (
            <div key={skill} className="pill-item">
              <div className="pill-item-inner text-[10px]">{skill}</div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-4 border-t border-white/[0.06]">
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 button is-secondary inline-flex items-center justify-center gap-2 text-xs py-2"
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href={`mailto:${member.email}`}
            className="flex-1 button inline-flex items-center justify-center gap-2 text-xs py-2"
          >
            <Mail className="w-3.5 h-3.5" /> Email
            <div className="button_hover" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Team({ members }) {
  return (
    <section id="team" className="py-28 relative overflow-hidden">
      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading_standard mb-3">
            Meet the{' '}
            <span className="span_gradient">team.</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            A cohesive cluster of engineers, full-stack builders, and AI researchers working together to
            deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
