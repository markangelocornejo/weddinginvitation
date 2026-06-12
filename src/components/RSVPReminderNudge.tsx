import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarHeart } from 'lucide-react'
import { invitationData } from '../data/invitationData'

type RSVPReminderNudgeProps = {
  enabled: boolean
}

const storageKey = 'ray-ruby-rsvp-nudge-dismissed'

const isRSVPSectionNearby = () => {
  const rsvpSection = document.getElementById('rsvp')
  if (!rsvpSection) return false

  const rect = rsvpSection.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.85 && rect.bottom > -window.innerHeight * 0.2
}

export function RSVPReminderNudge({ enabled }: RSVPReminderNudgeProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { rsvp } = invitationData

  useEffect(() => {
    if (!enabled) return
    if (window.sessionStorage.getItem(storageKey) === 'true') return

    const reminderTimer = window.setTimeout(() => {
      if (!isRSVPSectionNearby()) setIsVisible(true)
    }, 10000)

    return () => window.clearTimeout(reminderTimer)
  }, [enabled])

  useEffect(() => {
    if (!isVisible) return

    const hideNearRSVP = () => {
      if (isRSVPSectionNearby()) setIsVisible(false)
    }

    window.addEventListener('scroll', hideNearRSVP, { passive: true })
    return () => window.removeEventListener('scroll', hideNearRSVP)
  }, [isVisible])

  const dismiss = () => {
    window.sessionStorage.setItem(storageKey, 'true')
    setIsVisible(false)
  }

  const goToRSVP = () => {
    window.sessionStorage.setItem(storageKey, 'true')
    setIsVisible(false)
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!isVisible) return null

  return (
    <motion.aside
      className="fixed inset-x-4 bottom-24 z-40 mx-auto max-w-sm rounded-[1rem] border border-[#D5B892]/80 bg-[#FDF8F0]/96 px-5 py-4 text-center text-[#3B2A1A] shadow-[0_18px_42px_rgba(59,42,26,0.2)] backdrop-blur-sm sm:bottom-8 sm:left-auto sm:right-24 sm:mx-0"
      role="dialog"
      aria-live="polite"
      aria-labelledby="rsvp-nudge-title"
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#D5B892] bg-[#F5EBDD] text-[#B8862F]">
        <CalendarHeart aria-hidden="true" className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.7} />
      </span>
      <p className="mt-3 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#7A5A3A]">
        Gentle reminder
      </p>
      <h3 id="rsvp-nudge-title" className="mt-1 font-serif text-[1.28rem] font-bold leading-tight text-[#3B2A1A]">
        Kindly RSVP by {rsvp.deadline}
      </h3>
      <p className="mx-auto mt-2 max-w-xs text-[0.86rem] font-medium leading-6 text-[#7A5A3A]">
        Help us reserve your seat for the celebration.
      </p>
      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          className="invitation-button mt-0 px-4 py-2.5 text-[0.56rem]"
          type="button"
          onClick={goToRSVP}
        >
          RSVP Now
        </button>
        <button
          className="rounded-full border border-[#D5B892]/75 bg-transparent px-4 py-2.5 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#6E4C35] transition-colors hover:bg-[#F5EBDD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8862F]"
          type="button"
          onClick={dismiss}
        >
          Later
        </button>
      </div>
    </motion.aside>
  )
}
