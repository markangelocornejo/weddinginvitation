import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { invitationData } from '../data/invitationData'
import { FloralArtwork } from './BohoDecorations'
import { FirstInvitationCard } from './FirstInvitationCard'

type EnvelopeIntroProps = {
  onReveal: () => void
  onComplete: () => void
}

const ease = [0.22, 1, 0.36, 1] as const

/* ─── Wax seal fades + scales down ─── */
const sealVariants: Variants = {
  resting: { opacity: 1, scale: 1 },
  opening: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.5, ease },
  },
}

/* ─── Top flap opens smoothly (rotates backward in 3D) ─── */
const flapVariants: Variants = {
  resting: { rotateX: 0 },
  opening: {
    rotateX: -180,
    transition: { delay: 0.35, duration: 1.0, ease },
  },
}

/* ─── Invitation paper rises from inside the envelope ─── */
const paperVariants: Variants = {
  resting: { y: 80, scale: 0.52, opacity: 0.85 },
  opening: {
    y: [80, 40, -160, -280],
    scale: [0.52, 0.62, 0.92, 1.0],
    opacity: [0.85, 1, 1, 1],
    transition: {
      delay: 1.0,
      duration: 2.2,
      ease,
      times: [0, 0.2, 0.65, 1],
    },
  },
}

/* ─── Envelope fades AFTER the paper has risen (delayed) ─── */
const envelopeVariants: Variants = {
  resting: { opacity: 1, scale: 1, y: 0 },
  opening: {
    opacity: [1, 1, 0],
    scale: [1, 0.97, 0.93],
    y: [0, 8, 30],
    transition: {
      delay: 2.4,
      duration: 0.85,
      ease: 'easeInOut',
      times: [0, 0.3, 1],
    },
  },
}

/* ─── Top text fades out ─── */
const headerVariants: Variants = {
  resting: { opacity: 1, y: 0 },
  opening: {
    opacity: 0,
    y: -18,
    transition: { duration: 0.45, ease },
  },
}

export function EnvelopeIntro({ onReveal, onComplete }: EnvelopeIntroProps) {
  const [isOpening, setIsOpening] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpening) return

    // Reveal quickly for reduced-motion users; otherwise keep the full envelope sequence.
    const revealTimer = window.setTimeout(onReveal, shouldReduceMotion ? 80 : 2600)
    const completeTimer = window.setTimeout(onComplete, shouldReduceMotion ? 180 : 3800)

    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(completeTimer)
    }
  }, [isOpening, onComplete, onReveal, shouldReduceMotion])

  const state = isOpening ? 'opening' : 'resting'
  const animatedState = shouldReduceMotion ? 'resting' : state
  const openInvitation = () => {
    if (isOpening) return

    window.dispatchEvent(new Event('wedding-invitation:opened'))
    setIsOpening(true)
  }

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-50 flex h-svh flex-col items-center justify-center overflow-hidden bg-[#F5EBDD] px-5 py-5 text-center"
      exit={{ opacity: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease }}
    >
      {/* Parchment background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(253,248,240,0.96),transparent_35%),radial-gradient(circle_at_86%_78%,rgba(213,184,146,0.24),transparent_42%)]" />
      <div className="gold-speckles pointer-events-none absolute inset-0 opacity-70" />

      {/* Floral clusters — illustrated corners */}
      <FloralArtwork className="absolute -bottom-16 -left-16 h-72 w-56 opacity-80 lg:h-96 lg:w-72" />
      <FloralArtwork className="absolute -right-16 -top-16 h-64 w-52 rotate-180 opacity-65 lg:h-80 lg:w-64" />
      <FloralArtwork className="absolute -left-8 top-[28%] h-36 w-28 -rotate-12 opacity-40 lg:h-48 lg:w-36" />
      <FloralArtwork className="absolute -right-8 bottom-[22%] h-40 w-32 rotate-[168deg] opacity-38 lg:h-52 lg:w-40" />

      {/* Header text — fades when opening */}
      <motion.div
        className="relative z-10 mb-3"
        variants={headerVariants}
        animate={animatedState}
        initial="resting"
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">
          A special invitation for you
        </p>
        <p className="mt-2 font-script text-[2.6rem] leading-none text-[#B8862F] sm:text-[3rem]">
          You are warmly invited
        </p>
        <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#7A5A3A]">
          {invitationData.couple.displayNames} &middot; {invitationData.displayDate}
        </p>
      </motion.div>

      {/* ─── Envelope + Paper scene ─── */}
      <div className="relative z-10 h-[min(42svh,300px)] w-[min(92vw,420px)] [perspective:1600px] sm:h-[min(44svh,320px)]">
        {/* Envelope body */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[190px] sm:h-[220px]"
          variants={envelopeVariants}
          animate={animatedState}
          initial="resting"
        >
          {/* Envelope background */}
          <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-[#DEBB8E] to-[#D5B892] shadow-[0_26px_56px_rgba(122,90,58,0.28)]" />

          {/* Top flap (opens in 3D) */}
          <motion.div
            className="absolute inset-x-0 top-0 z-30 h-[116px] origin-top [clip-path:polygon(0_0,100%_0,50%_100%)] [backface-visibility:hidden] sm:h-[130px]"
            style={{ transformStyle: 'preserve-3d' }}
            variants={flapVariants}
            animate={animatedState}
            initial="resting"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#C9A77E] to-[#C4A070]" />
            {/* Back face of flap */}
            <div className="absolute inset-0 bg-[#E9D6BA] [backface-visibility:hidden] [transform:rotateX(180deg)]" />
          </motion.div>

          {/* Rear panels */}
          <div className="absolute inset-0 z-20 bg-[#E1C7A5] [clip-path:polygon(0_0,50%_58%,100%_0,100%_100%,0_100%)]" />
          <div className="absolute inset-0 z-20 bg-[#E9D6BA] [clip-path:polygon(0_0,50%_58%,0_100%)]" />

          {/* Inner shadow for depth */}
          <div className="absolute inset-x-4 top-8 z-[5] h-[60%] rounded-sm bg-[#C4A070]/30 blur-sm" />
        </motion.div>

        {/* Rising paper (uses FirstInvitationCard to match first section) */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
          variants={paperVariants}
          animate={animatedState}
          initial="resting"
        >
          <FirstInvitationCard className="w-[min(82vw,21rem)] shrink-0" compact />
        </motion.div>

        {/* Wax seal (button to open) — fades/scales down */}
        <motion.div
          className="absolute inset-x-0 bottom-12 z-40 flex justify-center"
          variants={sealVariants}
          animate={animatedState}
          initial="resting"
        >
          <button
            className="flex h-24 w-24 items-center justify-center rounded-full bg-transparent p-0 shadow-[0_10px_24px_rgba(122,67,58,0.28)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8862F] sm:h-28 sm:w-28"
            type="button"
            onClick={openInvitation}
            disabled={isOpening}
            aria-label="Open invitation"
          >
            <img
              className="h-full w-full object-contain"
              src="/images/r-and-r-seal-brown-transparent.png"
              alt=""
              draggable="false"
            />
          </button>
        </motion.div>
      </div>

      {/* Open button — secondary CTA */}
      <motion.button
        className="relative z-10 mt-5 rounded-full border border-[#B8862F]/55 bg-[#FDF8F0]/80 px-7 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7A5A3A] shadow-[0_8px_22px_rgba(122,90,58,0.1)] backdrop-blur-sm transition-colors hover:bg-[#FDF8F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8862F] disabled:cursor-wait"
        type="button"
        onClick={openInvitation}
        disabled={isOpening}
        animate={isOpening && !shouldReduceMotion ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, ease }}
      >
        {isOpening ? 'Opening...' : 'Open Invitation'}
      </motion.button>
    </motion.div>
  )
}
