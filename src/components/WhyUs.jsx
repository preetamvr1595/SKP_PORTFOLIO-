import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'

// "Why Work With Us?" slider  — Phunk CTA slider style
const slides = [
  {
    title: 'Imagination',
    body: "We're not interested in recreating the wheel — reworking tired old layouts or reusing commercial templates. We bring a fresh pair of eyes to every project, as well as the inspiration and creative skills necessary to ensure your next project is one-of-a-kind.",
  },
  {
    title: 'Vision',
    body: "We're experts at taking the ideas you've developed, the story behind your brand, and the personality of your team, and developing them into a clear and cogent brand vision — expressed through design, technology, and narrative.",
  },
  {
    title: 'Efficiency',
    body: "We don't cut corners, but we do round them off. That means eliminating frustrating wait times between mockups, responding to messages promptly, and working in parallel to build quality work faster. We respect your time.",
  },
  {
    title: 'Fun',
    body: "We wouldn't be in this business if we didn't love it. Working with Trigon Vertex means interacting with a friendly team of professionals who are happy to share their expertise — involving you in the key decisions that make design genuinely enjoyable.",
  },
]

export default function WhyUs() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(p => (p + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(p => (p - 1 + slides.length) % slides.length), [])

  return (
    <section id="why-us" className="py-28 relative overflow-hidden">
      {/* Blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '28rem', height: '28rem',
          background: 'radial-gradient(circle, rgba(0,229,209,0.1) 0%, transparent 70%)',
          filter: 'blur(90px)',
          top: '10%', left: '-8%'
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-10 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div
            className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(0,229,209,0.15), rgba(37,119,249,0.15))' }}
          >
            <svg width="18" height="18" viewBox="0 0 41 41" fill="none">
              <path d="M20.172 20.1893H9.78247C9.78004 17.5933 8.7486 15.1044 6.91456 13.2688C5.08052 11.4332 2.59372 10.4009 0 10.3984L0 0C5.34771 0.00730689 10.4743 2.13673 14.2557 5.92138C18.0371 9.70602 20.1647 14.837 20.172 20.1893Z" fill="#3E3D3D"/>
              <path d="M20.172 41.0001H9.78247C9.78004 38.4041 8.7486 35.9152 6.91456 34.0796C5.08052 32.244 2.59372 31.2117 0 31.2092L0 20.8108C5.34771 20.8181 10.4743 22.9475 14.2557 26.7322C18.0371 30.5168 20.1647 35.6478 20.172 41.0001Z" fill="#3E3D3D"/>
              <path d="M40.965 41.0001C35.6169 40.994 30.4896 38.865 26.7079 35.08C22.9263 31.2951 20.7991 26.1635 20.793 20.8108H31.1825C31.185 23.4067 32.2164 25.8957 34.0504 27.7313C35.8845 29.5669 38.3713 30.5992 40.965 30.6016V41.0001Z" fill="#3E3D3D"/>
              <path d="M40.965 20.1893C35.6173 20.182 30.4907 18.0526 26.7093 14.2679C22.9279 10.4833 20.8003 5.35229 20.793 0L31.1825 0C31.185 2.59594 32.2164 5.08487 34.0504 6.92048C35.8845 8.75609 38.3713 9.7884 40.965 9.79084V20.1893Z" fill="#3E3D3D"/>
            </svg>
          </div>
          <h2 className="heading_standard">
            Why work
            <span className="span_gradient"> with us?</span>
          </h2>
        </div>

        {/* Slide */}
        <div
          className="rounded-3xl border border-white/[0.08] overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0d1117 0%, #070a10 100%)',
            minHeight: '340px'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start"
            >
              {/* Left: text */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  {slides[current].title}
                </h3>
                <p className="text-base text-neutral-400 leading-[1.85] max-w-xl">
                  {slides[current].body}
                </p>
                <a href="#about" className="button inline-flex items-center gap-2 mt-8 group">
                  <span>Learn more</span>
                  <div className="button_hover" />
                </a>
              </div>

              {/* Right: illustrative / accent block */}
              <div className="hidden md:flex flex-shrink-0 w-56 items-center justify-center">
                <div
                  className="w-44 h-44 rounded-3xl flex items-center justify-center text-7xl font-black select-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,229,209,0.15), rgba(37,119,249,0.15))',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(0,229,209,0.4)',
                  }}
                >
                  {`0${current + 1}`}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav controls */}
          <div className="px-10 md:px-16 pb-10 flex items-center gap-3">
            <button
              onClick={prev}
              className="slider-control-btn"
              aria-label="Previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="slider-control-btn"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Indicator dots */}
            <div className="ml-4 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-[#00E5D1]'
                      : 'w-3 bg-white/20'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
