import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "DevForge transformed our vision into a stunning web application. Their attention to detail and technical expertise is exceptional.",
    author: "Sarah Johnson",
    role: "CEO, TechStartup"
  },
  {
    quote: "The team's ability to combine beautiful design with robust functionality is remarkable. Our project was delivered on time and exceeded expectations.",
    author: "Michael Chen",
    role: "Product Manager, InnovateLab"
  },
  {
    quote: "Working with DevForge was a pleasure. They understood our requirements perfectly and delivered a solution that truly stands out.",
    author: "Emily Rodriguez",
    role: "Founder, DesignHub"
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section bg-cream/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-6 inline-block">Testimonials</span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-primary">
            What Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-10 md:p-14 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Quote className="w-14 h-14 text-gold mx-auto mb-8" />
              </motion.div>
              <p className="text-xl md:text-2xl text-primary/80 mb-10 leading-relaxed font-medium">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center justify-center gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-gold/30"
                >
                  {testimonials[current].author[0]}
                </motion.div>
                <div className="text-left">
                  <div className="font-bold text-primary">{testimonials[current].author}</div>
                  <div className="text-sm text-gold-dark">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="btn-secondary p-4"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="btn-primary p-4"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? 'w-10 bg-gradient-to-r from-gold to-gold-dark'
                    : 'w-2 bg-gold/30 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}