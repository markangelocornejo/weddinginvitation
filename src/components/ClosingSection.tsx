import { invitationData } from '../data/invitationData'
import { FloralCluster, ParchmentDivider } from './BohoDecorations'

export function ClosingSection() {
  const { closing, couple } = invitationData

  return (
    <footer className="relative overflow-hidden px-5 py-24 text-center sm:px-7 sm:py-28">
      <FloralCluster className="absolute -bottom-12 -left-12 h-56 w-52 opacity-70" />
      <FloralCluster className="absolute -right-14 -top-8 h-52 w-48 rotate-180 opacity-55" />
      <div className="relative mx-auto max-w-md lg:max-w-2xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">
          See you there
        </p>
        <h2 className="mt-4 font-script text-[5.5rem] font-normal leading-none text-[#B8862F]">
          {couple.initials}
        </h2>
        <ParchmentDivider className="mt-5" />
        <p className="mx-auto mt-6 font-serif text-[1.55rem] leading-7 text-[#7A5A3A] lg:text-[1.9rem] lg:leading-9">
          {closing.message}
        </p>
        <strong className="mt-5 block font-serif text-lg font-medium italic text-[#C08A5A]">
          {closing.signature}
        </strong>
      </div>
    </footer>
  )
}
