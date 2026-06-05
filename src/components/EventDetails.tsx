import { motion } from 'framer-motion'
import { CalendarPlus, Download } from 'lucide-react'
import { invitationData } from '../data/invitationData'
import { EventIllustration, FloralArtwork, ParchmentDivider } from './BohoDecorations'

const calendarStart = '20260822T100000'
const calendarEnd = '20260822T150000'
const calendarTimeZone = 'Europe/Helsinki'

export function EventDetails() {
  const { event } = invitationData
  const details = [event.ceremony, event.reception]
  const calendarTitle = `${invitationData.couple.displayNames} Wedding`
  const calendarLocation = `${event.ceremony.venue}, ${event.ceremony.address}`
  const calendarDescription = `${event.ceremony.title} at ${event.ceremony.time} at ${event.ceremony.venue}. ${event.reception.title} follows at ${event.reception.time} at ${event.reception.venue}, ${event.reception.address}.`
  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarTitle)}&dates=${calendarStart}/${calendarEnd}&ctz=${encodeURIComponent(calendarTimeZone)}&details=${encodeURIComponent(calendarDescription)}&location=${encodeURIComponent(calendarLocation)}`

  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:px-7 sm:py-28">
      <FloralArtwork className="absolute -left-20 top-2 h-56 w-44 opacity-36" />
      <motion.div
        className="relative mx-auto max-w-2xl lg:max-w-5xl"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#7A5A3A]">
          The finer details
        </p>
        <h2 className="mt-3 font-script text-[4.25rem] font-normal leading-[0.86] text-[#B8862F] sm:text-[4.8rem] lg:text-[5.5rem]">
          Wedding Day
        </h2>
        <ParchmentDivider className="mt-6" />
        <p className="mx-auto mt-6 max-w-md font-serif text-[1.08rem] leading-8 text-[#7A5A3A] lg:max-w-2xl lg:text-[1.28rem] lg:leading-9">
          Join us as we exchange our vows and celebrate the beginning of our forever.
        </p>

        <div className="mx-auto mt-10 grid max-w-xl gap-9 sm:grid-cols-2 sm:gap-0 lg:mt-14 lg:max-w-4xl">
          {details.map((detail, index) => (
            <article
              className="relative px-4 text-center sm:px-7 sm:even:border-l sm:even:border-[#D5B892]/70 lg:px-12"
              key={detail.title}
            >
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#B8862F]">
                {detail.note}
              </p>
              <EventIllustration
                className="mx-auto mt-4 h-20 w-32 lg:h-24 lg:w-40"
                type={detail.illustration === 'reception' ? 'reception' : 'chapel'}
              />
              <h3 className="mt-2 font-script text-[3rem] font-normal leading-none text-[#C08A5A] lg:text-[3.5rem]">
                {detail.title}
              </h3>
              <span className="mx-auto mt-4 block h-px w-14 bg-[#D5B892]" />
              <p className="mt-4 font-serif text-lg text-[#3B2A1A]">{detail.date}</p>
              <p className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#7A5A3A]">
                {detail.time}
              </p>
              <p className="mt-4 font-serif text-[1.15rem] leading-6 text-[#7A5A3A] lg:text-[1.3rem] lg:leading-7">
                <strong className="block font-medium text-[#3B2A1A]">{detail.venue}</strong>
                {detail.address}
              </p>
              {index === 0 && <span className="mx-auto mt-8 block h-px w-24 bg-[#D5B892]/70 sm:hidden" />}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-lg flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            className="invitation-button"
            href={googleCalendarLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <CalendarPlus size={15} strokeWidth={1.7} />
            Add to Google Calendar
          </motion.a>
          <motion.a
            className="invitation-button"
            href="/ray-ruby-wedding.ics"
            download
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={15} strokeWidth={1.7} />
            Download .ics
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
