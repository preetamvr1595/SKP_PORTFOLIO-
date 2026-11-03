import { motion } from 'framer-motion'
import { ArrowRight, Star, ExternalLink, Github, CheckCircle2 } from 'lucide-react'
import DirectionalButton from './DirectionalButton'
import { projects } from '../data/data'

export default function Hero({ onOpenContact, onSelectProject }) {
  // Use all 8 projects from featured array
  const showcaseProjects = projects.featured.slice(0, 8)

  return (
    <section className="relative bg-[#fffa56] text-[#142127] pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b-[2px] border-[#142127]">
      {/* ── Background Subtle Tech Grid ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(#142127 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* ── Tagline Pill ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#142127]/5 border border-[#142127]/20 text-[#142127] text-xs font-bold font-mono tracking-wider uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#142127] animate-pulse" />
          <span>Full-Stack & AI Engineering Collective</span>
        </motion.div>

        {/* ── Massive Broworks Headline ── */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#142127] max-w-5xl leading-[1.02] mb-6"
        >
          Web & AI Intelligence,{' '}
          <span className="font-editorial italic font-normal tracking-normal text-[#142127] block sm:inline">
            Built In
          </span>
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#142127]/85 max-w-2xl font-medium leading-relaxed mb-10"
        >
          Websites and AI applications that perform for people, search engines, and autonomous systems. Engineered, deployed, and evolved for high-growth tech teams.
        </motion.p>

        {/* ── CTA Button Group ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <DirectionalButton
            variant="dark"
            href="#contact"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault()
                onOpenContact()
              }
            }}
            className="px-8 py-4 text-base"
          >
            <span>Schedule Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </DirectionalButton>

          <DirectionalButton
            variant="ghost"
            href="#case-studies"
            className="px-8 py-4 text-base bg-white/40 hover:bg-white"
          >
            <span>Explore Case Studies</span>
          </DirectionalButton>
        </motion.div>

        {/* ── Clutch / Trust Proof Badge ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/70 border border-[#142127]/15 shadow-sm mb-8"
        >
          <div className="flex text-[#EF4335]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <div className="h-4 w-[1px] bg-[#142127]/20" />
          <span className="text-xs font-bold font-mono tracking-tight text-[#142127]">
            5.0 REVIEWS &bull; 100% CLIENT DELIVERY SATISFACTION
          </span>
        </motion.div>
      </div>

      {/* ── Broworks Signature Radial Orbiting Arc Carousel ── */}
      <div className="radial-orbit-container mt-4">
        <div className="radial-cards-track">
          {showcaseProjects.map((project, index) => {
            const angle = (360 / showcaseProjects.length) * index
            return (
              <div
                key={project.id}
                className="radial-orbit-card group cursor-pointer"
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
                onClick={() => onSelectProject && onSelectProject(project)}
              >
                <div className="relative w-full h-full bg-[#142127] text-white flex flex-col justify-between overflow-hidden">
                  {/* Image / Thumbnail Preview */}
                  <div className="relative w-full h-[140px] overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80'
                      }}
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#142127]/90 text-[#fffa56] font-mono text-[10px] font-bold border border-[#fffa56]/30">
                      {project.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-3 bg-[#142127] border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-white truncate max-w-[190px]">
                        {project.title}
                      </div>
                      <div className="text-[10px] font-mono text-white/60">
                        {project.tech.slice(0, 2).join(' • ')}
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#fffa56] text-[#142127] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
