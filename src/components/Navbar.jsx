import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Code2, Cpu, Globe, Layers, ArrowUpRight } from 'lucide-react'

// Phunk signature brand geometric SVG mark
export function PhunkBrandLogo({ className = "h-8 w-auto" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.172 20.1893H9.78247C9.78004 17.5933 8.7486 15.1044 6.91456 13.2688C5.08052 11.4332 2.59372 10.4009 0 10.3984L0 0C5.34771 0.00730689 10.4743 2.13673 14.2557 5.92138C18.0371 9.70602 20.1647 14.837 20.172 20.1893Z" fill="#00E5D1"/>
        <path d="M20.172 41.0001H9.78247C9.78004 38.4041 8.7486 35.9152 6.91456 34.0796C5.08052 32.244 2.59372 31.2117 0 31.2092L0 20.8108C5.34771 20.8181 10.4743 22.9475 14.2557 26.7322C18.0371 30.5168 20.1647 35.6478 20.172 41.0001Z" fill="#00E5D1"/>
        <path d="M40.965 41.0001C35.6169 40.994 30.4896 38.865 26.7079 35.08C22.9263 31.2951 20.7991 26.1635 20.793 20.8108H31.1825C31.185 23.4067 32.2164 25.8957 34.0504 27.7313C35.8845 29.5669 38.3713 30.5992 40.965 30.6016V41.0001Z" fill="#00E5D1"/>
        <path d="M40.965 20.1893C35.6173 20.182 30.4907 18.0526 26.7093 14.2679C22.9279 10.4833 20.8003 5.35229 20.793 0L31.1825 0C31.185 2.59594 32.2164 5.08487 34.0504 6.92048C35.8845 8.75609 38.3713 9.7884 40.965 9.79084V20.1893Z" fill="#00E5D1"/>
      </svg>
      <span className="font-bold text-xl tracking-tight text-white flex items-center">
        Trigon<span className="text-[#00E5D1]">.</span>
      </span>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'services', 'work', 'why-us', 'reviews', 'team', 'contact']
      for (const section of sections.slice().reverse()) {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#030303]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl'
          : 'py-6 bg-gradient-to-b from-[#030303] via-[#030303]/80 to-transparent'
      }`}
    >
      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <PhunkBrandLogo />
        </a>

        {/* Desktop Nav - Floating Pill Capsule */}
        <nav className="hidden lg:flex items-center bg-[#121216]/80 backdrop-blur-xl border border-white/[0.08] rounded-full p-1.5 shadow-xl shadow-black/50">
          <a
            href="#home"
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSection === 'home'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Home
          </a>

          <a
            href="#about"
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSection === 'about'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            About Us
          </a>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <a
              href="#services"
              className={`px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 transition-all ${
                activeSection === 'services'
                  ? 'bg-white/10 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </a>

            <AnimatePresence>
              {servicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-[#0d0d10] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl"
                >
                  <div className="text-[10px] uppercase font-semibold text-[#00E5D1] tracking-wider mb-2 px-2">
                    Our Expertise
                  </div>
                  <div className="space-y-1">
                    <a
                      href="#services"
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-[#00E5D1] mt-0.5">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-[#00E5D1] transition-colors">Web Design & Dev</div>
                        <div className="text-[11px] text-neutral-400 leading-tight">High-conversion, fluid web platforms</div>
                      </div>
                    </a>

                    <a
                      href="#services"
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#25ADF9] mt-0.5">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-[#25ADF9] transition-colors">Software Architecture</div>
                        <div className="text-[11px] text-neutral-400 leading-tight">Custom full-stack web & cloud apps</div>
                      </div>
                    </a>

                    <a
                      href="#services"
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mt-0.5">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-purple-400 transition-colors">AI & Machine Learning</div>
                        <div className="text-[11px] text-neutral-400 leading-tight">Computer vision & neural automation</div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/[0.08] px-2 flex justify-between items-center text-xs">
                    <span className="text-neutral-400 text-[11px]">Ready to build?</span>
                    <a href="#contact" onClick={() => setServicesDropdown(false)} className="text-[#00E5D1] hover:underline flex items-center gap-1 text-[11px] font-medium">
                      Talk to us <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#work"
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSection === 'work'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Work
          </a>

          <a
            href="#why-us"
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSection === 'why-us'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Why Us
          </a>

          <a
            href="#reviews"
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSection === 'reviews'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Reviews
          </a>

          <a
            href="#team"
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSection === 'team'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Team
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="button text-xs hidden sm:inline-flex">
            <span>Talk to us</span>
            <div className="button_hover" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0d] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <a
                href="#home"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-white hover:text-[#00E5D1]"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-white hover:text-[#00E5D1]"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-white hover:text-[#00E5D1]"
              >
                Services
              </a>
              <a
                href="#work"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-white hover:text-[#00E5D1]"
              >
                Work / Portfolio
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-white hover:text-[#00E5D1]"
              >
                Why Work With Us
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-white hover:text-[#00E5D1]"
              >
                Client Reviews
              </a>
              <a
                href="#team"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-white hover:text-[#00E5D1]"
              >
                Our Developers
              </a>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="button w-full justify-center text-sm py-3"
                >
                  <span>Launch a project</span>
                  <div className="button_hover" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
