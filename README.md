# Longevidade Business — React + Tailwind

Versão React do site Longevidade Business, com Vite, React Router e Tailwind CSS v4.

## Como rodar

```bash
cd web
npm install
npm run dev
```

Abra `http://localhost:5173` no navegador.

## Build para produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/pages/` — Home e páginas de solução (Benefícios, RH, TI, Finanças, Educação, ESG)
- `src/components/` — Nav, Footer, formulário, objetos 3D (Three.js)
- `src/data/site-content.json` — conteúdo extraído dos HTMLs originais
- `public/assets/` — logos e favicon

## HTML legado

Os arquivos HTML estáticos originais permanecem na pasta raiz do projeto (`index.html`, `beneficios.html`, etc.).

## Atualizar conteúdo

Para regenerar o JSON a partir dos HTMLs:

```bash
py scripts/extract-content.py
py scripts/extract-assets.py
```
