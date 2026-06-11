import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { invitationData } from '../data/invitationData'
import { InvitationCard } from './InvitationCard'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'

export function RSVPSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { rsvp } = invitationData

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage('')
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || '').trim(),
      attendance: String(formData.get('attendance') || ''),
      guests: String(formData.get('guests') || ''),
      message: String(formData.get('message') || '').trim(),
    }

    try {
      await fetch(rsvp.submissionEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      form.reset()
      setSubmitted(true)
    } catch {
      setErrorMessage('We could not send your RSVP. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
        <p className="mx-auto mt-5 inline-flex items-center justify-center rounded-full border border-[#D5B892]/70 bg-[#F5EBDD]/68 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#6E4C35]">
          Deadline: {rsvp.deadline}
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#817068] lg:text-base lg:leading-8">
          {rsvp.deadlineNote}
        </p>

        {submitted ? (
          <div
            className="mx-auto mt-9 flex max-w-md flex-col items-center border-y border-[#D5B892]/70 px-4 py-9 text-center lg:max-w-lg"
            role="status"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#879a7f]/70 bg-[#FDF8F0] text-[#879a7f] shadow-[0_7px_16px_rgba(122,90,58,0.1)]">
              <CheckCircle2 size={25} strokeWidth={1.45} />
            </span>
            <h3 className="mt-5 font-serif text-[1.95rem] font-medium leading-[1.05] text-[#3B2A1A] lg:text-[2.25rem]">
              Thank you for responding
            </h3>
            <p className="mx-auto mt-4 max-w-md font-serif text-[1rem] leading-7 text-[#7A5A3A] lg:text-[1.1rem] lg:leading-8">
              {rsvp.responseNote} We are grateful you took the time to reply.
            </p>
            <button
              className="mt-7 text-center text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#946c5d] underline decoration-[#caa596] decoration-1 underline-offset-4"
              type="button"
              onClick={() => setSubmitted(false)}
            >
              Send another response
            </button>
          </div>
        ) : (
          <form className="mx-auto mt-8 grid max-w-xl gap-5 text-center" onSubmit={submit}>
            <label className="grid gap-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#765c51]">
              Full name
              <input
                className="min-h-11 border-0 border-b border-[#D5B892] bg-transparent px-1 py-3.5 text-center text-sm font-normal normal-case tracking-normal text-[#3B2A1A] outline-none transition-colors placeholder:text-[#B9A68E] focus:border-[#B8862F]"
                required
                name="name"
                autoComplete="name"
                placeholder="Your full name"
              />
            </label>

            <label className="grid gap-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#765c51]">
              Attendance
              <select
                className="min-h-11 border-0 border-b border-[#D5B892] bg-transparent px-1 py-3.5 text-center text-sm font-normal normal-case tracking-normal text-[#3B2A1A] outline-none transition-colors focus:border-[#B8862F]"
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

            <label className="grid gap-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#765c51]">
              Number of guests
              <input
                className="min-h-11 border-0 border-b border-[#D5B892] bg-transparent px-1 py-3.5 text-center text-sm font-normal normal-case tracking-normal text-[#3B2A1A] outline-none transition-colors focus:border-[#B8862F]"
                required
                name="guests"
                type="number"
                min="1"
                max={rsvp.guestLimit}
                defaultValue="1"
              />
            </label>

            <label className="grid gap-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#765c51]">
              Message
              <textarea
                className="resize-y border border-[#D5B892] bg-transparent px-3 py-3 text-center text-sm font-normal normal-case tracking-normal text-[#3B2A1A] outline-none transition-colors placeholder:text-[#B9A68E] focus:border-[#B8862F]"
                name="message"
                rows={4}
                placeholder="Share a note with the couple"
              />
            </label>

            <button
              className="invitation-button mx-auto mt-2"
              disabled={isSubmitting}
              type="submit"
            >
              <Send size={15} strokeWidth={1.6} />
              {isSubmitting ? 'Sending...' : 'Send RSVP'}
            </button>
            {errorMessage && (
              <p className="mx-auto max-w-sm text-sm leading-6 text-[#9A4F3E]" role="alert">
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </InvitationCard>
    </section>
  )
}
