import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'
import { CountdownSection } from './CountdownSection'
import { FirstInvitationCard } from './FirstInvitationCard'

export function SaveTheDateSection() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-5 py-6 text-center sm:px-7 sm:py-8 lg:py-10">
      <FloralArtwork className="absolute -left-16 bottom-0 h-60 w-48 opacity-72 lg:-left-8 lg:h-80 lg:w-60 xl:left-16" />
      <FloralArtwork className="absolute -right-16 top-0 h-52 w-40 rotate-180 opacity-56 lg:-right-8 lg:h-72 lg:w-56 xl:right-16" />
      <div className="pointer-events-none absolute left-1/2 top-[60%] h-24 w-[86%] max-w-sm -translate-x-1/2 rounded-sm bg-[#D5B892]/45 shadow-[0_14px_28px_rgba(122,90,58,0.1)] [clip-path:polygon(0_0,50%_62%,100%_0,100%_100%,0_100%)] lg:h-28 lg:max-w-md" />
      <motion.div
        className="relative z-10 flex w-full flex-col items-center"
        initial={{ opacity: 0, y: 42, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.15, duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <FirstInvitationCard className="max-w-[18.25rem] sm:max-w-[19rem] lg:max-w-[20rem] xl:max-w-[21rem]" />
        <ParchmentDivider className="mt-4" />
        <motion.a
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#D5B892]/70 bg-[#FDF8F0]/88 px-3.5 py-2 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#7A5A3A] shadow-[0_8px_18px_rgba(122,90,58,0.12)] backdrop-blur-sm transition-colors hover:bg-[#FDF8F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8862F]"
          href="#our-beginning"
          aria-label="More wedding details below"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          More details below
          <ChevronDown aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
        </motion.a>
        <div className="mt-3 w-full rounded-[1rem] border border-[#D5B892]/55 bg-[#FDF8F0]/72 px-4 py-3 shadow-[0_10px_22px_rgba(122,90,58,0.1)] backdrop-blur-sm sm:max-w-md lg:max-w-lg lg:px-6 lg:py-4">
          <CountdownSection embedded />
        </div>
      </motion.div>
    </section>
  )
}
