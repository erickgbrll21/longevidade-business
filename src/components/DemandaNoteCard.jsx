import { MagicCard } from './ui/magic-card'

export default function DemandaNoteCard({ note }) {
  return (
    <div className="reveal d1 mt-11 overflow-hidden rounded-3xl border border-[var(--color-line)] shadow-[var(--shadow-sm)]">
      <MagicCard
        mode="orb"
        glowFrom="#7cc4ef"
        glowTo="#0288d1"
        gradientFrom="#7cc4ef"
        gradientTo="#0288d1"
        glowOpacity={0.55}
        glowSize={360}
        glowBlur={50}
        orbBlendMode="multiply"
        innerClassName="bg-white"
        className="rounded-3xl p-8 md:p-10"
      >
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
          <img
            src="/assets/demanda-icon.svg"
            alt=""
            className="h-28 w-28 shrink-0 rounded-2xl object-contain sm:h-32 sm:w-32"
            aria-hidden="true"
            draggable={false}
          />
          <div className="min-w-0 flex-1">
            <h4 className="mb-2 text-lg font-bold tracking-[-0.02em] text-ink md:text-xl">
              {note.title}
            </h4>
            <p className="text-[15px] leading-relaxed text-gray-brand">{note.text}</p>
          </div>
        </div>
      </MagicCard>
    </div>
  )
}
