import React from 'react'
import { Link } from 'react-router-dom'
import {
  Calculator,
  Briefcase,
  Users2,
  Building,
  TrendingUp,
  ChevronRight,
  Phone,
  Mail,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { PUBLIC_BRAND_NAME, getWhatsAppLink } from '../lib/constants'

export default function Calculations() {
  // 4 Áreas de cálculos verbatim do pedido
  const areasCalculos = [
    {
      title: 'Trabalhista',
      desc: 'Verbas, diferenças, horas extras, reflexos e liquidação.',
      details: [
        'Horas extras, intervalos e adicional noturno',
        'Reflexos em DSR, 13º salário, férias e FGTS + 40%',
        'Verbas rescisórias e multas dos arts. 467 e 477 da CLT',
        'Liquidação inicial (PJe-Calc) ou pós-acórdão',
      ],
      icon: Briefcase,
    },
    {
      title: 'Previdenciário',
      desc: 'Cálculos e análises relacionados a benefícios e períodos contributivos.',
      details: [
        'Simulações e conferências de tempo de contribuição',
        'Evolução do salário de benefício (RMI)',
        'Análise de regras de transição da EC 103/2019',
        'Apuração de diferenças retroativas e atrasados',
      ],
      icon: Users2,
    },
    {
      title: 'Cível',
      desc: 'Liquidação, atualização, juros, diferenças e obrigações financeiras.',
      details: [
        'Liquidação por arbitramento ou cálculo aritmético',
        'Aplicação de índices oficiais (INPC, IPCA-E, Taxa Selic)',
        'Contratos cíveis, rescisões e indenizações',
        'Conferência de astreintes e multas cominatórias',
      ],
      icon: Building,
    },
    {
      title: 'Financeiro',
      desc: 'Contratos, juros, amortização, evolução de débitos e conferência de valores.',
      details: [
        'Financiamentos imobiliários e de veículos',
        'Empréstimos consignados e contas bancárias',
        'Tabela Price x SAC e anatocismo (juros sobre juros)',
        'Recálculo pelas taxas médias de mercado (Bacen)',
      ],
      icon: TrendingUp,
    },
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Pilar 03 · Cálculos
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              CÁLCULOS JUDICIAIS E EXTRAJUDICIAIS
            </h1>

            {/* Texto Verbatim */}
            <p className="text-[#DEC05B] text-lg sm:text-xl font-medium leading-relaxed">
              “Transformação de decisões, documentos e informações financeiras em cálculos
              estruturados e verificáveis.”
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Memórias de cálculo claras, planilhas auditáveis e fundamentadas em parâmetros legais
              e jurisprudenciais consolidados.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              {/* Botão CTA Verbatim */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-lg transition-all"
              >
                <span>SOLICITAR ORÇAMENTO</span>
                <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
              </a>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/40 transition-all"
              >
                <span>Enviar Documentos para Análise</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4 ÁREAS DE CÁLCULO (verbatim)
          ========================================================= */}
      <section className="py-20 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              ÁREAS DE ESPECIALIZAÇÃO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Cálculos em Todas as Esferas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Precisão matemática absoluta para evitar condenações excessivas ou perdas financeiras
              irreparáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areasCalculos.map((area) => {
              const IconCalc = area.icon
              return (
                <div
                  key={area.title}
                  className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#C9A227] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                      <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconCalc className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#0A1F44]">
                          {area.title}
                        </h3>
                        <p className="text-xs text-[#C9A227] font-semibold tracking-wide mt-0.5">
                          Especialidade Técnica
                        </p>
                      </div>
                    </div>

                    {/* Descrição Verbatim */}
                    <p className="text-sm sm:text-base text-slate-700 font-medium">{area.desc}</p>

                    {/* Detalhamento */}
                    <ul className="space-y-2 pt-2">
                      {area.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Entregue com memória de cálculo em PDF e planilha
                    </span>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0A1F44] hover:text-[#C9A227] transition-colors"
                    >
                      Solicitar este cálculo →
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais dos Cálculos */}
      <section className="py-20 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A1F44] text-white border border-[#C9A227]/40 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#102A5C] text-[#C9A227] flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Memória Auditável</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cada valor final é composto por fórmulas transparentes, discriminando índices de
                  correção, taxa de juros e marcos prescricionais.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#102A5C] text-[#C9A227] flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Jurisprudência Atualizada
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Aplicação das decisões vinculantes dos tribunais superiores (STF e STJ), incluindo
                  os novos regimes de atualização de débitos judiciais.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#102A5C] text-[#C9A227] flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Agilidade & Sigilo</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Atendimento ágil para cumprimento de prazos judiciais peremptórios com total
                  proteção e sigilo de dados confidenciais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Tem uma sentença para liquidar ou valores para conferir?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Envie as peças e documentos para receber uma proposta com prazo determinado e valor
            fechado.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] to-[#C9A227] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl transition-all"
            >
              <span>SOLICITAR ORÇAMENTO</span>
              <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
