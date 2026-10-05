import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Phone,
  Mail,
  Instagram,
  Scale,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  ArrowUp,
  MapPin,
  Clock,
  Cpu,
  Calculator,
  Briefcase,
  FileText,
  User,
  Sparkles,
} from 'lucide-react'
import {
  CONTACT_WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  CONTACT_INSTAGRAM_HANDLE,
  CONTACT_INSTAGRAM_URL,
  PUBLIC_BRAND_NAME,
  NAV_LINKS,
  getWhatsAppLink,
} from '../lib/constants'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()

  // Always scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setIsScrolled(scrollPos > 40)
      setShowScrollTop(scrollPos > 350)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Remove any dynamic "Criado com Skip" badge/element injected into the DOM
  useEffect(() => {
    const removeSkipBadge = () => {
      // 1. Target any element containing "Criado com Skip" or "Feito com Skip" or "goskip"
      const allElements = document.querySelectorAll('body *')
      allElements.forEach((el) => {
        // Skip root containers or main app wrappers
        if (
          el.id === 'root' ||
          el.tagName === 'BODY' ||
          el.tagName === 'HTML' ||
          el.tagName === 'MAIN'
        ) {
          return
        }

        const text = el.textContent?.trim() || ''
        const ariaLabel = el.getAttribute('aria-label') || ''
        const title = el.getAttribute('title') || ''
        const href = el.getAttribute('href') || ''

        const isSkipBrand =
          text === 'Criado com o Skip' ||
          text === 'Criado com Skip' ||
          text === 'Feito com o Skip' ||
          text === 'Feito com Skip' ||
          text.includes('Criado com o Skip') ||
          text.includes('Criado com Skip') ||
          ariaLabel.includes('Skip') ||
          title.includes('Skip') ||
          href.includes('goskip.dev') ||
          href.includes('goskip.app')

        if (isSkipBrand) {
          // If it's a floating badge container (fixed/absolute) or direct badge link/element
          const computed = window.getComputedStyle(el)
          if (
            computed.position === 'fixed' ||
            computed.position === 'absolute' ||
            el.tagName === 'A' ||
            el.tagName === 'IMG'
          ) {
            ;(el as HTMLElement).style.setProperty('display', 'none', 'important')
            ;(el as HTMLElement).style.setProperty('visibility', 'hidden', 'important')
            ;(el as HTMLElement).style.setProperty('opacity', '0', 'important')
            ;(el as HTMLElement).style.setProperty('pointer-events', 'none', 'important')
            el.remove()
          }
        }

        // Also check if image has skip.png
        if (el.tagName === 'IMG') {
          const src = el.getAttribute('src') || ''
          const alt = el.getAttribute('alt') || ''
          if (src.includes('skip.png') || alt.toLowerCase().includes('skip')) {
            const parent = el.parentElement
            if (parent && (parent.tagName === 'A' || parent.tagName === 'DIV')) {
              ;(parent as HTMLElement).style.setProperty('display', 'none', 'important')
              parent.remove()
            } else {
              el.remove()
            }
          }
        }
      })
    }

    removeSkipBadge()
    const interval = setInterval(removeSkipBadge, 500)
    const observer = new MutationObserver(removeSkipBadge)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-[#C9A227] selection:text-[#0A1F44]">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#06132B] text-slate-300 text-xs py-2 px-4 border-b border-[#1E3A68]/50 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#C9A227] animate-pulse mr-1" />
            <span className="font-medium tracking-wide">
              {PUBLIC_BRAND_NAME} — Atuação profissional em todo o Brasil
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#C9A227] transition-colors font-medium"
              title="Atendimento via WhatsApp com João Moreira"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>{CONTACT_WHATSAPP_DISPLAY}</span>
            </a>

            <a
              href={CONTACT_EMAIL_LINK}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-[#C9A227] transition-colors"
              title="Enviar e-mail para João Moreira"
            >
              <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <a
              href={CONTACT_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#C9A227] transition-colors"
              title="Perfil oficial no Instagram: @joaomoreiraperito"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
              <span>{CONTACT_INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A1F44]/95 backdrop-blur-md shadow-xl border-b border-[#1A3868]/70 py-2.5'
            : 'bg-[#0A1F44] py-3.5 border-b border-[#1A3868]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Nova marca pública JOÃO MOREIRA */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] rounded-md py-1"
            aria-label={`${PUBLIC_BRAND_NAME} - Página Inicial`}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#102A5C] via-[#0A1F44] to-[#06132B] border border-[#C9A227]/50 flex items-center justify-center shadow-md group-hover:border-[#C9A227] transition-all">
              <span className="font-serif font-black text-[#C9A227] text-base tracking-tighter group-hover:scale-110 transition-transform">
                JM
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-none group-hover:text-[#F2E5B5] transition-colors">
                {PUBLIC_BRAND_NAME}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#C9A227] uppercase leading-tight mt-1">
                Perícia · Consultoria · Tecnologia
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs 2xl:text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:text-[#C9A227] ${
                    isActive
                      ? 'text-[#C9A227] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C9A227] after:rounded-full'
                      : 'text-slate-200 hover:text-[#C9A227]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Medium screen Nav (collapsed key links) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4">
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                `text-xs font-medium ${isActive ? 'text-[#C9A227]' : 'text-slate-200 hover:text-[#C9A227]'}`
              }
            >
              Sobre
            </NavLink>
            <NavLink
              to="/pericia-judicial"
              className={({ isActive }) =>
                `text-xs font-medium ${isActive ? 'text-[#C9A227]' : 'text-slate-200 hover:text-[#C9A227]'}`
              }
            >
              Perícia
            </NavLink>
            <NavLink
              to="/assistencia-tecnica"
              className={({ isActive }) =>
                `text-xs font-medium ${isActive ? 'text-[#C9A227]' : 'text-slate-200 hover:text-[#C9A227]'}`
              }
            >
              Assistência
            </NavLink>
            <NavLink
              to="/calculos"
              className={({ isActive }) =>
                `text-xs font-medium ${isActive ? 'text-[#C9A227]' : 'text-slate-200 hover:text-[#C9A227]'}`
              }
            >
              Cálculos
            </NavLink>
            <NavLink
              to="/consultoria"
              className={({ isActive }) =>
                `text-xs font-medium ${isActive ? 'text-[#C9A227]' : 'text-slate-200 hover:text-[#C9A227]'}`
              }
            >
              Consultoria
            </NavLink>
            <NavLink
              to="/tecnologia-ia"
              className={({ isActive }) =>
                `text-xs font-medium ${isActive ? 'text-[#C9A227]' : 'text-slate-200 hover:text-[#C9A227]'}`
              }
            >
              Tecnologia & IA
            </NavLink>
            <NavLink
              to="/projetos"
              className={({ isActive }) =>
                `text-xs font-medium ${isActive ? 'text-[#C9A227]' : 'text-slate-200 hover:text-[#C9A227]'}`
              }
            >
              Projetos
            </NavLink>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Fale Comigo</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contato"
              className="sm:hidden px-3 py-1.5 rounded-md text-xs font-bold text-[#0A1F44] bg-[#C9A227]"
            >
              Contato
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-[#C9A227] hover:bg-[#102A5C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0A1F44] text-white p-6 shadow-2xl flex flex-col justify-between border-l border-[#1A3868] animate-in slide-in-from-right duration-300 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#1A3868]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#102A5C] border border-[#C9A227]/40 flex items-center justify-center">
                    <span className="font-serif font-black text-[#C9A227] text-sm">JM</span>
                  </div>
                  <div>
                    <span className="font-serif text-base font-bold text-white block">
                      {PUBLIC_BRAND_NAME}
                    </span>
                    <span className="text-[9px] tracking-[0.2em] text-[#C9A227] font-semibold block">
                      Perícia · Consultoria · Tecnologia
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-[#102A5C]"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                        isActive
                          ? 'bg-[#102A5C] text-[#C9A227] font-bold border-l-4 border-[#C9A227]'
                          : 'text-slate-200 hover:text-[#C9A227] hover:bg-[#102A5C]/60'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="pt-6 border-t border-[#1A3868] flex flex-col gap-3 mt-6">
              <div className="space-y-2 text-xs text-slate-300">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-[#102A5C] hover:bg-[#163878] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span>{CONTACT_WHATSAPP_DISPLAY}</span>
                </a>
                <a
                  href={CONTACT_EMAIL_LINK}
                  className="flex items-center gap-2 p-2 rounded-lg bg-[#102A5C] hover:bg-[#163878] transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-[#C9A227]" />
                  <span className="truncate">{CONTACT_EMAIL}</span>
                </a>
                <a
                  href={CONTACT_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-[#102A5C] hover:bg-[#163878] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E4405F]" />
                  <span>{CONTACT_INSTAGRAM_HANDLE}</span>
                </a>
              </div>

              <Link
                to="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg font-bold text-sm text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] to-[#C9A227] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-md transition-colors"
              >
                Fale Comigo
              </Link>

              <div className="text-[11px] text-center text-slate-400">
                {PUBLIC_BRAND_NAME} · Perito TJMG
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <main className="flex-1">{children}</main>

      {/* Site Footer */}
      <footer className="bg-[#0A1F44] text-white border-t border-[#1A3868] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Col 1 & 2: Brand & Positioning */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#102A5C] border border-[#C9A227]/40 flex items-center justify-center">
                  <span className="font-serif font-black text-[#C9A227] text-base">JM</span>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold tracking-tight text-white block">
                    {PUBLIC_BRAND_NAME}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C9A227] uppercase block">
                    Perícia · Consultoria · Tecnologia
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                Conhecimento técnico. Tecnologia. Soluções para problemas complexos. Atuação
                profissional em todo o Brasil.
              </p>

              <div className="p-3.5 rounded-xl bg-[#06132B]/80 border border-[#1E3A68] text-xs text-slate-300 space-y-1">
                <div className="text-white font-semibold">Credenciamento Oficial:</div>
                <div className="text-slate-300">Perito Judicial junto ao TJMG</div>
                <div className="text-[#DEC05B] text-[11px]">Atuação em todo o Brasil</div>
              </div>

              <div className="pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#102A5C] border border-[#C9A227]/30 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  <span>Sigilo rigoroso & Independência técnica</span>
                </div>
              </div>
            </div>

            {/* Col 3: Serviços e Atuação */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-semibold text-[#C9A227] tracking-wider uppercase">
                Atuação Técnica
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  <Link
                    to="/pericia-judicial"
                    className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C9A227]/60" />
                    <span>Perícia Judicial</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/assistencia-tecnica"
                    className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C9A227]/60" />
                    <span>Assistência Técnica</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calculos"
                    className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C9A227]/60" />
                    <span>Cálculos Judiciais</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/consultoria"
                    className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C9A227]/60" />
                    <span>Consultoria Especializada</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Tecnologia & Projetos */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-semibold text-[#C9A227] tracking-wider uppercase">
                Inovação & Soluções
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  <Link
                    to="/tecnologia-ia"
                    className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C9A227]/60" />
                    <span>Tecnologia & IA</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projetos"
                    className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C9A227]/60" />
                    <span>Projetos & SaaS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre"
                    className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C9A227]/60" />
                    <span>Sobre João Moreira</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/publicacoes"
                    className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C9A227]/60" />
                    <span>Publicações & Artigos</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 5: Contato Direto */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-semibold text-[#C9A227] tracking-wider uppercase">
                Canais de Atendimento
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#102A5C]/80 hover:bg-[#163878] border border-[#1A3868] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">WhatsApp</span>
                    <span className="font-medium text-white group-hover:text-[#C9A227] transition-colors text-xs">
                      {CONTACT_WHATSAPP_DISPLAY}
                    </span>
                  </div>
                </a>

                <a
                  href={CONTACT_EMAIL_LINK}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#102A5C]/80 hover:bg-[#163878] border border-[#1A3868] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">E-mail</span>
                    <span className="font-medium text-white group-hover:text-[#C9A227] transition-colors text-xs break-all">
                      {CONTACT_EMAIL}
                    </span>
                  </div>
                </a>

                <a
                  href={CONTACT_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#102A5C]/80 hover:bg-[#163878] border border-[#1A3868] transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-[#E4405F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">Instagram</span>
                    <span className="font-medium text-white group-hover:text-[#C9A227] transition-colors text-xs">
                      {CONTACT_INSTAGRAM_HANDLE}
                    </span>
                  </div>
                </a>

                <div className="pt-2 text-slate-400 text-[11px] space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#C9A227]" />
                    <span>Atuação em todo o Brasil (100% online)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C9A227]" />
                    <span>+20 anos de trajetória profissional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright and Legal Disclaimers */}
          <div className="mt-12 pt-8 border-t border-[#1A3868]/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
            <div>
              <p>
                © {new Date().getFullYear()} {PUBLIC_BRAND_NAME}. Todos os direitos reservados.
              </p>
              <p className="mt-1 text-slate-400 text-[11px]">
                Privacidade preservada: Atuação pautada pelo sigilo profissional e pela legislação
                processual civil e penal vigente.
              </p>
            </div>
            <div className="text-slate-400 text-[11px]">
              Perito Judicial credenciado junto ao Tribunal de Justiça de Minas Gerais (TJMG).
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-20 sm:right-24 z-30 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all text-xs font-bold"
        title="Falar com João Moreira no WhatsApp"
      >
        <Phone className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#0A1F44] text-[#C9A227] border border-[#C9A227]/40 shadow-xl hover:bg-[#102A5C] hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          aria-label="Voltar ao topo da página"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
