import { useEffect, useRef, useState } from 'react'
import { useHeroCursor } from './HeroCursorGlow'

export default function HeroDiamond({ className = '' }) {
  const wrapRef = useRef(null)
  const { active, x, y } = useHeroCursor()
  const [near, setNear] = useState(false)

  useEffect(() => {
    if (!active || !wrapRef.current) {
      setNear(false)
      return
    }

    const rect = wrapRef.current.getBoundingClientRect()
    const parent = wrapRef.current.closest('.hero-interactive')
    if (!parent) return

    const parentRect = parent.getBoundingClientRect()
    const cx = rect.left - parentRect.left + rect.width / 2
    const cy = rect.top - parentRect.top + rect.height / 2
    const dist = Math.hypot(x - cx, y - cy)
    setNear(dist < rect.width * 0.75)
  }, [active, x, y])

  return (
    <div
      ref={wrapRef}
      className={`group relative flex h-[380px] w-[380px] items-center justify-center ${near ? 'diamond-cursor-near' : ''} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full border border-blue-pale/20 transition-colors duration-300 [.hero-interactive[data-cursor=on]_&]:border-blue-pale/35" />
      <div className="absolute inset-[34px] rounded-full border border-blue-pale/10 transition-colors duration-300 [.hero-interactive[data-cursor=on]_&]:border-blue/25" />
      <div className="absolute inset-[68px] rounded-full border border-blue-pale/[0.06] transition-colors duration-300 [.hero-interactive[data-cursor=on]_&]:border-blue-light/20" />

      <div className="diamond-stage relative z-[1] flex h-[340px] w-[340px] items-center justify-center">
        <div className="diamond-cursor-shine pointer-events-none absolute inset-[8%] rounded-full opacity-0 transition-opacity duration-200 [.diamond-cursor-near_&]:opacity-100" />
        <div className="diamond-float relative flex h-[320px] w-[320px] items-center justify-center">
          <img
            src="/assets/hero-diamond.png"
            alt=""
            className="diamond-img h-full w-full object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}
