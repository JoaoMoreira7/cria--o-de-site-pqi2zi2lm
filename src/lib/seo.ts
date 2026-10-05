import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from './constants'

export interface RouteSeoMetadata {
  title: string
  description: string
  keywords?: string
  ogType?: 'website' | 'article' | 'profile'
}

export const ROUTE_SEO: Record<string, RouteSeoMetadata> = {
  '/': {
    title: 'João Moreira — Perito Judicial TJMG, Consultor e Assistente Técnico',
    description:
      'João Moreira — Conhecimento técnico. Tecnologia. Soluções para problemas complexos. Perito Judicial TJMG, Assistência Técnica, Cálculos Judiciais, Consultoria e IA. Atuação em todo o Brasil.',
    keywords:
      'João Moreira, Perito Judicial TJMG, Assistência Técnica, Cálculos Judiciais, Liquidação de Sentença, Consultoria Administrativa, Tecnologia e IA',
    ogType: 'website',
  },
  '/sobre': {
    title: 'Sobre João Moreira — Trajetória, Formação e Perfil Profissional',
    description:
      'Conheça a trajetória de João Moreira: mais de 20 anos de experiência multidisciplinar em gestão, processos judiciais, análise de dados, perícia e tecnologia.',
    keywords:
      'Sobre João Moreira, Perito TJMG, Biografia, Trajetória, Experiência Profissional, Perito Judicial',
    ogType: 'profile',
  },
  '/pericia-judicial': {
    title: 'Perícia Judicial — Laudos Fundamentados e Isenção Técnica | João Moreira',
    description:
      'Perícia Judicial com credenciamento TJMG e atuação nacional. Elaboração de laudos periciais fundamentados, minuciosos e com rigor metodológico para decisões judiciais seguras.',
    keywords:
      'Perícia Judicial, Perito Judicial TJMG, Laudo Pericial, Nomeação Judicial, Varas Cíveis, Varas Trabalhistas',
    ogType: 'website',
  },
  '/assistencia-tecnica': {
    title: 'Assistência Técnica Judicial — Atuação Estratégica para Advogados | João Moreira',
    description:
      'Assistência técnica judicial e pareceres periciais para escritórios de advocacia e empresas: quesitos estratégicos, manifestações técnicas e impugnações fundamentadas.',
    keywords:
      'Assistência Técnica Judicial, Assistente Técnico da Parte, Quesitos Periciais, Impugnação de Laudo, Parecer Técnico',
    ogType: 'website',
  },
  '/calculos': {
    title: 'Cálculos Judiciais e Extrajudiciais — Liquidação de Sentença | João Moreira',
    description:
      'Elaboração e revisão de cálculos judiciais complexos: liquidação de sentença, atualização monetária, juros, revisionais bancários, trabalhistas e previdenciários.',
    keywords:
      'Cálculos Judiciais, Liquidação de Sentença, Cálculos Trabalhistas, Revisional Bancária, Atualização Monetária',
    ogType: 'website',
  },
  '/consultoria': {
    title: 'Consultoria Especializada — Diagnósticos e Resolução de Problemas | João Moreira',
    description:
      'Consultoria estratégica e diagnósticos técnicos para processos administrativos, conciliações financeiras, organização documental e prevenção de litígios.',
    keywords:
      'Consultoria Administrativa, Consultoria Empresarial, Análise Documental, Resolução de Problemas Complexos',
    ogType: 'website',
  },
  '/tecnologia-ia': {
    title: 'Tecnologia & Inteligência Artificial — Inovação Aplicada | João Moreira',
    description:
      'Aplicações de Inteligência Artificial, automações e soluções digitais customizadas para análise massiva de processos, fluxos documentais e ferramentas periciais.',
    keywords:
      'Tecnologia e IA, Inteligência Artificial Direito, Automação de Processos, Software Pericial, Inovação Jurídica',
    ogType: 'website',
  },
  '/projetos': {
    title: 'Projetos e Softwares — Soluções Desenvolvidas por João Moreira',
    description:
      'Conheça os projetos, ferramentas e softwares criados por João Moreira para automatizar cálculos, estruturar documentos e acelerar a tomada de decisão.',
    keywords:
      'Projetos de Software, Sistemas Periciais, Automação, Ferramentas Jurídicas, João Moreira',
    ogType: 'website',
  },
  '/publicacoes': {
    title: 'Publicações & Artigos Técnicos — Análises e Conhecimento | João Moreira',
    description:
      'Artigos técnicos, análises práticas sobre perícia judicial, metodologia de cálculos, inteligência artificial e consultoria estratégica por João Moreira.',
    keywords:
      'Artigos Perícia Judicial, Publicações Técnicas, Jurisprudência, Metodologia de Cálculos, Artigos João Moreira',
    ogType: 'website',
  },
  '/publicacoes/o-que-e-pericia-judicial': {
    title: 'O que é perícia judicial e quando ela pode decidir um processo? | João Moreira',
    description:
      'Entenda o que é perícia judicial, quando o juiz determina a prova pericial, a diferença entre perito e assistente técnico e como cálculos sólidos decidem causas na Justiça.',
    keywords:
      'O que é perícia judicial, perito judicial, assistente técnico, laudo pericial, quesitos periciais, liquidação de sentença, TJMG, cálculos judiciais',
    ogType: 'article',
  },
  '/contato': {
    title: 'Contato e Solicitação de Orçamento — Atendimento Direto | João Moreira',
    description:
      'Fale diretamente com João Moreira por WhatsApp ou e-mail. Solicite orçamento de perícia judicial, assistência técnica, cálculos e consultoria em todo o Brasil.',
    keywords:
      'Contato João Moreira, WhatsApp Perito Judicial, Orçamento Perícia, Telefone João Moreira, Atendimento Técnico',
    ogType: 'website',
  },
}

const DEFAULT_SEO: RouteSeoMetadata = {
  title: 'João Moreira — Perícias Técnicas & Consultoria Especializada',
  description:
    'João Moreira — Perito Judicial, Consultor, Assistente Técnico, Especialista em Cálculos, Tecnologia e Inteligência Artificial. Atuação profissional em todo o Brasil.',
  keywords:
    'João Moreira, Perito Judicial, TJMG, Assistência Técnica, Cálculos Judiciais, Consultoria, Tecnologia',
  ogType: 'website',
}

/**
 * Atualiza dinamicamente as tags de SEO (title, meta description, canonical, Open Graph e Twitter)
 * na navegação SPA para cada rota acessada pelo usuário e rastreadores.
 */
export function updatePageSeo(pathname: string) {
  // Trata trailing slashes exceto na raiz
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  const meta = ROUTE_SEO[normalizedPath] || DEFAULT_SEO

  // 1. Title
  document.title = meta.title

  // 2. Canonical URL
  const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`
  let canonicalLink = document.querySelector<HTMLLinkElement>("link[rel='canonical']")
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', canonicalUrl)

  // 3. Helper para atualizar ou criar meta tag
  const setMeta = (nameOrProperty: 'name' | 'property', key: string, content: string) => {
    let tag = document.querySelector<HTMLMetaElement>(`meta[${nameOrProperty}='${key}']`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute(nameOrProperty, key)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }

  // 4. Meta tags básicas
  setMeta('name', 'description', meta.description)
  if (meta.keywords) {
    setMeta('name', 'keywords', meta.keywords)
  }

  // 5. Open Graph
  setMeta('property', 'og:title', meta.title)
  setMeta('property', 'og:description', meta.description)
  setMeta('property', 'og:url', canonicalUrl)
  setMeta('property', 'og:type', meta.ogType || 'website')

  // 6. Twitter Card
  setMeta('name', 'twitter:title', meta.title)
  setMeta('name', 'twitter:description', meta.description)
  setMeta('name', 'twitter:url', canonicalUrl)
}

/**
 * Hook utilitário que monitora mudanças de rota e executa a atualização de SEO
 */
export function useSeoUpdater() {
  const location = useLocation()

  useEffect(() => {
    updatePageSeo(location.pathname)
  }, [location.pathname])
}
