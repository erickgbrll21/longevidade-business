import { cn } from '../lib/utils'
import { Marquee } from './ui/marquee'

function ReviewCard({ quote, name, role, initials }) {
  return (
    <figure
      className={cn(
        'relative w-full min-w-0 max-w-full cursor-default overflow-hidden rounded-xl border p-3.5 sm:p-4',
        'border-white/10 bg-white/[0.05] hover:bg-white/[0.08]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue to-blue-deep text-xs font-bold text-white">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <figcaption className="text-sm font-medium text-white">{name}</figcaption>
          <p className="line-clamp-1 text-xs text-white/50 sm:line-clamp-2">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 break-words text-xs leading-relaxed text-white/80 sm:text-sm">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </figure>
  )
}

const columns = [
  { key: '1', reverse: false },
  { key: '2', reverse: true, hideBelow: 'sm' },
  { key: '3', reverse: true, hideBelow: 'lg' },
  { key: '4', reverse: false, hideBelow: 'lg' },
]

export default function TestimonialsMarquee3D({ testimonials }) {
  const reviews = testimonials.length > 3 ? testimonials : [...testimonials, ...testimonials]

  const half = reviews.length / 2
  const rows = [
    reviews.slice(0, half),
    reviews.slice(half),
    reviews.slice(0, half),
    reviews.slice(half),
  ]

  return (
    <div
      className={cn(
        'relative mx-auto flex w-full max-w-full items-center justify-center overflow-hidden',
        'h-80 sm:h-96 md:h-[26rem] lg:h-[28rem]',
        'max-sm:[perspective:none] sm:[perspective:260px] lg:[perspective:300px]',
      )}
    >
      <div
        className={cn(
          'flex w-full max-w-full flex-row items-stretch justify-center gap-2 px-4 sm:gap-4 sm:px-4 md:gap-6 lg:gap-8 lg:px-10',
          'max-sm:transform-none sm:transform-gpu sm:rotate-x-[16deg] lg:translate-z-[-50px] lg:rotate-x-[20deg]',
        )}
      >
        {columns.map(({ key, reverse, hideBelow }, index) => (
          <Marquee
            key={key}
            reverse={reverse}
            pauseOnHover
            vertical
            className={cn(
              'h-full min-w-0 max-w-full [--duration:20s] [--gap:0.75rem] sm:[--gap:1rem]',
              !hideBelow && 'w-full max-w-[min(100%,22rem)] sm:max-w-none sm:flex-1',
              hideBelow === 'sm' && 'hidden flex-1 sm:flex',
              hideBelow === 'lg' && 'hidden flex-1 lg:flex',
            )}
          >
            {rows[index].map((review) => (
              <ReviewCard key={`${review.name}-${key}`} {...review} />
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  )
}
