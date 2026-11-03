import { motion } from 'framer-motion'
import { Check, ArrowRight, Code, Brain, Palette, Zap } from 'lucide-react'
import { services } from '../data/data'
import DirectionalButton from './DirectionalButton'

export default function Services({ onOpenContact }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-6 h-6" />
      case 'brain':
        return <Brain className="w-6 h-6" />
      case 'palette':
        return <Palette className="w-6 h-6" />
      case 'zap':
        return <Zap className="w-6 h-6" />
      default:
        return <Code className="w-6 h-6" />
    }
  }

  return (
    <section id="services" className="bg-[#f8f8f6] py-24 sm:py-32 border-b-[2px] border-[#142127] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-style-tagline">
            Collective Capabilities
          </div>
          <h2 className="heading-style-h1 text-[#142127] mb-6">
            An ecosystem built for{' '}
            <span className="heading-style-italic font-editorial text-[1.12em]">
              software-led growth
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#142127]/80 leading-relaxed font-medium">
            We don&apos;t build static templates. We engineer high-performance web systems and AI applications designed to scale users, pipeline, and automated intelligence.
          </p>
        </div>

        {/* 4-Card Services Grid (Broworks Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border-[1.5px] border-[#142127] shadow-[0_12px_32px_rgba(20,33,39,0.06)] hover:shadow-[0_20px_48px_rgba(20,33,39,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row with Number and Tag */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#142127]/10">
                  <span className="font-mono text-3xl font-extrabold text-[#142127]">
                    {service.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#142127]/5 text-[#142127] text-xs font-mono font-bold uppercase tracking-wider">
                    {service.tag}
                  </span>
                </div>

                {/* Service Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#fffa56] text-[#142127] border border-[#142127] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#142127] group-hover:text-[#fffa56] transition-all duration-300 shadow-sm">
                    {getIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#142127] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-[#142127]/60">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#142127]/80 text-sm leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-[#142127]/10 mb-8">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#142127]/60 mb-2">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#142127]">
                      <div className="w-4 h-4 rounded-full bg-[#142127] text-[#fffa56] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="pt-4 flex items-center justify-between border-t border-[#142127]/10">
                <span className="text-xs font-mono text-[#142127]/60">
                  Ready to deploy in Q1/Q2
                </span>
                <a
                  href="#contact"
                  onClick={(e) => {
                    if (onOpenContact) {
                      e.preventDefault()
                      onOpenContact()
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#142127] group-hover:text-[#351593] transition-colors"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#fffa56] border-[1.5px] border-[#142127] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#142127]">
              Need a tailored software or AI architecture?
            </h4>
            <p className="text-sm text-[#142127]/80 font-medium">
              We provide free 30-minute system audits and codebase roadmaps.
            </p>
          </div>
          <DirectionalButton
            variant="dark"
            href="#contact"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault()
                onOpenContact()
              }
            }}
            className="px-6 py-3 text-sm flex-shrink-0"
          >
            <span>Talk to Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </DirectionalButton>
        </div>
      </div>
    </section>
  )
}
