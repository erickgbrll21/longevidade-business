const icons = {
  beneficios: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M8 6V4h8v2" />
    </svg>
  ),
  rh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="7" r="2.2" />
      <path d="M17 13c2.5 0 4 2 4 4.5" />
    </svg>
  ),
  ti: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  financas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l5-5 4 4 8-8" />
      <path d="M21 8v5h-5" />
    </svg>
  ),
  educacao: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 9L12 4 2 9l10 5 10-5z" />
      <path d="M6 11v5c0 1 2.7 3 6 3s6-2 6-3v-5" />
    </svg>
  ),
  esg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5-2 8-6 8-12V5l-8-3-8 3v5c0 6 3 10 8 12z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  saude: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
}

export default function FrenteIcon({ slug, className = 'h-7 w-7' }) {
  return <span className={className}>{icons[slug] || icons.beneficios}</span>
}
