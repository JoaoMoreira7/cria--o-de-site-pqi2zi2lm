import React from 'react'
import { Link } from 'react-router-dom'
import {
  Scale,
  Check,
  Phone,
  Mail,
  ShieldCheck,
  FileCheck,
  FileSpreadsheet,
  FileText,
  BadgeAlert,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import { PUBLIC_BRAND_NAME, LEGAL_NAME, getWhatsAppLink } from '../lib/constants'

export default function JudicialExpertise() {
  // Lista de 10 serviços verbatim do pedido
  const servicos = [
    'Perícia contábil',
    'Perícia financeira',
    'Análise documental',
    'Cálculos judiciais',
    'Laudos periciais',
    'Respostas a quesitos',
    'Liquidação de sentença',
    'Apuração de valores',
    'Atualização monetária',
    'Análise de contratos',
  ]

  const diferenciaisPericia = [
    'Nomeações oficiais e atuação perante o Tribunal de Justiça de Minas Gerais (TJMG)',
    'Fundamentação técnica estritamente alinhada ao Código de Processo Civil (CPC)',
    'Imparcialidade, clareza metodológica e cumprimento rigoroso dos prazos processuais',
    'Disponibilidade para prestar esclarecimentos e comparecer a audiências quando intimado',
    'Estrutura com capacidade para atendimento em demandas estaduais, federais e trabalhistas',
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Pilar 01 · Perícia Judicial
            </div>

            {/* Título Verbatim */}
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              O QUE POSSO FAZER — PERÍCIA JUDICIAL
            </h1>

            {/* Texto Verbatim */}
            <p className="text-[#DEC05B] text-lg sm:text-xl font-medium leading-relaxed">
              Atuação técnica em demandas que necessitam de conhecimento especializado.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Elaboração de laudos periciais fundamentados, apurações contábeis e financeiras,
              conferência de contas e resposta minuciosa aos quesitos formulados pelo magistrado,
              Ministério Público e partes litigantes.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              {/* Botão CTA Verbatim */}
              <a
                href={getWhatsAppLink(
                  'Olá João Moreira, gostaria de solicitar uma perícia judicial.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-lg transition-all"
              >
                <span>SOLICITAR PERÍCIA</span>
                <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
              </a>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/40 transition-all"
              >
                <span>Enviar Dados da Demanda</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LISTA DE SERVIÇOS (10 serviços verbatim em destaque)
          ========================================================= */}
      <section className="py-20 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              SERVIÇOS DE PERÍCIA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Escopo Completo da Atuação Pericial
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Atividades periciais desenvolvidas com observância estrita às normas técnicas e aos
              prazos jurisdicionais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {servicos.map((servico, index) => (
              <div
                key={servico}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#C9A227] hover:bg-white shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Scale className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold text-[#0A1F44] group-hover:text-[#102A5C] capitalize">
                      {servico}
                    </h3>
                    <span className="text-xs font-bold text-[#C9A227]/70 font-mono">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Análise técnica, imparcial e fundamentada.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMO FUNCIONA O PROCESSO DE NOMEAÇÃO E ATUAÇÃO
          ========================================================= */}
      <section className="py-20 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                RIGOR PROCESSUAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
                Atuação Como Perito do Juízo
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Quando nomeado pelo magistrado, o perito atua como auxiliar da Justiça, com o dever
                indeclinável de estrita imparcialidade. Todo o trabalho é consubstanciado em laudo
                pericial circunstanciado que transforma fatos contábeis, financeiros e
                administrativos em conclusões claras para a formação do convencimento do juiz.
              </p>

              <div className="space-y-3">
                {diferenciaisPericia.map((dif) => (
                  <div key={dif} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{dif}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#0A1F44] text-white border border-[#C9A227]/40 shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#C9A227]" />
                  <div>
                    <div className="font-serif text-lg font-bold">Credenciamento Oficial</div>
                    <div className="text-xs text-[#DEC05B]">TJMG — Tribunal de Justiça de MG</div>
                  </div>
                </div>

                <div className="w-full border-t border-[#1A3868]" />

                <div className="text-xs text-slate-300 space-y-2">
                  <p>
                    <strong>Perito:</strong> {PUBLIC_BRAND_NAME} ({LEGAL_NAME})
                  </p>
                  <p>
                    <strong>Compromisso de Imparcialidade:</strong> Laudos isentos,
                    metodologicamente demonstrados com planilhas e memórias de cálculo auditáveis.
                  </p>
                  <p>
                    <strong>Privacidade:</strong> Não divulgação de detalhes restritos ou
                    identificação de partes litigantes em ambiente público.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(
                      'Olá João, gostaria de consultar disponibilidade para nomeação pericial ou trabalho pericial.',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#0A1F44] bg-[#C9A227] hover:bg-[#DEC05B] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#0A1F44]" />
                    <span>Consultar Disponibilidade Pericial</span>
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
            Precisa de um trabalho pericial ou esclarecimento de questões técnicas?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Entre em contato para avaliar os quesitos, a complexidade dos autos e a viabilidade
            técnica.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink(
                'Olá João Moreira, gostaria de solicitar uma perícia judicial.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] to-[#C9A227] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl transition-all"
            >
              <span>SOLICITAR PERÍCIA</span>
              <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
