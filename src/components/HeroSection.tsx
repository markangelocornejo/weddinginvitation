import { motion } from 'framer-motion'
import { invitationData } from '../data/invitationData'
import { FloralCluster, ParchmentDivider } from './BohoDecorations'

export function HeroSection() {
  const { couple, heroImage, invitation } = invitationData

  return (
    <section className="relative overflow-hidden px-5 py-20 text-center sm:px-7 sm:py-24 lg:py-32">
      <FloralCluster className="absolute -left-16 bottom-4 h-52 w-48 opacity-55" />
      <FloralCluster className="absolute -right-20 top-8 h-48 w-44 rotate-180 opacity-45" />

      <motion.div
        className="relative mx-auto max-w-lg lg:grid lg:max-w-5xl lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-center lg:text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">
            {invitation.eyebrow}
          </p>
          <p className="mt-3 font-script text-[3.8rem] leading-[0.98] text-[#B8862F] lg:text-[5.4rem]">
            Our beginning
          </p>
          <ParchmentDivider className="mt-6" />
          <p className="mx-auto mt-8 max-w-md font-serif text-[1.15rem] leading-8 text-[#7A5A3A] lg:max-w-sm lg:text-[1.38rem] lg:leading-9">
            {invitation.note}
          </p>
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-sm lg:mt-0 lg:max-w-md">
          <div className="absolute -inset-2 rounded-t-[11rem] rounded-b-[1rem] border border-[#B8862F]/50" />
          <div className="relative overflow-hidden rounded-t-[10.5rem] rounded-b-[0.8rem] border border-[#D5B892] bg-[#F5EBDD] p-2 shadow-[0_18px_38px_rgba(122,90,58,0.14)]">
            <div className="absolute inset-2 flex flex-col items-center justify-center rounded-t-[9.8rem] rounded-b-[0.45rem] bg-[radial-gradient(circle_at_50%_36%,rgba(253,248,240,0.9),rgba(213,184,146,0.24))] text-center">
              <span className="font-script text-[4.8rem] leading-none text-[#B8862F]/80">{couple.initials}</span>
              <span className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#7A5A3A]">
                Eighteen years in the making
              </span>
            </div>
            <img
              className="relative h-[28rem] w-full rounded-t-[9.8rem] rounded-b-[0.45rem] object-cover transition-opacity duration-500 lg:h-[34rem]"
              src={heroImage}
              alt={couple.displayNames}
              onError={(event) => {
                event.currentTarget.style.opacity = '0'
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
