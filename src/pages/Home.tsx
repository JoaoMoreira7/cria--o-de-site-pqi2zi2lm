import React from 'react'
import { Link } from 'react-router-dom'
import {
  Scale,
  ShieldCheck,
  Calculator,
  Briefcase,
  Cpu,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  GraduationCap,
  Building2,
  Users,
  Award,
  Sparkles,
  Compass,
  CheckCircle2,
  Layers,
  Binary,
  Workflow,
  Globe2,
} from 'lucide-react'
import { PhotoFrame } from '../components/PhotoFrame'
import {
  PUBLIC_BRAND_NAME,
  LEGAL_NAME,
  CONTACT_WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  PILARES,
  getWhatsAppLink,
} from '../lib/constants'

export default function Home() {
  // Públicos-alvo (verbatim)
  const publicosAlvo = [
    {
      title: 'ADVOGADOS',
      desc: 'Para quem precisa de suporte técnico especializado em processos.',
      icon: Scale,
      path: '/assistencia-tecnica',
      cta: 'Ver assistência técnica',
    },
    {
      title: 'EMPRESAS',
      desc: 'Para quem precisa analisar problemas, organizar processos ou implementar soluções.',
      icon: Building2,
      path: '/consultoria',
      cta: 'Ver consultoria',
    },
    {
      title: 'PESSOAS FÍSICAS',
      desc: 'Para quem precisa de cálculos, regularização, análise ou suporte técnico.',
      icon: Users,
      path: '/calculos',
      cta: 'Ver cálculos e análise',
    },
    {
      title: 'PROFISSIONAIS',
      desc: 'Para engenheiros, contadores, administradores, peritos, consultores e outros profissionais que precisam de apoio especializado.',
      icon: Award,
      path: '/contato',
      cta: 'Conversar sobre parceria',
    },
  ]

  // Valores (verbatim)
  const valores = [
    { name: 'Precisão', desc: 'Informações devem ser tratadas com rigor.' },
    { name: 'Clareza', desc: 'Conhecimento complexo deve ser compreensível.' },
    { name: 'Inovação', desc: 'Tecnologia deve ser utilizada para melhorar processos.' },
    { name: 'Responsabilidade', desc: 'Cada solução deve considerar sua finalidade e contexto.' },
    {
      name: 'Independência técnica',
      desc: 'Análises devem ser fundamentadas em informações e documentos.',
    },
    {
      name: 'Evolução',
      desc: 'Conhecimento profissional precisa acompanhar a transformação tecnológica.',
    },
  ]

  // Ícones para os 5 pilares
  const pilaresIcons = [Scale, ShieldCheck, Calculator, Briefcase, Cpu]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================
          HERO SECTION (Marca Pessoal: JOÃO MOREIRA)
          ========================================================= */}
      <section className="relative bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-[#1A3868]/70">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C9A227 1px, transparent 1px), radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0, 18px 18px',
          }}
          aria-hidden="true"
        />

        {/* Ambient glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A227]/10 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Col: Main Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Top pill badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                  Atuação profissional em todo o Brasil.
                </span>
              </div>

              {/* Headline (verbatim) */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                <span className="text-[#F2E5B5] block">{PUBLIC_BRAND_NAME}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 text-2xl sm:text-4xl lg:text-4xl font-normal block mt-2">
                  Conhecimento técnico. Tecnologia. Soluções para problemas complexos.
                </span>
              </h1>

              {/* Subtitle (verbatim) */}
              <p className="text-sm sm:text-base md:text-lg text-[#C9A227] font-medium tracking-wide">
                Perito Judicial • Consultor • Assistente Técnico • Especialista em Cálculos •
                Tecnologia e Inteligência Artificial
              </p>

              {/* Description body */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Mais de duas décadas de experiência unindo administração, matemática, finanças,
                perícia e tecnologia da informação para esclarecer fatos, fundamentar decisões
                judiciais e estruturar soluções escaláveis.
              </p>

              {/* Botões do Hero (verbatim) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/sobre"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl hover:shadow-[#C9A227]/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>CONHEÇA MINHA ATUAÇÃO</span>
                  <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
                </Link>

                <Link
                  to="/contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#102A5C]/70 hover:bg-[#102A5C] border border-[#C9A227]/40 hover:border-[#C9A227] shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>FALE COMIGO</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                </Link>
              </div>

              {/* Legal identity subtitle */}
              <div className="pt-3 text-xs text-slate-400">
                Nome civil e formal:{' '}
                <span className="text-slate-200 font-medium">{LEGAL_NAME}</span> · Cadastrado como
                Perito no TJMG.
              </div>
            </div>

            {/* Right Col: Elegante Retrato com Moldura Dourada */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md">
                <PhotoFrame caption="Retrato oficial de João Moreira — Perito e Especialista" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OS 5 PILARES PRINCIPAIS (verbatim do pedido)
          ========================================================= */}
      <section className="py-20 md:py-24 bg-[#FFFFFF] text-slate-800 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              ESTRUTURA DE ATUAÇÃO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1F44]">
              Os 5 Pilares de Atuação
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Uma abordagem integrada que combina rigor técnico pericial, consultoria estratégica e
              o poder da tecnologia e inteligência artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PILARES.map((pilar, index) => {
              const IconPilar = pilaresIcons[index] || Scale
              return (
                <div
                  key={pilar.num}
                  className={`relative flex flex-col justify-between bg-gradient-to-b from-white to-[#F8FAFC] rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#C9A227]/70 transition-all duration-300 transform hover:-translate-y-1.5 group ${
                    index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header: Number and Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl font-black text-[#C9A227]/40 group-hover:text-[#C9A227] transition-colors">
                        {pilar.num}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <IconPilar className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Pilar Title (verbatim) */}
                    <h3 className="font-serif text-xl font-bold text-[#0A1F44] group-hover:text-[#102A5C] transition-colors">
                      {pilar.title}
                    </h3>

                    {/* Pilar Description (verbatim) */}
                    <p className="text-slate-600 text-sm leading-relaxed">{pilar.desc}</p>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={pilar.path}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1F44] hover:text-[#C9A227] transition-colors"
                    >
                      <span>Conhecer detalhes</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={getWhatsAppLink(pilar.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-[#25D366] hover:underline"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PARA QUEM É O MEU TRABALHO? (Público-Alvo verbatim)
          ========================================================= */}
      <section className="py-20 md:py-24 bg-[#0A1F44] text-white border-b border-[#1A3868] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              DEMANDAS & PARCERIAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Para quem é o meu trabalho?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Atendimento focado em quem necessita de respostas seguras, cálculos auditáveis e
              soluções práticas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicosAlvo.map((item) => {
              const IconTarget = item.icon
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-[#102A5C]/60 hover:bg-[#102A5C] border border-[#1A3868] hover:border-[#C9A227]/70 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A1F44] border border-[#C9A227]/40 text-[#C9A227] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconTarget className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F2E5B5] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#1A3868]">
                    <Link
                      to={item.path}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DEC05B] hover:text-white transition-colors"
                    >
                      <span>{item.cta}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          POR QUE UMA ABORDAGEM MULTIDISCIPLINAR? (verbatim)
          ========================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text verbatim */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                VISÃO INTEGRADA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1F44] leading-tight">
                Por que uma abordagem multidisciplinar?
              </h2>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Um problema financeiro pode envolver matemática. Um processo pode envolver
                  cálculos. Um contrato pode exigir análise financeira. Uma empresa pode precisar de
                  tecnologia. Um problema administrativo pode exigir conhecimento jurídico,
                  documental e operacional.
                </p>
                <p className="font-medium text-[#0A1F44]">
                  Por isso, soluções complexas não devem ser analisadas sempre por uma única
                  perspectiva. Quanto mais complexo o problema, maior a importância de conectar
                  conhecimentos diferentes.
                </p>
              </div>

              {/* Interconnection flow */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>Administração</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>Matemática</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>Engenharia de Software</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>Finanças</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>Perícia Judicial</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>Inteligência Artificial</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#0A1F44] hover:bg-[#102A5C] shadow-md transition-all"
                >
                  <span>Conhecer a Trajetória Completa</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                </Link>
              </div>
            </div>

            {/* Right Card: Destaque visual síntese */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1F44] text-white border border-[#C9A227]/40 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[#C9A227] text-[#0A1F44] flex items-center justify-center font-serif text-2xl font-black">
                  §
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl font-semibold leading-relaxed text-slate-100 italic">
                  “Conhecimento para entender. Experiência para analisar. Tecnologia para
                  transformar.”
                </blockquote>

                <div className="pt-4 border-t border-[#1A3868] text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-white text-sm">{PUBLIC_BRAND_NAME}</div>
                  <div>Razão formal: {LEGAL_NAME}</div>
                  <div className="text-[#C9A227]">Perito Judicial · Atuação em todo o Brasil</div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  <span>Independência técnica fundamentada em documentos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CREDENCIAIS E MAIS DO QUE CURRÍCULO (verbatim)
          ========================================================= */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              CREDENCIAIS & HISTÓRICO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1F44]">
              Formação & Experiência Sólida
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Rigor conceitual associado à prática real do mercado e dos tribunais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Formação (verbatim) */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0A1F44] text-[#C9A227] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">FORMAÇÃO</h3>
              </div>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>
                    <strong className="text-[#0A1F44]">Administração</strong> (Bacharelado)
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>
                    <strong className="text-[#0A1F44]">Matemática</strong> (Licenciatura)
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>
                    <strong className="text-[#0A1F44]">Engenharia de Software</strong> (MBA)
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>
                    <strong className="text-[#0A1F44]">Informática</strong> (Formação técnica)
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>
                    <strong className="text-[#0A1F44]">Despachante Aduaneiro</strong> (Formação
                    profissional)
                  </span>
                </li>
              </ul>
            </div>

            {/* Experiência (verbatim) */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0A1F44] text-[#C9A227] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">EXPERIÊNCIA</h3>
              </div>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>
                    <strong className="text-[#0A1F44]">+20 anos</strong> de trajetória profissional
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>
                    <strong className="text-[#0A1F44]">+7 anos</strong> de atuação relacionada à
                    perícia judicial
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>
                    <strong className="text-[#0A1F44]">TJMG</strong> (Atuação como Perito Judicial)
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>
                    <strong className="text-[#0A1F44]">Brasil</strong> (Estrutura de atendimento
                    nacional 100% online)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Callout: MAIS DO QUE CURRÍCULO (verbatim) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0A1F44] via-[#102A5C] to-[#0A1F44] text-white border border-[#C9A227]/40 shadow-xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              MAIS DO QUE CURRÍCULO
            </span>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Um currículo mostra onde alguém estudou e trabalhou. Uma trajetória mostra o que
              alguém aprendeu resolvendo problemas reais. Minha experiência foi construída pela
              combinação de:{' '}
              <strong className="text-[#F2E5B5]">
                estudo + prática + tecnologia + problemas reais
              </strong>
              . E essa combinação continua evoluindo.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSÃO E VALORES (verbatim)
          ========================================================= */}
      <section className="py-20 md:py-24 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Missão */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0A1F44] text-white border border-[#C9A227]/40 shadow-xl space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                MISSÃO
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Transformar conhecimento técnico em soluções práticas
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                “Transformar conhecimento técnico em soluções práticas, utilizando tecnologia e
                inovação para resolver problemas reais.”
              </p>
              <div className="pt-2 text-xs text-[#DEC05B]">
                Compromisso com o rigor factual, imparcialidade e escalabilidade.
              </div>
            </div>

            {/* Valores (6 valores verbatim) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                  NOSSOS PRINCÍPIOS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44] mt-1">
                  Valores que Norteiam Cada Trabalho
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {valores.map((val) => (
                  <div
                    key={val.name}
                    className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#C9A227]/60 transition-colors"
                  >
                    <div className="font-bold text-sm text-[#0A1F44]">{val.name}</div>
                    <div className="text-xs text-slate-600 mt-1">{val.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA FINAL / CONTATO (verbatim)
          ========================================================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0D2552] via-[#0A1F44] to-[#06132B] text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs sm:text-sm font-semibold tracking-wider text-[#F2E5B5] uppercase">
            Atendimento em Todo o Brasil
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
            PRECISA RESOLVER UM PROBLEMA?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explique sua necessidade. A primeira etapa é entender o problema. Depois, identificar o
            caminho técnico mais adequado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto pt-2">
            {/* WhatsApp (FALE COM JOÃO MOREIRA) */}
            <a
              href={getWhatsAppLink('Olá João Moreira, gostaria de falar sobre um caso.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>FALE COM JOÃO MOREIRA</span>
            </a>

            {/* Email (SOLICITAR ORÇAMENTO) */}
            <Link
              to="/contato"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl hover:shadow-[#C9A227]/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              <Mail className="w-5 h-5 text-[#0A1F44]" />
              <span>SOLICITAR ORÇAMENTO</span>
            </Link>
          </div>

          <div className="pt-10 border-t border-[#1A3868]/60 max-w-2xl mx-auto">
            <p className="font-serif text-lg sm:text-xl font-semibold text-[#F2E5B5] italic">
              “Conhecimento para entender. Experiência para analisar. Tecnologia para transformar.”
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
