import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectSelector from './components/ProjectSelector'
import { projects, teamMembers } from './data/data'
import CyberBackground from './components/CyberBackground'
import ThreeDBackground from './components/ThreeDBackground'

function App() {
  const [showSelector, setShowSelector] = useState(false)
  const [selectedProjects, setSelectedProjects] = useState(projects)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for initial entrance
    const loadTimer = setTimeout(() => setLoading(false), 1200)
    
    // Project selector
    const selectorTimer = setTimeout(() => {
      setShowSelector(true)
    }, 2000)

    // Scroll progress & back-to-top
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(Math.min(progress, 100))
      setShowBackToTop(scrollTop > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      clearTimeout(loadTimer)
      clearTimeout(selectorTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleProjectSelect = (selected) => {
    setSelectedProjects(selected)
    setShowSelector(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen relative bg-black">
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="border border-[#CCFF00] p-8 relative"
              >
                <div className="text-[#CCFF00] font-bold text-2xl tracking-[6px] font-mono">
                  TRIGON VERTEX
                </div>
                <div className="absolute -top-[1px] left-0 right-0 h-[1px] bg-[#CCFF00]"
                  style={{ boxShadow: '0 0 8px rgba(204, 255, 0, 0.8)' }} />
              </motion.div>
              
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-[#CCFF00]"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#CCCCCC]/40 text-[10px] tracking-[3px] font-mono uppercase"
              >
                Initializing Systems...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 bg-dots opacity-70 pointer-events-none" />
      <CyberBackground />
      <ThreeDBackground />
      <div className="fixed top-0 left-0 w-[600px] h-[600px] orb-1 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] orb-2 pointer-events-none" />

      {/* Glow Spots */}
      <div className="fixed top-1/4 right-1/4 w-[400px] h-[400px] bg-[#CCFF00]/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-1/4 w-[350px] h-[350px] bg-[#CCFF00]/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Noise Texture Overlay */}
      <div className="grain-overlay" />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects projects={selectedProjects} />
        <Team members={teamMembers} />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-black border border-[#CCFF00] text-[#CCFF00] flex items-center justify-center hover:bg-[#CCFF00] hover:text-black transition-all duration-300 group"
          >
            <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSelector && (
          <ProjectSelector
            allProjects={projects}
            onSelect={handleProjectSelect}
            onClose={() => setShowSelector(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App