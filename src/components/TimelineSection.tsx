import { motion } from 'framer-motion'
import { Heart, MapPin, UtensilsCrossed, Wine } from 'lucide-react'
import { invitationData } from '../data/invitationData'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'

const timelineIcons = {
  arrival: MapPin,
  ceremony: Heart,
  cocktail: Wine,
  reception: UtensilsCrossed,
}

export function TimelineSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:px-7 sm:py-28">
      <FloralArtwork className="absolute -right-28 bottom-4 h-56 w-44 rotate-180 opacity-28 sm:-right-20 sm:h-60 sm:w-48 lg:-right-10" />
      <motion.div
        className="relative mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#7A5A3A]">The celebration</p>
        <h2 className="mt-3 font-script text-[4.1rem] font-normal leading-[0.96] text-[#B8862F] sm:text-[4.8rem] lg:text-[5.5rem]">Our Event Timeline</h2>
        <ParchmentDivider className="mt-6" />

        <div className="relative mx-auto mt-10 grid max-w-md gap-10 text-center sm:max-w-2xl sm:grid-cols-2 sm:gap-3 lg:mt-14 lg:max-w-4xl">
          <span className="absolute left-1/2 top-10 h-[calc(100%-5rem)] w-[2px] -translate-x-1/2 bg-[#C08A5A]/60 sm:left-[25%] sm:right-[25%] sm:top-6 sm:h-[2px] sm:w-1/2 sm:translate-x-0 lg:top-7" />
          {invitationData.timeline.map((item, index) => {
            const Icon = timelineIcons[item.icon as keyof typeof timelineIcons] ?? Heart
            return (
              <motion.article
                className="relative flex flex-col items-center gap-3 sm:block"
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
              >
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B8862F] bg-[#FDF8F0] text-[#B8862F] shadow-[0_4px_10px_rgba(122,90,58,0.12)] sm:mx-auto sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                  <Icon size={17} strokeWidth={1.4} />
                </div>
                <div className="pt-0.5 text-center sm:pt-4">
                  <time className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#B8862F] lg:text-[0.72rem]">{item.time}</time>
                  <h3 className="mt-1 font-script text-[2rem] font-normal leading-none text-[#C08A5A] lg:text-[2.6rem]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-5 text-[#7A5A3A] lg:text-base lg:leading-6">{item.detail}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
