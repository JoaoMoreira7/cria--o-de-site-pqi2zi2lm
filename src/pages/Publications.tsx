import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  BookmarkCheck,
  CheckCircle2,
  Phone,
  Search,
  Filter,
  Calculator,
  ShieldCheck,
} from 'lucide-react'
import { PUBLIC_BRAND_NAME, getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../lib/constants'
import { getAllArticles } from '../data/articles'

export default function Publications() {
  const articles = getAllArticles()
  const [selectedCategory, setSelectedCategory] = useState<string>('todos')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const categories = [
    { id: 'todos', label: 'Todos os Artigos' },
    { id: 'Perícia & Processo', label: 'Perícia & Processo' },
    { id: 'Cálculos & Finanças', label: 'Cálculos & Finanças' },
    { id: 'Tecnologia & IA', label: 'Tecnologia & IA' },
    { id: 'Gestão & Consultoria', label: 'Gestão & Consultoria' },
  ]

  const temasFuturos = [
    {
      categoria: 'Perícia & Processo',
      titulo:
        'Boas práticas na formulação de quesitos técnicos para assistentes de acusação e defesa',
      resumo:
        'Como evitar quesitos impertinentes ou genéricos que enfraquecem a manifestação do assistente técnico.',
      status: 'Em redação',
      tempoEstimado: '6 min',
    },
    {
      categoria: 'Cálculos & Finanças',
      titulo:
        'Impactos práticos da uniformização dos índices de correção monetária pós-decisões do STF/STJ',
      resumo:
        'Análise comparativa da Taxa Selic versus IPCA-E + juros moratórios na liquidação de créditos trabalhistas e cíveis.',
      status: 'Em redação',
      tempoEstimado: '8 min',
    },
    {
      categoria: 'Tecnologia & IA',
      titulo: 'O uso de agentes inteligentes na auditoria preliminar de documentos processuais',
      resumo:
        'Como a tecnologia moderna auxilia a triagem de milhares de páginas de extratos bancários sem perda de dados.',
      status: 'Planejado',
      tempoEstimado: '5 min',
    },
    {
      categoria: 'Gestão & Consultoria',
      titulo:
        'Como mapear passivos administrativos e contábeis antes que se tornem litígios judiciais',
      resumo:
        'Metodologias de conformidade prévia e auditoria preventiva para proteger o fluxo de caixa empresarial.',
      status: 'Planejado',
      tempoEstimado: '7 min',
    },
  ]

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'todos' || article.category === selectedCategory
    const matchesSearch =
      searchTerm.trim() === '' ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticle = articles[0]

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#F8FAFC]">
      {/* Hero da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868] relative overflow-hidden">
        {/* Detalhe de fundo geométrico sutil */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(201, 162, 39, 0.8) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              <Sparkles className="w-3 h-3 text-[#C9A227]" />
              <span>Conhecimento & Artigos Técnicos</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Conteúdos & Publicações
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Análises aprofundadas sobre perícia judicial, cálculos aplicados, assistência técnica,
              consultoria preventiva e inovação com Inteligência Artificial por {PUBLIC_BRAND_NAME}.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Principal: Artigo em Destaque + Filtros e Grid */}
      <section className="py-12 md:py-16 bg-[#FFFFFF] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Artigo em Destaque (Revista Editorial Navy & Gold) */}
          {featuredArticle && (
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0A1F44] via-[#0D2552] to-[#06132B] text-white p-7 sm:p-10 md:p-12 border border-[#C9A227]/30 shadow-xl overflow-hidden group">
              {/* Brilho dourado de fundo */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#C9A227] text-[#0A1F44] text-xs font-bold uppercase tracking-wider">
                    {featuredArticle.coverTag} · Destaque
                  </span>
                  <span className="text-xs font-semibold text-[#F2E5B5] tracking-wider uppercase">
                    {featuredArticle.category}
                  </span>
                </div>

                <Link to={`/publicacoes/${featuredArticle.slug}`} className="block group">
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white group-hover:text-[#F2E5B5] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>
                </Link>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredArticle.summary}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#102A5C] border border-[#C9A227]/50 flex items-center justify-center font-serif text-[11px] font-bold text-[#C9A227]">
                      JM
                    </div>
                    <span className="text-white font-medium">{PUBLIC_BRAND_NAME}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>{featuredArticle.publishedDisplay}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>{featuredArticle.readTimeMinutes} min de leitura</span>
                  </span>
                </div>

                <div className="pt-3">
                  <Link
                    to={`/publicacoes/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-md transition-all group-hover:translate-x-0.5"
                  >
                    <span>Ler Artigo Completo</span>
                    <ArrowRight className="w-4 h-4 text-[#0A1F44]" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Filtros e Busca */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            {/* Categorias em pílulas */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#0A1F44] text-[#C9A227] shadow-sm ring-1 ring-[#C9A227]/50'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#0A1F44]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Caixa de Busca */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar artigos por tema..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 bg-white focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
              />
            </div>
          </div>

          {/* Grid de Artigos Publicados */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1F44]">
                Publicações Disponíveis ({filteredArticles.length})
              </h2>
              <span className="text-xs text-slate-500">Conteúdo com acesso aberto</span>
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((art) => (
                  <article
                    key={art.slug}
                    className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#C9A227] shadow-sm hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-wider block">
                          {art.category}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                          {art.coverTag}
                        </span>
                      </div>

                      <Link to={`/publicacoes/${art.slug}`}>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1F44] group-hover:text-[#C9A227] transition-colors leading-snug">
                          {art.title}
                        </h3>
                      </Link>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {art.summary}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#C9A227]" />
                          <span>{art.publishedDisplay}</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C9A227]" />
                          <span>{art.readTimeMinutes} min</span>
                        </span>
                      </div>

                      <Link
                        to={`/publicacoes/${art.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-[#0A1F44] group-hover:text-[#C9A227] transition-colors"
                      >
                        <span>Ler</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="p-10 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                <FileText className="w-8 h-8 text-[#C9A227] mx-auto" />
                <h4 className="font-serif text-base font-bold text-[#0A1F44]">
                  Nenhum artigo encontrado para o filtro aplicado
                </h4>
                <p className="text-xs text-slate-600">
                  Tente alterar a palavra-chave de busca ou redefinir a categoria selecionada.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('todos')
                    setSearchTerm('')
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-[#0A1F44] bg-[#C9A227] hover:bg-[#DEC05B] transition-colors"
                >
                  Limpar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Próximas Publicações em Desenvolvimento (Substitui placeholder vazio por roadmap transparente) */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#C9A227] uppercase">
              <BookmarkCheck className="w-4 h-4 text-[#C9A227]" />
              <span>Cronograma Editorial</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44]">
              Artigos Técnicos em Desenvolvimento
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Materiais e manuais práticos que serão disponibilizados gratuitamente nas próximas
              semanas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {temasFuturos.map((tema) => (
              <div
                key={tema.titulo}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-wider block">
                      {tema.categoria}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      <Clock className="w-3 h-3 text-[#C9A227]" />
                      <span>{tema.status}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#0A1F44] leading-snug">
                    {tema.titulo}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{tema.resumo}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Tempo estimado: {tema.tempoEstimado}</span>
                  <a
                    href={getWhatsAppLink(
                      `Olá, João Moreira! Vi que o artigo sobre "${tema.titulo}" está em desenvolvimento e gostaria de ser avisado quando for publicado.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0A1F44] hover:text-[#C9A227] font-semibold transition-colors"
                  >
                    <span>Receber aviso no WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sugestão de Pauta e CTA Final */}
      <section className="py-16 sm:py-20 bg-[#0A1F44] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-xl bg-[#102A5C] border border-[#C9A227]/50 flex items-center justify-center text-[#C9A227]">
            <BookOpen className="w-6 h-6" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Precisa de um parecer pericial ou análise de cálculo para o seu caso?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Além da produção doutrinária e de artigos, João Moreira atua diretamente como perito do
            juízo e assistente técnico para escritórios e empresas em todo o território nacional.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl transition-all"
            >
              <Phone className="w-4 h-4 text-[#0A1F44]" />
              <span>FALAR COM JOÃO MOREIRA NO WHATSAPP</span>
            </a>

            <Link
              to="/contato#orcamento"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/40 shadow-md transition-all"
            >
              <Calculator className="w-4 h-4 text-[#C9A227]" />
              <span>SOLICITAR ORÇAMENTO DETALHADO</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
