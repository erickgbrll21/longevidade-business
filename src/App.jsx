import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SolutionPage from './pages/SolutionPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="beneficios" element={<SolutionPage slug="beneficios" />} />
        <Route path="rh" element={<SolutionPage slug="rh" />} />
        <Route path="ti" element={<SolutionPage slug="ti" />} />
        <Route path="financas" element={<SolutionPage slug="financas" />} />
        <Route path="educacao" element={<SolutionPage slug="educacao" />} />
        <Route path="esg" element={<SolutionPage slug="esg" />} />
      </Route>
    </Routes>
  )
}
