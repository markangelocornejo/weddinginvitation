import { motion } from 'framer-motion'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'
import { CountdownSection } from './CountdownSection'
import { FirstInvitationCard } from './FirstInvitationCard'
import { MusicToggle } from './MusicToggle'

export function SaveTheDateSection() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-5 py-12 text-center sm:px-7 sm:py-16 lg:py-20">
      <MusicToggle />
      <FloralArtwork className="absolute -left-16 bottom-0 h-72 w-56 opacity-80 lg:h-96 lg:w-72" />
      <FloralArtwork className="absolute -right-16 top-0 h-60 w-48 rotate-180 opacity-62 lg:h-80 lg:w-64" />
      <div className="pointer-events-none absolute left-1/2 top-[62%] h-28 w-[88%] max-w-md -translate-x-1/2 rounded-sm bg-[#D5B892]/45 shadow-[0_18px_34px_rgba(122,90,58,0.12)] [clip-path:polygon(0_0,50%_62%,100%_0,100%_100%,0_100%)] lg:h-32 lg:max-w-lg" />
      <motion.div
        className="relative z-10 flex w-full flex-col items-center"
        initial={{ opacity: 0, y: 42, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.15, duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <FirstInvitationCard className="max-w-[22rem] lg:max-w-[24rem]" />
        <ParchmentDivider className="mt-8" />
        <div className="mt-6 w-full rounded-[1.2rem] border border-[#D5B892]/55 bg-[#FDF8F0]/72 px-4 py-5 shadow-[0_12px_28px_rgba(122,90,58,0.1)] backdrop-blur-sm sm:max-w-lg lg:max-w-xl lg:px-8 lg:py-6">
          <CountdownSection embedded />
        </div>
      </motion.div>
    </section>
  )
}
