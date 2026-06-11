import { invitationData } from '../data/invitationData'
import { FloralArtwork } from './BohoDecorations'

type FirstInvitationCardProps = {
  className?: string
  /** compact = true for envelope paper preview (smaller text, tighter spacing) */
  compact?: boolean
}

/**
 * Shared invitation card used both:
 * 1. Inside the envelope (rising paper during reveal animation)
 * 2. As the first section of the main invitation page
 *
 * This ensures visual continuity — what rises from the envelope
 * is identical to what the viewer sees as the first real section.
 */
export function FirstInvitationCard({ className = '', compact = false }: FirstInvitationCardProps) {
  const { couple, displayDate, saveTheDate } = invitationData

  return (
    <div
      className={`gold-speckles relative mx-auto flex ${compact ? 'aspect-[0.72]' : 'aspect-[0.62]'} w-full max-w-[24rem] flex-col items-center justify-center overflow-hidden rounded-t-[10rem] rounded-b-[1.5rem] border border-[#B8862F]/60 bg-[#FDF8F0] px-7 text-center shadow-[0_22px_52px_rgba(122,90,58,0.17)] ${className}`}
    >
      {/* Inner border frame */}
      <div className="pointer-events-none absolute inset-[0.46rem] rounded-t-[9.7rem] rounded-b-[1.2rem] border border-[#D5B892]/55" />

      {/* Floral decorations */}
      <FloralArtwork className={`${compact ? '-bottom-14 -left-12 h-48 w-36' : '-bottom-16 -left-12 h-52 w-40'} absolute opacity-78`} />
      <FloralArtwork className="absolute -right-11 -top-12 h-48 w-36 rotate-180 opacity-62" />

      {/* Card content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <p className={`${compact ? 'text-[0.52rem]' : 'text-[0.68rem]'} font-semibold uppercase tracking-[0.2em] text-[#7A5A3A]`}>
          {saveTheDate.subtitle}
        </p>

        {/* Save the Date heading */}
        <p className={`${compact ? 'mt-3 text-[3.2rem]' : 'mt-4 text-[4.15rem] sm:text-[5rem]'} font-script font-normal leading-[0.9] text-[#B8862F]`}>
          {saveTheDate.title}
        </p>

        {/* Divider */}
        <div className={`${compact ? 'mt-4' : 'mt-5'} gold-divider`}><span /></div>

        {/* Couple names */}
        <h2 className={`${compact ? 'mt-4 text-[2rem]' : 'mt-6 text-[2.65rem] sm:text-[3.25rem]'} font-serif font-medium leading-[0.95] text-[#3B2A1A]`}>
          {couple.groom}
          <span className={`${compact ? 'py-0.5 text-[1.8rem]' : 'py-1 text-[2.35rem]'} block font-script font-normal text-[#C08A5A]`}>
            &amp;
          </span>
          {couple.bride}
        </h2>

        {/* Tagline */}
        <div className={`${compact ? 'mt-5 gap-2.5' : 'mt-7 gap-3'} flex flex-col items-center`}>
          <p className={`${compact ? 'max-w-[14rem] text-[1.5rem]' : 'max-w-[16rem] text-[1.9rem] sm:text-[2.08rem]'} time-note leading-[0.92]`}>
            {saveTheDate.tagline}
          </p>

          {/* Date */}
          <p className={`${compact ? 'text-[0.55rem]' : 'text-[0.78rem]'} whitespace-nowrap font-bold uppercase tracking-[0.2em] text-[#5F4638]`}>
            {displayDate}
          </p>
        </div>
      </div>
    </div>
  )
}
