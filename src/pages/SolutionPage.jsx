import { Link, Navigate } from 'react-router-dom'
import siteContent from '../data/site-content.json'
import Button from '../components/Button'
import HtmlTitle from '../components/HtmlTitle'
import FrenteIcon from '../components/FrenteIcon'
import { frenteIcons } from '../data/frenteIcons'

const labels = {
  beneficios: 'Benefícios',
  saude: 'Saúde e bem-estar',
  rh: 'RH e pessoas',
  ti: 'Tecnologia',
  financas: 'Proteção ao Negócio',
  educacao: 'Educação',
  esg: 'ESG',
}

function CardItem({ item }) {
  if (typeof item === 'string') {
    return (
      <li className="relative pl-5 text-[13.5px] leading-snug text-gray-brand before:absolute before:left-0 before:top-2 before:h-1.5 before:w-2.5 before:-rotate-45 before:border-b-2 before:border-l-2 before:border-blue">
        {item}
      </li>
    )
  }

  return (
    <li className="relative pl-5 text-[13.5px] leading-snug text-gray-brand before:absolute before:left-0 before:top-2 before:h-1.5 before:w-2.5 before:-rotate-45 before:border-b-2 before:border-l-2 before:border-blue">
      {item.text}
      {item.subitems?.length > 0 && (
        <ul className="mt-1.5 space-y-1 pl-1">
          {item.subitems.map((sub) => (
            <li key={sub} className="relative pl-3.5 text-[12.5px] text-gray-soft before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-blue/60">
              {sub}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function SolutionPage({ slug }) {
  const data = siteContent.solutions.find((s) => s.slug === slug)

  if (!data) return <Navigate to="/" replace />

  return (
    <>
      <header className="relative overflow-hidden bg-gradient-to-br from-ink to-ink-2 px-0 pb-14 pt-[120px] text-white md:pb-20 md:pt-[140px]">
        <div className="wrap relative z-[2] grid min-w-0 items-center gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            <div className="reveal mb-4 text-sm text-white/60">
              <Link to="/" className="hover:text-white">
                Início
              </Link>
              <span className="mx-2">/</span>
              <span>{labels[slug]}</span>
            </div>
            <span className="eyebrow light reveal">{data.eyebrow}</span>
            <h1 className="reveal d1 mb-5 text-[clamp(34px,4.8vw,58px)] font-bold leading-[1.1] tracking-[-0.03em]">
              <HtmlTitle html={data.titleHtml} />
            </h1>
            <p className="reveal d2 mb-8 max-w-[580px] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-white/78">
              {data.heroDescription}
            </p>
            <div className="reveal d3 flex flex-wrap gap-3">
              <Button to="/#diagnostico">Fazer diagnóstico gratuito →</Button>
              <Button to="#produtos" variant="ghost">
                Ver produtos
              </Button>
            </div>
          </div>
          <div className="reveal d1 flex justify-center px-2 sm:px-0">
            <div className="relative flex h-[clamp(132px,34vw,200px)] w-[clamp(132px,34vw,200px)] shrink-0 items-center justify-center rounded-[clamp(28px,8vw,46px)] border border-blue/30 bg-gradient-to-br from-blue/20 to-blue-deep/10 before:absolute before:-inset-[clamp(8px,2.5vw,14px)] before:rounded-[clamp(34px,9vw,54px)] before:border before:border-dashed before:border-blue/25">
              {frenteIcons[slug] ? (
                <img
                  src={frenteIcons[slug]}
                  alt=""
                  className="h-[clamp(88px,24vw,130px)] w-[clamp(88px,24vw,130px)] max-w-full object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                />
              ) : (
                <FrenteIcon
                  slug={slug}
                  className="h-[clamp(70px,20vw,90px)] w-[clamp(70px,20vw,90px)] text-blue-pale"
                />
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="bg-bg-soft py-14 md:py-[70px]">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="reveal">
            <h2 className="mb-4 text-[clamp(26px,3vw,38px)] font-bold tracking-[-0.025em]">{data.introTitle}</h2>
            <p className="text-[17px] leading-relaxed text-gray-brand">{data.introDescription}</p>
          </div>
          <div className="reveal d1 flex flex-col gap-3.5">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--color-line)] bg-white px-6 py-5"
              >
                <div className="text-[clamp(24px,5vw,30px)] font-extrabold leading-none tracking-[-0.02em] text-blue">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm font-semibold text-gray-brand">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="produtos" className="py-14 md:py-[100px]">
        <div className="wrap">
          {data.groups.map((group, gi) => (
            <div
              key={`${group.title}-${gi}`}
              className={`reveal ${gi === 1 ? 'd1' : ''} mb-12 last:mb-0 md:mb-16 ${
                group.alt ? '-mx-6 bg-bg-soft px-6 py-12 md:-mx-7 md:px-7 md:py-16' : ''
              }`}
            >
              <div className={group.alt ? 'wrap !px-0' : ''}>
                <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:items-center sm:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-blue-deep text-white sm:h-[58px] sm:w-[58px]">
                    <FrenteIcon slug={slug} className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[clamp(20px,4vw,26px)] font-extrabold tracking-[-0.02em]">{group.title}</h3>
                    <p className="text-sm text-gray-brand sm:text-[15px]">{group.subtitle}</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.cards.map((card) => (
                    <div
                      key={card.title}
                      className="card-lift rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-sm)] sm:p-6"
                    >
                      <h4 className="mb-2.5 flex items-center gap-2 text-[17px] font-bold">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue to-blue-deep" />
                        {card.title}
                      </h4>
                      <ul className="space-y-1">
                        {card.items.map((item, i) => (
                          <CardItem key={typeof item === 'string' ? item : `${item.text}-${i}`} item={item} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue to-blue-deep py-12 text-white md:py-16">
        <div className="wrap flex flex-wrap items-center justify-between gap-8">
          <h3 className="max-w-[640px] text-[clamp(24px,3vw,34px)] font-extrabold tracking-[-0.025em]">
            {data.modelStrip} — com condição de canal e suporte permanente, sem custo para você.
          </h3>
          <Button
            to="/#diagnostico"
            className="shrink-0 !border-none !bg-white !bg-none !text-blue-deep !shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] hover:!-translate-y-0.5 hover:!bg-white/95 hover:!text-blue-deep hover:!shadow-[0_12px_32px_-10px_rgba(0,0,0,0.4)]"
          >
            Falar com especialista →
          </Button>
        </div>
      </section>

      <section className="bg-white py-14 text-center md:py-[100px]">
        <div className="wrap">
          <h2 className="reveal mb-4 text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em]">
            {data.ctaTitle}
          </h2>
          <p className="reveal d1 mx-auto mb-8 max-w-[560px] text-lg leading-relaxed text-gray-brand">
            {data.ctaDescription}
          </p>
          <Button to="/#diagnostico" className="reveal d2">
            Fazer diagnóstico gratuito →
          </Button>
        </div>
      </section>
    </>
  )
}
