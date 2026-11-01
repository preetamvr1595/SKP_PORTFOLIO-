import { motion } from 'framer-motion'
import { ArrowRight, Globe, Code2, Cpu, Palette, Zap } from 'lucide-react'

const SERVICES = [
  {
    num: '01',
    icon: Globe,
    title: 'Web Design & Development',
    accent: '#00E5D1',
    description:
      'We create stunning, engaging, and high-conversion websites. Search engine optimisation and cutting-edge user experience design come as standard, along with exceptional reliability, scalability, and performance.',
  },
  {
    num: '02',
    icon: Palette,
    title: 'UI/UX Design & Branding',
    accent: '#2577F9',
    description:
      'Whether you\'re building a brand from scratch or developing new campaign assets, we have a wealth of experience in logo design, brand identity, and social media presence.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Software Development',
    accent: '#25ADF9',
    description:
      'Finding an off-the-shelf app that fits your business model can be tricky. We create custom systems to meet specific needs — from bespoke portals to enterprise full-stack applications.',
  },
  {
    num: '04',
    icon: Cpu,
    title: 'AI & Machine Learning',
    accent: '#7c3aed',
    description:
      'Intelligent systems powered by deep learning algorithms. From computer vision to NLP, we turn complex AI research into practical, production-ready solutions.',
  },
  {
    num: '05',
    icon: Zap,
    title: 'Performance Optimisation',
    accent: '#f59e0b',
    description:
      'Lightning-fast applications with optimised code and efficient architectures. We make your existing systems faster, leaner, and more reliable under load.',
  },
]

function ServiceCard({ svc, index }) {
  const Icon = svc.icon
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="home_aspects_card group cursor-pointer"
    >
      {/* Image placeholder with gradient */}
      <div className="home_aspects_card_image mb-6 overflow-hidden" style={{ height: '200px' }}>
        {/* Gradient fill + icon centred */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at center, ${svc.accent}55 0%, transparent 70%)`
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="w-16 h-16 transition-all duration-500 group-hover:scale-110"
            style={{ color: svc.accent, opacity: 0.55 }}
          />
        </div>

        {/* Arrow icon (Phunk style) */}
        <div className="home_aspects_card_arrow-icon">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Number */}
      <div className="home_aspects_card_number mb-2">{svc.num}</div>

      {/* Title */}
      <h3
        className="text-xl md:text-2xl font-semibold text-white mb-3 leading-snug group-hover:text-[#00E5D1] transition-colors duration-300"
      >
        <span className="span_gradient">{svc.title}</span>
      </h3>

      <p className="text-sm text-neutral-400 leading-[1.75]">{svc.description}</p>
    </motion.a>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '30rem', height: '30rem',
          background: 'radial-gradient(circle, rgba(37,173,249,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading_standard max-w-xl">
            <span className="span_gradient">Laser-focused</span>{' '}
            on what we're good at.
          </h2>
        </motion.div>

        {/* Grid: 2 cols on md, 3 on xl */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.num} svc={svc} index={i} />
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex items-center gap-4"
        >
          <a href="#contact" className="button group">
            <span>Work with us</span>
            <div className="button_hover" />
          </a>
          <a href="#work" className="button is-secondary group inline-flex items-center gap-2">
            See our work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
