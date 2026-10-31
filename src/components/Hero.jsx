import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'

const TECH_WORDS = ['DIGITAL', 'MODERN', 'SECURE', 'ELEGANT', 'FAST', 'SMART']

const scrambleText = (text, target, setter) => {
  let iteration = 0
  const maxIterations = 8
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/`~'

  const interval = setInterval(() => {
    setter(
      target.split('').map((char, index) => {
        if (index < iteration) return char
        return chars[Math.floor(Math.random() * chars.length)]
      }).join('')
    )

    iteration++

    if (iteration > target.length + 2) {
      setter(target)
      clearInterval(interval)
    }
  }, 40)

  return () => clearInterval(interval)
}

function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])
  return pos
}

export default function Hero() {
  const [headlineText, setHeadlineText] = useState('DIGITAL')
  const [wordIndex, setWordIndex] = useState(0)
  const [isScrambling, setIsScrambling] = useState(false)
  const mousePos = useMousePosition()

  // Text scramble effect
  const triggerScramble = useCallback(() => {
    if (isScrambling) return
    setIsScrambling(true)
    const nextIndex = (wordIndex + 1) % TECH_WORDS.length
    const cleanup = scrambleText(TECH_WORDS[nextIndex], TECH_WORDS[nextIndex], setHeadlineText)
    setWordIndex(nextIndex)
    setTimeout(() => {
      setIsScrambling(false)
    }, TECH_WORDS[nextIndex].length * 40 + 100)
    return cleanup
  }, [wordIndex, isScrambling])

  useEffect(() => {
    const timer = setInterval(() => {
      triggerScramble()
    }, 4000)
    return () => clearInterval(timer)
  }, [triggerScramble])

  // Parallax offset based on mouse
  const parallaxX = (mousePos.x / window.innerWidth - 0.5) * 20
  const parallaxY = (mousePos.y / window.innerHeight - 0.5) * 20

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
      <div className="max-w-[1200px] w-full mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="badge mb-8 inline-flex items-center gap-2 border border-[#CCFF00] group cursor-pointer"
            onClick={triggerScramble}
          >
            <span className="w-2 h-2 bg-[#CCFF00] animate-ping rounded-none" />
            <span className="text-[10px] tracking-[2px] font-bold">SYSTEM ACTIVE // READY FOR BUILD</span>
          </motion.div>

          {/* Headline with Scramble Effect */}
          <h1 className="font-bold text-4xl md:text-5xl lg:text-[64px] leading-[1.05] mb-6 uppercase text-white tracking-[-2px]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              We Build
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-[#CCFF00] gradient-text-gold relative inline-block"
              onMouseEnter={triggerScramble}
            >
              {headlineText}
              <span className="typing-cursor" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block"
            >
              Experiences
            </motion.span>
          </h1>

          {/* Subtitle with typewriter cursor */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-sm md:text-base text-[#CCCCCC]/80 mb-10 max-w-lg leading-[1.8] font-light"
          >
            A cohesive team of 3 full-stack developers crafting high-performance web applications,
            AI solutions, and ultra-premium digital interfaces that empower user engagement and scale businesses globally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-5"
          >
            <a href="#projects" className="btn-primary tracking-[2px] text-xs group">
              VIEW WORK
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/sakshichavandvg-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary tracking-[2px] text-xs group"
            >
              <Github className="w-4 h-4 group-hover:rotate-6 transition-transform" />
              GITHUB
            </a>
          </motion.div>

          {/* Tech Stack with floating tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-3 mt-14"
          >
            {['React', 'Node.js', 'Python', 'TensorFlow', 'TypeScript'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ y: -3, borderColor: '#CCFF00' }}
                className="tag text-[10px] tracking-[1px] uppercase cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Geometric HUD */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center items-center relative"
          style={{
            transform: `perspective(1000px) rotateY(${parallaxX * 0.5}deg) rotateX(${-parallaxY * 0.5}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <div className="w-[480px] h-[480px] border border-[#CCFF00]/10 flex items-center justify-center relative bg-black/40">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#CCFF00]" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#CCFF00]" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#CCFF00]" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#CCFF00]" />

            {/* Main SVG HUD */}
            <svg viewBox="0 0 400 400" className="w-[90%] h-[90%] overflow-visible">
              {/* Outer coordinates */}
              <circle cx="200" cy="200" r="170" fill="none" stroke="#CCFF00" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.15" />
              
              {/* Rotating ring 1 */}
              <motion.circle
                cx="200" cy="200" r="145"
                fill="none" stroke="#CCFF00" strokeWidth="1.5"
                strokeDasharray="80 30 15 40"
                opacity="0.4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Rotating ring 2 (counter) */}
              <motion.circle
                cx="200" cy="200" r="115"
                fill="none" stroke="#CCFF00" strokeWidth="1"
                strokeDasharray="180 15 30 15"
                opacity="0.25"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Crosshair lines */}
              <line x1="200" y1="15" x2="200" y2="385" stroke="#CCFF00" strokeWidth="0.5" opacity="0.12" />
              <line x1="15" y1="200" x2="385" y2="200" stroke="#CCFF00" strokeWidth="0.5" opacity="0.12" />
              <line x1="60" y1="60" x2="340" y2="340" stroke="#CCFF00" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.08" />
              <line x1="60" y1="340" x2="340" y2="60" stroke="#CCFF00" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.08" />

              {/* Inner rings */}
              <circle cx="200" cy="200" r="80" fill="none" stroke="#CCFF00" strokeWidth="0.8" opacity="0.15" />
              <circle cx="200" cy="200" r="50" fill="none" stroke="#CCFF00" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.3" />

              {/* Pulse sphere center */}
              <motion.circle
                cx="200" cy="200" r="18"
                fill="rgba(204, 255, 0, 0.08)"
                stroke="#CCFF00" strokeWidth="2"
                animate={{ r: [18, 22, 18], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle cx="200" cy="200" r="4" fill="#CCFF00" />
              <motion.circle
                cx="200" cy="200" r="4"
                fill="#CCFF00"
                animate={{ r: [4, 8, 4], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Connected nodes */}
              <g opacity="0.7">
                {/* Node 1 - Top Left */}
                <motion.g
                  animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <line x1="110" y1="120" x2="200" y2="200" stroke="#CCFF00" strokeWidth="0.8" opacity="0.4" />
                  <circle cx="110" cy="120" r="4" fill="#CCFF00" />
                  <circle cx="110" cy="120" r="9" fill="none" stroke="#CCFF00" strokeWidth="0.5" opacity="0.4" />
                  <text x="68" y="115" fill="#CCFF00" fontSize="7" fontFamily="monospace">SYS.NODE_01</text>
                </motion.g>

                {/* Node 2 - Top Right */}
                <motion.g
                  animate={{ y: [0, 6, 0], x: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <line x1="290" y1="130" x2="200" y2="200" stroke="#CCFF00" strokeWidth="0.8" opacity="0.4" />
                  <circle cx="290" cy="130" r="4" fill="#CCFF00" />
                  <circle cx="290" cy="130" r="9" fill="none" stroke="#CCFF00" strokeWidth="0.5" opacity="0.4" />
                  <text x="298" y="135" fill="#CCFF00" fontSize="7" fontFamily="monospace">CORE.DATA_02</text>
                </motion.g>

                {/* Node 3 - Bottom */}
                <motion.g
                  animate={{ y: [0, -10, 0], x: [0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <line x1="270" y1="290" x2="200" y2="200" stroke="#CCFF00" strokeWidth="0.8" opacity="0.4" />
                  <circle cx="270" cy="290" r="4" fill="#CCFF00" />
                  <circle cx="270" cy="290" r="9" fill="none" stroke="#CCFF00" strokeWidth="0.5" opacity="0.4" />
                  <text x="278" y="295" fill="#CCFF00" fontSize="7" fontFamily="monospace">NET.LINK_03</text>
                </motion.g>

                {/* Node 4 - Bottom Left */}
                <motion.g
                  animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <line x1="120" y1="280" x2="200" y2="200" stroke="#CCFF00" strokeWidth="0.8" opacity="0.4" />
                  <circle cx="120" cy="280" r="4" fill="#CCFF00" />
                  <circle cx="120" cy="280" r="9" fill="none" stroke="#CCFF00" strokeWidth="0.5" opacity="0.4" />
                  <text x="40" y="285" fill="#CCFF00" fontSize="7" fontFamily="monospace">DATA.STREAM_04</text>
                </motion.g>
              </g>

              {/* HUD Metrics */}
              <text x="15" y="25" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">LATENCY: 12MS</text>
              <text x="15" y="36" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">PACKETS: 100%</text>
              <text x="330" y="25" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">SEC_LVL: AAA</text>
              <text x="330" y="36" fill="#CCFF00" fontSize="6" fontFamily="monospace">GRID: ACTIVE</text>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] tracking-[3px] text-white/40 font-mono font-bold uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-[14px] h-[22px] border border-[#CCFF00]/30 flex justify-center pt-1"
        >
          <motion.div
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-[2px] h-[6px] bg-[#CCFF00]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
