import { motion } from 'framer-motion'
import { invitationData } from '../data/invitationData'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'

export function InvitationMessage() {
  const { invitation, couple } = invitationData

  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:px-7 sm:py-28" id="invitation">
      <FloralArtwork className="absolute -left-20 bottom-0 h-60 w-48 opacity-40" />
      <FloralArtwork className="absolute -right-20 top-0 h-52 w-44 rotate-180 opacity-30" />
      <motion.div
        className="relative mx-auto max-w-xl lg:max-w-3xl"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">
          {invitation.eyebrow}
        </p>
        <h2 className="mt-3 font-script text-[4.8rem] font-normal leading-[0.86] text-[#B8862F] lg:text-[5.8rem]">
          Our Story
        </h2>
        <ParchmentDivider className="mt-6" />
        <p className="mx-auto mt-7 max-w-md font-serif text-[1.12rem] leading-8 text-[#7A5A3A] lg:max-w-2xl lg:text-[1.38rem] lg:leading-10">
          {invitation.message}
        </p>
        {invitation.story.length > 0 && (
          <div className="mx-auto mt-6 grid max-w-md gap-4 font-serif text-[1rem] leading-7 text-[#7A5A3A]">
            {invitation.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        )}
        <p className="mt-6 font-script text-[2.35rem] leading-none text-[#C08A5A] lg:text-[3.1rem]">
          {couple.displayNames}
        </p>
      </motion.div>
    </section>
  )
}
