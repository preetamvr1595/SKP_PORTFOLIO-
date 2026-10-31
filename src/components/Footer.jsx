import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Services: ['Web Development', 'UI/UX Design', 'Full Stack Apps', 'AI/ML Solutions'],
  Company: ['About Us', 'Careers', 'Blog', 'Contact'],
  Resources: ['Portfolio', 'Documentation', 'Support', 'FAQ']
}

export default function Footer() {
  return (
    <footer className="py-16 bg-transparent border-t border-[#CCFF00] text-white relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-[#CCFF00] shadow-[0_0_10px_rgba(204,255,0,0.5)]" />

      <div className="max-w-[1200px] w-full mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand - 2 cols */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <img 
                  src="/logo.jpg" 
                  alt="Trigon Vertex" 
                  className="w-8 h-8 rounded-none border border-[#CCFF00] object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute -inset-1 border border-[#CCFF00]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-bold text-lg tracking-[4px] uppercase text-[#CCFF00] group-hover:text-white transition-colors">
                Trigon <span className="text-white group-hover:text-[#CCFF00] transition-colors">Vertex</span>
              </span>
            </a>
            <p className="text-[#CCCCCC]/60 text-xs mb-8 leading-relaxed max-w-sm">
              A cohesive team of developers creating premium digital experiences, high-performance systems, and secure web applications.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/sakshichavandvg-sketch', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#CCFF00]/30 flex items-center justify-center hover:border-[#CCFF00] bg-black/60 hover:bg-[#CCFF00]/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-[#CCFF00] group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm text-[#CCFF00] mb-6 uppercase tracking-[2px] font-mono">{title} //</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#CCCCCC]/50 text-xs hover:text-[#CCFF00] transition-colors uppercase tracking-[1px] flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#CCFF00]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#CCCCCC]/35 text-[10px] tracking-[1px] uppercase font-mono">
            © 2026 TRIGON VERTEX. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#CCCCCC]/35 text-[10px] tracking-[1px] hover:text-[#CCFF00] transition-colors uppercase font-mono">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-[#CCCCCC]/35 text-[10px] tracking-[1px] hover:text-[#CCFF00] transition-colors uppercase font-mono">
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
