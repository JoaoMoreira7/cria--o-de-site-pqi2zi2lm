import React, { useEffect, useRef } from 'react'
import {
  Scale,
  ShieldCheck,
  FileText,
  Calculator,
  Briefcase,
  TrendingUp,
  Landmark,
  Check,
  ChevronRight,
  Phone,
  Mail,
  Award,
  Globe,
  Lock,
  Zap,
  Building2,
  Users,
  UserCheck,
  Building,
  GraduationCap,
  Sparkles,
  ArrowRight,
  BadgeCheck,
} from 'lucide-react'
import {
  CONTACT_WHATSAPP_LINK,
  CONTACT_WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
} from '../components/Layout'

export default function Index() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Reveal on scroll intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )
    observerRef.current = observer

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      const headerOffset = 88
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // 6 Áreas de Competência (verbatim do PDF)
  const areasCompetencia = [
    { title: 'Perícia Judicial', icon: Scale },
    { title: 'Assistência Técnica', icon: ShieldCheck },
    { title: 'Consultoria Administrativa', icon: Briefcase },
    { title: 'Consultoria Contábil', icon: Calculator },
    { title: 'Análise Financeira', icon: TrendingUp },
    { title: 'Laudos e Pareceres', icon: FileText },
  ]

  // 6 Serviços com bullets exatos (verbatim do PDF)
  const servicos = [
    {
      title: 'Perícia Judicial',
      icon: Scale,
      bullets: [
        'Análise documental',
        'Elaboração de laudos',
        'Esclarecimentos técnicos',
        'Atuação como perito nomeado',
      ],
    },
    {
      title: 'Assistência Técnica',
      icon: ShieldCheck,
      bullets: ['Parecer técnico', 'Quesitos técnicos', 'Impugnações', 'Acompanhamento processual'],
    },
    {
      title: 'Cálculos Trabalhistas',
      icon: Calculator,
      bullets: ['Verificação de verbas', 'FGTS', 'Horas extras', 'Atualizações monetárias'],
    },
    {
      title: 'Consultoria Administrativa',
      icon: Briefcase,
      bullets: [
        'Gestão empresarial',
        'Processos internos',
        'Planejamento estratégico',
        'Diagnóstico organizacional',
      ],
    },
    {
      title: 'Consultoria Contábil',
      icon: TrendingUp,
      bullets: [
        'Análise financeira',
        'Revisão documental',
        'Fluxo de caixa',
        'Indicadores financeiros',
      ],
    },
    {
      title: 'Revisão de Contratos e Empréstimos',
      icon: Landmark,
      bullets: ['Consignados', 'Financiamentos', 'Contratos bancários', 'Cálculos de juros'],
    },
  ]

  // 8 Por que escolher (verbatim do PDF)
  const diferenciais = [
    { text: 'Atendimento em todo o Brasil', icon: Globe },
    { text: 'Atendimento 100% online', icon: Zap },
    { text: 'Análises técnicas fundamentadas', icon: Award },
    { text: 'Transparência e ética profissional', icon: ShieldCheck },
    { text: 'Relatórios claros e objetivos', icon: FileText },
    { text: 'Agilidade no atendimento', icon: Sparkles },
    { text: 'Experiência multidisciplinar', icon: GraduationCap },
    { text: 'Sigilo total e segurança dos dados', icon: Lock },
  ]

  // 8 Áreas de Atuação (verbatim do PDF)
  const areasAtuacao = [
    { name: 'Justiça do Trabalho', icon: Scale },
    { name: 'Justiça Estadual', icon: Landmark },
    { name: 'Justiça Federal', icon: Building },
    { name: 'Empresas', icon: Building2 },
    { name: 'Advogados', icon: GraduationCap },
    { name: 'Pessoas Físicas', icon: Users },
    { name: 'Órgãos Públicos', icon: UserCheck },
    { name: 'Instituições Financeiras', icon: TrendingUp },
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================
          SEÇÃO 1: HERO
          ========================================================= */}
      <section
        id="inicio"
        className="relative bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-[#1A3868]/60"
      >
        {/* Subtle geometric background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C9A227 1px, transparent 1px), radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
          aria-hidden="true"
        />

        {/* Ambient glow lights */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Tagline Topo / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#102A5C]/90 border border-[#C9A227]/40 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wider text-slate-200">
                Atuação em todo o Brasil · desde 2019
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Perícia Judicial e Consultoria Especializada{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2E5B5] via-[#DEC05B] to-[#C9A227] block sm:inline">
                para Todo o Brasil
              </span>
            </h1>

            {/* Subheadline (verbatim) */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Atuação técnica, imparcial e fundamentada para processos judiciais, empresas e pessoas
              físicas. Laudos e pareceres que sustentam decisões.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#contato"
                onClick={(e) => handleScrollTo(e, '#contato')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl hover:shadow-[#C9A227]/25 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>Solicite uma Avaliação</span>
                <ChevronRight className="w-5 h-5 text-[#0A1F44]" />
              </a>

              <a
                href="#servicos"
                onClick={(e) => handleScrollTo(e, '#servicos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#102A5C]/60 hover:bg-[#102A5C] border border-[#C9A227]/40 hover:border-[#C9A227] shadow-md transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>Conheça Nossos Serviços</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227]" />
              </a>
            </div>

            {/* Credential Badge Card */}
            <div className="pt-6 sm:pt-8 max-w-xl mx-auto">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#102A5C]/70 border border-[#C9A227]/40 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A3A73] to-[#0A1F44] border border-[#C9A227]/50 flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-[#C9A227]" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white leading-tight">
                      João Carlos Moreira Santos
                    </h2>
                    <p className="text-xs text-[#DEC05B] font-medium mt-0.5">
                      Perito Judicial · Consultor Administrativo e Contábil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1F44] border border-[#C9A227]/40 text-xs font-semibold text-slate-200 shrink-0">
                  <BadgeCheck className="w-4 h-4 text-[#C9A227]" />
                  <span>Perito nomeado · TJMG / TJSP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO 2: QUEM SOMOS
          ========================================================= */}
      <section
        id="quem-somos"
        className="py-20 md:py-28 bg-[#FFFFFF] text-slate-800 relative border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Stylized framed credential / card placeholder */}
            <div className="lg:col-span-5 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="relative mx-auto max-w-md">
                {/* Gold accent border background */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#C9A227]/40 via-transparent to-[#102A5C]/20 blur-sm" />

                <div className="relative rounded-2xl bg-[#0A1F44] text-white p-8 sm:p-10 shadow-2xl border border-[#C9A227]/30 flex flex-col items-center text-center">
                  {/* Decorative badge top */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1E3E75] to-[#0A1F44] border-2 border-[#C9A227] flex items-center justify-center shadow-lg mb-6 relative">
                    <Scale className="w-12 h-12 text-[#C9A227]" />
                    <span className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#C9A227] text-[#0A1F44]">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C9A227] uppercase">
                    JM PERÍCIAS TÉCNICAS
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    João Carlos Moreira Santos
                  </h3>
                  <p className="text-sm text-[#DEC05B] font-medium mt-1">Perito Judicial</p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Consultor Administrativo e Contábil
                  </p>

                  <div className="w-full my-6 border-t border-[#1A3868]" />

                  {/* Highlights list */}
                  <div className="w-full space-y-3 text-left text-xs text-slate-200">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <span>Perito nomeado · TJMG / TJSP</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <span>Atuação nacional desde 2019</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <span>Formação multidisciplinar e técnica</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <span>Atendimento ágil e 100% online</span>
                    </div>
                  </div>

                  <div className="mt-8 w-full">
                    <a
                      href={CONTACT_WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#0A1F44] bg-[#C9A227] hover:bg-[#DEC05B] transition-colors shadow-md"
                    >
                      <Phone className="w-4 h-4 text-[#0A1F44]" />
                      <span>Falar Diretamente pelo WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quem Somos textual content (verbatim) */}
            <div className="lg:col-span-7 space-y-6 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1F44]/5 border border-[#0A1F44]/15 text-xs font-semibold tracking-wider text-[#0A1F44] uppercase">
                Apresentação Institucional
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44] leading-tight">
                João Carlos Moreira Santos
                <span className="block text-xl sm:text-2xl font-sans font-semibold text-[#C9A227] mt-1">
                  Perito Judicial · Consultor Administrativo e Contábil
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Profissional com formação multidisciplinar e experiência em perícias judiciais,
                cálculos trabalhistas, análises financeiras, administração empresarial e consultoria
                técnica.
              </p>

              {/* Callout box Quem Somos (verbatim) */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0A1F44] text-white border-l-4 border-[#C9A227] shadow-lg space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#C9A227] uppercase block">
                  QUEM SOMOS
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  A JM Perícias atua com excelência na elaboração de laudos técnicos, pareceres,
                  assistência técnica judicial e extrajudicial, consultoria administrativa e
                  análises financeiras. Nosso compromisso é oferecer soluções fundamentadas,
                  transparentes e tecnicamente consistentes para auxiliar empresas, advogados e
                  cidadãos na tomada de decisões e na defesa de seus direitos.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#contato"
                  onClick={(e) => handleScrollTo(e, '#contato')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0A1F44] hover:bg-[#102A5C] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Fale com o Especialista</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                </a>

                <a
                  href="#servicos"
                  onClick={(e) => handleScrollTo(e, '#servicos')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0A1F44] bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>Ver Todos os Serviços</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO 3: ÁREAS DE COMPETÊNCIA (6 em faixa escura)
          ========================================================= */}
      <section
        id="competencias"
        className="py-20 bg-[#0A1F44] text-white relative border-b border-[#1A3868]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              ÁREAS DE COMPETÊNCIA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              Excelência Técnica e Multidisciplinar
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              Competências consolidadas para atender às mais complexas demandas judiciais e
              corporativas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasCompetencia.map((comp, idx) => {
              const IconComp = comp.icon
              return (
                <div
                  key={comp.title}
                  className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 group p-6 rounded-2xl bg-[#102A5C]/60 hover:bg-[#102A5C] border border-[#1A3868] hover:border-[#C9A227]/70 shadow-md hover:shadow-xl hover:shadow-[#C9A227]/10 transform hover:-translate-y-1.5 transition-all"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E3E75] to-[#0A1F44] border border-[#C9A227]/40 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#C9A227] transition-all">
                      <IconComp className="w-7 h-7 text-[#C9A227]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#C9A227] shrink-0" />
                        <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F2E5B5] transition-colors">
                          {comp.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">Atuação técnica e fundamentada</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO 4: SERVIÇOS (6 cards com bullets exatos)
          ========================================================= */}
      <section
        id="servicos"
        className="py-20 md:py-28 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              SERVIÇOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1F44] mt-2">
              Soluções técnicas para cada etapa do processo
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Serviços especializados com precisão metodológica, clareza expositiva e total rigor
              legal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((serv, idx) => {
              const IconServ = serv.icon
              return (
                <div
                  key={serv.title}
                  className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex flex-col justify-between bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border-t-4 border-t-[#C9A227] border-x border-b border-slate-200/80 hover:border-slate-300 transform hover:-translate-y-2 transition-all duration-300 group"
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  <div>
                    {/* Header card */}
                    <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
                      <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                        <IconServ className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#0A1F44] group-hover:text-[#102A5C] transition-colors leading-snug">
                        {serv.title}
                      </h3>
                    </div>

                    {/* Bullets exatos do PDF */}
                    <ul className="space-y-3 mb-6">
                      {serv.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-[#F2E5B5]/60 text-[#8A6A12] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card bottom action */}
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="#contato"
                      onClick={(e) => handleScrollTo(e, '#contato')}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0A1F44] group-hover:text-[#C9A227] transition-colors"
                    >
                      <span>Solicitar para esta demanda</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO 5: POR QUE ESCOLHER A JM PERÍCIAS (8 diferenciais)
          ========================================================= */}
      <section
        id="diferenciais"
        className="py-20 md:py-28 bg-[#FFFFFF] text-slate-800 relative border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Grid of 8 items */}
            <div className="lg:col-span-7 space-y-8 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                  DIFERENCIAIS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44] mt-2">
                  Por Que Escolher a JM Perícias
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  Nosso padrão de atuação é alicerçado em transparência, rigor técnico e foco em
                  resultados concretos.
                </p>
              </div>

              {/* 8 Itens em grid 2 colunas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {diferenciais.map((item, idx) => {
                  const IconItem = item.icon
                  return (
                    <div
                      key={item.text}
                      className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#C9A227]/60 hover:bg-white shadow-sm hover:shadow-md transition-all flex items-center gap-3.5 group"
                      style={{ transitionDelay: `${idx * 60}ms` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconItem className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <Check className="w-4 h-4 text-[#C9A227] shrink-0" />
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-[#0A1F44]">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right side: Decorative credential highlight */}
            <div className="lg:col-span-5 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0A1F44] to-[#102A5C] text-white p-8 sm:p-10 shadow-2xl border border-[#C9A227]/30">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A227] text-[#0A1F44] flex items-center justify-center font-serif text-2xl font-black shadow-md">
                    §
                  </div>

                  <blockquote className="font-serif text-xl sm:text-2xl font-semibold leading-relaxed text-slate-100 italic">
                    “Nosso compromisso é oferecer soluções fundamentadas, transparentes e
                    tecnicamente consistentes para auxiliar empresas, advogados e cidadãos.”
                  </blockquote>

                  <div className="pt-4 border-t border-[#1A3868]">
                    <div className="text-base font-bold text-white">João Carlos Moreira Santos</div>
                    <div className="text-xs text-[#DEC05B]">Perito Judicial · TJMG / TJSP</div>
                    <div className="text-xs text-slate-400 mt-1">
                      Atuação nacional · Consultoria Administrativa e Contábil
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#102A5C] border border-[#C9A227]/30 text-xs text-slate-200">
                      <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                      <span>Sigilo total e segurança dos dados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO 6: ÁREAS DE ATUAÇÃO (8 em faixa escura)
          ========================================================= */}
      <section
        id="areas-de-atuacao"
        className="py-20 bg-[#0A1F44] text-white relative border-b border-[#1A3868]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              ÁREAS DE ATUAÇÃO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              Atendimento Especializado para Diversos Setores
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Atuação técnica e fundamentada perante os órgãos do judiciário, entidades públicas e o
              setor privado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {areasAtuacao.map((area, idx) => {
              const IconArea = area.icon
              return (
                <div
                  key={area.name}
                  className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-2xl bg-[#102A5C]/60 hover:bg-[#102A5C] border border-[#1A3868] hover:border-[#C9A227] shadow-md hover:shadow-xl text-center group transform hover:-translate-y-1.5 transition-all"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[#0A1F44] border border-[#C9A227]/40 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#C9A227] transition-all">
                    <IconArea className="w-7 h-7 text-[#C9A227]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F2E5B5] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">Suporte técnico e consultivo</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO 7: CTA FINAL / CONTATO (Verbatim do PDF)
          ========================================================= */}
      <section
        id="contato"
        className="py-20 md:py-28 bg-gradient-to-b from-[#0D2552] via-[#0A1F44] to-[#06132B] text-white relative"
      >
        {/* Glow ambient background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C9A227 1.5px, transparent 1.5px)`,
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs sm:text-sm font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Atendimento Rápido · Todo o Brasil
            </div>

            {/* Heading verbatim */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
              Solicite uma avaliação do seu caso
            </h2>

            {/* Paragraph verbatim */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Descreva sua demanda e receba uma proposta com prazo e valor. Atendimento rápido,
              claro e sem burocracia, em todo o Brasil.
            </p>

            {/* Action Buttons: WhatsApp (green) and Email (gold) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5 max-w-xl mx-auto">
              {/* WhatsApp Button */}
              <a
                href={CONTACT_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <Phone className="w-6 h-6 fill-white" />
                <div className="text-left leading-tight">
                  <span className="block text-xs uppercase tracking-wider text-green-100 font-semibold">
                    WhatsApp Direto
                  </span>
                  <span className="block text-base font-bold">{CONTACT_WHATSAPP_DISPLAY}</span>
                </div>
              </a>

              {/* Email Button */}
              <a
                href={CONTACT_EMAIL_LINK}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-base font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl hover:shadow-[#C9A227]/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <Mail className="w-6 h-6 text-[#0A1F44]" />
                <div className="text-left leading-tight">
                  <span className="block text-xs uppercase tracking-wider text-[#0A1F44]/80 font-bold">
                    E-mail Institucional
                  </span>
                  <span className="block text-sm sm:text-base font-bold break-all">
                    {CONTACT_EMAIL}
                  </span>
                </div>
              </a>
            </div>

            {/* Trust highlights footer inside CTA */}
            <div className="pt-10 border-t border-[#1A3868]/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span>Sigilo e segurança dos dados</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-4 h-4 text-[#C9A227]" />
                <span>Atendimento 100% online em todo o Brasil</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Scale className="w-4 h-4 text-[#C9A227]" />
                <span>Perito nomeado TJMG / TJSP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
