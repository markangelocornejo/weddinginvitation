import { invitationData } from '../data/invitationData'
import { FloralArtwork } from './BohoDecorations'

type FirstInvitationCardProps = {
  className?: string
  compact?: boolean
}

export function FirstInvitationCard({ className = '', compact = false }: FirstInvitationCardProps) {
  const { couple, displayDate, saveTheDate } = invitationData

  return (
    <div
      className={`gold-speckles relative mx-auto flex ${compact ? 'aspect-[0.72]' : 'aspect-[0.62]'} w-full max-w-[24rem] flex-col items-center justify-center overflow-hidden rounded-t-[10rem] rounded-b-[1.5rem] border border-[#B8862F]/60 bg-[#FDF8F0] px-7 text-center shadow-[0_22px_52px_rgba(122,90,58,0.17)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-[0.46rem] rounded-t-[9.7rem] rounded-b-[1.2rem] border border-[#D5B892]/55" />
      <FloralArtwork className="absolute -bottom-11 -left-11 h-52 w-40 opacity-82" />
      <FloralArtwork className="absolute -right-11 -top-12 h-48 w-36 rotate-180 opacity-62" />

      <div className="relative z-10 flex flex-col items-center">
        <p className={`${compact ? 'text-[0.52rem]' : 'text-[0.68rem]'} font-semibold uppercase tracking-[0.2em] text-[#7A5A3A]`}>
          {saveTheDate.subtitle}
        </p>

        <p className={`${compact ? 'mt-3 text-[3.2rem]' : 'mt-4 text-[4.15rem] sm:text-[5rem]'} font-script font-normal leading-[0.9] text-[#B8862F]`}>
          {saveTheDate.title}
        </p>

        <div className={`${compact ? 'mt-5' : 'mt-5'} gold-divider`}><span /></div>

        <h2 className={`${compact ? 'mt-5 text-[2rem]' : 'mt-6 text-[2.65rem] sm:text-[3.25rem]'} font-serif font-medium leading-[0.95] text-[#3B2A1A]`}>
          {couple.groom}
          <span className={`${compact ? 'py-1 text-[1.9rem]' : 'py-1 text-[2.35rem]'} block font-script font-normal text-[#C08A5A]`}>
            &amp;
          </span>
          {couple.bride}
        </h2>

        <p className={`${compact ? 'mt-4 text-[1.15rem]' : 'mt-4 text-[1.45rem]'} max-w-[15rem] font-script leading-[1.1] text-[#C08A5A]`}>
          {saveTheDate.tagline}
        </p>

        <p className={`${compact ? 'mt-4 text-[0.54rem]' : 'mt-4 text-[0.72rem]'} font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]`}>
          {displayDate}
        </p>
      </div>
    </div>
  )
}
