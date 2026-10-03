import React from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  Check,
  ChevronRight,
  Phone,
  Mail,
  ShieldCheck,
  Building2,
  TrendingUp,
  FileCheck,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { PUBLIC_BRAND_NAME, getWhatsAppLink } from '../lib/constants'

export default function Consulting() {
  // 10 áreas de atuação da consultoria verbatim do pedido
  const situacoesConsultoria = [
    {
      title: 'Administração',
      desc: 'Estruturação de rotinas, diagnóstico operacional e governança interna.',
    },
    {
      title: 'Finanças',
      desc: 'Análise de fluxo de caixa, endividamento, viabilidade e equilíbrio orçamentário.',
    },
    {
      title: 'Documentos',
      desc: 'Auditoria e organização de acervos documentais, contratos e registros fiscais.',
    },
    {
      title: 'Empresas',
      desc: 'Resolução de impasses societários, apuração de haveres e reestruturação de processos.',
    },
    {
      title: 'Processos',
      desc: 'Mapeamento e otimização de fluxos operacionais para eliminar gargalos e custos ocultos.',
    },
    {
      title: 'Regularização',
      desc: 'Diagnóstico e saneamento de passivos administrativos, cadastrais ou contábeis.',
    },
    {
      title: 'Organização',
      desc: 'Implantação de controles internos para suporte à tomada de decisões estratégicas.',
    },
    {
      title: 'Tecnologia',
      desc: 'Modernização de rotinas com ferramentas digitais, automações e softwares de gestão.',
    },
    {
      title: 'Planejamento',
      desc: 'Definição de metas, cronogramas operacionais e planos de ação com base em dados.',
    },
    {
      title: 'Análise técnica',
      desc: 'Avaliação isenta de problemas multidisciplinares complexos com parecer conclusivo.',
    },
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Pilar 04 · Consultoria
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              CONSULTORIA TÉCNICA E EMPRESARIAL
            </h1>

            {/* Texto Verbatim */}
            <p className="text-[#DEC05B] text-lg sm:text-xl font-medium leading-relaxed">
              “Nem todo problema precisa de um processo judicial. Muitas vezes, o primeiro passo é
              entender corretamente o problema. A consultoria atua na análise e estruturação de
              situações complexas.”
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Diagnóstico claro para empresas, empresários e profissionais que buscam prevenir
              litígios, organizar números e identificar a melhor solução técnica antes de tomar
              decisões irreversíveis.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              {/* Botão CTA Verbatim */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-lg transition-all"
              >
                <span>FALAR SOBRE MEU PROBLEMA</span>
                <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
              </a>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/40 transition-all"
              >
                <span>Solicitar Reunião de Alinhamento</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ÁREAS DE ATUAÇÃO DA CONSULTORIA (10 situações verbatim)
          ========================================================= */}
      <section className="py-20 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              ESCOPO DE ANÁLISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Situações em que a Consultoria Atua
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Identificação rápida da raiz do problema e desenho de um plano de ação viável.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {situacoesConsultoria.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#C9A227] hover:bg-white shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold text-[#0A1F44] group-hover:text-[#102A5C]">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-[#C9A227]">0{index + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MÉTODO DE TRABALHO DA CONSULTORIA
          ========================================================= */}
      <section className="py-20 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                METODOLOGIA DE DIAGNÓSTICO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
                Antes da Ação, a Clareza
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Muitas vezes, empresas despendem tempo e recursos consideráveis em demandas
                infrutíferas porque a raiz do problema não foi adequadamente delimitada. Nosso
                trabalho de consultoria elimina a névoa documental e financeira para apresentar
                cenários concretos.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="font-bold text-sm text-[#0A1F44]">
                    1. Entendimento e Levantamento
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Coleta de fatos, contratos, relatórios e demonstrativos contábeis para entender
                    as variáveis reais.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="font-bold text-sm text-[#0A1F44]">2. Estruturação e Cruzamento</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Aplicação de raciocínio matemático, contábil e de gestão para mapear
                    incoerências ou oportunidades.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="font-bold text-sm text-[#0A1F44]">
                    3. Apresentação do Caminho Técnico
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Entrega de relatório claro, com parecer técnico objetivo e alternativas práticas
                    de solução.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#0A1F44] text-white border border-[#C9A227]/40 shadow-xl space-y-5">
                <h3 className="font-serif text-xl font-bold text-white">
                  Consultoria com Visão Multidisciplinar
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Por integrar administração, matemática, perícia e tecnologia, o diagnóstico não se
                  limita a relatórios teóricos: ele entrega recomendações acionáveis e compatíveis
                  com a realidade operacional da sua organização.
                </p>

                <div className="p-4 rounded-xl bg-[#102A5C] border border-[#1E3A68] text-xs text-[#DEC05B]">
                  Atendimento sigiloso para pessoas físicas e jurídicas em todo o território
                  nacional.
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#0A1F44] bg-[#C9A227] hover:bg-[#DEC05B] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#0A1F44]" />
                    <span>Falar com João Moreira</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Tem um problema complexo que precisa de clareza técnica?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Explique sua situação de forma confidencial para identificarmos os próximos passos.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] to-[#C9A227] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl transition-all"
            >
              <span>FALAR SOBRE MEU PROBLEMA</span>
              <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
