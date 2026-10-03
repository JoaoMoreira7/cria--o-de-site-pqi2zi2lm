import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Check,
  Phone,
  Mail,
  ChevronRight,
  FileCheck2,
  FileSpreadsheet,
  HelpCircle,
  AlertTriangle,
  Scale,
  Briefcase,
} from 'lucide-react'
import { PUBLIC_BRAND_NAME, LEGAL_NAME, getWhatsAppLink } from '../lib/constants'

export default function TechnicalAssistance() {
  // 9 áreas de apoio verbatim do pedido
  const areasApoio = [
    {
      title: 'Elaboração de quesitos',
      desc: 'Formulações estratégicas e objetivas para guiar o perito do juízo aos pontos cruciais.',
    },
    {
      title: 'Análise de laudos',
      desc: 'Leitura crítica de laudos apresentados pelo perito do juízo ou pela parte adversa.',
    },
    {
      title: 'Manifestações técnicas',
      desc: 'Redação de manifestações fundamentadas com embasamento matemático e legal.',
    },
    {
      title: 'Cálculos',
      desc: 'Memórias de cálculo completas, liquidações e simulações para instrução processual.',
    },
    {
      title: 'Conferência de valores',
      desc: 'Auditoria linha a linha de cálculos apresentados para identificar divergências.',
    },
    {
      title: 'Impugnações técnicas',
      desc: 'Identificação de erros materiais, equívocos metodológicos e omissões nos autos.',
    },
    {
      title: 'Pareceres',
      desc: 'Elaboração de parecer técnico circunstanciado assinado por especialista habilitado.',
    },
    {
      title: 'Liquidação de sentença',
      desc: 'Transformação do comando sentencial em valores líquidos, exatos e atualizados.',
    },
    {
      title: 'Acompanhamento da perícia',
      desc: 'Presença e suporte técnico durante diligências e etapas periciais.',
    },
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Pilar 02 · Assistência Técnica
            </div>

            {/* Título Verbatim */}
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              ASSISTÊNCIA TÉCNICA PARA ADVOGADOS
            </h1>

            {/* Texto Verbatim */}
            <p className="text-[#DEC05B] text-lg sm:text-xl font-medium leading-relaxed">
              “O advogado não precisa dominar todos os aspectos técnicos de uma perícia. Meu
              trabalho é fornecer o suporte técnico necessário para compreender os números,
              documentos e cálculos envolvidos.”
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Trabalho colaborativo com escritórios de advocacia em todo o Brasil para nivelar a
              discussão técnica, prevenir prejuízos em laudos desfavoráveis e fortalecer a tese
              jurídica de seu cliente.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              {/* Botão CTA Verbatim */}
              <a
                href={getWhatsAppLink(
                  'Olá João Moreira, gostaria de solicitar assistência técnica para um processo.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-lg transition-all"
              >
                <span>SOLICITAR ASSISTÊNCIA TÉCNICA</span>
                <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
              </a>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/40 transition-all"
              >
                <span>Consultar Caso com Sigilo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APOIO EM (9 itens verbatim)
          ========================================================= */}
      <section className="py-20 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              COMO POSSO APOIAR O SEU ESCRITÓRIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Apoio Técnico Estratégico em Cada Fase
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Atuação preventiva na fase probatória e combativa nas manifestações e liquidações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areasApoio.map((area, idx) => (
              <div
                key={area.title}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#C9A227] hover:bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1F44] group-hover:text-[#102A5C]">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{area.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-[#0A1F44]">
                  Fase processual ou extrajudicial
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          POR QUE CONTRATAR ASSISTENTE TÉCNICO?
          ========================================================= */}
      <section className="py-20 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                VANTAGEM ESTRATÉGICA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
                Segurança Para o Advogado e Para a Parte
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                A nomeação de assistente técnico é uma faculdade garantida pelo CPC que transforma o
                debate probatório. Enquanto o perito judicial emite um parecer que pode conter
                premissas equivocadas, o assistente técnico fiscaliza a metodologia, apresenta
                quesitos suplementares e oferece fundamentação para eventuais impugnações.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    Quesitos técnicos formulados para esclarecer pontos favoráveis à tese da defesa
                    ou petição inicial.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    Pareceres técnicos com linguagem clara, permitindo ao advogado sustentar
                    petições sólidas.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-[#0A1F44] text-[#C9A227] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    Atendimento online ágil com retorno de documentos e conferências dentro dos
                    prazos legais.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#0A1F44] text-white border border-[#C9A227]/40 shadow-xl space-y-5">
                <h3 className="font-serif text-xl font-bold text-white">
                  Parceria com Escritórios de Advocacia
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Trabalhamos como o braço técnico pericial do seu escritório. Você cuida da
                  estratégia jurídica; nós cuidamos da matemática, dos documentos e da consistência
                  dos números.
                </p>

                <div className="p-4 rounded-xl bg-[#102A5C] border border-[#1E3A68] text-xs text-[#DEC05B]">
                  Atendimento em processos da Justiça Estadual, Federal e do Trabalho em todas as
                  regiões do país.
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(
                      'Olá João, sou advogado e gostaria de tirar dúvidas sobre a atuação como assistente técnico.',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#0A1F44] bg-[#C9A227] hover:bg-[#DEC05B] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#0A1F44]" />
                    <span>Falar Diretamente pelo WhatsApp</span>
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
            Tem prazo em curso para apresentar quesitos ou impugnar laudo?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Envie sua demanda para análise de viabilidade e elaboração de proposta rápida.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink(
                'Olá João Moreira, tenho prazo processual e gostaria de solicitar assistência técnica urgente.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] to-[#C9A227] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl transition-all"
            >
              <span>SOLICITAR ASSISTÊNCIA TÉCNICA</span>
              <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
