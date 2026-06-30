import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import { useReveal, useHashScroll } from '../hooks/useReveal'

export default function Layout() {
  const location = useLocation()

  useReveal()
  useHashScroll()

  useEffectTitle(location.pathname)

  return (
    <>
      <a href="#main" className="skip-link">
        Ir para o conteúdo
      </a>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

function useEffectTitle(pathname) {
  const titles = {
    '/': 'Longevidade Business — Hub estratégico B2B',
    '/beneficios': 'Benefícios corporativos — Longevidade Business',
    '/saude': 'Saúde e bem-estar — Longevidade Business',
    '/rh': 'RH e gestão de pessoas — Longevidade Business',
    '/ti': 'Tecnologia e inovação — Longevidade Business',
    '/financas': 'Proteção ao Negócio — Longevidade Business',
    '/educacao': 'Educação corporativa — Longevidade Business',
    '/esg': 'ESG e governança — Longevidade Business',
  }

  document.title = titles[pathname] || titles['/']
}
