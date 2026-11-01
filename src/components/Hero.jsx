import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'

const heroWords = [
  { word: 'web design', color: 'span_gradient' },
  { word: 'branding', color: 'span_gradient' },
  { word: 'software', color: 'span_gradient' },
  { word: 'AI solutions', color: 'span_gradient' },
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % heroWords.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0c17 0%, #030303 65%)'
      }}
    >
      {/* Animated background blurs */}
      <div
        className="background-blur is-top-left"
        style={{
          width: '38rem', height: '38rem',
          background: 'radial-gradient(circle, rgba(37, 173, 249, 0.22) 0%, transparent 70%)',
          top: '-8%', left: '-12%'
        }}
      />
      <div
        className="background-blur is-bottom-right"
        style={{
          width: '30rem', height: '30rem',
          background: 'radial-gradient(circle, rgba(0, 229, 209, 0.18) 0%, transparent 70%)',
          bottom: '5%', right: '-8%'
        }}
      />

      {/* Perspective grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-10 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <div className="pill-item inline-flex">
                <div className="pill-item-inner">Introducing Trigon Vertex</div>
              </div>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              className="home_hero_heading text-white mb-6"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="span_gradient-light">A creative agency for</span>
              <br />
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="span_gradient"
              >
                {heroWords[wordIndex].word}
              </motion.span>
              <br />
              <span className="span_gradient-light">&amp; Webflow.</span>
            </motion.h1>

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-neutral-400 mb-10 max-w-lg leading-[1.75] font-light"
            >
              We design and build websites, AI systems, and digital products for companies that care
              how they look. Based anywhere, working with clients globally.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#work" className="button group">
                <span>Launch a project</span>
                <div className="button_hover" />
              </a>
              <a href="#about" className="button is-secondary group inline-flex items-center gap-2">
                About us
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Geometric Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[480px] h-[420px]">
              {/* Main gradient backdrop card */}
              <div
                className="absolute inset-0 rounded-3xl border border-white/[0.08] overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0d1626 0%, #050a14 60%)',
                }}
              >
                {/* Stars / dots */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 480 420">
                  {[...Array(40)].map((_, i) => (
                    <circle
                      key={i}
                      cx={Math.random() * 480}
                      cy={Math.random() * 420}
                      r={Math.random() * 1.5 + 0.5}
                      fill="white"
                      opacity={Math.random() * 0.8 + 0.2}
                    />
                  ))}
                </svg>

                {/* Inner glow */}
                <div
                  className="absolute rounded-full opacity-40 blur-[60px]"
                  style={{
                    width: '220px', height: '220px',
                    background: 'radial-gradient(circle, #00E5D1 0%, transparent 70%)',
                    bottom: '-60px', left: '50%', transform: 'translateX(-50%)'
                  }}
                />
                <div
                  className="absolute rounded-full opacity-25 blur-[60px]"
                  style={{
                    width: '180px', height: '180px',
                    background: 'radial-gradient(circle, #2577F9 0%, transparent 70%)',
                    top: '-40px', right: '40px'
                  }}
                />

                {/* Phunk brand mark overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="180" height="180" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.15">
                    <path d="M20.172 20.1893H9.78247C9.78004 17.5933 8.7486 15.1044 6.91456 13.2688C5.08052 11.4332 2.59372 10.4009 0 10.3984L0 0C5.34771 0.00730689 10.4743 2.13673 14.2557 5.92138C18.0371 9.70602 20.1647 14.837 20.172 20.1893Z" fill="#00E5D1"/>
                    <path d="M20.172 41.0001H9.78247C9.78004 38.4041 8.7486 35.9152 6.91456 34.0796C5.08052 32.244 2.59372 31.2117 0 31.2092L0 20.8108C5.34771 20.8181 10.4743 22.9475 14.2557 26.7322C18.0371 30.5168 20.1647 35.6478 20.172 41.0001Z" fill="#00E5D1"/>
                    <path d="M40.965 41.0001C35.6169 40.994 30.4896 38.865 26.7079 35.08C22.9263 31.2951 20.7991 26.1635 20.793 20.8108H31.1825C31.185 23.4067 32.2164 25.8957 34.0504 27.7313C35.8845 29.5669 38.3713 30.5992 40.965 30.6016V41.0001Z" fill="#00E5D1"/>
                    <path d="M40.965 20.1893C35.6173 20.182 30.4907 18.0526 26.7093 14.2679C22.9279 10.4833 20.8003 5.35229 20.793 0L31.1825 0C31.185 2.59594 32.2164 5.08487 34.0504 6.92048C35.8845 8.75609 38.3713 9.7884 40.965 9.79084V20.1893Z" fill="#00E5D1"/>
                  </svg>
                </div>

                {/* Floating stat cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-6 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-xl px-4 py-3"
                >
                  <div className="text-[11px] text-neutral-400 mb-0.5">Projects Live</div>
                  <div className="text-xl font-bold text-white">50+</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-8 right-6 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-xl px-4 py-3"
                >
                  <div className="text-[11px] text-neutral-400 mb-0.5">Satisfaction</div>
                  <div className="text-xl font-bold span_gradient">100%</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-16 left-8 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-xl px-4 py-3"
                >
                  <div className="text-[11px] text-neutral-400 mb-0.5">Years Active</div>
                  <div className="text-xl font-bold text-white">2+</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[3px] text-neutral-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-neutral-500"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
