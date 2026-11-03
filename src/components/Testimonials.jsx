import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { testimonials } from '../data/data'
import DirectionalButton from './DirectionalButton'

export default function Testimonials({ onOpenContact }) {
  return (
    <section className="bg-white py-24 sm:py-32 border-b-[2px] border-[#142127] text-[#142127]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-style-tagline">
            Verified Endorsements
          </div>
          <h2 className="heading-style-h1 text-[#142127] mb-6">
            Results that speak for{' '}
            <span className="heading-style-italic font-editorial text-[1.12em]">
              themselves
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#142127]/80 font-medium">
            Hear from founders, product directors, and clients who trusted our collective with mission-critical web applications and AI algorithms.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f8f8f6] rounded-3xl p-8 sm:p-10 border-[1.5px] border-[#142127] shadow-[0_8px_24px_rgba(20,33,39,0.06)] flex flex-col justify-between hover:bg-[#fffa56]/20 transition-all duration-300"
            >
              <div>
                {/* Rating & Metric Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#142127]/10">
                  <div className="flex text-[#EF4335]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#142127] text-[#fffa56] font-mono text-xs font-bold">
                    {item.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg font-medium text-[#142127] leading-relaxed italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#142127]/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-base text-[#142127]">
                    {item.author}
                  </div>
                  <div className="text-xs font-mono text-[#142127]/60">
                    {item.role}
                  </div>
                </div>
                <Quote className="w-8 h-8 text-[#142127]/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategy Consultation Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#142127] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold tracking-tight text-white mb-1">
              Have a high-stakes project in mind?
            </h4>
            <p className="text-sm text-white/70 font-medium">
              We take on a limited number of clients each quarter to guarantee partner-level focus.
            </p>
          </div>
          <DirectionalButton
            variant="yellow"
            href="#contact"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault()
                onOpenContact()
              }
            }}
            className="px-7 py-3 text-sm flex-shrink-0"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </DirectionalButton>
        </div>
      </div>
    </section>
  )
}
