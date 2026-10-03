import React from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  GraduationCap,
  Briefcase,
  Building2,
  Scale,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Clock,
  Compass,
} from 'lucide-react'
import { PhotoFrame } from '../components/PhotoFrame'
import {
  PUBLIC_BRAND_NAME,
  LEGAL_NAME,
  CONTACT_WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  getWhatsAppLink,
} from '../lib/constants'

export default function About() {
  // 4 Blocos de Formação Multidisciplinar (verbatim)
  const formacao = [
    {
      title: 'ADMINISTRAÇÃO',
      degree: 'Bacharelado',
      desc: 'Gestão, processos, planejamento, organização e tomada de decisões.',
    },
    {
      title: 'MATEMÁTICA',
      degree: 'Licenciatura',
      desc: 'Raciocínio lógico, cálculos, análise quantitativa e interpretação de dados.',
    },
    {
      title: 'ENGENHARIA DE SOFTWARE',
      degree: 'MBA',
      desc: 'Tecnologia, desenvolvimento de sistemas, arquitetura e soluções digitais.',
    },
    {
      title: 'INFORMÁTICA',
      degree: 'Formação Técnica',
      desc: 'Base técnica para utilização e desenvolvimento de soluções computacionais.',
    },
  ]

  // Linha do Tempo (marcos e textos verbatim)
  const timeline = [
    {
      year: '2002',
      title: 'INÍCIO DA TRAJETÓRIA PROFISSIONAL',
      desc: 'Entrada no mercado de trabalho na área administrativa. O contato direto com empresas e processos administrativos formou a base prática da carreira.',
      status: 'past',
    },
    {
      year: '2011',
      title: 'CONSOLIDAÇÃO ACADÊMICA',
      desc: 'Conclusão do ensino médio e continuidade da formação profissional e acadêmica.',
      status: 'past',
    },
    {
      year: '2016',
      title: 'CONSULTORIA',
      desc: 'Início de uma nova fase profissional, com atuação independente em consultoria e suporte técnico.',
      status: 'past',
    },
    {
      year: '2019',
      title: 'PERÍCIA JUDICIAL',
      desc: 'Credenciamento e atuação como Perito Judicial junto ao Tribunal de Justiça de Minas Gerais.',
      status: 'past',
    },
    {
      year: '2020',
      title: 'NOMEAÇÕES JUDICIAIS',
      desc: 'Ampliação da atuação em processos judiciais e desenvolvimento da experiência prática em trabalhos periciais.',
      status: 'past',
    },
    {
      year: '2020–2026',
      title: 'EXPANSÃO MULTIDISCIPLINAR',
      desc: 'Ampliação da atuação para cálculos, assistência técnica, consultoria, regularização, tecnologia e desenvolvimento de soluções digitais.',
      status: 'current',
    },
    {
      year: 'PRÓXIMA FASE',
      title: 'TECNOLOGIA E ESCALA',
      desc: 'Transformação do conhecimento profissional acumulado em sistemas, plataformas, automações e soluções baseadas em inteligência artificial.',
      status: 'future',
    },
  ]

  // 5 Blocos: Experiência em Ambientes Reais (verbatim)
  const ambientesReais = [
    {
      title: 'Processos judiciais',
      desc: 'Análise de documentos, cálculos, contratos, quesitos e questões técnicas.',
      icon: Scale,
    },
    {
      title: 'Empresas',
      desc: 'Problemas administrativos, financeiros, documentais e operacionais.',
      icon: Building2,
    },
    {
      title: 'Escritórios de advocacia',
      desc: 'Suporte técnico, cálculos, assistência técnica e análise de informações.',
      icon: Briefcase,
    },
    {
      title: 'Pessoas físicas',
      desc: 'Regularizações, cálculos, documentação e orientação técnica.',
      icon: ShieldCheck,
    },
    {
      title: 'Tecnologia',
      desc: 'Desenvolvimento de sistemas e automações para transformar tarefas complexas em processos digitais.',
      icon: Cpu,
    },
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Top Banner / Header da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Sobre {PUBLIC_BRAND_NAME}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Trajetória, Formação e Visão Profissional
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Mais de duas décadas combinando rigor analítico, conhecimento técnico e
              desenvolvimento tecnológico para resolver problemas do mundo real.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          UMA CARREIRA CONSTRUÍDA ENTRE DIFERENTES ÁREAS (verbatim)
          ========================================================= */}
      <section className="py-20 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto Oficial com Moldura */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md">
                <PhotoFrame
                  priority
                  caption={`${PUBLIC_BRAND_NAME} — Perito Judicial credenciado junto ao TJMG`}
                />
              </div>
            </div>

            {/* Texto Verbatim */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                PERFIL PROFISSIONAL
              </span>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0A1F44] leading-tight">
                Uma carreira construída entre diferentes áreas
              </h2>

              <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#C9A227] space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong>{LEGAL_NAME}</strong> construiu sua trajetória profissional unindo áreas
                  que normalmente são tratadas separadamente:
                </p>

                <div className="font-semibold text-[#0A1F44] py-1 text-sm sm:text-base tracking-wide bg-white p-3 rounded-lg border border-slate-200">
                  Administração + Matemática + Tecnologia + Finanças + Perícia + Consultoria
                </div>

                <p>
                  Essa combinação permite analisar problemas sob diferentes perspectivas e
                  transformar informações complexas em soluções estruturadas. Sua atuação abrange
                  demandas judiciais, empresariais, administrativas, financeiras e tecnológicas.
                </p>
              </div>

              <div className="text-sm text-slate-600">
                <strong>Nome formal:</strong> {LEGAL_NAME} ·{' '}
                <strong>Comunicação e marca pública:</strong> {PUBLIC_BRAND_NAME}.
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/pericia-judicial"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0A1F44] hover:bg-[#102A5C] transition-colors"
                >
                  <span>Ver Atuação em Perícia</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" />
                </Link>
                <Link
                  to="/tecnologia-ia"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold text-[#0A1F44] bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>Conhecer Tecnologia & IA</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FORMAÇÃO MULTIDISCIPLINAR (4 blocos verbatim)
          ========================================================= */}
      <section className="py-20 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              BASE ACADÊMICA & TÉCNICA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Formação Multidisciplinar
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Fundamentos sólidos que conectam gestão, modelagem quantitativa e arquitetura de
              software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formacao.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#C9A227]/60 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="inline-block px-2.5 py-1 rounded-md bg-[#0A1F44]/5 text-[#0A1F44] text-[11px] font-bold">
                    {item.degree}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1F44]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Banner de Experiência Profissional (verbatim) */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0A1F44] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C9A227]/40 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold tracking-[0.2em] text-[#C9A227] uppercase block">
                EXPERIÊNCIA PROFISSIONAL
              </span>
              <p className="text-base sm:text-lg font-medium text-slate-200">
                Mais de duas décadas de contato com rotinas administrativas, empresariais, técnicas
                e profissionais.
              </p>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#102A5C] border border-[#C9A227]/30 text-white font-serif font-bold text-lg shrink-0">
              <Award className="w-5 h-5 text-[#C9A227]" />
              <span>+20 Anos de Mercado</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LINHA DO TEMPO (marcos e textos verbatim)
          ========================================================= */}
      <section className="py-20 md:py-24 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              EVOLUÇÃO HISTÓRICA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Linha do Tempo
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A trajetória que consolidou a transição da gestão prática para a perícia judicial e
              para o desenvolvimento de tecnologia escalável.
            </p>
          </div>

          <div className="relative border-l-2 border-[#C9A227]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {timeline.map((item) => {
              const isFuture = item.status === 'future'
              const isCurrent = item.status === 'current'
              return (
                <div key={item.year} className="relative group">
                  {/* Dot indicator */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-all ${
                      isFuture
                        ? 'bg-[#C9A227] border-white shadow-md animate-pulse'
                        : isCurrent
                          ? 'bg-[#0A1F44] border-[#C9A227]'
                          : 'bg-white border-[#C9A227]'
                    }`}
                  />

                  {/* Card Content */}
                  <div
                    className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                      isFuture
                        ? 'bg-gradient-to-r from-[#0A1F44] to-[#102A5C] text-white border-[#C9A227]/50 shadow-xl'
                        : isCurrent
                          ? 'bg-[#F8FAFC] border-[#C9A227]/50 shadow-md'
                          : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className={`font-serif text-base font-black tracking-wider ${
                          isFuture ? 'text-[#F2E5B5]' : 'text-[#C9A227]'
                        }`}
                      >
                        {item.year}
                      </span>
                      <span
                        className={`text-xs uppercase font-bold tracking-wider ${
                          isFuture ? 'text-slate-200' : 'text-slate-500'
                        }`}
                      >
                        · {item.title}
                      </span>
                    </div>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isFuture ? 'text-slate-200' : 'text-slate-700'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIÊNCIA EM AMBIENTES REAIS (5 blocos verbatim)
          ========================================================= */}
      <section className="py-20 bg-[#0A1F44] text-white border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              APLICAÇÃO PRÁTICA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Experiência em Ambientes Reais
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Resultados consolidados em diversos setores do ecossistema técnico e jurídico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambientesReais.map((env, idx) => {
              const IconEnv = env.icon
              return (
                <div
                  key={env.title}
                  className={`p-6 rounded-2xl bg-[#102A5C]/60 hover:bg-[#102A5C] border border-[#1A3868] hover:border-[#C9A227]/70 shadow-md transition-all ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0A1F44] border border-[#C9A227]/40 text-[#C9A227] flex items-center justify-center shrink-0">
                      <IconEnv className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white">{env.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{env.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA FINAL DA PÁGINA SOBRE
          ========================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#0D2552] via-[#0A1F44] to-[#06132B] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Deseja contar com essa experiência no seu processo ou empresa?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Atendimento direto com João Moreira, com análise técnica prévia, fundamentação
            documental e prazos alinhados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppLink(
                'Olá João, li sua trajetória profissional e gostaria de agendar uma conversa.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-[#C9A227] hover:bg-[#DEC05B] shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#0A1F44]" />
              <span>Falar Diretamente pelo WhatsApp</span>
            </a>

            <Link
              to="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/40 transition-all"
            >
              <span>Enviar Mensagem ou Proposta</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
