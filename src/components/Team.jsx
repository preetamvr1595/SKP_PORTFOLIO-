import { motion } from 'framer-motion'
import { Github, Mail } from 'lucide-react'

function TeamCard({ member, index }) {
  const gradients = [
    'from-gold to-gold-dark',
    'from-gold-dark to-gold',
    'from-amber-400 to-gold'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="glass-card p-10 text-center group"
    >
      {/* Avatar */}
      <div className="mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-br ${gradients[index % 3]} flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-gold/30`}
        >
          {member.name.split(' ').map(n => n[0]).join('')}
        </motion.div>
      </div>

      {/* Info */}
      <h3 className="font-clash font-bold text-xl text-primary mb-2">
        {member.name}
      </h3>
      <p className="text-gold-dark font-semibold text-sm mb-6">{member.role}</p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {member.skills.slice(0, 4).map((skill) => (
          <span key={skill} className="tag">{skill}</span>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary py-2.5 px-5 text-sm"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href={`mailto:${member.email}`}
          className="btn-primary py-2.5 px-5 text-sm"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
      </div>
    </motion.div>
  )
}

export default function Team({ members }) {
  return (
    <section id="team" className="section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="badge mb-6 inline-block">Meet The Team</span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Developers
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            A talented team of full-stack developers passionate about building amazing digital experiences.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}