import { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Heart } from 'lucide-react'
import { invitationData } from '../data/invitationData'
import { FloralArtwork } from './BohoDecorations'
import { FirstInvitationCard } from './FirstInvitationCard'

type EnvelopeIntroProps = {
  onReveal: () => void
  onComplete: () => void
}

const cinematicEase = [0.22, 1, 0.36, 1] as const

const paperVariants: Variants = {
  resting: { opacity: 0.82, scale: 0.46, y: 96 },
  opening: {
    opacity: [0.82, 1, 1, 1, 0],
    scale: [0.46, 0.58, 0.86, 1.02, 1.02],
    y: [96, 18, -132, -226, -226],
    transition: {
      delay: 0.78,
      duration: 2.72,
      ease: cinematicEase,
      times: [0, 0.25, 0.62, 0.86, 1],
    },
  },
}

const envelopeVariants: Variants = {
  resting: { opacity: 1, scale: 1, y: 0 },
  opening: {
    opacity: [1, 1, 0],
    scale: [1, 0.98, 0.95],
    y: [0, 12, 34],
    transition: { delay: 2.08, duration: 0.9, ease: 'easeInOut', times: [0, 0.24, 1] },
  },
}

export function EnvelopeIntro({ onReveal, onComplete }: EnvelopeIntroProps) {
  const [isOpening, setIsOpening] = useState(false)

  useEffect(() => {
    if (!isOpening) return

    const revealTimer = window.setTimeout(onReveal, 2180)
    const completeTimer = window.setTimeout(onComplete, 3820)

    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(completeTimer)
    }
  }, [isOpening, onComplete, onReveal])

  const animationState = isOpening ? 'opening' : 'resting'

  return (
    <motion.div
      className="fixed inset-0 z-50 flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#F5EBDD] px-5 text-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: cinematicEase }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(253,248,240,0.96),transparent_35%),radial-gradient(circle_at_86%_78%,rgba(213,184,146,0.24),transparent_42%)]" />
      <div className="gold-speckles pointer-events-none absolute inset-0 opacity-70" />
      <FloralArtwork className="absolute -bottom-16 -left-16 h-72 w-56 opacity-75" />
      <FloralArtwork className="absolute -right-16 -top-16 h-64 w-52 rotate-180 opacity-62" />

      <motion.div
        className="relative z-10"
        animate={isOpening ? { opacity: 0, y: -22 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.52, ease: cinematicEase }}
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">
          A special invitation for you
        </p>
        <p className="mt-3 font-script text-[2.8rem] leading-none text-[#B8862F]">
          You are warmly invited
        </p>
        <p className="mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#7A5A3A]">
          {invitationData.couple.displayNames}
        </p>
      </motion.div>

      <div className="relative z-10 mt-8 h-[286px] w-[min(92vw,400px)] [perspective:1600px]">
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[205px]"
          variants={envelopeVariants}
          animate={animationState}
          initial="resting"
        >
          <div className="absolute inset-0 rounded-sm bg-[#D5B892] shadow-[0_26px_56px_rgba(122,90,58,0.24)]" />
          <motion.div
            className="absolute inset-x-0 top-0 z-30 h-[126px] origin-top bg-[#C9A77E] [clip-path:polygon(0_0,100%_0,50%_100%)]"
            animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ delay: 0.28, duration: 1.16, ease: cinematicEase }}
          />
          <div className="absolute inset-0 z-20 bg-[#E1C7A5] [clip-path:polygon(0_0,50%_58%,100%_0,100%_100%,0_100%)]" />
          <div className="absolute inset-0 z-20 bg-[#E9D6BA] [clip-path:polygon(0_0,50%_58%,0_100%)]" />
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
          variants={paperVariants}
          animate={animationState}
          initial="resting"
        >
          <FirstInvitationCard className="w-[min(84vw,22rem)] shrink-0" />
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-10 z-40 flex justify-center"
          animate={isOpening ? { opacity: 0, scale: 0.68 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.38, ease: cinematicEase }}
        >
          <button
            className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-double border-[#D5B892] bg-[#8E574B] text-[#F5EBDD] shadow-[0_7px_16px_rgba(122,67,58,0.3)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8862F]"
            type="button"
            onClick={() => setIsOpening(true)}
            disabled={isOpening}
            aria-label="Open invitation"
          >
            <Heart size={23} strokeWidth={1.25} />
          </button>
        </motion.div>
      </div>

      <motion.button
        className="relative z-10 mt-8 rounded-full border border-[#B8862F]/55 bg-[#FDF8F0]/80 px-7 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7A5A3A] shadow-[0_8px_22px_rgba(122,90,58,0.1)] backdrop-blur-sm transition-colors hover:bg-[#FDF8F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8862F] disabled:cursor-wait"
        type="button"
        onClick={() => setIsOpening(true)}
        disabled={isOpening}
        animate={isOpening ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.44, ease: cinematicEase }}
      >
        {isOpening ? 'Opening...' : 'Open Invitation'}
      </motion.button>
    </motion.div>
  )
}
