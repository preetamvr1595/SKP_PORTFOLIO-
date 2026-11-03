import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Menu, X, Sparkles, Layers, Cpu, Palette, ShieldCheck, ExternalLink } from 'lucide-react'
import DirectionalButton from './DirectionalButton'

export default function Navbar({ onOpenContact }) {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top Announcement Marquee Banner (Broworks Signature) ── */}
      <div className="bg-[#142127] text-[#fffa56] text-xs font-semibold py-2 px-4 overflow-hidden border-b border-[#fffa56]/20 transition-all duration-300">
        <a
          href="#contact"
          onClick={(e) => {
            if (onOpenContact) {
              e.preventDefault()
              onOpenContact()
            }
          }}
          className="flex items-center justify-center gap-6 overflow-hidden whitespace-nowrap hover:text-white transition-colors"
        >
          <div className="animate-marquee-fast flex items-center gap-8 text-[11px] tracking-wider uppercase font-mono">
            <span>Upcoming Engagement Window → Q1/Q2 Engineering Slots Open</span>
            <span className="text-white">✦</span>
            <span>Web & AI Intelligence, Built In</span>
            <span className="text-white">✦</span>
            <span>50+ High-Performance Projects Shipped</span>
            <span className="text-white">✦</span>
            <span>Schedule Strategy Call with Core Engineers</span>
            <span className="text-white">✦</span>
            <span>Upcoming Engagement Window → Q1/Q2 Engineering Slots Open</span>
            <span className="text-white">✦</span>
            <span>Web & AI Intelligence, Built In</span>
            <span className="text-white">✦</span>
            <span>50+ High-Performance Projects Shipped</span>
            <span className="text-white">✦</span>
          </div>
        </a>
      </div>

      {/* ── Main Navigation Bar ── */}
      <nav className={`px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-[#f8f8f6]/90 border-b border-[#142127]/10 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo — Trigon Vertex */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/trigon-logo.png"
              alt="Trigon Vertex Logo"
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg text-[#142127] leading-none">
                TRIGON
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#142127]/60">
                VERTEX
              </span>
            </div>
          </a>

          {/* Desktop Nav Links & Mega Dropdown Toggles */}
          <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#142127]/15 shadow-sm">
            {/* Services Dropdown Toggle */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-sm font-semibold rounded-full flex items-center gap-1.5 transition-colors ${
                  activeDropdown === 'services' ? 'bg-[#142127] text-white' : 'text-[#142127] hover:bg-[#142127]/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {/* Services Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-2xl border-[1.5px] border-[#142127] shadow-xl p-5 z-50 text-[#142127]"
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#142127]/10">
                      <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#142127]/60">
                        Our Engineering Capabilities
                      </span>
                      <a href="#services" className="text-xs font-semibold hover:underline flex items-center gap-1 text-[#142127]">
                        All Services <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <a href="#services" className="p-3 rounded-xl hover:bg-[#fffa56]/20 border border-transparent hover:border-[#142127]/20 transition-all group">
                        <div className="w-8 h-8 rounded-lg bg-[#142127] text-white flex items-center justify-center mb-2 group-hover:bg-[#fffa56] group-hover:text-[#142127] transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-sm text-[#142127]">Full-Stack Web Apps</div>
                        <div className="text-xs text-[#142127]/70 mt-0.5">High-speed React, Vite, Node.js, and scalable APIs</div>
                      </a>

                      <a href="#services" className="p-3 rounded-xl hover:bg-[#dcd3f7]/30 border border-transparent hover:border-[#142127]/20 transition-all group">
                        <div className="w-8 h-8 rounded-lg bg-[#142127] text-white flex items-center justify-center mb-2 group-hover:bg-[#dcd3f7] group-hover:text-[#142127] transition-colors">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-sm text-[#142127]">AI & Deep Learning</div>
                        <div className="text-xs text-[#142127]/70 mt-0.5">Computer vision, neural diagnostics & LLM citations</div>
                      </a>

                      <a href="#services" className="p-3 rounded-xl hover:bg-[#d2e7f5]/40 border border-transparent hover:border-[#142127]/20 transition-all group">
                        <div className="w-8 h-8 rounded-lg bg-[#142127] text-white flex items-center justify-center mb-2 group-hover:bg-[#d2e7f5] group-hover:text-[#142127] transition-colors">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-sm text-[#142127]">UI/UX Design Systems</div>
                        <div className="text-xs text-[#142127]/70 mt-0.5">Editorial aesthetic, micro-animations & conversion</div>
                      </a>

                      <a href="#services" className="p-3 rounded-xl hover:bg-[#fffa56]/20 border border-transparent hover:border-[#142127]/20 transition-all group">
                        <div className="w-8 h-8 rounded-lg bg-[#142127] text-white flex items-center justify-center mb-2 group-hover:bg-[#fffa56] group-hover:text-[#142127] transition-colors">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-sm text-[#142127]">Security & Optimization</div>
                        <div className="text-xs text-[#142127]/70 mt-0.5">Cryptography, AES-256 vaulting & Lighthouse 95+</div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Section Links */}
            <a
              href="#case-studies"
              className="px-4 py-2 text-sm font-semibold text-[#142127] hover:bg-[#142127]/5 rounded-full transition-colors"
            >
              Case Studies
            </a>

            <a
              href="#roi"
              className="px-4 py-2 text-sm font-semibold text-[#142127] hover:bg-[#142127]/5 rounded-full transition-colors"
            >
              Results & ROI
            </a>

            <a
              href="#framework"
              className="px-4 py-2 text-sm font-semibold text-[#142127] hover:bg-[#142127]/5 rounded-full transition-colors"
            >
              Framework
            </a>

            <a
              href="#team"
              className="px-4 py-2 text-sm font-semibold text-[#142127] hover:bg-[#142127]/5 rounded-full transition-colors"
            >
              Team
            </a>

            <a
              href="#faq"
              className="px-4 py-2 text-sm font-semibold text-[#142127] hover:bg-[#142127]/5 rounded-full transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <DirectionalButton
              variant="dark"
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault()
                  onOpenContact()
                }
              }}
              className="px-5 py-2.5 text-sm"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </DirectionalButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white border border-[#142127] text-[#142127] shadow-sm hover:bg-[#fffa56] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#f8f8f6] border-b-[2px] border-[#142127] px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#142127] hover:text-[#fffa56] py-1 border-b border-[#142127]/10"
              >
                Services
              </a>
              <a
                href="#case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#142127] hover:text-[#fffa56] py-1 border-b border-[#142127]/10"
              >
                Case Studies
              </a>
              <a
                href="#roi"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#142127] hover:text-[#fffa56] py-1 border-b border-[#142127]/10"
              >
                Results & ROI
              </a>
              <a
                href="#framework"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#142127] hover:text-[#fffa56] py-1 border-b border-[#142127]/10"
              >
                Framework
              </a>
              <a
                href="#team"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#142127] hover:text-[#fffa56] py-1 border-b border-[#142127]/10"
              >
                Team Members
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#142127] hover:text-[#fffa56] py-1 border-b border-[#142127]/10"
              >
                FAQ
              </a>

              <div className="pt-3">
                <DirectionalButton
                  variant="dark"
                  href="#contact"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    if (onOpenContact) onOpenContact()
                  }}
                  className="w-full py-3"
                >
                  Schedule Strategy Call
                </DirectionalButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
