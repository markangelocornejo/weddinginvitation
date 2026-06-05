import { motion } from 'framer-motion'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'
import { invitationData } from '../data/invitationData'

const ease = [0.22, 1, 0.36, 1] as const

export function FinerDetailsSection() {
  const { motif } = invitationData

  return (
    <section className="relative overflow-hidden px-5 py-28 text-center sm:px-7 sm:py-32">
      <FloralArtwork className="absolute -bottom-14 -right-24 w-64 opacity-35 sm:w-72" />
      <FloralArtwork className="absolute -left-20 -top-10 h-48 w-40 opacity-25" />

      <motion.div
        className="relative mx-auto max-w-xl lg:max-w-2xl"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease }}
      >
        {/* Section heading */}
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#7A5A3A]">
          Attire guide
        </p>
        <h2 className="mt-3 font-script text-[4.15rem] font-normal leading-[0.96] text-[#B8862F] sm:text-[4.8rem] lg:text-[5.5rem]">
          The Finer Details
        </h2>
        <ParchmentDivider className="mt-6" />

        {/* Motif message */}
        <p className="mx-auto mt-7 max-w-md font-serif text-[1.08rem] leading-8 text-[#7A5A3A] lg:max-w-lg lg:text-[1.22rem] lg:leading-9">
          {motif.message}
        </p>

        {/* Color palette */}
        <div className="mt-8 flex flex-wrap justify-center gap-4" aria-label="Wedding motif colors">
          {motif.colors.map((color, index) => (
            <motion.div
              className="flex w-[4rem] flex-col items-center gap-2.5 lg:w-[5rem]"
              key={color.name}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + index * 0.08, duration: 0.45 }}
            >
              <span
                className="h-12 w-12 rounded-full border-[3px] border-[#FDF8F0] shadow-[0_4px_12px_rgba(122,90,58,0.18)] lg:h-14 lg:w-14"
                style={{ backgroundColor: color.value }}
              />
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.06em] text-[#7A5A3A]">
                {color.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Attire options */}
        <div className="mx-auto mt-10 max-w-md space-y-7 border-y border-[#D5B892]/50 py-8 lg:max-w-lg">
          <div>
            <h3 className="font-serif text-[1.6rem] font-medium leading-none text-[#3B2A1A] lg:text-[1.8rem]">
              Formal
            </h3>
            <p className="mx-auto mt-3 max-w-sm font-serif text-[1rem] leading-7 text-[#7A5A3A] lg:text-[1.1rem] lg:leading-8">
              Long gowns, suits, Barong Tagalog, Filipiniana, or elegant dresses are welcome.
            </p>
          </div>
          <ParchmentDivider />
          <div>
            <h3 className="font-serif text-[1.6rem] font-medium leading-none text-[#3B2A1A] lg:text-[1.8rem]">
              Semi-Formal
            </h3>
            <p className="mx-auto mt-3 max-w-sm font-serif text-[1rem] leading-7 text-[#7A5A3A] lg:text-[1.1rem] lg:leading-8">
              Dress shirts, slacks, cocktail dresses, or smart semi-formal attire are also welcome.
            </p>
          </div>
        </div>

        {/* Exclusions note */}
        <p className="mx-auto mt-7 block w-full max-w-xs text-center text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#B8862F] lg:max-w-md lg:text-[0.82rem]">
          {motif.attireNote}
        </p>

      </motion.div>
    </section>
  )
}
