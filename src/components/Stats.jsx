import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { stats } from '../data/data'
import { Users, Code, Star, Award } from 'lucide-react'

const icons = [Users, Code, Star, Award]

function AnimatedCounter({ value, suffix, isVisible }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [value, isVisible])

  return <span>{count}{suffix}</span>
}

function StatCard({ stat, index, icon: Icon }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="cyber-stat flex flex-col justify-center py-6 bg-black border-l-2 border-[#CCFF00] pl-6 relative group"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-0 h-[1px] bg-[#CCFF00]/10 group-hover:bg-[#CCFF00]/30 transition-colors" />

      {/* Tech Icon */}
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-[#CCFF00] group-hover:scale-110 transition-transform duration-300" />
        <span className="text-[9px] tracking-[2px] font-mono font-bold text-white/30">SYS.METRIC_0{index + 1}</span>
      </div>

      {/* Counter */}
      <div className="cyber-stat-val font-black tracking-tight mb-2">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
      </div>

      {/* Label */}
      <div className="text-xs uppercase tracking-[2px] text-[#CCCCCC]/70 font-bold font-mono">
        {stat.label}
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#CCFF00]/20 group-hover:border-[#CCFF00]/60 transition-colors" />
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 relative bg-transparent">
      <div className="max-w-[1200px] w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} icon={icons[index]} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
