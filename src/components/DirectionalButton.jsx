import { useState } from 'react'

export default function DirectionalButton({
  children,
  href,
  onClick,
  variant = 'dark', // 'dark', 'yellow', 'ghost', 'ghost-light', 'white'
  className = '',
  target,
  rel,
}) {
  const [circlePos, setCirclePos] = useState({ x: 50, y: 50, active: false })

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setCirclePos({ x, y, active: true })
  }

  const handleMouseLeave = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setCirclePos({ x, y, active: false })
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'dark':
        return {
          btn: 'bg-[#142127] text-white border-[#142127] hover:text-[#142127]',
          circle: 'bg-[#fffa56]',
        }
      case 'yellow':
        return {
          btn: 'bg-[#fffa56] text-[#142127] border-[#142127] hover:text-white',
          circle: 'bg-[#142127]',
        }
      case 'white':
        return {
          btn: 'bg-white text-[#142127] border-white hover:text-white',
          circle: 'bg-[#142127]',
        }
      case 'ghost':
        return {
          btn: 'bg-transparent text-[#142127] border-[#142127] hover:text-white',
          circle: 'bg-[#142127]',
        }
      case 'ghost-light':
        return {
          btn: 'bg-transparent text-white border-white/30 hover:text-[#142127] hover:border-white',
          circle: 'bg-white',
        }
      default:
        return {
          btn: 'bg-[#142127] text-white border-[#142127] hover:text-[#142127]',
          circle: 'bg-[#fffa56]',
        }
    }
  }

  const styles = getVariantStyles()
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`button-main relative inline-flex items-center justify-center font-medium border-[1.5px] rounded-full overflow-hidden transition-all duration-400 select-none ${styles.btn} ${className}`}
    >
      <div className="button_circle-wrapper absolute inset-0 pointer-events-none overflow-hidden rounded-full">
        <div
          className={`button_circle absolute rounded-full pointer-events-none ${styles.circle}`}
          style={{
            left: `${circlePos.x}%`,
            top: `${circlePos.y}%`,
            transform: `translate(-50%, -50%) scale(${circlePos.active ? 1.6 : 0})`,
            transition: 'transform 0.55s cubic-bezier(0.625, 0.05, 0, 1)',
          }}
        />
      </div>
      <span className="button_text relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  )
}
