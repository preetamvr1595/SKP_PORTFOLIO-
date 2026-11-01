import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { stats } from '../data/data'

function useCountUp(target, isVisible) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2200
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, isVisible])
  return count
}

function StatItem({ stat, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const count = useCountUp(stat.value, visible)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55 }}
      className="flex flex-col items-center text-center px-4"
    >
      <div
        className="text-4xl md:text-5xl font-bold mb-2 span_gradient"
        style={{
          WebkitTextFillColor: 'transparent',
          backgroundImage: 'linear-gradient(158deg, #00e5d1 3%, #2577f9 99%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        {count}{stat.suffix}
      </div>
      <div className="text-sm font-medium text-neutral-400 uppercase tracking-wider">{stat.label}</div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 border-y border-white/[0.06] bg-[#050507] relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(37, 173, 249, 0.07) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/[0.06]">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
