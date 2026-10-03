import React from 'react'
import { Award, ShieldCheck } from 'lucide-react'
import { useProfessionalPhoto } from '../hooks/use-professional-photo'

interface PhotoFrameProps {
  className?: string
  priority?: boolean
  caption?: string
}

/**
 * Retrato institucional elegante de João Moreira com detalhes dourados refinados,
 * badges profissionais e a foto fotográfica real extraída do documento oficial,
 * com fallback sóbrio e elegante caso o recurso esteja carregando.
 */
export const PhotoFrame: React.FC<PhotoFrameProps> = ({
  className = '',
  caption = 'João Moreira · Perito Judicial & Especialista Técnico',
}) => {
  const photoSrc = useProfessionalPhoto()

  return (
    <div className={`relative group ${className}`}>
      {/* Outer ambient glow and decorative geometry */}
      <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-[#C9A227]/30 via-transparent to-[#102A5C]/40 rounded-3xl blur-md group-hover:from-[#C9A227]/45 transition-all duration-500 pointer-events-none" />

      {/* Frame Container */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#102A5C] via-[#0A1F44] to-[#06132B] p-2.5 sm:p-3 border-2 border-[#C9A227]/60 shadow-2xl overflow-hidden">
        {/* Subtle corner decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C9A227] z-20 pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C9A227] z-20 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C9A227] z-20 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C9A227] z-20 pointer-events-none" />

        {/* Image wrapper */}
        <div className="relative rounded-xl overflow-hidden bg-[#0A1F44] aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center">
          {photoSrc ? (
            <img
              src={photoSrc}
              alt="João Moreira — Perito Judicial, Consultor e Especialista Técnico"
              className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.03]"
              loading="eager"
            />
          ) : (
            /* Fallback elegante e sóbrio com monograma JM em dourado sobre fundo azul marinho */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#102A5C] via-[#0A1F44] to-[#06132B] p-6 text-center select-none">
              <div className="relative mb-3 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#C9A227]/70 bg-[#0A1F44]/90 flex items-center justify-center shadow-inner">
                  <span className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-[#C9A227]">
                    JM
                  </span>
                </div>
                <div className="absolute -inset-1 rounded-full border border-[#C9A227]/30 animate-pulse pointer-events-none" />
              </div>
              <div className="font-serif text-sm sm:text-base font-bold text-white tracking-widest uppercase">
                João Moreira
              </div>
              <div className="text-[11px] text-[#C9A227] font-medium tracking-wider mt-1">
                Perito Judicial TJMG
              </div>
            </div>
          )}

          {/* Gradient dark scrim at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/60 to-transparent pointer-events-none" />

          {/* Top Badge: TJMG Credenciamento */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1F44]/90 backdrop-blur-md border border-[#C9A227]/50 text-white text-[11px] font-semibold shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Perito TJMG</span>
          </div>

          {/* Top Right Badge: Multidisciplinar */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1F44]/90 backdrop-blur-md border border-[#C9A227]/50 text-white text-[11px] font-semibold shadow-lg">
            <Award className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>+20 Anos Exp.</span>
          </div>

          {/* Bottom Card Identity Overlay */}
          <div className="absolute bottom-3 inset-x-3 z-10 p-3.5 rounded-xl bg-[#06132B]/90 backdrop-blur-md border border-[#C9A227]/40 shadow-xl text-center">
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#C9A227] font-bold">
              Marca Pessoal
            </div>
            <div className="font-serif text-lg font-bold text-white tracking-wide mt-0.5">
              JOÃO MOREIRA
            </div>
            <div className="text-[11px] text-slate-300 font-medium">
              Perito Judicial · Consultor · Tecnologia & IA
            </div>
          </div>
        </div>

        {/* Small subtle footer caption */}
        {caption && <p className="mt-2 text-center text-[11px] text-slate-400 italic">{caption}</p>}
      </div>
    </div>
  )
}
