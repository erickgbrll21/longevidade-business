export default function ContactForm() {
  return (
    <form
      className="rounded-2xl border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-sm)] md:p-9"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-ink">Nome completo</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="min-h-12 rounded-xl border border-[var(--color-line)] px-4 text-base outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-ink">Empresa</label>
          <input
            type="text"
            placeholder="Nome da empresa"
            className="min-h-12 rounded-xl border border-[var(--color-line)] px-4 text-base outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
          />
        </div>
      </div>
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-ink">E-mail</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="min-h-12 rounded-xl border border-[var(--color-line)] px-4 text-base outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-ink">Telefone</label>
          <input
            type="tel"
            placeholder="(00) 00000-0000"
            className="min-h-12 rounded-xl border border-[var(--color-line)] px-4 text-base outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
          />
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <label className="text-sm font-semibold text-ink">Qual frente te interessa?</label>
        <select className="min-h-12 rounded-xl border border-[var(--color-line)] bg-white px-4 text-base outline-none focus:border-blue focus:ring-2 focus:ring-blue/20">
          <option>Benefícios corporativos</option>
          <option>RH e gestão de pessoas</option>
          <option>Tecnologia e inovação</option>
          <option>Proteção ao Negócio</option>
          <option>Educação corporativa</option>
          <option>ESG e governança</option>
          <option>Mercado público (ConcorreAI)</option>
          <option>Solução sob demanda</option>
        </select>
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <label className="text-sm font-semibold text-ink">Conte seu desafio</label>
        <textarea
          rows={4}
          placeholder="Descreva brevemente o que você precisa..."
          className="rounded-xl border border-[var(--color-line)] px-4 py-3 text-base outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Enviar mensagem →
      </button>
    </form>
  )
}
