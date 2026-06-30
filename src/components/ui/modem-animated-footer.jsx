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
    <section className={`relative mt-0 ${className}`}>
      <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-ink via-ink-2 to-[#0f2035] text-white">
        <div className="relative z-30 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:min-h-120">
          <div className="flex flex-col items-center text-center">
            {brandLogo && (
              <div className="mb-2 flex items-center justify-center">{brandLogo}</div>
            )}

            {!brandLogo && (
              <span className="bg-linear-to-br from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
                {brandName}
              </span>
            )}

            <p className="mt-2 max-w-sm text-[15px] font-semibold text-white/90">{brandDescription}</p>

            {socialLinks.length > 0 && (
              <div className="mt-5 flex gap-5">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex min-h-10 min-w-10 items-center justify-center text-white/60 transition-colors duration-300 active:text-blue-400"
                    target={item.external || item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.external || item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            )}

            {navLinks.length > 0 && (
              <nav className="mt-8 grid w-full max-w-md grid-cols-2 gap-x-4 gap-y-3 text-sm font-medium text-neutral-400 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2">
                {navLinks.map((link) => (
                  <FooterLink
                    key={`${link.label}-${link.href}`}
                    link={link}
                    className="inline-flex min-h-10 items-center justify-center rounded-lg px-1 transition-colors active:text-white sm:justify-start sm:px-0 sm:hover:text-white"
                  />
                ))}
              </nav>
            )}
          </div>

          {/* Mobile: decorative block in normal flow */}
          <div className="relative mt-10 sm:hidden">
            <p
              aria-hidden="true"
              className="modem-footer-bg text-center text-[clamp(1.75rem,9vw,2.75rem)] leading-none font-extrabold tracking-tighter text-white/[0.08]"
            >
              {displayBackground}
            </p>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"
            />
          </div>

          <div className="relative z-40 mt-8 text-center sm:mt-16 sm:flex sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm text-white/55 sm:text-base">
              © {currentYear} {brandName}. Todos os direitos reservados.
            </p>
            {creatorName && creatorUrl && (
              <nav className="mt-3 flex justify-center sm:mt-0">
                <a
                  href={creatorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/55 transition-colors active:text-blue-400 sm:text-base sm:hover:text-blue-400"
                >
                  {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>

        {/* Desktop: decorative background */}
        <div
          aria-hidden="true"
          className="modem-footer-bg pointer-events-none absolute inset-x-0 bottom-24 z-10 hidden px-4 text-center text-[clamp(4rem,12vw,8rem)] leading-none font-extrabold tracking-tighter text-white/[0.07] sm:block md:bottom-20 md:text-[10rem] lg:text-[13rem]"
        >
          {displayBackground}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-16 z-20 hidden h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent sm:block md:bottom-14"
        />

        {brandIcon && (
          <div className="absolute inset-x-0 bottom-24 z-30 hidden justify-center sm:flex md:bottom-20">
            <div className="modem-footer-badge flex items-center justify-center overflow-visible rounded-3xl border-2 border-blue-400/30 bg-ink/60 p-2.5 backdrop-blur-sm drop-shadow-[0_0px_20px_rgb(59,130,246)] transition-colors duration-400 hover:border-blue-400">
              <div className="flex h-14 w-14 items-center justify-center sm:h-20 sm:w-20 md:h-28 md:w-28">
                {brandIcon}
              </div>
            </div>
          </div>
        )}
      </footer>
    </section>
  )
}

export default Footer
