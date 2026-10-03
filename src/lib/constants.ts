export const CONTACT_WHATSAPP_RAW = '5535988461481'
export const CONTACT_WHATSAPP_DISPLAY = '(35) 98846-1481'
export const CONTACT_EMAIL = 'joaomoreiraperito@gmail.com'
export const CONTACT_EMAIL_LINK = `mailto:${CONTACT_EMAIL}`
export const CONTACT_INSTAGRAM_HANDLE = '@joaomoreiraperito'
export const CONTACT_INSTAGRAM_URL = 'https://instagram.com/joaomoreiraperito'

export const PUBLIC_BRAND_NAME = 'JOÃO MOREIRA'
export const LEGAL_NAME = 'João Moreira'

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá, João Moreira! Gostaria de falar sobre um serviço e receber mais informações. Poderia me atender?'

/**
 * Gera URL do WhatsApp com a mensagem padrão pré-preenchida
 */
export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGE)
  return `https://wa.me/${CONTACT_WHATSAPP_RAW}?text=${text}`
}

export const NAV_LINKS = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Perícia Judicial', path: '/pericia-judicial' },
  { label: 'Assistência Técnica', path: '/assistencia-tecnica' },
  { label: 'Cálculos', path: '/calculos' },
  { label: 'Consultoria', path: '/consultoria' },
  { label: 'Tecnologia & IA', path: '/tecnologia-ia' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Contato', path: '/contato' },
  { label: 'Publicações', path: '/publicacoes' },
]

export const PILARES = [
  {
    num: '01',
    title: 'PERÍCIA',
    desc: 'Análise técnica para processos judiciais, elaboração de trabalhos periciais, cálculos e esclarecimento de questões técnicas.',
    path: '/pericia-judicial',
    ctaText: 'Solicitar Perícia',
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
  },
  {
    num: '02',
    title: 'ASSISTÊNCIA TÉCNICA',
    desc: 'Suporte especializado para advogados, empresas e partes que precisam compreender, conferir ou contestar aspectos técnicos de um processo.',
    path: '/assistencia-tecnica',
    ctaText: 'Solicitar Assistência Técnica',
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
  },
  {
    num: '03',
    title: 'CÁLCULOS',
    desc: 'Cálculos judiciais, trabalhistas, previdenciários, cíveis e financeiros, incluindo liquidação e atualização de valores.',
    path: '/calculos',
    ctaText: 'Solicitar Cálculos',
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
  },
  {
    num: '04',
    title: 'CONSULTORIA',
    desc: 'Análise de problemas administrativos, financeiros, documentais, empresariais e operacionais.',
    path: '/consultoria',
    ctaText: 'Falar sobre Consultoria',
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
  },
  {
    num: '05',
    title: 'TECNOLOGIA',
    desc: 'Sistemas, automação, inteligência artificial e desenvolvimento de soluções digitais para transformar processos tradicionais.',
    path: '/tecnologia-ia',
    ctaText: 'Conhecer Tecnologia & IA',
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
  },
]
