import { motion } from 'framer-motion'
import { services } from '../data/data'
import { Code, Palette, Layers, Brain, Zap } from 'lucide-react'

const icons = {
  code: Code,
  palette: Palette,
  layers: Layers,
  brain: Brain,
  zap: Zap
}

export default function Services() {
  return (
    <section id="services" className="section relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-bg-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="badge mb-6 inline-block"
          >
            What We Do
          </motion.span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Services
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            We deliver comprehensive digital solutions tailored to transform your vision into reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -10 }}
                className="glass-card p-10 group card-shine"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-6 shadow-lg shadow-gold/30 group-hover:shadow-gold/50 transition-shadow"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-clash font-bold text-xl text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-primary/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect line */}
                <div className="mt-6 h-0.5 bg-gradient-to-r from-gold to-gold-dark w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}