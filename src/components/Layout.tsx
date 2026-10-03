import React, { useState, useEffect } from 'react'
import {
  Phone,
  Mail,
  Scale,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  ArrowUp,
  MapPin,
  Clock,
} from 'lucide-react'

interface LayoutProps {
  children?: React.ReactNode
}

export const CONTACT_WHATSAPP_RAW = '5535988461481'
export const CONTACT_WHATSAPP_DISPLAY = '(35) 98846-1481'
export const CONTACT_WHATSAPP_LINK = 'https://wa.me/5535988461481'
export const CONTACT_EMAIL = 'joaomoreiraperito@gmail.com'
export const CONTACT_EMAIL_LINK = 'mailto:joaomoreiraperito@gmail.com'

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setIsScrolled(scrollPos > 50)
      setShowScrollTop(scrollPos > 400)
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

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Competências', href: '#competencias' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Áreas de Atuação', href: '#areas-de-atuacao' },
    { label: 'Contato', href: '#contato' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 88
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-[#C9A227] selection:text-white">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#06132B] text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-[#1E3A68]/40 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#C9A227] animate-pulse mr-1" />
            <span className="font-medium tracking-wide">Atuação em todo o Brasil · desde 2019</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={CONTACT_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#C9A227] transition-colors font-medium"
              title="Atendimento via WhatsApp"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>{CONTACT_WHATSAPP_DISPLAY}</span>
            </a>

            <a
              href={CONTACT_EMAIL_LINK}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-[#C9A227] transition-colors"
              title="Enviar e-mail para JM Perícias"
            >
              <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A1F44]/95 backdrop-blur-md shadow-xl border-b border-[#1A3868]/60 py-3'
            : 'bg-[#0A1F44] py-4 border-b border-[#1A3868]/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] rounded-md py-1"
            aria-label="JM Perícias Técnicas - Página Inicial"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#102A5C] to-[#0A1F44] border border-[#C9A227]/40 flex items-center justify-center shadow-md group-hover:border-[#C9A227] transition-all">
              <Scale className="w-5 h-5 text-[#C9A227] transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-none group-hover:text-[#F2E5B5] transition-colors">
                JM PERÍCIAS
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] text-[#C9A227] uppercase leading-tight mt-1">
                TÉCNICAS
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-200 hover:text-[#C9A227] transition-colors relative py-1 focus:outline-none focus-visible:text-[#C9A227]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] to-[#C9A227] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Solicitar Avaliação</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="sm:hidden px-3 py-1.5 rounded-md text-xs font-semibold text-[#0A1F44] bg-[#C9A227]"
            >
              Avaliação
            </a>
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0A1F44] text-white p-6 shadow-2xl flex flex-col justify-between border-l border-[#1A3868] animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1A3868]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#102A5C] border border-[#C9A227]/40 flex items-center justify-center">
                    <Scale className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <span className="font-serif text-base font-bold text-white block">
                      JM PERÍCIAS
                    </span>
                    <span className="text-[9px] tracking-[0.3em] text-[#C9A227] font-semibold block">
                      TÉCNICAS
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
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-200 hover:text-[#C9A227] hover:bg-[#102A5C] font-medium text-base transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="pt-6 border-t border-[#1A3868] flex flex-col gap-4">
              <div className="space-y-2 text-xs text-slate-300">
                <a
                  href={CONTACT_WHATSAPP_LINK}
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
              </div>

              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="w-full text-center py-3 rounded-lg font-semibold text-[#0A1F44] bg-[#C9A227] hover:bg-[#DEC05B] shadow-md transition-colors"
              >
                Solicitar Avaliação
              </a>

              <div className="text-[11px] text-center text-slate-400">
                João Carlos Moreira Santos · TJMG / TJSP
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0A1F44] text-white border-t border-[#1A3868] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: Brand & Credentials */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#102A5C] border border-[#C9A227]/40 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <span className="font-serif text-xl font-bold tracking-tight text-white block">
                    JM PERÍCIAS
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.32em] text-[#C9A227] uppercase block">
                    TÉCNICAS
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Perícia Judicial · Assistência Técnica · Consultoria Administrativa · Contábil ·
                Análise Financeira.
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#102A5C] border border-[#C9A227]/30 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  <span>Perito nomeado · TJMG / TJSP</span>
                </div>
              </div>
            </div>

            {/* Col 2: Perito & Qualificação */}
            <div className="space-y-4">
              <h3 className="font-serif text-base font-semibold text-[#C9A227] tracking-wider uppercase">
                Perito Responsável
              </h3>
              <p className="text-sm font-semibold text-white">João Carlos Moreira Santos</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Perito Judicial · Consultor Administrativo e Contábil. Atuação técnica, imparcial e
                fundamentada para empresas, pessoas físicas e tribunais.
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Atendimento em todo o Brasil (100% online)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Atuação profissional desde 2019</span>
                </div>
              </div>
            </div>

            {/* Col 3: Navegação Rápida */}
            <div className="space-y-4">
              <h3 className="font-serif text-base font-semibold text-[#C9A227] tracking-wider uppercase">
                Navegação
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3 h-3 text-[#C9A227]/60" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contato Direto */}
            <div className="space-y-4">
              <h3 className="font-serif text-base font-semibold text-[#C9A227] tracking-wider uppercase">
                Canais de Atendimento
              </h3>
              <div className="space-y-3 text-sm">
                <a
                  href={CONTACT_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#102A5C]/80 hover:bg-[#163878] border border-[#1A3868] transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">WhatsApp Direto</span>
                    <span className="font-medium text-white group-hover:text-[#C9A227] transition-colors">
                      {CONTACT_WHATSAPP_DISPLAY}
                    </span>
                  </div>
                </a>

                <a
                  href={CONTACT_EMAIL_LINK}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#102A5C]/80 hover:bg-[#163878] border border-[#1A3868] transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">E-mail Institucional</span>
                    <span className="font-medium text-white group-hover:text-[#C9A227] transition-colors text-xs sm:text-sm break-all">
                      {CONTACT_EMAIL}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright and Legal Disclaimers */}
          <div className="mt-12 pt-8 border-t border-[#1A3868]/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
            <div>
              <p>© 2025 JM Perícias Técnicas. Todos os direitos reservados.</p>
              <p className="mt-1 text-slate-400">
                JM Perícias — Documento institucional. As informações refletem a atuação
                profissional na data de emissão.
              </p>
            </div>
            <div className="text-slate-400">Perito Judicial · João Carlos Moreira Santos</div>
          </div>
        </div>
      </footer>

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
