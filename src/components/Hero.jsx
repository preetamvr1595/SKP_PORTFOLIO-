import { motion } from 'framer-motion'
import { ArrowRight, Github, Terminal } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="badge mb-8 inline-flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Available for Projects
          </motion.div>

          {/* Headline */}
          <h1 className="font-clash font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 text-primary">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              We Build
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block gradient-text-gold"
            >
              Digital
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block"
            >
              Experiences
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-primary/60 mb-10 max-w-lg leading-relaxed"
          >
            A team of 3 full-stack developers crafting premium web applications,
            AI solutions, and stunning digital experiences that captivate users
            and drive results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-5"
          >
            <a href="#projects" className="btn-primary">
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sakshichavandvg-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {['React', 'Node.js', 'Python', 'TensorFlow', 'TypeScript'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="tag cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Main Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-10 gradient-border-gold"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-4 rounded-full bg-red-400" />
                <div className="w-4 h-4 rounded-full bg-yellow-400" />
                <div className="w-4 h-4 rounded-full bg-green-400" />
              </div>
              <div className="space-y-5 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-gold" />
                  <span className="text-primary/50">const</span>
                  <span className="text-gold-dark font-semibold">team</span>
                  <span className="text-primary">=</span>
                  <span className="text-gold">'Trigon Vertex'</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary/50">const</span>
                  <span className="text-gold-dark font-semibold">projects</span>
                  <span className="text-primary">=</span>
                  <span className="text-gold">50+</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary/50">const</span>
                  <span className="text-gold-dark font-semibold">passion</span>
                  <span className="text-primary">=</span>
                  <span className="text-gold">'∞'</span>
                </div>
                <div className="text-gold mt-6 pt-4 border-t border-gold/20">
                  // Building the future ✨
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-8 -right-8 glass-card px-6 py-4"
            >
              <div className="text-3xl font-bold gradient-text-gold">50+</div>
              <div className="text-sm text-primary/60">Projects</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 glass-card px-6 py-4"
            >
              <div className="text-3xl font-bold gradient-text-gold">100%</div>
              <div className="text-sm text-primary/60">Satisfaction</div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/10 rounded-full" />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full border-dashed" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-12 rounded-full border-2 border-gold/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </motion.div>
      </motion.div>
    </section>
  )
}