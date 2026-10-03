import React from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  ChevronRight,
  BookmarkCheck,
  CheckCircle2,
  Phone,
} from 'lucide-react'
import { PUBLIC_BRAND_NAME, getWhatsAppLink } from '../lib/constants'

export default function Publications() {
  const temasFuturos = [
    {
      categoria: 'Perícia & Processo',
      titulo:
        'Boas práticas na formulação de quesitos técnicos para assistentes de acusação e defesa',
      status: 'Em redação',
    },
    {
      categoria: 'Cálculos & Finanças',
      titulo:
        'Impactos práticos da uniformização dos índices de correção monetária pós-decisões do STF/STJ',
      status: 'Em redação',
    },
    {
      categoria: 'Tecnologia & IA',
      titulo: 'O uso de agentes inteligentes na auditoria preliminar de documentos processuais',
      status: 'Planejado',
    },
    {
      categoria: 'Gestão & Consultoria',
      titulo:
        'Como mapear passivos administrativos e contábeis antes que se tornem litígios judiciais',
      status: 'Planejado',
    },
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Conhecimento & Artigos
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Conteúdos & Publicações
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Espaço dedicado à divulgação de análises técnicas, artigos sobre perícia judicial,
              cálculos aplicados, consultoria e inovação tecnológica com IA.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PLACEHOLDER ELEGANTE (recomendação do usuário)
          ========================================================= */}
      <section className="py-20 md:py-24 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card Principal de Placeholder Elegante */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#F8FAFC] to-white border border-slate-200 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shadow-md">
              <BookOpen className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase block">
              CANAL DE CONTEÚDO TÉCNICO
            </span>

            {/* Texto solicitado pelo usuário */}
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0A1F44]">
              Em breve: artigos, materiais e conteúdos técnicos
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Estamos estruturando publicações periódicas para advogados, contadores, peritos e
              empresários que desejam aprofundar seus conhecimentos em prova pericial, matemática
              financeira e inteligência artificial aplicada.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(
                  'Olá João Moreira, gostaria de ser informado sobre seus novos artigos e conteúdos técnicos.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0A1F44] bg-[#C9A227] hover:bg-[#DEC05B] transition-colors shadow-md"
              >
                <span>Avisar-me por WhatsApp sobre Publicações</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#0A1F44] bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <span>Sugerir um Tema ou Dúvida</span>
              </Link>
            </div>
          </div>

          {/* Prévia dos Próximos Tópicos */}
          <div className="mt-14 space-y-6">
            <div className="text-center space-y-1">
              <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                Tópicos em Desenvolvimento
              </h3>
              <p className="text-xs text-slate-500">
                Materiais técnicos que serão disponibilizados gratuitamente em breve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {temasFuturos.map((tema) => (
                <div
                  key={tema.titulo}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-wider block">
                      {tema.categoria}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#0A1F44] leading-snug">
                      {tema.titulo}
                    </h4>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>{tema.status}</span>
                    </span>
                    <span className="font-semibold text-[#0A1F44]">Acesso Gratuito</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Tem interesse em um artigo ou parecer sobre tema específico?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Envie sua proposta de pauta ou necessidade técnica para análise direta.
          </p>
          <div className="pt-2">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] to-[#C9A227] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl transition-all"
            >
              <span>FALAR COM JOÃO MOREIRA</span>
              <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
