import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map(l => l.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 border-b border-[#CCFF00] backdrop-blur-xl shadow-lg shadow-[#CCFF00]/5'
          : 'bg-black/60 border-b border-[#CCFF00]/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src="/logo.jpg" 
              alt="Trigon Vertex" 
              className="w-8 h-8 rounded-none border border-[#CCFF00] object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute -inset-1 border border-[#CCFF00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-bold text-base md:text-lg tracking-[4px] uppercase text-[#CCFF00] group-hover:text-white transition-colors duration-300">
            Trigon <span className="text-white group-hover:text-[#CCFF00] transition-colors duration-300">Vertex</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-xs tracking-[2px] font-bold transition-all duration-300 uppercase ${
                  isActive 
                    ? 'text-[#CCFF00]' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#CCFF00]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1 left-2 right-2 h-[1px] bg-[#CCFF00]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </a>
            )
          })}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="btn-secondary py-2.5 px-5 text-[10px] hidden sm:flex tracking-[2px] group">
            <span className="group-hover:translate-x-1 transition-transform">LET'S TALK</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#CCFF00] border border-[#CCFF00]/50 hover:bg-[#CCFF00]/10 hover:border-[#CCFF00] transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-[80px] left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#CCFF00]"
        >
          <div className="flex flex-col gap-1 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-bold text-sm tracking-[2px] text-white/80 hover:text-[#CCFF00] py-3 px-4 uppercase border-l-2 border-transparent hover:border-[#CCFF00] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center mt-6 text-xs tracking-[2px] py-4"
            >
              LET'S TALK
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
