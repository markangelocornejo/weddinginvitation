import { motion } from 'framer-motion'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'

const ease = [0.22, 1, 0.36, 1] as const

export function SpiritualSection() {
  return (
    <section className="relative overflow-hidden px-5 py-28 text-center sm:px-7 sm:py-32">
      {/* Subtle floral artwork — keeps it part of the invitation canvas */}
      <FloralArtwork className="absolute -left-20 -top-8 h-56 w-44 opacity-28" />
      <FloralArtwork className="absolute -bottom-10 -right-20 h-52 w-42 rotate-180 opacity-24" />

      <motion.div
        className="relative mx-auto max-w-xl lg:max-w-2xl"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease }}
      >
        {/* Eyebrow */}
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#7A5A3A]">
          In faith &amp; love
        </p>

        {/* Section heading — elegant script */}
        <h2 className="mt-4 font-script text-[4.2rem] font-normal leading-[0.88] text-[#B8862F] sm:text-[4.8rem] lg:text-[5.6rem]">
          With God&apos;s Grace
        </h2>

        <ParchmentDivider className="mt-7" />

        {/* Bible verse — solemn, set apart */}
        <motion.blockquote
          className="mx-auto mt-8 max-w-md border-y border-[#D5B892]/50 py-7 lg:max-w-lg"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 0.75, ease }}
        >
          <p className="font-serif text-[1.28rem] italic leading-8 text-[#3B2A1A] sm:text-[1.4rem] sm:leading-9 lg:text-[1.52rem] lg:leading-10">
            &ldquo;He has made everything beautiful in its time.&rdquo;
          </p>
          <cite className="mt-3 block text-[0.72rem] font-semibold not-italic uppercase tracking-[0.18em] text-[#B8862F]">
            — Ecclesiastes 3:11
          </cite>
        </motion.blockquote>

        {/* Body paragraphs */}
        <motion.div
          className="mx-auto mt-8 max-w-lg space-y-5 lg:max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.25, duration: 0.8, ease }}
        >
          <p className="font-serif text-[1.05rem] leading-8 text-[#7A5A3A] lg:text-[1.2rem] lg:leading-9">
            Eighteen years of blessings, growth, and divine timing have led us to this altar. Today, we give our deepest gratitude to God for the beautiful history He has written for us and for the sacred future we now begin together.
          </p>
          <p className="font-serif text-[1.05rem] leading-8 text-[#7A5A3A] lg:text-[1.2rem] lg:leading-9">
            True love is patient, and our journey has been a testament to that patience and grace. After eighteen years of walking in faith and love, we now stand before God and our loved ones to seal our covenant for all the days of our lives.
          </p>
        </motion.div>

        {/* Closing decorative element */}
        <ParchmentDivider className="mt-10" />
      </motion.div>
    </section>
  )
}
