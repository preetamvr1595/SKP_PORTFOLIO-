import { useState, useEffect } from 'react'
import { ArrowUp, ArrowRight, Github, Mail, Linkedin, Twitter, Sparkles, Globe, ExternalLink } from 'lucide-react'
import DirectionalButton from './DirectionalButton'

export default function Footer({ onOpenContact }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#142127] text-white pt-24 pb-12 border-t-[2px] border-white/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Giant Call to Action (Broworks Signature) ── */}
        <div className="pb-20 border-b border-white/15">
          <div className="max-w-4xl">
            <h2 className="heading-style-h1 text-white mb-6">
              Stop losing{' '}
              <span className="heading-style-italic font-editorial text-[#fffa56] text-[1.12em]">
                pipeline
              </span>{' '}
              to sluggish software & tech debt
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-medium max-w-2xl mb-10 leading-relaxed">
              Book a free 30-minute discovery consultation. We&apos;ll audit your current codebase, outline a clear technical roadmap, and show you how modern full-stack & AI architecture accelerates your roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <DirectionalButton
                variant="white"
                href="#contact"
                onClick={(e) => {
                  if (onOpenContact) {
                    e.preventDefault()
                    onOpenContact()
                  }
                }}
                className="px-8 py-4 text-base w-full sm:w-auto"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </DirectionalButton>

              <DirectionalButton
                variant="ghost-light"
                href="mailto:preetamvr962002@gmail.com?subject=Project%20Inquiry%20-%20Trigon%20Vertex"
                className="px-8 py-4 text-base w-full sm:w-auto"
              >
                <span>Direct Engineer Email</span>
              </DirectionalButton>
            </div>
          </div>
        </div>

        {/* ── Multi-Column Directory ── */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-b border-white/15 text-sm">
          {/* Col 1: Main */}
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#fffa56] mb-5">
              Navigation
            </div>
            <ul className="space-y-3 font-medium text-white/70">
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#roi" className="hover:text-white transition-colors">Results & ROI</a></li>
              <li><a href="#framework" className="hover:text-white transition-colors">Execution Framework</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">The Collective</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#fffa56] mb-5">
              Services
            </div>
            <ul className="space-y-3 font-medium text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Full-Stack Web Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI & Computer Vision</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud & API Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Security Auditing</a></li>
            </ul>
          </div>

          {/* Col 3: Tech Stack */}
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#fffa56] mb-5">
              Toolchain
            </div>
            <ul className="space-y-3 font-mono text-xs text-white/70">
              <li>React 18 & Vite</li>
              <li>Python & TensorFlow</li>
              <li>Node.js & Express</li>
              <li>MongoDB & Cloudinary</li>
              <li>Tailwind CSS</li>
              <li>Web Crypto API</li>
            </ul>
          </div>

          {/* Col 4: Ask AI About Us (Broworks Signature) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#fffa56] mb-5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI About Us</span>
            </div>
            <p className="text-xs text-white/60 mb-4 leading-relaxed font-medium">
              Prompt your favorite LLM directly about our engineering profile, skills, and portfolio work:
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://chatgpt.com/?q=Summarize+the+engineering+capabilities+and+portfolio+of+Trigon+Vertex+(Preetham+V+R,+Sakshi+Chavan,+Karun+Poojari)"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#fffa56] hover:text-[#142127] text-xs font-mono transition-colors border border-white/15"
              >
                ChatGPT ↗
              </a>
              <a
                href="https://claude.ai/new?q=What+are+the+core+strengths+of+Trigon+Vertex+full-stack+AI+and+cybersecurity+developers"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#fffa56] hover:text-[#142127] text-xs font-mono transition-colors border border-white/15"
              >
                Claude ↗
              </a>
              <a
                href="https://www.perplexity.ai/search?q=Trigon+Vertex+portfolio+full+stack+AI+cybersecurity+engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#fffa56] hover:text-[#142127] text-xs font-mono transition-colors border border-white/15"
              >
                Perplexity ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── Locations & Live Clock ── */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-white/15">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-sm font-bold text-white mb-1">India Engineering Hub</div>
            <div className="text-xs text-white/60 font-mono">Karnataka / Bengaluru &bull; IST (UTC+5:30)</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-sm font-bold text-white mb-1">Global Remote Delivery</div>
            <div className="text-xs text-white/60 font-mono">Async First &bull; Sprints across US/EU/APAC</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-[#fffa56]">HQ Local Clock</div>
              <div className="text-xs text-white/80 font-mono">{time || '09:30:00 AM IST'}</div>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>

        {/* ── Bottom Legal, Social & Back to Top ── */}
        <div className="pt-8 flex flex-col gap-6 text-xs text-white/60">
          {/* Preetham GitHub — Prominent Link */}
          <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
            <Github className="w-5 h-5 text-[#fffa56]" />
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
              <span className="text-white font-bold text-sm">Preetham V R</span>
              <span className="hidden sm:block text-white/30">·</span>
              <span className="text-white/60 text-xs font-mono">ML &amp; AI Agent Developer</span>
              <span className="hidden sm:block text-white/30">·</span>
              <a
                href="https://github.com/preetamvr1595"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fffa56] font-mono text-xs hover:underline font-bold flex items-center gap-1"
              >
                github.com/preetamvr1595
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/trigon-logo.png" alt="Trigon Vertex" className="w-7 h-7 object-contain" />
              <span>
                &copy; {new Date().getFullYear()} Trigon Vertex. All rights reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/preetamvr1595"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-[#fffa56] hover:text-[#142127] transition-colors"
                title="Preetham V R — GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:preetamvr962002@gmail.com"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-[#fffa56] hover:text-[#142127] transition-colors"
                title="Email Preetham"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#142127] font-mono text-[11px] transition-colors ml-4"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
