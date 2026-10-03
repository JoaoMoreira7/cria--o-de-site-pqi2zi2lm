import React, { useState } from 'react'
import {
  Phone,
  Mail,
  Scale,
  ShieldCheck,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  ChevronRight,
  MessageSquare,
  FileText,
  AlertCircle,
} from 'lucide-react'
import {
  PUBLIC_BRAND_NAME,
  LEGAL_NAME,
  CONTACT_WHATSAPP_DISPLAY,
  CONTACT_WHATSAPP_RAW,
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  getWhatsAppLink,
} from '../lib/constants'

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoDemanda: 'pericia',
    perfil: 'advogado',
    mensagem: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Preparar mensagem estruturada para o WhatsApp direto
    const labelsDemanda: Record<string, string> = {
      pericia: 'Perícia Judicial',
      assistencia: 'Assistência Técnica para Processo',
      calculos: 'Elaboração/Conferência de Cálculos',
      consultoria: 'Consultoria Técnica/Empresarial',
      tecnologia: 'Tecnologia / Automação / IA',
      outro: 'Outro assunto',
    }

    const labelsPerfil: Record<string, string> = {
      advogado: 'Advogado(a) / Escritório',
      empresa: 'Empresa / Empresário',
      pessoa_fisica: 'Pessoa Física',
      perito_outro: 'Perito / Outro Profissional',
    }

    const mensagemWhats = `Olá João Moreira! Meu nome é ${formData.nome}.
• Perfil: ${labelsPerfil[formData.perfil] || formData.perfil}
• Demanda: ${labelsDemanda[formData.tipoDemanda] || formData.tipoDemanda}
• E-mail: ${formData.email || 'Não informado'}
• Telefone: ${formData.telefone || 'Não informado'}
• Detalhes do caso:
${formData.mensagem}`

    // Redireciona diretamente para o WhatsApp com os dados
    const url = `https://wa.me/${CONTACT_WHATSAPP_RAW}?text=${encodeURIComponent(mensagemWhats)}`
    window.open(url, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Canais Diretos de Atendimento
            </div>

            {/* Headline Verbatim */}
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              PRECISA RESOLVER UM PROBLEMA?
            </h1>

            {/* Texto Verbatim */}
            <p className="text-[#DEC05B] text-lg sm:text-xl font-medium leading-relaxed">
              “Explique sua necessidade. A primeira etapa é entender o problema. Depois, identificar
              o caminho técnico mais adequado.”
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Atendimento com total sigilo profissional e sem burocracia para processos judiciais,
              demandas empresariais ou análises técnicas em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO DE CONTATO / FORMULÁRIO + CARDS
          ========================================================= */}
      <section className="py-20 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Coluna 1: Informações de Contato e Botões Verbatim */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                  CONTATO DIRETO
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44]">
                  Fale com João Moreira
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Escolha o canal de sua preferência para iniciar a conversa. Prazos judiciais com
                  urgência recebem atendimento prioritário.
                </p>
              </div>

              {/* Botões Principais Verbatim */}
              <div className="space-y-3">
                {/* Botão Verbatim: FALE COM JOÃO MOREIRA */}
                <a
                  href={getWhatsAppLink('Olá João Moreira, gostaria de falar sobre um caso.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 fill-white" />
                    <div className="text-left">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-green-100 block">
                        WhatsApp Direto
                      </span>
                      <span className="font-serif font-bold text-base block">
                        FALE COM JOÃO MOREIRA
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white" />
                </a>

                {/* Botão Verbatim: SOLICITAR ORÇAMENTO (E-mail) */}
                <a
                  href={CONTACT_EMAIL_LINK}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#0A1F44] hover:bg-[#102A5C] text-white border border-[#C9A227]/40 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-[#C9A227]" />
                    <div className="text-left">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A227] block">
                        E-mail Institucional
                      </span>
                      <span className="font-serif font-bold text-base block">
                        SOLICITAR ORÇAMENTO
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#C9A227]" />
                </a>
              </div>

              {/* Detalhes de Atendimento */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0A1F44] uppercase tracking-wide">
                      Abrangência Nacional
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Atuação profissional em todo o Brasil com processo 100% digital e seguro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0A1F44] uppercase tracking-wide">
                      Retorno Ágil
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Retorno rápido para consultas de viabilidade técnica e conferência de prazos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0A1F44] uppercase tracking-wide">
                      Sigilo Profissional
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Garantia absoluta de confidencialidade de documentos e informações
                      processuais.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dados Formais e Registro */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div>
                  <strong>Marca Pública:</strong> {PUBLIC_BRAND_NAME}
                </div>
                <div>
                  <strong>Razão Social / Dados Formais:</strong> {LEGAL_NAME}
                </div>
                <div>
                  <strong>Credenciamento:</strong> Perito Judicial junto ao Tribunal de Justiça de
                  Minas Gerais (TJMG).
                </div>
              </div>
            </div>

            {/* Coluna 2: Formulário Estruturado para Orçamento / Contato */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg relative">
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#C9A227] uppercase">
                    FORMULÁRIO DE DEMANDA
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0A1F44]">
                    Envie os Detalhes da sua Solicitação
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Preencha os campos abaixo. Ao clicar em enviar, os dados serão organizados para
                    envio direto pelo WhatsApp ou e-mail.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      Sua solicitação foi processada! Abrimos o WhatsApp com os dados estruturados
                      para João Moreira.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0A1F44] uppercase tracking-wider mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: Dr. Marcelo Ribeiro"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A1F44] uppercase tracking-wider mb-1.5">
                        Você é: *
                      </label>
                      <select
                        value={formData.perfil}
                        onChange={(e) => setFormData({ ...formData, perfil: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent bg-white transition-all"
                      >
                        <option value="advogado">Advogado(a) / Escritório</option>
                        <option value="empresa">Empresa / Empresário</option>
                        <option value="pessoa_fisica">Pessoa Física</option>
                        <option value="perito_outro">Outro Profissional / Perito</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0A1F44] uppercase tracking-wider mb-1.5">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contato@seuescritorio.com.br"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A1F44] uppercase tracking-wider mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(DDD) 90000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A1F44] uppercase tracking-wider mb-1.5">
                      Tipo de Demanda *
                    </label>
                    <select
                      value={formData.tipoDemanda}
                      onChange={(e) => setFormData({ ...formData, tipoDemanda: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent bg-white transition-all"
                    >
                      <option value="pericia">
                        Perícia Judicial (Laudos, Quesitos, Nomeações)
                      </option>
                      <option value="assistencia">Assistência Técnica para Advogados</option>
                      <option value="calculos">
                        Cálculos Judiciais (Trabalhista, Cível, Previdenciário, Financeiro)
                      </option>
                      <option value="consultoria">
                        Consultoria Técnica / Administrativa / Financeira
                      </option>
                      <option value="tecnologia">Tecnologia, IA e Automação de Processos</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A1F44] uppercase tracking-wider mb-1.5">
                      Explique sua necessidade / Detalhes do caso *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Descreva resumidamente a demanda, matéria envolvida e eventual prazo processual em curso..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl hover:shadow-[#C9A227]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="w-4 h-4 text-[#0A1F44]" />
                      <span>ENVIAR SOLICITAÇÃO DE AVALIAÇÃO</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    🔒 Suas informações trafegam com total sigilo e não são compartilhadas com
                    terceiros.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque Final Verbatim */}
      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
            COMPROMISSO TÉCNICO
          </span>
          <p className="font-serif text-2xl sm:text-4xl font-semibold text-[#F2E5B5] italic leading-relaxed">
            “Conhecimento para entender. Experiência para analisar. Tecnologia para transformar.”
          </p>
          <div className="text-xs text-slate-400">
            {PUBLIC_BRAND_NAME} ({LEGAL_NAME}) · Perito Judicial TJMG
          </div>
        </div>
      </section>
    </div>
  )
}
