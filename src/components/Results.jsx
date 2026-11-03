import { motion } from 'framer-motion'
import { Check, X, TrendingUp, Zap, Clock, Shield } from 'lucide-react'
import { stats } from '../data/data'

export default function Results() {
  const comparisons = [
    {
      feature: "Direct Engineer Access",
      traditional: "Account managers & middle management lag",
      trigon: "Direct daily communication with all 3 core engineers",
    },
    {
      feature: "Turnaround Velocity",
      traditional: "Months of bureaucratic scoping",
      trigon: "Rapid sprints with weekly production deploys",
    },
    {
      feature: "AI & Deep Learning Depth",
      traditional: "Basic API wrappers without domain training",
      trigon: "Custom CNN models, computer vision & clinical datasets",
    },
    {
      feature: "Code Ownership & Hand-Off",
      traditional: "Vendor lock-in & proprietary black boxes",
      trigon: "100% clean Git repository ownership with zero lock-in",
    },
    {
      feature: "Performance Standards",
      traditional: "Bloated templates with 40-60 Lighthouse scores",
      trigon: "Audited 95+ Core Web Vitals and sub-second APIs",
    },
  ]

  return (
    <section id="roi" className="bg-[#dcd3f7] py-24 sm:py-32 border-b-[2px] border-[#142127] text-[#142127]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-style-tagline bg-white/60 border-[#142127]/20">
            Measurable Impact & ROI
          </div>
          <h2 className="heading-style-h1 text-[#142127] mb-6">
            The best return on{' '}
            <span className="heading-style-italic font-editorial text-[1.12em]">
              your technical investment
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#142127]/85 font-medium leading-relaxed">
            We operate as your high-velocity engineering arm. No agency bureaucracy, no inflated retainers—just proven software and machine learning architectures that win.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-7 border-[1.5px] border-[#142127] shadow-[0_8px_24px_rgba(20,33,39,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-[#142127] mb-2">
                  {stat.value}
                </div>
                <div className="font-bold text-base text-[#142127] mb-1">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-[#142127]/70 font-medium pt-4 border-t border-[#142127]/10">
                {stat.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Matrix Table (Broworks Signature) */}
        <div className="bg-white rounded-3xl border-[1.5px] border-[#142127] overflow-hidden shadow-[0_16px_40px_rgba(20,33,39,0.08)]">
          <div className="p-6 sm:p-8 bg-[#142127] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#fffa56]">
                The Trigon Vertex Advantage
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mt-1">
                Why Founders Choose Our Collective
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#fffa56]" />
              <span>Direct-to-Engineer Model</span>
            </div>
          </div>

          <div className="divide-y divide-[#142127]/10">
            {comparisons.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 hover:bg-[#f8f8f6] transition-colors items-center gap-4"
              >
                {/* Feature Title */}
                <div className="md:col-span-4 font-bold text-sm text-[#142127]">
                  {row.feature}
                </div>

                {/* Traditional Agency */}
                <div className="md:col-span-4 flex items-center gap-2.5 text-xs text-[#142127]/60">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{row.traditional}</span>
                </div>

                {/* Trigon Vertex Collective */}
                <div className="md:col-span-4 flex items-center gap-2.5 text-sm font-semibold text-[#142127] bg-[#fffa56]/20 p-2.5 rounded-xl border border-[#142127]/10">
                  <div className="w-5 h-5 rounded-full bg-[#142127] text-[#fffa56] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{row.trigon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
