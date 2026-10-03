/* Main App Component - Handles routing (using react-router-dom) with multi-page structure for João Moreira personal brand */
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'

// Páginas Multi-Páginas da marca João Moreira
import Home from './pages/Home'
import About from './pages/About'
import JudicialExpertise from './pages/JudicialExpertise'
import TechnicalAssistance from './pages/TechnicalAssistance'
import Calculations from './pages/Calculations'
import Consulting from './pages/Consulting'
import TechAndAI from './pages/TechAndAI'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Publications from './pages/Publications'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          {/* 1. Home - autoridade + proposta de valor + 5 pilares + CTA */}
          <Route path="/" element={<Home />} />

          {/* 2. Sobre João Moreira - trajetória, formação e linha do tempo */}
          <Route path="/sobre" element={<About />} />

          {/* 3. Perícia Judicial */}
          <Route path="/pericia-judicial" element={<JudicialExpertise />} />

          {/* 4. Assistência Técnica */}
          <Route path="/assistencia-tecnica" element={<TechnicalAssistance />} />

          {/* 5. Cálculos */}
          <Route path="/calculos" element={<Calculations />} />

          {/* 6. Consultoria */}
          <Route path="/consultoria" element={<Consulting />} />

          {/* 7. Tecnologia & IA */}
          <Route path="/tecnologia-ia" element={<TechAndAI />} />

          {/* 8. Projetos - sistemas e produtos */}
          <Route path="/projetos" element={<Projects />} />

          {/* 9. Contato / Orçamento */}
          <Route path="/contato" element={<Contact />} />

          {/* Conteúdos / Publicações */}
          <Route path="/publicacoes" element={<Publications />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
