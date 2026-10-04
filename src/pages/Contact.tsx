import React, { useState, useEffect } from 'react'
import {
  Phone,
  Mail,
  Instagram,
  ShieldCheck,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  ChevronRight,
  AlertCircle,
  Loader2,
  RotateCcw,
  Sparkles,
} from 'lucide-react'
import {
  PUBLIC_BRAND_NAME,
  CONTACT_EMAIL_LINK,
  CONTACT_INSTAGRAM_HANDLE,
  CONTACT_INSTAGRAM_URL,
  getWhatsAppLink,
} from '../lib/constants'
import {
  createBudgetRequest,
  BUDGET_SERVICES,
  BUDGET_ORIGINS,
  type BudgetServiceType,
  type BudgetOriginType,
} from '../services/budgetRequests'

// Máscara de telefone brasileiro: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits.length > 0 ? `(${digits}` : ''
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

export default function Contact() {
  const [formData, setFormData] = useState<{
    nome: string
    email: string
    telefone: string
    servico: BudgetServiceType
    origem: BudgetOriginType | ''
    descricao: string
    consentimento: boolean
  }>({
    nome: '',
    email: '',
    telefone: '',
    servico: 'Perícia Judicial',
    origem: '',
    descricao: '',
    consentimento: false,
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  // Rola até a âncora #orcamento se estiver na URL
  useEffect(() => {
    if (window.location.hash === '#orcamento') {
      const el = document.getElementById('orcamento')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 150)
      }
    }
  }, [])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskPhone(e.target.value)
    setFormData((prev) => ({ ...prev, telefone: masked }))
    if (validationErrors.telefone) {
      setValidationErrors((prev) => {
        const next = { ...prev }
        delete next.telefone
        return next
      })
    }
  }

  const validate = (): boolean => {
    const errors: Record<string, string> = {}
    if (!formData.nome.trim()) {
      errors.nome = 'Informe seu nome completo.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = 'Informe seu e-mail institucional ou pessoal.'
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Informe um e-mail válido (ex: contato@exemplo.com.br).'
    }

    const phoneDigits = formData.telefone.replace(/\D/g, '')
    if (!formData.telefone.trim()) {
      errors.telefone = 'Informe seu telefone ou WhatsApp com DDD.'
    } else if (phoneDigits.length < 10) {
      errors.telefone = 'Informe um telefone completo com DDD (mínimo 10 dígitos).'
    }

    if (!formData.servico) {
      errors.servico = 'Selecione o tipo de serviço desejado.'
    }

    if (!formData.descricao.trim()) {
      errors.descricao = 'Descreva resumidamente o caso ou necessidade técnica.'
    } else if (formData.descricao.trim().length < 10) {
      errors.descricao = 'Por favor, inclua mais alguns detalhes (mínimo 10 caracteres).'
    }

    if (!formData.consentimento) {
      errors.consentimento = 'É necessário autorizar o contato para envio.'
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)

    if (!validate()) {
      return
    }

    setLoading(true)
    try {
      await createBudgetRequest({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        servico: formData.servico,
        origem: formData.origem,
        descricao: formData.descricao,
        consentimento: formData.consentimento,
      })
      setSubmitted(true)
      setValidationErrors({})
    } catch (err: unknown) {
      console.error('Erro ao enviar solicitação de orçamento:', err)
      setErrorMsg(
        'Não foi possível registrar sua solicitação no momento. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp.',
      )
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      servico: 'Perícia Judicial',
      origem: '',
      descricao: '',
      consentimento: false,
    })
    setSubmitted(false)
    setErrorMsg(null)
    setValidationErrors({})
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
          SEÇÃO DE CONTATO / FORMULÁRIO DE ORÇAMENTO + CARDS
          ========================================================= */}
      <section
        id="orcamento"
        className="py-20 bg-[#F8FAFC] text-slate-800 border-b border-slate-200 scroll-mt-24"
      >
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
                  href={getWhatsAppLink()}
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

                {/* Botão / Cartão: Instagram Oficial */}
                <a
                  href={CONTACT_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#102A5C] via-[#0A1F44] to-[#102A5C] hover:from-[#163878] hover:to-[#163878] text-white border border-[#C9A227]/40 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center shadow-sm">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#DEC05B] block">
                        Instagram Oficial
                      </span>
                      <span className="font-serif font-bold text-base block text-white">
                        {CONTACT_INSTAGRAM_HANDLE}
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

              {/* Dados e Registro */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div>
                  <strong>Profissional:</strong> {PUBLIC_BRAND_NAME}
                </div>
                <div>
                  <strong>Credenciamento:</strong> Perito Judicial junto ao Tribunal de Justiça de
                  Minas Gerais (TJMG).
                </div>
                <div>
                  <strong>Atuação:</strong> Perícia Judicial, Assistência Técnica, Cálculos e
                  Consultoria.
                </div>
              </div>
            </div>

            {/* Coluna 2: Formulário de Orçamento Detalhado */}
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-[#0A1F44] via-[#0E2856] to-[#0A1F44] text-white rounded-3xl p-7 sm:p-10 border border-[#C9A227]/40 shadow-2xl relative overflow-hidden">
                {/* Elementos visuais sutis de fundo */}
                <div
                  aria-hidden="true"
                  className="absolute -top-20 -right-20 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#102A5C]/40 rounded-full blur-3xl pointer-events-none"
                />

                <div className="relative z-10">
                  <div className="mb-6 space-y-2 border-b border-[#1A3868] pb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-[11px] font-semibold tracking-wider text-[#F2E5B5] uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                      Solicitação Detalhada de Orçamento
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Envie os Detalhes da sua Demanda
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Preencha o formulário abaixo com as informações do seu caso. Avaliaremos o
                      escopo técnico para retornar com prazos, honorários e diretrizes adequadas.
                    </p>
                  </div>

                  {/* Estado de Sucesso */}
                  {submitted ? (
                    <div className="py-8 space-y-6 text-center animate-in fade-in duration-500">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#C9A227] to-[#F2E5B5] text-[#0A1F44] flex items-center justify-center shadow-lg shadow-[#C9A227]/30">
                        <CheckCircle2 className="w-10 h-10 text-[#0A1F44] stroke-[2.5]" />
                      </div>

                      <div className="space-y-2 max-w-md mx-auto">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                          SOLICITAÇÃO RECEBIDA COM SUCESSO
                        </span>
                        <h4 className="font-serif text-2xl font-bold text-white">
                          Agradeço pelo envio!
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          Recebemos as informações sobre a demanda em nosso sistema. Retornarei o
                          mais breve possível com a análise preliminar da viabilidade técnica e
                          proposta de honorários.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#102A5C]/70 border border-[#C9A227]/30 text-xs text-[#F2E5B5] max-w-md mx-auto leading-relaxed">
                        Caso haja <strong>prazo judicial iminente</strong> ou urgência, recomendamos
                        antecipar a notificação também pelo WhatsApp direto.
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg transition-all"
                        >
                          <Phone className="w-4 h-4 fill-white" />
                          <span>Falar agora no WhatsApp</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleReset}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#F2E5B5] bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/40 transition-all"
                        >
                          <RotateCcw className="w-4 h-4 text-[#C9A227]" />
                          <span>Enviar nova solicitação</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Alerta de erro da submissão */}
                      {errorMsg && (
                        <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <p className="font-semibold text-red-100">{errorMsg}</p>
                            <a
                              href={getWhatsAppLink()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-bold text-[#F2E5B5] underline hover:text-white"
                            >
                              <span>Clique aqui para conversar direto no WhatsApp</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Nome Completo */}
                      <div>
                        <label
                          htmlFor="orcamento-nome"
                          className="block text-xs font-bold text-[#F2E5B5] uppercase tracking-wider mb-1.5"
                        >
                          Nome Completo *
                        </label>
                        <input
                          id="orcamento-nome"
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => {
                            setFormData({ ...formData, nome: e.target.value })
                            if (validationErrors.nome) {
                              setValidationErrors((prev) => {
                                const next = { ...prev }
                                delete next.nome
                                return next
                              })
                            }
                          }}
                          placeholder="Ex: Dr. Marcelo Ribeiro / Maria Silveira"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#071630] border border-[#1A3868] text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                        />
                        {validationErrors.nome && (
                          <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            {validationErrors.nome}
                          </p>
                        )}
                      </div>

                      {/* E-mail e Telefone em grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="orcamento-email"
                            className="block text-xs font-bold text-[#F2E5B5] uppercase tracking-wider mb-1.5"
                          >
                            E-mail *
                          </label>
                          <input
                            id="orcamento-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value })
                              if (validationErrors.email) {
                                setValidationErrors((prev) => {
                                  const next = { ...prev }
                                  delete next.email
                                  return next
                                })
                              }
                            }}
                            placeholder="seuemail@exemplo.com.br"
                            className="w-full px-4 py-2.5 rounded-xl bg-[#071630] border border-[#1A3868] text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                          />
                          {validationErrors.email && (
                            <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                              {validationErrors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="orcamento-telefone"
                            className="block text-xs font-bold text-[#F2E5B5] uppercase tracking-wider mb-1.5"
                          >
                            Telefone / WhatsApp *
                          </label>
                          <input
                            id="orcamento-telefone"
                            type="tel"
                            required
                            value={formData.telefone}
                            onChange={handlePhoneChange}
                            placeholder="(35) 98846-1481"
                            className="w-full px-4 py-2.5 rounded-xl bg-[#071630] border border-[#1A3868] text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                          />
                          {validationErrors.telefone && (
                            <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                              {validationErrors.telefone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Tipo de Serviço e Como Conheceu */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="orcamento-servico"
                            className="block text-xs font-bold text-[#F2E5B5] uppercase tracking-wider mb-1.5"
                          >
                            Tipo de Serviço *
                          </label>
                          <select
                            id="orcamento-servico"
                            required
                            value={formData.servico}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                servico: e.target.value as BudgetServiceType,
                              })
                              if (validationErrors.servico) {
                                setValidationErrors((prev) => {
                                  const next = { ...prev }
                                  delete next.servico
                                  return next
                                })
                              }
                            }}
                            className="w-full px-4 py-2.5 rounded-xl bg-[#071630] border border-[#1A3868] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                          >
                            {BUDGET_SERVICES.map((serv) => (
                              <option key={serv} value={serv} className="bg-[#0A1F44] text-white">
                                {serv}
                              </option>
                            ))}
                          </select>
                          {validationErrors.servico && (
                            <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                              {validationErrors.servico}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="orcamento-origem"
                            className="block text-xs font-bold text-[#F2E5B5] uppercase tracking-wider mb-1.5"
                          >
                            Como Conheceu? (Opcional)
                          </label>
                          <select
                            id="orcamento-origem"
                            value={formData.origem}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                origem: e.target.value as BudgetOriginType | '',
                              })
                            }
                            className="w-full px-4 py-2.5 rounded-xl bg-[#071630] border border-[#1A3868] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                          >
                            <option value="" className="bg-[#0A1F44] text-slate-300">
                              Selecione uma opção
                            </option>
                            {BUDGET_ORIGINS.map((origem) => (
                              <option
                                key={origem}
                                value={origem}
                                className="bg-[#0A1F44] text-white"
                              >
                                {origem}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Descrição da Necessidade */}
                      <div>
                        <label
                          htmlFor="orcamento-descricao"
                          className="block text-xs font-bold text-[#F2E5B5] uppercase tracking-wider mb-1.5"
                        >
                          Descrição do Caso / Necessidade *
                        </label>
                        <textarea
                          id="orcamento-descricao"
                          rows={4}
                          required
                          value={formData.descricao}
                          onChange={(e) => {
                            setFormData({ ...formData, descricao: e.target.value })
                            if (validationErrors.descricao) {
                              setValidationErrors((prev) => {
                                const next = { ...prev }
                                delete next.descricao
                                return next
                              })
                            }
                          }}
                          placeholder="Descreva a matéria (ex: horas extras, apuração de haveres, perícia documental), número do processo (se houver), vara/comarca e se há prazo peremptório em curso..."
                          className="w-full px-4 py-2.5 rounded-xl bg-[#071630] border border-[#1A3868] text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                        />
                        {validationErrors.descricao && (
                          <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            {validationErrors.descricao}
                          </p>
                        )}
                      </div>

                      {/* Checkbox de Consentimento */}
                      <div className="pt-1">
                        <label className="flex items-start gap-3 cursor-pointer select-none group">
                          <input
                            type="checkbox"
                            checked={formData.consentimento}
                            onChange={(e) => {
                              setFormData({ ...formData, consentimento: e.target.checked })
                              if (validationErrors.consentimento) {
                                setValidationErrors((prev) => {
                                  const next = { ...prev }
                                  delete next.consentimento
                                  return next
                                })
                              }
                            }}
                            className="mt-1 h-4 w-4 rounded border-[#1A3868] text-[#C9A227] focus:ring-[#C9A227] bg-[#071630] accent-[#C9A227]"
                          />
                          <span className="text-xs text-slate-300 group-hover:text-white leading-relaxed">
                            Autorizo o contato para retorno sobre esta solicitação e declaro que os
                            dados fornecidos são verdadeiros.
                          </span>
                        </label>
                        {validationErrors.consentimento && (
                          <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            {validationErrors.consentimento}
                          </p>
                        )}
                      </div>

                      {/* Botão de Envio */}
                      <div className="pt-3">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl hover:shadow-[#C9A227]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 text-[#0A1F44] animate-spin" />
                              <span>ENVIANDO SOLICITAÇÃO...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 text-[#0A1F44]" />
                              <span>Enviar Solicitação</span>
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-400 text-center pt-1">
                        🔒 Seus dados serão mantidos sob estrito sigilo profissional e tratados
                        apenas para responder a esta consulta técnica.
                      </p>
                    </form>
                  )}
                </div>
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
          <div className="text-xs text-slate-400">{PUBLIC_BRAND_NAME} · Perito Judicial TJMG</div>
        </div>
      </section>
    </div>
  )
}
