import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Benefícios', to: '/beneficios' },
  { label: 'Saúde', to: '/saude' },
  { label: 'RH', to: '/rh' },
  { label: 'TI', to: '/ti' },
  { label: 'Proteção ao Negócio', to: '/financas' },
  { label: 'Educação', to: '/educacao' },
  { label: 'ESG', to: '/esg' },
  { label: 'Ecossistema', to: '/#ecossistema' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div id="nav-shell" className="pointer-events-none fixed inset-x-0 top-0 z-[100] px-4 pt-4 md:px-6 md:pt-5">
      <div className="pointer-events-auto relative mx-auto max-w-[1200px]">
        <nav
          className={`flex items-center justify-between rounded-full border border-[var(--color-line)] bg-white/95 px-4 py-2 backdrop-blur-md transition-shadow duration-200 md:px-6 md:py-2.5 ${
            scrolled ? 'shadow-[var(--shadow-brand)]' : 'shadow-[var(--shadow-sm)]'
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
            <img
              src="/assets/logo-dark.png"
              alt="Longevidade Business"
              className="h-10 w-auto md:h-11"
            />
          </Link>

          <div className="hidden items-center gap-5 lg:gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex min-h-10 items-center px-0.5 text-[15px] font-medium text-gray-brand transition-colors duration-200 hover:text-ink focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-pale"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#diagnostico"
              className="btn btn-primary ml-1 !min-h-10 !px-5 !py-2.5 !text-sm"
            >
              Diagnóstico gratuito
            </Link>
          </div>

          <button
            type="button"
            className="nav-burger flex min-h-10 min-w-10 flex-col items-center justify-center gap-1.5 border-none bg-transparent p-2 md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-[22px] rounded-sm bg-ink transition-all ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-[22px] rounded-sm bg-ink transition-all ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-[22px] rounded-sm bg-ink transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </nav>

        {open && (
          <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white p-4 shadow-[var(--shadow-brand)] md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center rounded-xl px-3 text-[15px] font-medium text-gray-brand transition-colors hover:bg-bg-soft hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#diagnostico"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-2 w-full"
              >
                Diagnóstico gratuito
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
