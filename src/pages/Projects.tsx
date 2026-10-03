import React from 'react'
import { Link } from 'react-router-dom'
import {
  Layers,
  Cpu,
  Calculator,
  Bot,
  Zap,
  GraduationCap,
  Cloud,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  Code2,
} from 'lucide-react'
import { PUBLIC_BRAND_NAME, getWhatsAppLink } from '../lib/constants'

export default function Projects() {
  // 6 Cards de Projetos verbatim do pedido
  const projectCards = [
    {
      title: 'SISTEMAS',
      desc: 'Plataformas digitais para gestão e produtividade.',
      details:
        'Aplicações web modernas para controle de processos, gestão de laudos e fluxo operacional de demandas técnicas.',
      icon: Layers,
    },
    {
      title: 'CÁLCULOS',
      desc: 'Ferramentas para diferentes modalidades de cálculos.',
      details:
        'Motores automatizados de liquidação trabalhista, atualização monetária de sentenças e recálculo financeiro.',
      icon: Calculator,
    },
    {
      title: 'INTELIGÊNCIA ARTIFICIAL',
      desc: 'Agentes e sistemas inteligentes especializados.',
      details:
        'Assistentes de IA treinados para triagem documental, extração de parâmetros de contratos e elaboração de minutas técnicas.',
      icon: Bot,
    },
    {
      title: 'AUTOMAÇÃO',
      desc: 'Redução de tarefas repetitivas através de tecnologia.',
      details:
        'Pipelines digitais para conciliação bancária, cruzamento de dados fiscais e rotinas de peticionamento e controle.',
      icon: Zap,
    },
    {
      title: 'EDUCAÇÃO',
      desc: 'Conteúdos, cursos e materiais para formação profissional.',
      details:
        'Guias práticos, manuais e capacitação para peritos, contadores, advogados e estudantes da área pericial.',
      icon: GraduationCap,
    },
    {
      title: 'SAAS',
      desc: 'Produtos digitais disponibilizados como serviço.',
      details:
        'Softwares escaláveis em nuvem para uso por outros peritos, contadores e departamentos jurídicos corporativos.',
      icon: Cloud,
    },
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Inovação & Produtos
            </div>

            {/* Título Verbatim */}
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              PROJETOS EM DESENVOLVIMENTO
            </h1>

            {/* Texto Verbatim */}
            <p className="text-[#DEC05B] text-lg sm:text-xl font-medium leading-relaxed">
              “A próxima etapa da carreira está direcionada à criação de produtos e empresas de
              tecnologia capazes de transformar conhecimento profissional em soluções escaláveis.”
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Combinando a bagagem de mais de duas décadas em finanças, perícias judiciais e
              matemática com engenharia de software e inteligência artificial.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-lg transition-all"
              >
                <span>CONVERSAR SOBRE PROJETOS</span>
                <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
              </a>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/40 transition-all"
              >
                <span>Propor Parceria ou Piloto</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OS 6 CARDS DE PROJETOS (verbatim)
          ========================================================= */}
      <section className="py-20 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              PORTFÓLIO DE PRODUTOS & INICIATIVAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Soluções Digitais em Construção
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Aplicações estruturadas para transformar conhecimento especializado em ativos
              escaláveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCards.map((proj, idx) => {
              const IconProj = proj.icon
              return (
                <div
                  key={proj.title}
                  className="p-8 rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-white border border-slate-200 hover:border-[#C9A227] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconProj className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#C9A227]/80">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Título Verbatim */}
                    <h3 className="font-serif text-xl font-bold text-[#0A1F44] group-hover:text-[#102A5C]">
                      {proj.title}
                    </h3>

                    {/* Descrição Verbatim */}
                    <p className="text-sm font-semibold text-slate-800">{proj.desc}</p>

                    <p className="text-xs text-slate-600 leading-relaxed">{proj.details}</p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A1F44]">
                    <span>Em fase de desenvolvimento / MVP</span>
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          VISÃO DE FUTURO (verbatim do pedido)
          ========================================================= */}
      <section className="py-20 md:py-24 bg-[#0A1F44] text-white border-b border-[#1A3868]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#102A5C] via-[#0A1F44] to-[#102A5C] border-2 border-[#C9A227]/50 shadow-2xl space-y-6 text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              VISÃO DE FUTURO
            </span>

            {/* Texto Verbatim */}
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
              Construir uma estrutura profissional capaz de conectar:
            </h2>

            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-4 rounded-2xl bg-[#06132B]/90 border border-[#C9A227]/40 text-sm sm:text-base font-bold text-[#F2E5B5] tracking-wide">
              <span>Perícia</span>
              <span className="text-[#C9A227]">+</span>
              <span>Consultoria</span>
              <span className="text-[#C9A227]">+</span>
              <span>Cálculos</span>
              <span className="text-[#C9A227]">+</span>
              <span>Tecnologia</span>
              <span className="text-[#C9A227]">+</span>
              <span className="text-white">Inteligência Artificial</span>
            </div>

            {/* Texto Verbatim */}
            <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
              “O objetivo é sair do modelo tradicional em que conhecimento depende exclusivamente de
              horas trabalhadas e desenvolver soluções capazes de gerar valor de maneira escalável.”
            </p>

            <div className="pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0A1F44] bg-[#C9A227] hover:bg-[#DEC05B] shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-[#0A1F44]" />
                <span>Conversar com João Moreira sobre Parcerias</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#F8FAFC] text-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44]">
            Deseja testar uma ferramenta ou implementar automação no seu negócio?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Estamos abertos a empresas parceiras e escritórios de advocacia que queiram participar
            de projetos piloto.
          </p>
          <div className="pt-2">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#0A1F44] hover:bg-[#102A5C] shadow-lg transition-all"
            >
              <span>FALE CONOSCO SOBRE PROJETOS</span>
              <ArrowRight className="w-4 h-4 text-[#C9A227]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
