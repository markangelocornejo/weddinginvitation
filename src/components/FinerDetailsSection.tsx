import { motion } from 'framer-motion'
import { InvitationCard } from './InvitationCard'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'
import { invitationData } from '../data/invitationData'

export function FinerDetailsSection() {
  const { dressCode, motif, unpluggedCeremony } = invitationData

  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:px-7 sm:py-28">
      <FloralArtwork className="absolute -bottom-14 -right-24 w-64 opacity-35 sm:w-72" />
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <InvitationCard variant="arch" className="max-w-lg px-6 pb-10 pt-20 sm:px-9 sm:pb-12 sm:pt-24 lg:max-w-2xl lg:px-16 lg:pb-14 lg:pt-28">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#7A5A3A]">Attire guide</p>
          <h2 className="mt-3 font-script text-[4.15rem] font-normal leading-[0.96] text-[#B8862F] sm:text-[4.8rem] lg:text-[5.5rem]">The Finer Details</h2>
          <ParchmentDivider className="mt-6" />

          <h3 className="mt-7 font-serif text-[1.8rem] font-medium leading-none text-[#3B2A1A]">{dressCode.title}</h3>
          <p className="mx-auto mt-4 max-w-sm font-serif text-[1.05rem] leading-7 text-[#7A5A3A] lg:max-w-lg lg:text-[1.2rem] lg:leading-8">{dressCode.note}</p>
          <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-[#7A5A3A] lg:max-w-md lg:text-sm">{dressCode.exclusions}</p>

          <div className="mt-7 flex flex-wrap justify-center gap-3.5" aria-label="Wedding motif colors">
            {motif.colors.map((color, index) => (
              <motion.div
                className="flex w-[3.8rem] flex-col items-center gap-2 lg:w-[4.6rem]"
                key={color.name}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + index * 0.07, duration: 0.42 }}
              >
                <span
                  className="h-11 w-11 rounded-full border-[3px] border-[#FDF8F0] shadow-[0_4px_12px_rgba(122,90,58,0.18)] lg:h-14 lg:w-14"
                  style={{ backgroundColor: color.value }}
                />
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.06em] text-[#7A5A3A]">{color.name}</span>
              </motion.div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-xs border-b border-[#D5B892]/55 pb-6 text-sm leading-6 tracking-wide text-[#7A5A3A] lg:max-w-md lg:text-base lg:leading-7">
            {motif.attireNote}
          </p>

          <h3 className="mt-7 font-script text-[3rem] font-normal leading-[1.05] text-[#C08A5A]">{unpluggedCeremony.title}</h3>
          <p className="mx-auto mt-3 max-w-sm font-serif text-[1rem] leading-7 text-[#7A5A3A] lg:max-w-lg lg:text-[1.15rem] lg:leading-8">{unpluggedCeremony.message}</p>
        </InvitationCard>
      </motion.div>
    </section>
  )
}
