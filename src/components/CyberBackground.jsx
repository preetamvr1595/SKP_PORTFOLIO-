import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/* ─────────────────────────────────────────────
   ADVANCED CANVAS PARTICLE SYSTEM
   - 150+ particles with varied behaviors
   - Dynamic connecting lines (proximity-based)
   - Floating upward with drift
   - Responsive to window resize
   ───────────────────────────────────────────── */

export default function CyberBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId = null
    let particles = []
    
    const PARTICLE_COUNT = 180
    const CONNECTION_DIST = 120
    const MOUSE_RADIUS = 150

    let mouseX = -1000
    let mouseY = -1000
    let mouseActive = false

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(0.2 + Math.random() * 0.6),
      size: 1 + Math.random() * 2.5,
      opacity: 0.2 + Math.random() * 0.5,
      glow: Math.random() > 0.7,
      pulseSpeed: 0.5 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
    })

    const init = () => {
      resize()
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle)
    }

    const drawParticle = (p, time) => {
      const pulse = 0.7 + 0.3 * Math.sin(time * p.pulseSpeed + p.phase)
      const alpha = p.opacity * pulse
      
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(204, 255, 0, ${alpha})`
      ctx.fill()

      if (p.glow) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
        gradient.addColorStop(0, `rgba(204, 255, 0, ${alpha * 0.4})`)
        gradient.addColorStop(1, 'rgba(204, 255, 0, 0)')
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    const drawConnections = (time) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.3
            const pulse = 0.6 + 0.4 * Math.sin(time * 0.5 + particles[i].phase)
            
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(204, 255, 0, ${alpha * pulse})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      mouseActive = true
    }

    const handleMouseLeave = () => {
      mouseActive = false
    }

    const animate = (timestamp) => {
      const time = timestamp / 1000
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // Subtle horizontal drift
        p.vx += (Math.random() - 0.5) * 0.02
        p.vx = Math.max(-0.5, Math.min(0.5, p.vx))

        // Mouse interaction
        if (mouseActive) {
          const dx = p.x - mouseX
          const dy = p.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_RADIUS) {
            const force = (1 - dist / MOUSE_RADIUS) * 0.5
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        // Wrap around
        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
      }

      // Draw connections first (behind)
      drawConnections(time)

      // Draw particles
      for (const p of particles) {
        drawParticle(p, time)
      }

      animationId = requestAnimationFrame(animate)
    }

    init()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* Canvas Particle System */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.9 }}
      />

      {/* Static HUD Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {/* Corner coordinate brackets */}
        <div className="absolute top-8 left-8 flex flex-col gap-1 opacity-20">
          <div className="text-[8px] font-mono text-[#CCFF00] tracking-[2px]">N 34° 03' 12"</div>
          <div className="text-[8px] font-mono text-[#CCFF00] tracking-[2px]">E 118° 15' 07"</div>
          <div className="w-8 h-[1px] bg-[#CCFF00]/40 mt-2" />
        </div>

        <div className="absolute top-8 right-8 flex flex-col items-end gap-1 opacity-20">
          <div className="text-[8px] font-mono text-[#CCFF00] tracking-[2px]">SYS: ONLINE</div>
          <div className="text-[8px] font-mono text-[#CCFF00]/60 tracking-[2px]">UPTIME: 99.97%</div>
          <div className="w-8 h-[1px] bg-[#CCFF00]/40 mt-2" />
        </div>

        <div className="absolute bottom-8 left-8 flex flex-col gap-1 opacity-20">
          <div className="text-[8px] font-mono text-[#CCFF00] tracking-[2px]">v2.4.1 // BUILD 2026</div>
          <div className="w-8 h-[1px] bg-[#CCFF00]/40" />
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-end gap-1 opacity-20">
          <div className="text-[8px] font-mono text-[#CCFF00] tracking-[2px]">TRIGON_VERTEX</div>
          <div className="w-8 h-[1px] bg-[#CCFF00]/40" />
        </div>

        {/* Horizontal scan line */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-[#CCFF00]/5"
            style={{ top: `${5 + i * 5}%` }}
            animate={{ opacity: [0.02, 0.08, 0.02] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Vertical scan lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-[#CCFF00]/5"
            style={{ left: `${2 + i * 8.5}%` }}
            animate={{ opacity: [0.02, 0.06, 0.02] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}

        {/* Floating coordinate labels */}
        {[
          { text: 'LAT: 34.0522', x: '15%', y: '25%', delay: 0 },
          { text: 'LNG: 118.2437', x: '75%', y: '40%', delay: 1.5 },
          { text: 'ALT: 101.2m', x: '10%', y: '60%', delay: 3 },
          { text: 'HDOP: 0.84', x: '80%', y: '70%', delay: 4.5 },
          { text: 'SAT: 12', x: '20%', y: '45%', delay: 2 },
          { text: 'SIG: -62dBm', x: '70%', y: '20%', delay: 5 },
          { text: 'FRAME: 60FPS', x: '85%', y: '55%', delay: 1 },
          { text: 'TX: 4.2MB', x: '12%', y: '78%', delay: 3.5 },
          { text: 'RX: 2.8MB', x: '88%', y: '85%', delay: 2.5 },
          { text: 'NODE: ACTIVE', x: '45%', y: '90%', delay: 4 },
        ].map((label, i) => (
          <motion.div
            key={`label-${i}`}
            className="absolute text-[7px] font-mono text-[#CCFF00]/20 tracking-[1.5px] select-none hidden md:block"
            style={{ left: label.x, top: label.y }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: label.delay }}
          >
            {label.text}
          </motion.div>
        ))}

        {/* Crosshair indicators */}
        {[
          { x: '25%', y: '30%' },
          { x: '75%', y: '25%' },
          { x: '20%', y: '70%' },
          { x: '80%', y: '75%' },
          { x: '50%', y: '15%' },
          { x: '50%', y: '85%' },
          { x: '10%', y: '50%' },
          { x: '90%', y: '50%' },
        ].map((pos, i) => (
          <motion.div
            key={`cross-${i}`}
            className="absolute hidden lg:block"
            style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
            animate={{ opacity: [0.08, 0.25, 0.08] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <line x1="8" y1="0" x2="8" y2="16" stroke="#CCFF00" strokeWidth="0.5" />
              <line x1="0" y1="8" x2="16" y2="8" stroke="#CCFF00" strokeWidth="0.5" />
              <circle cx="8" cy="8" r="2" fill="none" stroke="#CCFF00" strokeWidth="0.3" />
            </svg>
          </motion.div>
        ))}

        {/* Tick marks on edges */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`tick-l-${i}`}
            className="absolute w-[6px] h-[1px] bg-[#CCFF00]/15 hidden lg:block"
            style={{ left: '3px', top: `${8 + i * 9}%` }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`tick-r-${i}`}
            className="absolute w-[6px] h-[1px] bg-[#CCFF00]/15 hidden lg:block"
            style={{ right: '3px', top: `${8 + i * 9}%` }}
          />
        ))}
      </div>

      {/* Screen overlay effects */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </>
  )
}
