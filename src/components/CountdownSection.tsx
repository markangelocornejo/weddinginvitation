import { useEffect, useState } from 'react'
import { invitationData } from '../data/invitationData'
import { ParchmentDivider } from './BohoDecorations'

const weddingTime = new Date(invitationData.weddingDate).getTime()

const calculateTimeLeft = () => {
  const rawDifference = weddingTime - Date.now()
  const difference = Math.max(0, rawDifference)

  return {
    hasArrived: rawDifference <= 0,
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

type CountdownSectionProps = {
  embedded?: boolean
}

export function CountdownSection({ embedded = false }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)
  const timeUnits = {
    days: timeLeft.days,
    hours: timeLeft.hours,
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
  }

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const content = (
    <div className={embedded ? 'relative mx-auto w-full max-w-md' : 'relative mx-auto max-w-xl'}>
      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">
        {timeLeft.hasArrived ? 'Thank you for celebrating with us' : 'Counting down to forever'}
      </p>
      <h2 className="mt-2 font-script text-[2.7rem] font-normal leading-none text-[#B8862F] sm:text-[3.2rem]">
        {timeLeft.hasArrived ? 'We Said I Do' : 'Until We Say I Do'}
      </h2>

      <ParchmentDivider className="mt-4" />
      <div className="mx-auto mt-5 grid grid-cols-4">
        {Object.entries(timeUnits).map(([label, value]) => (
          <div
            className="relative px-1 py-2 after:absolute after:right-0 after:top-1/2 after:h-10 after:w-px after:-translate-y-1/2 after:bg-[#D5B892]/55 last:after:hidden"
            key={label}
          >
            <strong className="block font-serif text-[2.35rem] font-medium leading-none tracking-[-0.08em] text-[#3B2A1A] sm:text-[3rem]">
              {String(value).padStart(2, '0')}
            </strong>
            <span className="mt-2 block text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[#7A5A3A]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  if (embedded) return content

  return <section className="relative px-4 py-12 text-center sm:px-6 sm:py-14">{content}</section>
}
