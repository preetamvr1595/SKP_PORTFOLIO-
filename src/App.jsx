import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeLogos from './components/MarqueeLogos'
import Services from './components/Services'
import Results from './components/Results'
import Projects from './components/Projects'
import ServicesTrail from './components/ServicesTrail'
import Framework from './components/Framework'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import ContactModal from './components/ContactModal'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(Math.min(progress, 100))
      setShowBackToTop(scrollTop > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-[#142127] font-sans antialiased selection:bg-[#fffa56] selection:text-[#142127]">
      {/* ── Scroll Progress Line (Broworks Clean Accent) ── */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-[#142127] z-[60] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ── Global Header & Navigation ── */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* ── Main Site Experience ── */}
      <main>
        {/* 1. Hero Section (Yellow, Editorial Typography, Radial Orbit Arc) */}
        <Hero 
          onOpenContact={() => setContactModalOpen(true)}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 2. Infinite Tech Stack & Partner Marquee */}
        <MarqueeLogos />

        {/* 3. Main Services Section (4 Pillars & Deliverables) */}
        <Services onOpenContact={() => setContactModalOpen(true)} />

        {/* 4. Results & ROI Section (Lavender #dcd3f7 + Comparison Matrix) */}
        <Results />

        {/* 5. Production Case Studies (Real Projects, Hover Stats, Filters) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Specialized Capabilities Trail (Interactive Cursor Preview) */}
        <ServicesTrail />

        {/* 7. Execution Framework (4-Step Architectural Methodology) */}
        <Framework />

        {/* 8. Core Collective / Team Section (Soft Blue #d2e7f5 + The 3 Engineers) */}
        <Team />

        {/* 9. Verified Reviews & Client Testimonials */}
        <Testimonials onOpenContact={() => setContactModalOpen(true)} />

        {/* 10. Common Inquiries & FAQ Accordion (Obsidian Teal #142127) */}
        <FAQ />
      </main>

      {/* ── Giant Footer (Directory, Ask AI, Local Clock) ── */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* ── Floating Back to Top Button ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#142127] text-white border-[1.5px] border-[#142127] shadow-xl flex items-center justify-center hover:bg-[#fffa56] hover:text-[#142127] transition-all duration-300 group"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Interactive Modals ── */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </div>
  )
}

export default App