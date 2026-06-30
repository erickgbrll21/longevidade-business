import { createContext, useContext, useEffect, useRef, useState } from 'react'

const HeroCursorContext = createContext({ active: false, x: 0, y: 0 })

export function useHeroCursor() {
  return useContext(HeroCursorContext)
}

export default function HeroCursorGlow({ children, className = '', id }) {
  const ref = useRef(null)
  const [cursor, setCursor] = useState({ active: false, x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      setCursor({
        active: true,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }

    const onLeave = () => setCursor((prev) => ({ ...prev, active: false }))

    el.addEventListener('mousemove', onMove, { passive: true })
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <HeroCursorContext.Provider value={cursor}>
      <header
        ref={ref}
        id={id}
        data-cursor={cursor.active ? 'on' : 'off'}
        style={{
          '--hero-cx': `${cursor.x}px`,
          '--hero-cy': `${cursor.y}px`,
        }}
        className={`hero-interactive ${className}`}
      >
        {children}
      </header>
    </HeroCursorContext.Provider>
  )
}
