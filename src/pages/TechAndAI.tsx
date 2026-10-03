import React from 'react'
import { Link } from 'react-router-dom'
import {
  Cpu,
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  Scale,
  Code,
  Layers,
  Database,
  Workflow,
  Binary,
} from 'lucide-react'
import { PUBLIC_BRAND_NAME, LEGAL_NAME, getWhatsAppLink } from '../lib/constants'

export default function TechAndAI() {
  // Projetos envolvem (10 itens verbatim do pedido)
  const projetosEnvolvem = [
    'Sistemas SaaS',
    'Automação',
    'Inteligência artificial',
    'Agentes especializados',
    'Motores de cálculo',
    'Gestão',
    'Análise documental',
    'Ferramentas financeiras',
    'Soluções para profissionais',
    'Soluções empresariais',
  ]

  // Camada de capacidade da IA (verbatim): organizar → analisar → automatizar → calcular → gerar → monitorar
  const etapasIA = [
    { etapa: 'Organizar', desc: 'Estruturação de dados esparsos e documentos despadronizados.' },
    {
      etapa: 'Analisar',
      desc: 'Triagem inteligente de informações cruciais e cruzamento de registros.',
    },
    {
      etapa: 'Automatizar',
      desc: 'Eliminação de tarefas repetitivas e workflows operacionais burocráticos.',
    },
    {
      etapa: 'Calcular',
      desc: 'Processamento de regras numéricas e matemáticas com motores verificáveis.',
    },
    {
      etapa: 'Gerar',
      desc: 'Elaboração automatizada de minutas, relatórios e demonstrativos técnicos.',
    },
    {
      etapa: 'Monitorar',
      desc: 'Acompanhamento contínuo de atualizações, prazos e consistência operacional.',
    },
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero da Página */}
      <section className="bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white py-16 md:py-24 border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Pilar 05 · Tecnologia & IA
            </div>

            {/* Título Verbatim */}
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              TECNOLOGIA — TRANSFORMANDO CONHECIMENTO EM SOFTWARE
            </h1>

            {/* Texto Verbatim */}
            <p className="text-[#DEC05B] text-lg sm:text-xl font-medium leading-relaxed">
              “A tecnologia deixou de ser apenas uma ferramenta de trabalho e passou a fazer parte
              da estratégia profissional.”
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              “A visão é criar tecnologia capaz de transformar conhecimento especializado em
              produtos digitais escaláveis.”
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              {/* Botão CTA Verbatim */}
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] via-[#C9A227] to-[#B08B1B] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-lg transition-all"
              >
                <span>CONHEÇA OS PROJETOS</span>
                <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
              </Link>

              <a
                href={getWhatsAppLink(
                  'Olá João Moreira, gostaria de conversar sobre tecnologia, automação e inteligência artificial.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#102A5C] hover:bg-[#163878] border border-[#C9A227]/40 transition-all"
              >
                <span>Conversar sobre Parcerias</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OS PROJETOS ENVOLVEM (10 itens verbatim)
          ========================================================= */}
      <section className="py-20 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              CAMPO DE DESENVOLVIMENTO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              O Que Envolvem Nossos Projetos Tecnológicos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Desenvolvimento orientado a resolver dores reais do mundo corporativo e jurídico por
              meio de software inteligente.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {projetosEnvolvem.map((proj, idx) => (
              <div
                key={proj}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#C9A227] hover:bg-white shadow-sm hover:shadow-md transition-all text-center group flex flex-col justify-between"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-sm font-bold text-[#0A1F44] group-hover:text-[#102A5C]">
                  {proj}
                </h3>
                <span className="text-[10px] text-slate-400 font-mono mt-2 block">0{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO IA — INTELIGÊNCIA ARTIFICIAL COMO FERRAMENTA (verbatim)
          ========================================================= */}
      <section className="py-20 bg-[#0A1F44] text-white border-b border-[#1A3868]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A5C] border border-[#C9A227]/40 text-xs font-semibold tracking-wider text-[#F2E5B5] uppercase">
              Capacidade Ampliada
            </div>

            {/* Título Verbatim */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              INTELIGÊNCIA ARTIFICIAL — IA COMO FERRAMENTA DE PRODUTIVIDADE
            </h2>

            {/* Texto Verbatim */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              “A inteligência artificial é utilizada como uma camada adicional de capacidade. Não
              substitui a análise profissional. Ela ajuda a:”
            </p>
          </div>

          {/* Sequência Verbatim: organizar → analisar → automatizar → calcular → gerar → monitorar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {etapasIA.map((item, index) => (
              <div
                key={item.etapa}
                className="p-5 rounded-2xl bg-[#102A5C]/70 border border-[#1A3868] hover:border-[#C9A227] transition-all flex flex-col justify-between text-center group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#C9A227] block mb-2">
                    Passo 0{index + 1}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-[#F2E5B5] uppercase">
                    {item.etapa}
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Texto Verbatim sobre aplicações */}
          <div className="mt-12 p-8 rounded-3xl bg-[#06132B]/80 border border-[#1E3A68] text-center max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              “Entre as aplicações estudadas e desenvolvidas estão agentes especializados para
              diferentes áreas, automação de tarefas, análise documental, cálculos, geração de
              informações e sistemas inteligentes.”
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          UM PROFISSIONAL ENTRE DOIS MUNDOS (verbatim)
          ========================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              INTERSEÇÃO ESTRATÉGICA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1F44]">
              UM PROFISSIONAL ENTRE DOIS MUNDOS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A união rara entre a solidez das normas técnicas/jurídicas e a agilidade da engenharia
              de software moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* O Mundo Jurídico e Técnico (verbatim) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#F8FAFC] to-white border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C9A227] tracking-wider uppercase block">
                    Universo 01
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                    O MUNDO JURÍDICO E TÉCNICO
                  </h3>
                </div>
              </div>

              {/* Texto Verbatim */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Processos, documentos, cálculos, contratos, provas e análises.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div>• Rigor probatório e cumprimento dos preceitos processuais</div>
                <div>• Linguagem técnica pericial e dever de imparcialidade</div>
                <div>• Proteção de direitos fundamentada em fatos auditáveis</div>
              </div>
            </div>

            {/* O Mundo Digital (verbatim) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#F8FAFC] to-white border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#C9A227] flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C9A227] tracking-wider uppercase block">
                    Universo 02
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0A1F44]">O MUNDO DIGITAL</h3>
                </div>
              </div>

              {/* Texto Verbatim */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Software, automação, inteligência artificial, dados e sistemas.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div>• Engenharia de software, modelagem relacional e arquitetura em nuvem</div>
                <div>• Automação de pipelines de dados e integração via APIs</div>
                <div>• Modelos de linguagem (LLMs) aplicados à triagem de documentos</div>
              </div>
            </div>
          </div>

          {/* O Diferencial e a Equação Verbatim */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1F44] text-white border border-[#C9A227]/40 shadow-xl text-center space-y-4 max-w-4xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">
              O DIFERENCIAL
            </span>

            {/* Texto Verbatim */}
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
              “O diferencial está justamente na interseção.”
            </h3>

            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-4 rounded-2xl bg-[#102A5C] border border-[#C9A227]/40 text-sm sm:text-base font-bold text-[#F2E5B5] tracking-wide mt-2">
              <span>Problema real</span>
              <span className="text-[#C9A227]">→</span>
              <span>Análise técnica</span>
              <span className="text-[#C9A227]">→</span>
              <span>Tecnologia</span>
              <span className="text-[#C9A227]">→</span>
              <span className="text-white">Solução.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Quer ver os produtos e sistemas que estão sendo criados?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Conheça as ferramentas e iniciativas em desenvolvimento para profissionais e empresas.
          </p>
          <div className="pt-2">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#0A1F44] bg-gradient-to-r from-[#DDB93A] to-[#C9A227] hover:from-[#F2E5B5] hover:to-[#DEC05B] shadow-xl transition-all"
            >
              <span>CONHEÇA OS PROJETOS EM DESENVOLVIMENTO</span>
              <ChevronRight className="w-4 h-4 text-[#0A1F44]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
