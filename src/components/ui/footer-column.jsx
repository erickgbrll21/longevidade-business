import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

function LinkedInIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9h4v12H3zM10 9h3.7v1.7h.05c.5-.95 1.8-1.95 3.7-1.95 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z" />
    </svg>
  )
}

function WhatsAppIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4a.5.5 0 0 0 0-.4l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6s1.7 2.7 4.2 3.8a14 14 0 0 0 1.4.5 3.4 3.4 0 0 0 1.5.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1Z" />
    </svg>
  )
}

function InstagramIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FooterLink({ href, children, className = '' }) {
  const isExternal =
    href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

const solutionLinks = [
  { text: 'Benefícios', href: '/beneficios' },
  { text: 'Saúde e bem-estar', href: '/saude' },
  { text: 'RH e pessoas', href: '/rh' },
  { text: 'Tecnologia', href: '/ti' },
  { text: 'Proteção ao Negócio', href: '/financas' },
  { text: 'Educação', href: '/educacao' },
  { text: 'ESG', href: '/esg' },
]

const helpfulLinks = [
  { text: 'Ecossistema', href: '/#ecossistema' },
  { text: 'Diagnóstico gratuito', href: '/#diagnostico', hasIndicator: true },
  { text: 'Contato', href: '/#contato' },
]

const contactInfo = [
  {
    icon: Mail,
    text: 'contato@longevidadebusiness.com.br',
    href: 'mailto:contato@longevidadebusiness.com.br',
  },
  {
    icon: Phone,
    text: '+55 (19) 99804-5442',
    href: 'tel:+5519998045442',
  },
  {
    icon: MapPin,
    text: 'Rua Paulo Abacherli, 200 · Swiss Park · Campinas/SP',
    isAddress: true,
  },
]

const socialLinks = [
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/augusto-motta-7b16415a/',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    href: 'https://wa.me/5519998045442',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://www.instagram.com/LongevidadeBusiness',
  },
]

const linkClass =
  'text-white/65 transition-colors hover:text-blue-pale active:text-blue-pale'

export default function FooterColumn() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-0 w-full overflow-hidden border-t border-white/10 bg-gradient-to-br from-ink via-ink-2 to-[#0f2035] pb-8 pt-12 md:pt-16">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <div className="absolute -top-12 left-1/4 h-64 w-64 rounded-full bg-blue/20 blur-3xl sm:-top-16 sm:h-72 sm:w-72" />
        <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-blue-deep/25 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="wrap relative z-10">
        <div className="footer-glass min-w-0 overflow-hidden rounded-2xl border border-blue-pale/15 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="flex min-w-0 flex-col items-center text-center sm:items-start sm:text-left">
              <Link to="/" className="mb-4 flex items-center gap-3">
                <img
                  src="/assets/logo-light.png"
                  alt="Longevidade Business"
                  className="h-12 w-auto sm:h-14"
                  draggable={false}
                />
              </Link>

              <p className="max-w-sm text-sm leading-relaxed text-white/70">
                Hub estratégico de soluções corporativas. Um único interlocutor para Benefícios,
                Saúde, RH, TI, Finanças, Educação e ESG — sem custo para a sua empresa.
              </p>

              <ul className="mt-6 flex gap-4 sm:gap-5">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full text-blue-pale transition-colors hover:text-white active:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">
              <div className="min-w-0 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-pale">
                  Soluções
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  {solutionLinks.map(({ text, href }) => (
                    <li key={text}>
                      <FooterLink href={href} className={linkClass}>
                        {text}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-pale">
                  Acesso rápido
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  {helpfulLinks.map(({ text, href, hasIndicator }) => (
                    <li key={text}>
                      <FooterLink
                        href={href}
                        className={
                          hasIndicator
                            ? `group inline-flex items-center justify-center gap-1.5 sm:justify-start ${linkClass}`
                            : linkClass
                        }
                      >
                        <span>{text}</span>
                        {hasIndicator && (
                          <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-pale opacity-75" />
                            <span className="relative inline-flex size-2 rounded-full bg-blue-pale" />
                          </span>
                        )}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-pale">
                  Contato
                </p>
                <ul className="mt-5 space-y-4 text-sm">
                  {contactInfo.map(({ icon: Icon, text, href, isAddress }) => (
                    <li key={text} className="min-w-0">
                      {href ? (
                        <a
                          href={href}
                          className="flex min-w-0 max-w-full items-start justify-center gap-2 sm:justify-start"
                        >
                          <Icon className="mt-0.5 size-4 shrink-0 text-blue-pale" aria-hidden="true" />
                          <span className={`${linkClass} min-w-0 flex-1 break-words text-left`}>{text}</span>
                        </a>
                      ) : (
                        <div className="flex min-w-0 max-w-full items-start justify-center gap-2 sm:justify-start">
                          <Icon className="mt-0.5 size-4 shrink-0 text-blue-pale" aria-hidden="true" />
                          <address className="min-w-0 flex-1 break-words not-italic text-white/65">{text}</address>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col items-center gap-2 text-center text-sm text-white/55 sm:flex-row sm:justify-between sm:text-left">
              <p>&copy; {year} Longevidade Business. Todos os direitos reservados.</p>
              <p>
                Desenvolvido por:{' '}
                <a
                  href="https://wa.me/5531997238789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} font-medium`}
                >
                  Erick Rezende
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
