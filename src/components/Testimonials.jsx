import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageSquare, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Trigon Vertex transformed our vision into a stunning web application. Their attention to detail and technical expertise is exceptional. The final product exceeded all our expectations and delivered measurable results.",
    author: "Sarah Johnson",
    role: "CEO, TechStartup"
  },
  {
    quote: "The team's ability to combine beautiful design with robust functionality is remarkable. Our project was delivered on time and exceeded expectations. I highly recommend their services.",
    author: "Michael Chen",
    role: "Product Manager, InnovateLab"
  },
  {
    quote: "Working with Trigon Vertex was a pleasure. They understood our requirements perfectly and delivered a solution that truly stands out from the competition. Professional, responsive, and highly skilled.",
    author: "Emily Rodriguez",
    role: "Founder, DesignHub"
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  return (
    <section className="py-24 relative bg-transparent">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16 border-l-4 border-[#CCFF00] pl-6"
        >
          <span className="badge mb-6 inline-block">FEEDBACK // VERIFICATIONS</span>
          <h2 className="font-bold text-4xl md:text-5xl text-white uppercase tracking-tight">
            What Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="glass-card p-10 md:p-14 text-left border border-[#CCFF00] bg-black relative overflow-hidden"
            >
              {/* Background quote mark */}
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-[#CCFF00]/5" />

              {/* Header */}
              <div className="mb-6 flex justify-between items-center">
                <span className="text-[9px] font-mono text-[#CCFF00]/50 tracking-[2px] font-bold">
                  TRANSACTION // LOG.00{current + 1}
                </span>
                <MessageSquare className="w-5 h-5 text-[#CCFF00]/60" />
              </div>
              
              {/* Quote */}
              <div className="mb-8">
                <p className="text-sm md:text-base text-white/90 mb-10 leading-[1.9] font-light italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-5 border-t border-[#CCFF00]/10 pt-6">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="w-12 h-12 border border-[#CCFF00] flex items-center justify-center text-lg font-bold text-[#CCFF00] bg-black"
                >
                  {testimonials[current].author[0]}
                </motion.div>
                <div className="text-left">
                  <div className="font-bold text-white text-sm uppercase tracking-[1px]">{testimonials[current].author}</div>
                  <div className="text-xs text-[#CCFF00] font-bold tracking-[1px] uppercase mt-0.5 font-mono">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-4">
              <button
                onClick={() => { prev(); setIsAutoPlaying(false) }}
                className="btn-secondary py-3 px-6 text-xs flex items-center gap-2 group"
                onMouseEnter={() => setIsAutoPlaying(false)}
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                PREV
              </button>
              <button
                onClick={() => { next(); setIsAutoPlaying(false) }}
                className="btn-primary py-3 px-6 text-xs flex items-center gap-2 group"
                onMouseEnter={() => setIsAutoPlaying(false)}
              >
                NEXT
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Auto-play indicator */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-[9px] font-mono tracking-[1px] transition-colors ${
                isAutoPlaying ? 'text-[#CCFF00]/60' : 'text-white/30'
              }`}
            >
              {isAutoPlaying ? 'AUTO-PLAY ON' : 'AUTO-PLAY OFF'}
            </button>
          </div>

          {/* Segmented Progress */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrent(index); setIsAutoPlaying(false) }}
                className={`h-[3px] transition-all duration-500 ${
                  index === current
                    ? 'flex-1 bg-[#CCFF00]'
                    : 'flex-1 bg-[#CCFF00]/15 hover:bg-[#CCFF00]/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="mt-4 text-right">
            <span className="text-[10px] font-mono text-white/30 tracking-[2px]">
              0{current + 1} / 0{testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
