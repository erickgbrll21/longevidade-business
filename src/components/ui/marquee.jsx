import { cn } from '../../lib/utils'

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        'group overflow-hidden [--duration:40s] [--gap:1rem]',
        vertical ? 'flex h-full min-h-0 flex-col' : 'flex w-full flex-row',
        className,
      )}
    >
      <div
        className={cn(
          'flex shrink-0 [gap:var(--gap)] will-change-transform',
          vertical ? 'w-full max-w-full flex-col animate-marquee-vertical' : 'w-max flex-row animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]',
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex [gap:var(--gap)]',
              vertical ? 'w-full max-w-full flex-col' : 'shrink-0 flex-row',
            )}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
