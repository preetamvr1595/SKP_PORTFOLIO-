import { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/data'
import { Code2Icon, Palette, Layers, Brain, Zap, ArrowRight } from 'lucide-react'

const icons = {
  code: Code2Icon,
  palette: Palette,
  layers: Layers,
  brain: Brain,
 
  zap: Zap
}

function ServiceCard({ service, index, icon: Icon }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })

    const tiltX = (y / rect.height - 0.5) * -10
    const tiltY = (x / rect.width - 0.5) * 10
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  const techTags = {
    code: ["React 18", "Vite.js", "Tailwind CSS", "Semantic HTML"],
    palette: ["Figma UI", "Glassmorphism", "Micro-Animations", "Color HSL"],
    layers: ["Node.js", "MongoDB", "Express.js", "RESTful APIs"],
    brain: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
    zap: ["Web Vitals", "SEO Audits", "Fast Bundling", "Caching Opt."]
  }[service.icon] || ["Active Core", "High Fidelity"]

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-between overflow-hidden border border-[#CCFF00]/20 bg-black/90 p-8 backdrop-blur-xl transition-all duration-300 group cursor-pointer"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        boxShadow: isHovered 
          ? '0 12px 40px rgba(204, 255, 0, 0.15), inset 0 0 20px rgba(204, 255, 0, 0.05)' 
          : '0 4px 20px rgba(0, 0, 0, 0.5)',
        borderColor: isHovered ? '#CCFF00' : 'rgba(204, 255, 0, 0.2)',
      }}
    >
      {/* Dynamic Cursor Spotlight Highlight */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 255, 0, 0.08), transparent 80%)`
        }}
      />

      {/* Cyberpunk Grid Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, #CCFF00 1px, transparent 1px),
            linear-gradient(to bottom, #CCFF00 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Sci-fi Corner Brackets */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#CCFF00]/40 group-hover:border-[#CCFF00] transition-colors duration-300" />
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#CCFF00]/40 group-hover:border-[#CCFF00] transition-colors duration-300" />
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#CCFF00]/40 group-hover:border-[#CCFF00] transition-colors duration-300" />
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#CCFF00]/40 group-hover:border-[#CCFF00] transition-colors duration-300" />

      {/* Left side accent indicator */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#CCFF00] origin-bottom transition-transform duration-300 scale-y-0 group-hover:scale-y-100"
      />

      {/* Technical Header */}
      <div className="flex justify-between items-center mb-6 text-[9px] font-mono text-[#CCFF00]/40 tracking-wider">
        <span>SYS.CAP // 00{index + 1}</span>
        <div className="flex items-center gap-1.5 bg-[#CCFF00]/5 px-2 py-0.5 border border-[#CCFF00]/10 rounded-sm">
          <span className="w-1.5 h-1.5 bg-[#CCFF00] animate-pulse rounded-full" />
          <span className="text-[#CCFF00]/80 font-semibold group-hover:text-[#CCFF00] transition-colors duration-300">ACTIVE</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex-grow">
        {/* Icon Frame */}
        <div className="w-14 h-14 border border-[#CCFF00]/30 flex items-center justify-center mb-6 bg-black relative overflow-hidden group-hover:border-[#CCFF00] group-hover:shadow-[0_0_15px_rgba(204,255,0,0.2)] transition-all duration-300">
          <Icon className="w-6 h-6 text-[#CCFF00] group-hover:scale-110 transition-transform duration-300" />
          {/* Internal scanning glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CCFF00]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl text-white mb-3 uppercase tracking-[1px] group-hover:text-[#CCFF00] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[#CCCCCC] text-sm leading-[1.6] opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-6 font-normal">
          {service.description}
        </p>

        {/* Technical Sub-tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {techTags.map((tech) => (
            <span 
              key={tech} 
              className="text-[9px] font-mono py-1 px-2 border border-[#CCFF00]/15 bg-black/60 text-[#CCFF00]/60 group-hover:border-[#CCFF00]/35 group-hover:text-[#CCFF00]/90 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Instrumentation */}
      <div className="relative z-10 mt-auto pt-4 border-t border-[#CCFF00]/10 flex justify-between items-center group-hover:border-[#CCFF00]/25 transition-colors duration-300">
        <div className="flex flex-col">
          <span className="text-[8px] font-mono text-white/30 uppercase tracking-[1px] mb-0.5">EST. PERFORMANCE</span>
          <span className="text-[10px] font-mono text-[#CCFF00]/60 font-semibold tracking-wider">
            {["100 GBPS", "99.9% SLA", "12MS LATENCY", "AI_CORE_v1.0", "FAST PATH"][index % 5]}
          </span>
        </div>

        {/* Interactive Floating Arrow */}
        <div className="w-8 h-8 rounded-full border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]/50 group-hover:text-[#CCFF00] group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-all duration-300">
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  )
}


export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-transparent">
      {/* Self-contained CSS injection for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] w-full mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16 border-l-4 border-[#CCFF00] pl-6"
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="badge mb-6 inline-block"
          >
            Capabilities // What We Deliver
          </motion.span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-4 uppercase tracking-tight">
            Our Services
          </h2>
          <p className="text-[#CCCCCC]/70 max-w-2xl text-sm leading-relaxed">
            High-tech digital capabilities engineered to architect, validate, and optimize your systems.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                icon={Icon}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

