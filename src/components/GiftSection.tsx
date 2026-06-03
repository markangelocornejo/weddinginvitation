import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { invitationData } from '../data/invitationData'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'

export function GiftSection() {
  const { gift } = invitationData
  const [copied, setCopied] = useState(false)

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(gift.accountNumber.replaceAll(' ', ''))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:px-7 sm:py-28">
      <FloralArtwork className="absolute -bottom-12 -left-16 h-60 w-48 opacity-42" />
      <motion.div
        className="relative mx-auto max-w-xl lg:max-w-3xl"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">With love</p>
        <h2 className="mt-3 font-script text-[4.2rem] font-normal leading-[0.86] text-[#B8862F] sm:text-[4.8rem] lg:text-[5.5rem]">A Note on Gift</h2>
        <ParchmentDivider className="mt-6" />
        <p className="mx-auto mt-6 max-w-lg font-serif text-[1.08rem] leading-8 text-[#7A5A3A] lg:max-w-2xl lg:text-[1.28rem] lg:leading-9">{gift.note}</p>
        <div className="mx-auto mt-8 max-w-sm border-y border-[#D5B892]/70 py-5">
          <span className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#B8862F]">{gift.type} / {gift.provider}</span>
          {gift.accountNumber ? (
            <>
              <strong className="mt-3 block font-serif text-[2.1rem] font-medium leading-none text-[#3B2A1A]">{gift.accountNumber}</strong>
              <small className="mt-2 block font-serif text-base text-[#7A5A3A]">{gift.accountName}</small>
              <button
                className="mx-auto mt-5 flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#7A5A3A] underline decoration-[#D5B892] underline-offset-4"
                type="button"
                onClick={copyNumber}
                aria-live="polite"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy number'}
              </button>
            </>
          ) : (
            <p className="mt-3 font-serif text-base italic text-[#7A5A3A]">More information will be shared soon.</p>
          )}
        </div>
      </motion.div>
    </section>
  )
}
