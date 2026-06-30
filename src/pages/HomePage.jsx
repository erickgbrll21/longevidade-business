import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import siteContent from '../data/site-content.json'
import { homeSections } from '../data/homeSections'
import Button from '../components/Button'
import HtmlTitle from '../components/HtmlTitle'
import BgGlows from '../components/BgGlows'
import HeroCursorGlow from '../components/HeroCursorGlow'
import HeroDiamond from '../components/HeroDiamond'
import GradualBlur from '../components/GradualBlur/GradualBlur'
import LightPillar from '../components/LightPillar/LightPillar'
import AnimatedBeamDemo from '../components/AnimatedBeamDemo'
import FrenteIcon from '../components/FrenteIcon'
import ContactForm from '../components/ContactForm'
import ConcorreAICard from '../components/ConcorreAICard'
import DemandaNoteCard from '../components/DemandaNoteCard'
import TestimonialsMarquee3D from '../components/TestimonialsMarquee3D'

const contactItems = [
  {
    label: 'E-mail',
    value: 'contato@longevidadebusiness.com.br',
    icon: faEnvelope,
    href: 'mailto:contato@longevidadebusiness.com.br',
  },
  {
    label: 'Telefone · WhatsApp',
    value: '+55 (19) 99804-5442',
    icon: faPhone,
    href: 'tel:+5519998045442',
  },
  {
    label: 'Endereço',
    value: 'Rua Paulo Abacherli, 200 · Swiss Park · Campinas/SP',
    icon: faLocationDot,
  },
]

const { home } = siteContent
const sections = homeSections

export default function HomePage() {
  return (
    <>
      <HeroCursorGlow
        id="main"
        className="relative overflow-hidden bg-gradient-to-br from-ink via-ink-2 to-[#0f2035] px-0 pb-16 pt-[120px] text-white md:pb-20 md:pt-[140px]"
      >
        <BgGlows two />
        <div className="wrap relative z-[2] grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow light reveal in">Hub estratégico de soluções corporativas</span>
            <h1 className="reveal in d1 mb-6 text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.03em]">
              <HtmlTitle html={home.hero.titleHtml} />
            </h1>
            <p className="reveal in d2 mb-8 max-w-[560px] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-white/85">
              {home.hero.description.replace(
                'sem custo para a sua empresa.',
                '',
              )}
              <strong className="text-white">sem custo para a sua empresa.</strong>
            </p>
            <div className="reveal in d3 mb-10 flex flex-wrap gap-3">
              <Button to="/#diagnostico">
                Fazer diagnóstico gratuito <span className="transition-transform group-hover:translate-x-1">→</span>
              </Button>
              <Button to="/#frentes" variant="ghost">
                Ver soluções
              </Button>
            </div>
          </div>
          <div className="reveal in d3 flex justify-center">
            <HeroDiamond />
          </div>
        </div>
        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={1.6}
          divCount={4}
          curve="bezier"
          exponential
          zIndex={10}
        />
      </HeroCursorGlow>

      <section className="bg-ink-2 py-10">
        <div className="wrap">
          <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {home.stats.map((stat) => (
              <div
                key={stat.label}
                className="card-lift group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-br from-blue to-blue-deep" />
                <div className="text-[clamp(22px,2.4vw,32px)] font-bold tabular-nums leading-none tracking-[-0.02em] text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-medium leading-snug text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modelo" className="relative overflow-hidden bg-ink-2 py-20 text-white md:py-[100px]">
        <BgGlows />
        <div className="wrap relative z-[2] grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-pale/30 bg-gradient-to-br from-blue/15 to-blue-pale/5 px-4 py-2 text-xs font-bold tracking-wide text-blue-pale shadow-[0_4px_20px_-8px_rgba(2,136,209,0.4)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue to-blue-deep text-white">
                ✓
              </span>
              {sections.model.badge}
            </span>
            <h2 className="mb-5 text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em]">
              <HtmlTitle html={sections.model.titleHtml} />
            </h2>
            {sections.model.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mb-4 text-[17px] leading-relaxed text-white/80">
                {p.includes('condições melhores') ? (
                  <>
                    {p.split('condições melhores')[0]}
                    <strong className="text-white">condições melhores</strong>
                    {p.split('condições melhores')[1]}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>
          <div className="reveal d1 grid gap-4">
            {sections.model.points.map((point) => (
              <div
                key={point.title}
                className="group relative flex gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-pale/35 hover:bg-white/[0.08] hover:shadow-[0_12px_40px_-16px_rgba(2,136,209,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-blue before:to-blue-deep before:transition-transform before:duration-300 group-hover:before:scale-x-100"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-blue-deep/10 text-blue-pale transition-all duration-300 group-hover:scale-110 group-hover:from-blue/35 group-hover:to-blue-deep/20 group-hover:shadow-[0_0_20px_-4px_rgba(2,136,209,0.5)]">
                  ✓
                </div>
                <div>
                  <h4 className="mb-1 font-bold">{point.title}</h4>
                  <p className="text-sm leading-relaxed text-white/75">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="frentes" className="bg-bg-soft py-14 md:py-20 lg:py-[100px]">
        <div className="wrap">
          <div className="reveal mb-12 max-w-[720px]">
            <span className="eyebrow">O que fazemos</span>
            <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em]">
              Sete frentes. <span className="grad-text">Um interlocutor.</span>
            </h2>
            <p className="max-w-[65ch] text-[17px] leading-relaxed text-gray-brand">
              Em vez de gerir dezenas de fornecedores, sua empresa centraliza tudo em um único parceiro.
              Clique em cada frente para ver todos os produtos e serviços.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {home.frentes.map((frente, i) => (
              <Link
                key={frente.slug}
                to={`/${frente.slug}`}
                className="card-lift group relative block overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-sm)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-gradient-to-br before:from-blue before:to-blue-deep before:transition-transform group-hover:before:scale-x-100 group-active:before:scale-x-100 sm:p-7"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/10 to-blue-deep/10 text-blue">
                  <FrenteIcon slug={frente.slug} />
                </div>
                <h3 className="mb-2.5 text-xl font-bold tracking-[-0.02em]">{frente.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-brand">{frente.description}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {frente.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-bg-soft-2 px-2.5 py-1 text-[11.5px] font-semibold text-blue-deep"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-blue">
                  Ver soluções <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="sob-demanda" className="bg-bg-soft py-14 md:py-20 lg:py-[100px]">
        <div className="wrap">
          <div className="reveal mb-12 max-w-[720px]">
            <span className="eyebrow">{sections.demanda.eyebrow}</span>
            <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em]">
              <HtmlTitle html={sections.demanda.titleHtml} />
            </h2>
            <p className="text-[17px] leading-relaxed text-gray-brand">{sections.demanda.description}</p>
          </div>
          <div className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {sections.demanda.steps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-deep text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="mb-2 font-bold">{step.title}</h4>
                <p className="text-sm leading-relaxed text-gray-brand">{step.text}</p>
              </div>
            ))}
          </div>
          <DemandaNoteCard note={sections.demanda.note} />
        </div>
      </section>

      <section className="bg-white py-14 md:py-20 lg:py-[100px]">
        <div className="wrap">
          <div className="reveal mb-12 max-w-[720px]">
            <span className="eyebrow">Por que a Longevidade</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em]">
              O diferencial que <span className="grad-text">ninguém isolado tem.</span>
            </h2>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {sections.diferenciais.map((d, i) => (
              <div key={d.num} className={`reveal ${i === 1 ? 'd1' : i === 2 ? 'd2' : ''} px-1.5`}>
                <div className="mb-4 flex items-center gap-3 text-[15px] font-extrabold tracking-[0.1em] text-blue">
                  {d.num}
                  <span className="h-px flex-1 bg-[var(--color-line)]" />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-[-0.02em]">{d.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-gray-brand">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecossistema" className="relative overflow-hidden bg-gradient-to-br from-ink to-ink-2 py-20 text-white md:py-[100px]">
        <BgGlows two />
        <div className="wrap relative z-[2]">
          <div className="reveal mb-12 max-w-[780px]">
            <span className="eyebrow light">{sections.ecossistema.eyebrow}</span>
            <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em] text-white">
              <HtmlTitle html={sections.ecossistema.titleHtml} />
            </h2>
            <p className="text-[17px] leading-relaxed text-white/75">{sections.ecossistema.description}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {sections.ecossistema.cards.map((card, i) => (
              <div
                key={card.title}
                className={`reveal ${i === 1 ? 'd1' : i === 2 ? 'd2' : ''} card-lift rounded-3xl border p-6 sm:p-8 ${
                  card.lead
                    ? 'border-blue/45 bg-gradient-to-br from-blue/15 to-blue-deep/5'
                    : 'border-blue-pale/15 bg-white/5 hover:bg-white/[0.08]'
                }`}
              >
                <span className="mb-4 inline-block rounded-full bg-blue/20 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue-pale">
                  {card.badge}
                </span>
                <h3 className="mb-3.5 text-[23px] font-bold tracking-[-0.02em]">{card.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/70">{card.text}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-pale/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mercado-publico" className="overflow-hidden bg-bg-soft py-14 md:py-20 lg:py-[100px]">
        <div className="wrap">
          <div className="reveal mb-12 max-w-[720px]">
            <span className="eyebrow">{sections.mercadoPublico.eyebrow}</span>
            <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em]">
              <HtmlTitle html={sections.mercadoPublico.titleHtml} />
            </h2>
            <p className="text-[17px] leading-relaxed text-gray-brand">{sections.mercadoPublico.description}</p>
          </div>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="reveal space-y-5">
              {sections.mercadoPublico.steps.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue to-blue-deep text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-brand">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <ConcorreAICard card={sections.mercadoPublico.card} />
          </div>
        </div>
      </section>

      <section id="juridico" className="overflow-hidden bg-bg-soft-2 py-14 md:py-20 lg:py-[100px]">
        <div className="wrap">
          <div className="reveal mb-12 max-w-[720px]">
            <span className="eyebrow">{sections.juridico.eyebrow}</span>
            <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em]">
              <HtmlTitle html={sections.juridico.titleHtml} />
            </h2>
            <p className="text-[17px] leading-relaxed text-gray-brand">{sections.juridico.description}</p>
          </div>
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="reveal flex flex-col items-center">
              <AnimatedBeamDemo />
            </div>
            <div className="reveal d1 grid gap-4 sm:grid-cols-2">
              {sections.juridico.features.map((feat) => (
                <div key={feat.title} className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue/10 to-blue-deep/10 text-blue">
                    ⚖
                  </div>
                  <h4 className="mb-2 font-bold">{feat.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-brand">{feat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="relative overflow-hidden bg-gradient-to-br from-ink to-ink-2 py-20 text-white md:py-[100px]">
        <BgGlows two />
        <div className="wrap relative z-[2]">
          <div className="reveal mx-auto mb-12 max-w-[720px] text-center">
            <span className="eyebrow light">Quem confia na Longevidade</span>
            <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em]">
              O que dizem <span className="grad-text-light">nossos clientes.</span>
            </h2>
            <p className="text-[17px] leading-relaxed text-white/75">
              Empresas que centralizaram suas soluções e ganharam tempo, economia e segurança com um único parceiro.
            </p>
          </div>
        </div>
        <div className="relative z-[2] w-full">
          <TestimonialsMarquee3D testimonials={sections.depoimentos} />
        </div>
      </section>

      <section id="diagnostico" className="bg-white py-14 md:py-20 lg:py-[100px]">
        <div className="wrap">
          <div className="reveal relative min-h-[280px] overflow-hidden rounded-3xl bg-gradient-to-br from-blue to-blue-deep p-6 text-white shadow-[var(--shadow-blue)] sm:min-h-[320px] sm:p-10 md:min-h-[360px] md:p-14">
            <div className="pointer-events-none absolute inset-0 isolate hidden overflow-hidden rounded-[inherit] sm:block" aria-hidden="true">
              <LightPillar
                topColor="#00bcff"
                bottomColor="#0080ff"
                intensity={0.55}
                rotationSpeed={0.3}
                glowAmount={0.012}
                pillarWidth={3.5}
                pillarHeight={0.3}
                noiseIntensity={0.15}
                pillarRotation={77}
                interactive={false}
                mixBlendMode="screen"
                quality="medium"
                className="rounded-[inherit]"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-deep/50 via-blue/20 to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-[1] max-w-[560px]">
              <h2 className="mb-4 text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em]">
                Descubra o que sua empresa
                <br />
                está deixando na mesa.
              </h2>
              <p className="mb-8 text-[17px] leading-relaxed text-white/90">
                Um diagnóstico gratuito do seu potencial de economia em benefícios e fornecedores — e das soluções
                que você ainda não tem. Sem custo, sem compromisso.
              </p>
              <Button
                href="#contato"
                className="!border-none !bg-white !bg-none !text-blue-deep !shadow-sm hover:!bg-white/95 hover:!text-blue-deep"
              >
                Fazer diagnóstico gratuito →
              </Button>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/85">
                ✓ Sem custo · Sem compromisso · Resposta em até 48h
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-white pb-20 pt-10 md:pb-[100px]">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">Vamos conversar</span>
            <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em]">
              Conte seu desafio.
              <br />
              Mostramos o caminho.
            </h2>
            <p className="mb-8 max-w-[480px] text-[17px] leading-relaxed text-gray-brand">
              Centralize suas negociações em um único parceiro estratégico — sem custo. Preencha e nossa equipe
              retorna com uma análise inicial do seu cenário.
            </p>
            <div className="space-y-5">
              {contactItems.map(({ label, value, icon, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-soft-2 text-blue">
                    <FontAwesomeIcon icon={icon} className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wide text-gray-soft">{label}</span>
                    {href ? (
                      <a href={href} className="text-ink transition-colors hover:text-blue">
                        {value}
                      </a>
                    ) : (
                      <span className="text-ink break-words">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal d1">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
