import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarHeart, X } from 'lucide-react'
import { invitationData } from '../data/invitationData'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'
import { InvitationCard } from './InvitationCard'

export function RSVPPromptSection() {
  const [isReminderOpen, setIsReminderOpen] = useState(false)
  const { gallery, rsvp } = invitationData

  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:px-7 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <InvitationCard className="max-w-lg px-6 py-9 sm:px-9 sm:py-11 lg:max-w-2xl lg:px-16 lg:py-14">
          <FloralArtwork className="absolute -right-20 -top-16 w-44 opacity-50" />
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">Kindly respond</p>
          <h2 className="mt-3 font-script text-[4.6rem] font-normal leading-[0.96] text-[#B8862F] lg:text-[5.6rem]">{rsvp.promptTitle}</h2>
          <ParchmentDivider className="mt-6" />
          <p className="mx-auto mt-5 max-w-sm font-serif text-[1.08rem] leading-7 text-[#7A5A3A] lg:max-w-lg lg:text-[1.24rem] lg:leading-8">{rsvp.promptMessage}</p>
          <p className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-[#D5B892]/70 bg-[#FDF8F0]/82 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#6E4C35]">
            <CalendarHeart aria-hidden="true" className="h-4 w-4 text-[#B8862F]" strokeWidth={1.8} />
            RSVP by {rsvp.deadline}
          </p>

          <div className="relative mx-auto mt-7 h-44 max-w-xs lg:h-52 lg:max-w-sm">
            <img className="absolute left-4 top-3 h-36 w-28 -rotate-6 border-[6px] border-[#FDF8F0] object-cover shadow-[0_10px_18px_rgba(122,90,58,0.18)] lg:h-44 lg:w-36" src={gallery[0]} alt="" />
            <img className="absolute right-4 top-3 h-36 w-28 rotate-6 border-[6px] border-[#FDF8F0] object-cover shadow-[0_10px_18px_rgba(122,90,58,0.18)] lg:h-44 lg:w-36" src="/images/att.QddXWWcNIUsnCv_zMusF403TXu9ch0gHSAy1R76L3IQ.jpeg" alt="" />
            <img
              className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_14px_rgba(122,67,58,0.26)] lg:h-24 lg:w-24"
              src="/images/r-and-r-seal-brown-transparent.png"
              alt=""
              draggable="false"
            />
          </div>

          <button className="invitation-button mt-3" type="button" onClick={() => setIsReminderOpen(true)}>
            Reserve RSVP
          </button>
        </InvitationCard>
      </motion.div>

      {isReminderOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-[#3B2A1A]/35 px-5 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="rsvp-reminder-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-sm border border-[#D5B892]/75 bg-[#FDF8F0] px-6 py-7 text-center shadow-[0_24px_56px_rgba(59,42,26,0.25)]"
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-[#7A5A3A] transition-colors hover:bg-[#F5EBDD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8862F]"
              type="button"
              aria-label="Close RSVP reminder"
              onClick={() => setIsReminderOpen(false)}
            >
              <X aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#D5B892] bg-[#F5EBDD] text-[#B8862F]">
              <CalendarHeart aria-hidden="true" className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.7} />
            </span>
            <p className="mt-4 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#7A5A3A]">RSVP reminder</p>
            <h3 id="rsvp-reminder-title" className="mt-1.5 font-serif text-[1.45rem] font-bold leading-tight text-[#3B2A1A]">
              Reserve your seat
            </h3>
            <p className="mx-auto mt-3 max-w-xs text-center text-[0.86rem] font-medium leading-6 text-[#7A5A3A]">
              Please send your response by <strong className="font-bold text-[#5F4638]">{rsvp.deadline}</strong> so we can prepare a seat for you.
            </p>
            <a className="invitation-button mt-5 px-4 py-2.5 text-[0.56rem]" href="#rsvp" onClick={() => setIsReminderOpen(false)}>
              Continue to RSVP
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
