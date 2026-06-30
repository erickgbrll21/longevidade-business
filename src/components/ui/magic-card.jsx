import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react'
import { cn } from '../../lib/utils'

function isOrbMode(props) {
  return props.mode === 'orb'
}

export function MagicCard(props) {
  const {
    children,
    className,
    innerClassName = 'bg-background',
    gradientSize = 200,
    gradientColor = '#262626',
    gradientOpacity = 0.8,
    gradientFrom = '#7cc4ef',
    gradientTo = '#0288d1',
    mode = 'gradient',
    orbBlendMode = 'screen',
  } = props

  const glowFrom = isOrbMode(props) ? (props.glowFrom ?? '#3cb0ef') : '#3cb0ef'
  const glowTo = isOrbMode(props) ? (props.glowTo ?? '#1560bd') : '#1560bd'
  const glowAngle = isOrbMode(props) ? (props.glowAngle ?? 90) : 90
  const glowSize = isOrbMode(props) ? (props.glowSize ?? 420) : 420
  const glowBlur = isOrbMode(props) ? (props.glowBlur ?? 60) : 60
  const glowOpacity = isOrbMode(props) ? (props.glowOpacity ?? 0.9) : 0.9

  const [compactGlow, setCompactGlow] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px), (pointer: coarse)')
    const update = () => setCompactGlow(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const effectiveGlowSize = compactGlow ? Math.min(glowSize, 260) : glowSize
  const effectiveGlowBlur = compactGlow ? Math.min(glowBlur, 40) : glowBlur

  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const orbX = useSpring(mouseX, { stiffness: 250, damping: 30, mass: 0.6 })
  const orbY = useSpring(mouseY, { stiffness: 250, damping: 30, mass: 0.6 })
  const orbVisible = useSpring(0, { stiffness: 300, damping: 35 })

  const modeRef = useRef(mode)
  const glowOpacityRef = useRef(glowOpacity)
  const gradientSizeRef = useRef(gradientSize)

  useEffect(() => {
    modeRef.current = mode
  }, [mode])

  useEffect(() => {
    glowOpacityRef.current = glowOpacity
  }, [glowOpacity])

  useEffect(() => {
    gradientSizeRef.current = gradientSize
  }, [gradientSize])

  const reset = useCallback(
    (reason = 'leave') => {
      const currentMode = modeRef.current

      if (currentMode === 'orb') {
        if (reason === 'enter') orbVisible.set(glowOpacityRef.current)
        else orbVisible.set(0)
        return
      }

      const off = -gradientSizeRef.current
      mouseX.set(off)
      mouseY.set(off)
    },
    [mouseX, mouseY, orbVisible],
  )

  const handlePointerMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY],
  )

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    reset('init')
  }, [reset])

  useEffect(() => {
    const handleGlobalPointerOut = (e) => {
      if (!e.relatedTarget) reset('global')
    }
    const handleBlur = () => reset('global')
    const handleVisibility = () => {
      if (document.visibilityState !== 'visible') reset('global')
    }

    window.addEventListener('pointerout', handleGlobalPointerOut)
    window.addEventListener('blur', handleBlur)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('pointerout', handleGlobalPointerOut)
      window.removeEventListener('blur', handleBlur)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [reset])

  const borderBackground = useMotionTemplate`
    linear-gradient(transparent 0 0) padding-box,
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom},
      ${gradientTo},
      rgba(124, 196, 239, 0.15) 100%
    ) border-box
  `

  const gradientSpotlight = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientColor},
      transparent 100%
    )
  `

  return (
    <motion.div
      className={cn(
        'group relative isolate overflow-hidden rounded-[inherit] border border-transparent',
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => reset('leave')}
      onPointerEnter={() => reset('enter')}
      style={{ background: borderBackground }}
    >
      <div className={cn('absolute inset-px z-20 rounded-[inherit]', innerClassName)} />

      {mode === 'gradient' && (
        <motion.div
          className="pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: gradientSpotlight,
            opacity: gradientOpacity,
          }}
        />
      )}

      {mode === 'orb' && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute z-30"
          style={{
            width: effectiveGlowSize,
            height: effectiveGlowSize,
            x: orbX,
            y: orbY,
            translateX: '-50%',
            translateY: '-50%',
            borderRadius: 9999,
            filter: `blur(${effectiveGlowBlur}px)`,
            opacity: orbVisible,
            background: `linear-gradient(${glowAngle}deg, ${glowFrom}, ${glowTo})`,
            mixBlendMode: orbBlendMode,
            willChange: 'transform, opacity',
          }}
        />
      )}

      <div className="relative z-40">{children}</div>
    </motion.div>
  )
}
