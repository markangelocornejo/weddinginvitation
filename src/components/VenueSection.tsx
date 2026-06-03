import { motion } from 'framer-motion'
import { Navigation } from 'lucide-react'
import { invitationData } from '../data/invitationData'
import { EventIllustration, FloralArtwork, ParchmentDivider } from './BohoDecorations'

export function VenueSection() {
  const { event } = invitationData
  const locations = [
    { ...event.ceremony, mapLink: event.mapLink },
    { ...event.reception, mapLink: event.receptionMapLink },
  ]

  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:px-7 sm:py-28">
      <FloralArtwork className="absolute -left-20 bottom-0 w-56 opacity-30" />
      <motion.div
        className="relative mx-auto max-w-xl lg:max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#7A5A3A]">Where to find us</p>
        <h2 className="mt-3 font-script text-[4.25rem] font-normal leading-[0.86] text-[#B8862F] sm:text-[4.8rem] lg:text-[5.5rem]">Our Locations</h2>
        <ParchmentDivider className="mt-6" />
        <div className="mx-auto mt-8 grid gap-10 sm:grid-cols-2 sm:gap-0 lg:mt-12 lg:max-w-4xl">
          {locations.map((location, index) => (
            <article className="relative px-3 text-center sm:px-7 sm:even:border-l sm:even:border-[#D5B892]/70 lg:px-12" key={location.venue}>
              <EventIllustration className="mx-auto h-24 w-40 lg:h-28 lg:w-48" type={location.illustration === 'reception' ? 'reception' : 'chapel'} />
              <p className="mt-3 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B8862F]">{location.title}</p>
              <h3 className="mt-2 font-serif text-[1.45rem] text-[#3B2A1A] lg:text-[1.75rem]">{location.venue}</h3>
              <p className="mx-auto mt-3 max-w-sm font-serif text-[1rem] leading-7 text-[#7A5A3A] lg:text-[1.15rem]">{location.address}</p>
              <motion.a className="invitation-button mt-5" href={location.mapLink} target="_blank" rel="noreferrer" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                <Navigation size={15} strokeWidth={1.7} />
                Open Map
              </motion.a>
              {index === 0 && <span className="mx-auto mt-9 block h-px w-24 bg-[#D5B892]/70 sm:hidden" />}
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
