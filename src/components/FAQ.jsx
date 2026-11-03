import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="bg-[#142127] text-white py-24 sm:py-32 border-b-[2px] border-white/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-style-tagline-dark text-style-tagline">
            Answers & Clarity
          </div>
          <h2 className="heading-style-h1 text-white mb-6">
            What teams need to know about{' '}
            <span className="heading-style-italic font-editorial text-[#fffa56] text-[1.12em]">
              our engineering services
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-medium leading-relaxed">
            Direct, transparent answers regarding contracts, technology stack suitability, milestone pacing, and post-launch evolution.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/15 border-y border-white/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="py-6 sm:py-8 transition-colors group cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#fffa56] transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#fffa56] group-hover:text-[#142127] transition-all duration-300">
                    <Plus
                      className={`w-4 h-4 transition-transform duration-400 ease-out ${
                        isOpen ? 'rotate-45 text-[#fffa56] group-hover:text-[#142127]' : ''
                      }`}
                    />
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: [0.625, 0.05, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm sm:text-base text-white/75 leading-relaxed font-medium max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
