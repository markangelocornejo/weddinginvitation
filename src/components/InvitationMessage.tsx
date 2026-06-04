import { motion } from 'framer-motion'
import { invitationData } from '../data/invitationData'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'

const ease = [0.22, 1, 0.36, 1] as const

export function InvitationMessage() {
  const { couple } = invitationData

  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:px-7 sm:py-28" id="our-story">
      <FloralArtwork className="absolute -left-20 bottom-0 h-60 w-48 opacity-40" />
      <FloralArtwork className="absolute -right-20 top-0 h-52 w-44 rotate-180 opacity-30" />
      <motion.div
        className="relative mx-auto max-w-xl lg:max-w-3xl"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease }}
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">
          How it all began
        </p>
        <h2 className="mt-3 font-script text-[4.8rem] font-normal leading-[0.86] text-[#B8862F] lg:text-[5.8rem]">
          Our Story
        </h2>
        <ParchmentDivider className="mt-6" />

        <div className="mx-auto mt-8 max-w-lg space-y-5 lg:max-w-2xl">
          <p className="font-serif text-[1.08rem] leading-8 text-[#7A5A3A] lg:text-[1.28rem] lg:leading-9">
            Our story began in the most unexpected way.
          </p>
          <p className="font-serif text-[1.08rem] leading-8 text-[#7A5A3A] lg:text-[1.28rem] lg:leading-9">
            He was once a stranger who happened to ride the same vehicle as my friends. They asked to borrow his phone so they could message me that they were going to be late for our exam. That simple favor became the beginning of our story.
          </p>
          <p className="font-serif text-[1.08rem] leading-8 text-[#7A5A3A] lg:text-[1.28rem] lg:leading-9">
            It was never easy. For eighteen years, we faced many trials that almost broke us, but by God&apos;s grace, love, and patience, we overcame them all. Today, we celebrate not only our wedding, but the journey that brought us here.
          </p>
        </div>

        <p className="mt-8 font-script text-[2.35rem] leading-none text-[#C08A5A] lg:text-[3.1rem]">
          {couple.displayNames}
        </p>
      </motion.div>
    </section>
  )
}
