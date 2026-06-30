import Button from './Button'
import { MagicCard } from './ui/magic-card'

export default function ConcorreAICard({ card }) {
  return (
    <div className="reveal d1 overflow-hidden rounded-3xl border border-[var(--color-line)] shadow-[var(--shadow-sm)]">
      <MagicCard
        mode="orb"
        glowFrom="#7cc4ef"
        glowTo="#0288d1"
        gradientFrom="#7cc4ef"
        gradientTo="#0288d1"
        glowOpacity={0.55}
        glowSize={320}
        glowBlur={40}
        orbBlendMode="multiply"
        innerClassName="bg-white"
        className="rounded-3xl p-6 text-ink sm:p-8 md:p-10"
      >
        <div className="pointer-events-none absolute -right-[100px] -top-[140px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(2,136,209,0.12),transparent_65%)]" />
        <div className="relative">
          <span className="mb-5 inline-flex rounded-full border border-blue/20 bg-blue/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.1em] text-blue-deep">
            {card.badge}
          </span>
          <img
            src="/assets/logo-concorreai.png"
            alt="ConcorreAI"
            className="mb-4 h-10 w-auto max-w-[220px] object-contain object-left md:h-12"
            draggable={false}
          />
          <p className="mb-6 text-[15px] leading-relaxed text-gray-brand">{card.text}</p>
          <ul className="mb-8 space-y-2.5">
            {card.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray-brand">
                <span className="font-bold text-blue">✓</span> {f}
              </li>
            ))}
          </ul>
          <Button to="/#diagnostico" className="w-full justify-center">
            Quero avaliar meu potencial →
          </Button>
        </div>
      </MagicCard>
    </div>
  )
}
