import { motion } from 'framer-motion'
import { invitationData } from '../data/invitationData'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'
import { InvitationCard } from './InvitationCard'

export function RSVPPromptSection() {
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

          <a className="invitation-button mt-3" href="#rsvp">RSVP Here</a>
        </InvitationCard>
      </motion.div>
    </section>
  )
}
