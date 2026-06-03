import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { invitationData } from '../data/invitationData'
import { InvitationCard } from './InvitationCard'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'

export function RSVPSection() {
  const [submitted, setSubmitted] = useState(false)
  const { rsvp } = invitationData

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden px-5 py-20 text-center sm:px-7 sm:py-24" id="rsvp">
      <FloralArtwork className="absolute -bottom-14 -left-16 h-60 w-48 opacity-48" />

      <InvitationCard variant="arch" className="relative max-w-lg px-6 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24 lg:max-w-2xl lg:px-16 lg:pb-14 lg:pt-28">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#a4796a]">
          Kindly reply
        </p>
        <h2 className="mt-3 font-script text-[5rem] font-normal leading-[0.8] text-[#B8862F]">RSVP</h2>
        <ParchmentDivider className="mt-6" />
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#817068] lg:text-base lg:leading-8">
          {rsvp.deadlineNote}
        </p>

        {submitted ? (
          <div
            className="mt-8 border-y border-[#D5B892]/70 px-5 py-8"
            role="status"
          >
            <CheckCircle2 className="mx-auto text-[#879a7f]" size={34} strokeWidth={1.45} />
            <h3 className="mt-4 text-[1.85rem] leading-none">Thank you for responding!</h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#817068]">
              {rsvp.responseNote} We are grateful you took the time to reply.
            </p>
            <button
              className="mt-5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#946c5d] underline decoration-[#caa596] underline-offset-4"
              type="button"
              onClick={() => setSubmitted(false)}
            >
              Send another response
            </button>
          </div>
        ) : (
          <form className="mx-auto mt-8 grid max-w-xl gap-5 text-left" onSubmit={submit}>
            <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#765c51]">
              Full name
              <input
                className="min-h-11 border-0 border-b border-[#D5B892] bg-transparent px-1 py-3.5 text-sm font-normal normal-case tracking-normal text-[#3B2A1A] outline-none transition-colors placeholder:text-[#B9A68E] focus:border-[#B8862F]"
                required
                name="name"
                autoComplete="name"
                placeholder="Your full name"
              />
            </label>

            <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#765c51]">
              Attendance
              <select
                className="min-h-11 border-0 border-b border-[#D5B892] bg-transparent px-1 py-3.5 text-sm font-normal normal-case tracking-normal text-[#3B2A1A] outline-none transition-colors focus:border-[#B8862F]"
                required
                name="attendance"
                defaultValue=""
              >
                <option value="" disabled>Select your response</option>
                <option value="attending">Attending</option>
                <option value="not-attending">Not attending</option>
                <option value="maybe">Maybe</option>
              </select>
            </label>

            <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#765c51]">
              Number of guests
              <input
                className="min-h-11 border-0 border-b border-[#D5B892] bg-transparent px-1 py-3.5 text-sm font-normal normal-case tracking-normal text-[#3B2A1A] outline-none transition-colors focus:border-[#B8862F]"
                required
                name="guests"
                type="number"
                min="1"
                max={rsvp.guestLimit}
                defaultValue="1"
              />
            </label>

            <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#765c51]">
              Message
              <textarea
                className="resize-y border border-[#D5B892] bg-transparent px-3 py-3 text-sm font-normal normal-case tracking-normal text-[#3B2A1A] outline-none transition-colors placeholder:text-[#B9A68E] focus:border-[#B8862F]"
                name="message"
                rows={4}
                placeholder="Share a note with the couple"
              />
            </label>

            <button
              className="invitation-button mt-2"
              type="submit"
            >
              <Send size={15} strokeWidth={1.6} />
              Send RSVP
            </button>
          </form>
        )}
      </InvitationCard>
    </section>
  )
}
