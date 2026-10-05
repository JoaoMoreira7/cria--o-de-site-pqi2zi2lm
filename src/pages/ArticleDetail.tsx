import React, { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  CheckCircle2,
  Quote,
  ChevronRight,
  Phone,
  Calculator,
  ShieldCheck,
  FileText,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import { getArticleBySlug, getAllArticles } from '../data/articles'
import {
  PUBLIC_BRAND_NAME,
  DEFAULT_WHATSAPP_MESSAGE,
  getWhatsAppLink,
  SITE_URL,
} from '../lib/constants'
import { useToast } from '../hooks/use-toast'

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined
  const { toast } = useToast()

  const allArticles = getAllArticles()
  const otherArticles = allArticles.filter((a) => a.slug !== slug)

  // Metatags dinâmicas para SEO específico do artigo
  useEffect(() => {
    if (!article) return

    const pageTitle = `${article.title} | ${PUBLIC_BRAND_NAME}`
    document.title = pageTitle

    const canonicalUrl = `${SITE_URL}/publicacoes/${article.slug}`
    let canonicalLink = document.querySelector<HTMLLinkElement>("link[rel='canonical']")
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    const setMeta = (nameOrProperty: 'name' | 'property', key: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${nameOrProperty}='${key}']`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(nameOrProperty, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMeta('name', 'description', article.metaDescription)
    setMeta('name', 'keywords', article.metaKeywords)
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', article.metaDescription)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:type', 'article')
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('name', 'twitter:description', article.metaDescription)
    setMeta('name', 'twitter:url', canonicalUrl)
  }, [article])

  if (!article) {
    return <Navigate to="/publicacoes" replace />
  }

  const handleShare = async () => {
    const currentUrl = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.summary,
          url: currentUrl,
        })
      } catch {
        // Usuário cancelou ou navegador não deu permissão
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(currentUrl)
      toast({
        title: 'Link copiado!',
        description: 'O link deste artigo foi copiado para a sua área de transferência.',
      })
    }
  }

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF] text-slate-800 antialiased selection:bg-[#C9A227] selection:text-[#0A1F44]">
      {/* Barra superior de navegação / migalha de pão */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white pt-10 pb-16 md:pt-14 md:pb-20 border-b border-[#1A3868]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb & Voltar */}
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/publicacoes"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#C9A227] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para todas as publicações</span>
            </Link>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/30 text-xs text-slate-200 transition-colors"
              title="Compartilhar este artigo"
            >
              <Share2 className="w-3.5 h-3.5 text-[#C9A227]" />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>
          </div>

          {/* Categoria e Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#102A5C] border border-[#C9A227]/50 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              <Sparkles className="w-3 h-3 text-[#C9A227]" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#06132B]/80 text-[11px] font-medium text-slate-300 border border-[#1E3A68]">
              {article.coverTag}
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          {/* Subtítulo / Lead */}
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            {article.subtitle}
          </p>

          {/* Metadados: Autor, Data, Tempo de Leitura */}
          <div className="pt-4 border-t border-[#1A3868]/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#102A5C] border border-[#C9A227]/60 flex items-center justify-center font-serif font-bold text-[#C9A227] text-sm shadow">
                JM
              </div>
              <div>
                <span className="font-bold text-white block leading-tight">
                  {PUBLIC_BRAND_NAME}
                </span>
                <span className="text-[11px] text-[#C9A227]">
                  Perito Judicial TJMG · Cálculos · Tecnologia & IA
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300 text-xs">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                <time dateTime={article.publishedAt}>{article.publishedDisplay}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>{article.readTimeMinutes} min de leitura</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Corpo do Artigo / Layout de Leitura Editorial */}
      <section className="py-12 md:py-16 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card de Pontos-Chave / Destaques do Artigo */}
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-[#0A1F44] font-serif font-bold text-base sm:text-lg">
              <BookOpen className="w-5 h-5 text-[#C9A227]" />
              <span>Pontos centrais que você verá neste artigo:</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {article.keyTakeaways.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resumo Introdutório */}
          <div className="mb-10 text-base sm:text-lg leading-relaxed text-slate-700 font-medium border-l-4 border-[#C9A227] pl-5 py-1">
            {article.summary}
          </div>

          {/* Seções com conteúdo longo, parágrafos bem espaçados, destaques e citações */}
          <div className="space-y-12 text-slate-700 leading-relaxed text-base sm:text-lg">
            {article.sections.map((section, idx) => (
              <article key={section.heading} className="space-y-5">
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0A1F44] tracking-tight pt-3 border-t border-slate-100">
                  {section.heading}
                </h2>

                <div className="space-y-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-slate-700 leading-relaxed text-base sm:text-[17px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Bloco de Citação em Destaque */}
                {section.quote && (
                  <div className="my-6 p-6 rounded-2xl bg-[#0A1F44] text-white border-l-4 border-[#C9A227] shadow-sm relative overflow-hidden">
                    <Quote className="w-8 h-8 text-[#C9A227]/30 absolute top-4 right-4" />
                    <blockquote className="font-serif italic text-base sm:text-lg text-slate-100 leading-relaxed relative z-10">
                      "{section.quote}"
                    </blockquote>
                    <span className="block mt-2 text-xs font-semibold text-[#F2E5B5] tracking-wider uppercase">
                      — {PUBLIC_BRAND_NAME}
                    </span>
                  </div>
                )}

                {/* Destaques / Balas da seção */}
                {section.highlights && section.highlights.length > 0 && (
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-xs font-bold text-[#0A1F44] uppercase tracking-wider block">
                      Destaque Prático:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {section.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0 mt-2" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}

            {/* Conclusão */}
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1F44]">
                Conclusão & Próximos Passos
              </h3>
              {article.conclusion.map((c, cIdx) => (
                <p key={cIdx} className="text-slate-700 leading-relaxed text-base sm:text-[17px]">
                  {c}
                </p>
              ))}
            </div>
          </div>

          {/* Caixa de Assinatura do Autor */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0A1F44] to-[#0D2552] text-white border border-[#1A3868] shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#102A5C] border border-[#C9A227]/60 flex items-center justify-center font-serif font-black text-[#C9A227] text-2xl shrink-0 shadow-inner">
              JM
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="font-serif text-lg font-bold text-white">{PUBLIC_BRAND_NAME}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#C9A227] text-[#0A1F44]">
                  Perito Judicial
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Perito Judicial credenciado junto ao Tribunal de Justiça de Minas Gerais (TJMG).
                Especialista em cálculos judiciais e extrajudiciais, liquidação de sentença,
                assistência técnica estratégica e aplicação de inteligência artificial em processos
                complexos. Atuação profissional em todo o Brasil.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-1 text-[#F2E5B5] hover:text-[#C9A227] font-semibold underline underline-offset-4"
                >
                  <span>Conhecer trajetória completa</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-500">•</span>
                <Link
                  to="/pericia-judicial"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
                >
                  <span>Serviços de Perícia</span>
                </Link>
                <span className="text-slate-500">•</span>
                <Link
                  to="/assistencia-tecnica"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
                >
                  <span>Assistência Técnica</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bloco de CTA Centralizado com WhatsApp padrão e link para orçamento */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#F8FAFC] to-white border-2 border-[#C9A227]/40 shadow-lg text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1F44] text-[#C9A227] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
              <span>Precisa de suporte em uma ação judicial?</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44] max-w-xl mx-auto leading-tight">
              Garanta segurança técnica para o seu processo ou escritório
            </h3>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Discuta os quesitos, a metodologia de cálculo ou solicite uma análise preliminar com
              João Moreira. Atendimento direto e confidencial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-4 h-4 text-[#0A1F44]" />
                <span>Falar no WhatsApp com João Moreira</span>
              </a>

              <Link
                to="/contato#orcamento"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-white border border-slate-300 hover:bg-slate-50 hover:border-[#0A1F44] transition-all shadow-sm"
              >
                <Calculator className="w-4 h-4 text-[#C9A227]" />
                <span>Solicitar Orçamento Online</span>
              </Link>
            </div>

            <p className="text-[11px] text-slate-500">
              Resposta ágil · Análise sob sigilo profissional absoluto · Atuação em todo o Brasil
            </p>
          </div>

          {/* Navegação de Volta e Outros Artigos */}
          <div className="mt-16 pt-10 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-lg font-bold text-[#0A1F44]">
                Outras leituras e publicações
              </h4>
              <Link
                to="/publicacoes"
                className="text-xs sm:text-sm font-semibold text-[#0A1F44] hover:text-[#C9A227] transition-colors inline-flex items-center gap-1"
              >
                <span>Ver índice completo</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {otherArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherArticles.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/publicacoes/${item.slug}`}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#C9A227] transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h5 className="font-serif text-sm sm:text-base font-bold text-[#0A1F44] group-hover:text-[#C9A227] transition-colors leading-snug">
                        {item.title}
                      </h5>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>{item.publishedDisplay}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#0A1F44] group-hover:text-[#C9A227]">
                        <span>Ler</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <FileText className="w-6 h-6 text-[#C9A227] mx-auto" />
                <p className="text-xs sm:text-sm text-slate-600">
                  Novos artigos técnicos estão em redação e serão publicados semanalmente.
                </p>
                <Link
                  to="/publicacoes"
                  className="inline-block text-xs font-bold text-[#0A1F44] hover:underline"
                >
                  Acompanhar tópicos em desenvolvimento
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
