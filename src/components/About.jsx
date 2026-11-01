import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// About section: "We're Trigon Vertex. Pleased to meet you." (Phunk style)
export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Blurred colour blobs */}
      <div
        className="background-blur is-green is-top-left"
        style={{
          width: '28rem', height: '28rem',
          background: 'radial-gradient(circle, rgba(0,229,209,0.15) 0%, transparent 70%)',
          top: '10%', left: '-10%'
        }}
      />
      <div
        className="background-blur"
        style={{
          width: '22rem', height: '22rem',
          background: 'radial-gradient(circle, rgba(37,173,249,0.12) 0%, transparent 70%)',
          bottom: '5%', right: '-8%'
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading_standard mb-6">
              {"We're "}
              <span className="span_gradient">Trigon Vertex.</span>
              <br />Pleased to meet you.
            </h2>

            <p className="text-neutral-400 text-base leading-[1.8] mb-6">
              Trigon Vertex is a full-service digital agency specialising in web design, software
              engineering, and AI-powered solutions. Our niche is storytelling — taking your raw
              ideas and vision and translating them into a clear brand narrative, expressed through
              design, technology, and user experience.
            </p>

            <p className="text-neutral-400 text-base leading-[1.8] mb-10">
              If you're looking for a forward-thinking team to build something that stands out from
              the crowd, then you're exactly where you need to be.
            </p>

            <a
              href="#contact"
              className="button inline-flex items-center gap-2 group"
            >
              Hire us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="button_hover" />
            </a>
          </motion.div>

          {/* Right: animated character / illustration card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative"
          >
            <div
              className="rounded-3xl border border-white/[0.08] overflow-hidden aspect-[4/3]"
              style={{
                background: 'linear-gradient(135deg, #0d1626 0%, #050a14 100%)',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)'
              }}
            >
              {/* Abstract geometric art like Phunk's robot/spline element */}
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Brand mark */}
                <svg width="220" height="220" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.35">
                  <path d="M20.172 20.1893H9.78247C9.78004 17.5933 8.7486 15.1044 6.91456 13.2688C5.08052 11.4332 2.59372 10.4009 0 10.3984L0 0C5.34771 0.00730689 10.4743 2.13673 14.2557 5.92138C18.0371 9.70602 20.1647 14.837 20.172 20.1893Z" fill="#00E5D1"/>
                  <path d="M20.172 41.0001H9.78247C9.78004 38.4041 8.7486 35.9152 6.91456 34.0796C5.08052 32.244 2.59372 31.2117 0 31.2092L0 20.8108C5.34771 20.8181 10.4743 22.9475 14.2557 26.7322C18.0371 30.5168 20.1647 35.6478 20.172 41.0001Z" fill="#00E5D1"/>
                  <path d="M40.965 41.0001C35.6169 40.994 30.4896 38.865 26.7079 35.08C22.9263 31.2951 20.7991 26.1635 20.793 20.8108H31.1825C31.185 23.4067 32.2164 25.8957 34.0504 27.7313C35.8845 29.5669 38.3713 30.5992 40.965 30.6016V41.0001Z" fill="#00E5D1"/>
                  <path d="M40.965 20.1893C35.6173 20.182 30.4907 18.0526 26.7093 14.2679C22.9279 10.4833 20.8003 5.35229 20.793 0L31.1825 0C31.185 2.59594 32.2164 5.08487 34.0504 6.92048C35.8845 8.75609 38.3713 9.7884 40.965 9.79084V20.1893Z" fill="#00E5D1"/>
                </svg>

                {/* Glow */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full opacity-30 blur-[50px]"
                  style={{
                    width: '200px', height: '80px',
                    background: 'linear-gradient(90deg, #00E5D1, #2577F9)'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
