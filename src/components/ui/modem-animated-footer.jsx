import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FooterLink({ link, className }) {
  const isExternal =
    link.external ||
    link.href.startsWith('http') ||
    link.href.startsWith('mailto:') ||
    link.href.startsWith('tel:')

  if (isExternal) {
    return (
      <a
        href={link.href}
        className={className}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {link.label}
      </a>
    )
  }

  return (
    <Link to={link.href} className={className}>
      {link.label}
    </Link>
  )
}

export function Footer({
  brandName,
  brandLogo,
  brandDescription,
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  backgroundText,
  className = '',
}) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const displayBackground = backgroundText || brandName.replace(/\s+/g, '.').toUpperCase()

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <section className={`relative mt-0 max-h-fit ${className}`}>
      <footer className="relative z-[101] mt-0 max-h-fit overflow-hidden border-t border-white/10 bg-gradient-to-br from-ink via-ink-2 to-[#0f2035] text-white">
        <div className="relative z-30 mx-auto flex h-120 max-w-7xl flex-col justify-between p-4 py-10 sm:h-140 md:h-160">
          <div className="mb-12 flex w-full flex-col sm:mb-20 md:mb-0">
            <div className="flex w-full flex-col items-center">
              <div className="flex flex-1 flex-col items-center space-y-2">
                <div className="flex items-center gap-2">
                  {brandLogo ?? (
                    <span className="bg-linear-to-br from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
                      {brandName}
                    </span>
                  )}
                </div>
                <p className="text-center text-[15px] font-semibold text-foreground/90 sm:w-96">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="mt-3 mb-8 flex gap-4">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="text-muted-foreground transition-colors duration-300 hover:text-blue-400"
                      target={item.external || item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.external || item.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex max-w-full flex-wrap justify-center gap-4 text-sm font-medium text-neutral-400">
                  {navLinks.map((link) => (
                    <FooterLink
                      key={`${link.label}-${link.href}`}
                      link={link}
                      className="transition-all duration-300 hover:font-semibold hover:text-foreground"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="z-25 mt-20 flex flex-col items-center justify-center gap-1 md:mt-24 md:flex-row md:items-center md:justify-between">
            <p className="text-base text-muted-foreground">
              © {currentYear} {brandName}. Todos os direitos reservados.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-muted-foreground transition-all duration-300 hover:font-medium hover:text-blue-500"
                >
                  {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="modem-footer-bg pointer-events-none absolute bottom-40 left-1/2 z-10 w-max max-w-none -translate-x-1/2 whitespace-nowrap bg-linear-to-b from-foreground/20 via-foreground/10 to-transparent bg-clip-text text-[4rem] leading-tight font-extrabold tracking-tighter text-transparent sm:text-[8rem] md:bottom-32 md:text-[10rem] lg:text-[13rem]"
        >
          {displayBackground}
        </div>

        <div className="absolute inset-x-0 bottom-24 z-30 flex justify-center md:bottom-20">
          <div className="modem-footer-badge flex items-center justify-center overflow-visible rounded-3xl border-2 border-blue-400/30 bg-ink/60 p-2.5 backdrop-blur-sm drop-shadow-[0_0px_20px_rgb(59,130,246)] transition-colors duration-400 hover:border-blue-400">
            <div className="flex h-14 w-14 items-center justify-center sm:h-20 sm:w-20 md:h-28 md:w-28">
              {brandIcon}
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 left-1/2 z-25 h-1 w-full -translate-x-1/2 bg-linear-to-r from-transparent via-blue-500/20 to-transparent backdrop-blur-sm sm:bottom-34" />

        <div className="absolute bottom-28 z-22 h-24 w-full bg-linear-to-t from-ink via-ink/80 to-ink/40 blur-[1em]" />
      </footer>
    </section>
  )
}

export default Footer
