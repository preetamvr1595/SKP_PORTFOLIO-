import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink, Code2, Cpu, Sparkles, UserCheck } from 'lucide-react'
import { teamMembers } from '../data/data'

export default function Team() {
  return (
    <section id="team" className="bg-[#d2e7f5] py-24 sm:py-32 border-b-[2px] border-[#142127] text-[#142127]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-style-tagline bg-white/70 border-[#142127]/20">
            The Core Collective
          </div>
          <h2 className="heading-style-h1 text-[#142127] mb-6">
            Built by engineers,{' '}
            <span className="heading-style-italic font-editorial text-[1.12em]">
              designed for scale
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#142127]/85 font-medium leading-relaxed">
            No junior offshore hand-offs. Your product is architected, coded, and deployed directly by these 3 specialized software and artificial intelligence practitioners.
          </p>
        </div>

        {/* 3 Core Member Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border-[1.5px] border-[#142127] shadow-[0_12px_36px_rgba(20,33,39,0.08)] flex flex-col justify-between hover:shadow-[0_20px_48px_rgba(20,33,39,0.14)] transition-all duration-300 group"
            >
              <div>
                {/* Avatar Banner Header */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl border-[1.5px] border-[#142127] flex items-center justify-center font-black text-2xl font-mono text-[#142127] shadow-sm group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: member.avatarBg }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#142127] text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    {member.badge}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl font-black text-[#142127] tracking-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-bold text-[#142127]/60 mb-1">
                  {member.role}
                </p>
                <div className="text-xs font-semibold text-[#351593] mb-4">
                  {member.specialty}
                </div>

                <p className="text-sm text-[#142127]/80 leading-relaxed font-medium mb-6">
                  {member.bio}
                </p>

                {/* Skills Tag Pills */}
                <div className="pt-4 border-t border-[#142127]/10 mb-8">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#142127]/60 mb-2">
                    Primary Toolchain:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-[#f8f8f6] border border-[#142127]/15 text-[#142127] text-xs font-mono font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[#142127]/10 flex items-center gap-3">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#142127] text-white hover:bg-[#fffa56] hover:text-[#142127] font-bold text-xs transition-colors border border-[#142127]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white text-[#142127] hover:bg-[#142127] hover:text-white font-bold text-xs transition-colors border border-[#142127]"
                  title={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
