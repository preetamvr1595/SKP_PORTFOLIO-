import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
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

function App() {
  const [showSelector, setShowSelector] = useState(false)
  const [selectedProjects, setSelectedProjects] = useState(projects)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSelector(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleProjectSelect = (selected) => {
    setSelectedProjects(selected)
    setShowSelector(false)
  }

  return (
    <div className="min-h-screen relative bg-[#FDFCFA]">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-pattern opacity-50 pointer-events-none" />
      <div className="fixed top-0 left-0 w-[600px] h-[600px] orb-1 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] orb-2 pointer-events-none" />

      {/* Golden Glow Spots */}
      <div className="fixed top-1/4 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-1/4 w-[250px] h-[250px] bg-gold-dark/5 rounded-full blur-[80px] pointer-events-none" />

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