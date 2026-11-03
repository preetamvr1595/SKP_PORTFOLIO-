import { motion } from 'framer-motion'
import { frameworkSteps } from '../data/data'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Framework() {
  return (
    <section id="framework" className="bg-[#f8f8f6] py-24 sm:py-32 border-b-[2px] border-[#142127]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-style-tagline">
            Execution Methodology
          </div>
          <h2 className="heading-style-h1 text-[#142127] mb-6">
            Every project follows the same{' '}
            <span className="heading-style-italic font-editorial text-[1.12em]">
              framework
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#142127]/80 font-medium leading-relaxed">
            Predictable outcomes come from disciplined architecture. Here is how we take high-complexity systems from initial specification to production scale.
          </p>
        </div>

        {/* 4 Framework Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworkSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-7 border-[1.5px] border-[#142127] shadow-[0_8px_24px_rgba(20,33,39,0.06)] flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(20,33,39,0.12)] transition-all duration-300 group"
            >
              <div>
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-black text-xl border-[1.5px] border-[#142127] mb-6 shadow-sm group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>

                <h3 className="text-xl font-bold text-[#142127] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#142127]/80 font-medium leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#142127]/10 flex items-center gap-2 text-xs font-mono font-bold text-[#142127]/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#142127]" />
                <span>Phase 0{index + 1} Deliverable</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
