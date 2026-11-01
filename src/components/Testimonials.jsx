import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStartup',
    initials: 'SJ',
    quote:
      "Trigon Vertex transformed our vision into a stunning web application. Their attention to detail and technical expertise is exceptional. The final product exceeded all our expectations and delivered measurable results.",
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateLab',
    initials: 'MC',
    quote:
      "The team's ability to combine beautiful design with robust functionality is remarkable. Our project was delivered on time and exceeded expectations. I highly recommend their services to anyone looking for premium digital work.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, DesignHub',
    initials: 'ER',
    quote:
      "Working with Trigon Vertex was a pleasure. They understood our requirements perfectly and delivered a solution that truly stands out from the competition. Professional, responsive, and highly skilled.",
  },
  {
    name: 'Jordan Sims',
    role: 'Director, BoxIQ Dubai',
    initials: 'JS',
    quote:
      "The team were brilliant throughout the entire process. Super responsive and fair pricing. I would highly recommend Trigon Vertex for all web development and design needs — incredibly talented.",
  },
  {
    name: 'Alex Lambert',
    role: 'Partner, LambertCo',
    initials: 'AL',
    quote:
      "Our new platform is regularly complimented by clients. The sleek, modern design fits perfectly and really helps us stand out from competitors in a crowded market.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const next = useCallback(() => setCurrent(p => (p + 1) % TESTIMONIALS.length), [])
  const prev = useCallback(() => setCurrent(p => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [])

  useEffect(() => {
    if (!autoPlay) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [autoPlay, next])

  return (
    <section id="reviews" className="py-28 bg-[#040407] relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '28rem', height: '28rem',
          background: 'radial-gradient(circle, rgba(37,173,249,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: 0, right: '5%'
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="heading_standard mb-3">
            What our clients think of{' '}
            <span className="span_gradient">Trigon Vertex.</span>
          </h2>
          <p className="text-neutral-400 text-base">
            We're honest about our skills and abilities — and we're delighted that our clients agree.
          </p>
        </motion.div>

        {/* Client slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Cards row */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {/* Show 1–3 cards centred on current */}
                {[-1, 0, 1].map(offset => {
                  const idx = (current + offset + TESTIMONIALS.length) % TESTIMONIALS.length
                  const t = TESTIMONIALS[idx]
                  const isCenter = offset === 0
                  return (
                    <div
                      key={idx}
                      className={`home_clients_card ${!isCenter ? 'hidden lg:block opacity-40' : ''}`}
                    >
                      {/* Author */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                            style={{
                              background: 'linear-gradient(135deg, #00E5D1, #2577F9)',
                              color: '#030303'
                            }}
                          >
                            {t.initials}
                          </div>
                          <div>
                            <div
                              className="text-lg font-semibold"
                              style={{
                                WebkitTextFillColor: 'transparent',
                                backgroundImage: 'linear-gradient(158deg, #00e5d1 3%, #2577f9 99%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                              }}
                            >
                              {t.name}
                            </div>
                            <div className="text-xs text-neutral-400">{t.role}</div>
                          </div>
                        </div>
                        {/* Star rating */}
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3.5 h-3.5 text-[#00E5D1]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-neutral-400 leading-[1.8] italic">
                        "{t.quote}"
                      </p>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setAutoPlay(false) }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-[#00E5D1]' : 'w-2.5 bg-white/20'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => { prev(); setAutoPlay(false) }}
                className="slider-control-btn"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => { next(); setAutoPlay(false) }}
                className="slider-control-btn"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
