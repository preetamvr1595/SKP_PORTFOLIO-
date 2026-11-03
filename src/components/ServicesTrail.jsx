import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function ServicesTrail() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const capabilities = [
    {
      title: "Full-Stack Modern Web Applications",
      category: "Frontend & Microservices",
      metric: "<100ms Rendering",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "AI Diagnostics & Computer Vision Pipelines",
      category: "TensorFlow & CNN Models",
      metric: "98.4% Accuracy",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Luxury E-Commerce & WhatsApp Commerce CMS",
      category: "Live Metal Feeds & MongoDB",
      metric: "3.4x Lead Velocity",
      image: "/project-images/mgs-jewellery.png",
    },
    {
      title: "Client-Side Zero-Knowledge Cryptography",
      category: "Web Crypto & AES-256",
      metric: "100% Privacy",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Geospatial Routing & Interactive Maps",
      category: "Turn-by-Turn Spatial Tech",
      metric: "Sub-meter Precision",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Computational Graph Traversal Visualizers",
      category: "Algorithms & 60fps Canvas",
      metric: "Frame-by-Frame Inspection",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80",
    },
  ]

  return (
    <section className="bg-white py-24 sm:py-32 border-b-[2px] border-[#142127] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-style-tagline">
            Specialized Capabilities
          </div>
          <h2 className="heading-style-h1 text-[#142127] mb-6">
            Move fast with{' '}
            <span className="heading-style-italic font-editorial text-[1.12em]">
              battle-tested creative & code
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#142127]/80 font-medium">
            Explore our cross-disciplinary competencies available for immediate deployment into your engineering roadmap.
          </p>
        </div>

        {/* Interactive Capability Rows */}
        <div className="border-t-[1.5px] border-[#142127]">
          {capabilities.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative border-b-[1.5px] border-[#142127] py-6 sm:py-8 px-4 sm:px-6 hover:bg-[#fffa56] transition-colors duration-300 flex items-center justify-between cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                <span className="font-mono text-xs font-bold text-[#142127]/50 group-hover:text-[#142127]">
                  0{index + 1}
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#142127]">
                  {item.title}
                </span>
              </div>

              <div className="flex items-center gap-4 sm:gap-8">
                <div className="hidden md:flex flex-col text-right">
                  <span className="text-xs font-mono font-bold text-[#142127]">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#142127]/60">
                    {item.metric}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#142127] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#142127] transition-all duration-300 flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Floating Image Preview (Hover) */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.85, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="hidden xl:block absolute right-24 top-1/2 -translate-y-1/2 w-48 h-32 rounded-2xl overflow-hidden border-[1.5px] border-[#142127] shadow-xl pointer-events-none z-30 bg-neutral-900"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80'
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
