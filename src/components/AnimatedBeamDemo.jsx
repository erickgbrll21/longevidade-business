import { forwardRef, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faFileContract } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'
import { AnimatedBeam } from '@/components/ui/animated-beam'

const Circle = forwardRef(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      'z-10 flex size-12 items-center justify-center rounded-full border-2 border-[var(--color-line)] bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
      className,
    )}
  >
    {children}
  </div>
))

Circle.displayName = 'Circle'

export default function AnimatedBeamDemo() {
  const containerRef = useRef(null)
  const div1Ref = useRef(null)
  const div2Ref = useRef(null)

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-10"
        ref={containerRef}
      >
        <div className="flex size-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row justify-between">
            <Circle ref={div1Ref}>
              <FontAwesomeIcon icon={faUserTie} className="h-6 w-6 text-ink" />
            </Circle>
            <Circle ref={div2Ref}>
              <FontAwesomeIcon icon={faFileContract} className="h-6 w-6 text-blue" />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
          startYOffset={10}
          endYOffset={10}
          curvature={-20}
          gradientStartColor="#0288d1"
          gradientStopColor="#7cc4ef"
          pathColor="#0288d1"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
          startYOffset={-10}
          endYOffset={-10}
          curvature={20}
          reverse
          gradientStartColor="#0288d1"
          gradientStopColor="#7cc4ef"
          pathColor="#0288d1"
        />
      </div>

      <div className="text-center">
        <div className="text-4xl font-extrabold text-ink">200+</div>
        <div className="text-sm font-semibold text-gray-brand">advogados especializados</div>
      </div>
    </div>
  )
}
