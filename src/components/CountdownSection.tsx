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
      <p className={`${embedded ? 'text-[0.56rem]' : 'text-[0.64rem]'} font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]`}>
        {timeLeft.hasArrived ? 'Thank you for celebrating with us' : 'Counting down to forever'}
      </p>
      <h2 className={`${embedded ? 'mt-1.5 text-[2.25rem] sm:text-[2.65rem]' : 'mt-2 text-[2.7rem] sm:text-[3.2rem]'} font-script font-normal leading-none text-[#B8862F]`}>
        {timeLeft.hasArrived ? 'We Said I Do' : 'Until We Say I Do'}
      </h2>

      <ParchmentDivider className={embedded ? 'mt-3' : 'mt-4'} />
      <div className={`${embedded ? 'mt-3' : 'mt-5'} mx-auto grid grid-cols-4`}>
        {Object.entries(timeUnits).map(([label, value]) => (
          <div
            className={`${embedded ? 'py-1 after:h-8' : 'py-2 after:h-10'} relative px-1 after:absolute after:right-0 after:top-1/2 after:w-px after:-translate-y-1/2 after:bg-[#D5B892]/55 last:after:hidden`}
            key={label}
          >
            <strong className={`${embedded ? 'text-[1.85rem] sm:text-[2.35rem]' : 'text-[2.35rem] sm:text-[3rem]'} block font-serif font-medium leading-none tracking-[-0.08em] text-[#3B2A1A]`}>
              {String(value).padStart(2, '0')}
            </strong>
            <span className={`${embedded ? 'mt-1 text-[0.55rem]' : 'mt-2 text-[0.64rem]'} block font-semibold uppercase tracking-[0.08em] text-[#7A5A3A]`}>
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
