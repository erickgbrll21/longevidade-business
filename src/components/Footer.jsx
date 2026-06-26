import { Footer } from './ui/modem-animated-footer'

const iconClass = 'h-6 w-6'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9h4v12H3zM10 9h3.7v1.7h.05c.5-.95 1.8-1.95 3.7-1.95 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4a.5.5 0 0 0 0-.4l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6s1.7 2.7 4.2 3.8a14 14 0 0 0 1.4.5 3.4 3.4 0 0 0 1.5.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={iconClass} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/augusto-motta-7b16415a/',
    label: 'LinkedIn',
    external: true,
  },
  {
    icon: <WhatsAppIcon />,
    href: 'https://wa.me/5519998045442',
    label: 'WhatsApp',
    external: true,
  },
  {
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/LongevidadeBusiness',
    label: 'Instagram',
    external: true,
  },
]

const navLinks = [
  { label: 'Benefícios', href: '/beneficios' },
  { label: 'RH e pessoas', href: '/rh' },
  { label: 'Tecnologia', href: '/ti' },
  { label: 'Finanças', href: '/financas' },
  { label: 'Educação', href: '/educacao' },
  { label: 'ESG', href: '/esg' },
  { label: 'Ecossistema', href: '/#ecossistema' },
  { label: 'Diagnóstico', href: '/#diagnostico' },
]

export default function SiteFooter() {
  return (
    <Footer
      brandName="Longevidade Business"
      brandLogo={
        <img
          src="/assets/logo-light.png"
          alt="Longevidade Business"
          className="h-16 w-auto md:h-20"
        />
      }
      backgroundText="LONGEVIDADE"
      brandDescription="Hub estratégico de soluções corporativas."
      socialLinks={socialLinks}
      navLinks={navLinks}
      brandIcon={
        <img
          src="/assets/hero-diamond-transparent.png"
          alt=""
          className="h-full w-full object-contain object-center"
          draggable={false}
        />
      }
    />
  )
}
