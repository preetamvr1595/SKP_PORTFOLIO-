import { motion } from 'framer-motion'
import { Sparkles, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const footerLinks = {
  Services: ['Web Development', 'UI/UX Design', 'Full Stack Apps', 'AI/ML Solutions'],
  Company: ['About Us', 'Careers', 'Blog', 'Contact'],
  Resources: ['Portfolio', 'Documentation', 'Support', 'FAQ']
}

export default function Footer() {
  return (
    <footer className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
              <img src="/logo.jpg" alt="Trigon Vertex" className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-gold/30 group-hover:scale-110 transition-transform" />
              <span className="font-clash font-bold text-xl">
                <span className="text-white">Trigon Vertex</span>
              </span>
            </a>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              A team of passionate developers creating premium digital experiences
              that transform businesses and delight users.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/sakshichavandvg-sketch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Github className="w-4 h-4 text-gold" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center hover:bg-sky-500/20 transition-colors"
              >
                <Twitter className="w-4 h-4 text-sky-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Trigon Vertex. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-white/40 text-sm hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 text-sm hover:text-gold transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}