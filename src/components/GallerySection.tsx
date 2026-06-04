import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { invitationData } from '../data/invitationData'
import { FloralArtwork, ParchmentDivider } from './BohoDecorations'

const photoStyles = [
  '-rotate-3 translate-y-2 sm:-rotate-6',
  'rotate-2 -translate-y-2 sm:rotate-3',
  'rotate-1 translate-y-4 sm:-translate-y-4',
  '-rotate-2 -translate-y-1 sm:rotate-2',
  'rotate-3 translate-y-3 sm:-rotate-2',
  '-rotate-1 sm:rotate-4',
]

export function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!selected) return

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }

    closeButtonRef.current?.focus()
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      previousFocus?.focus()
    }
  }, [selected])

  return (
    <section className="relative overflow-hidden px-4 py-24 text-center sm:px-7 sm:py-28">
      <FloralArtwork className="absolute -bottom-12 -left-16 h-60 w-48 opacity-38" />
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7A5A3A]">
          A glimpse of us
        </p>
        <h2 className="mt-3 font-script text-[4.8rem] font-normal leading-[0.86] text-[#B8862F] lg:text-[5.6rem]">
          Captured Moments
        </h2>
        <ParchmentDivider className="mt-6" />
        <p className="mx-auto mt-6 max-w-md font-serif text-[1.05rem] leading-7 text-[#7A5A3A] lg:max-w-2xl lg:text-[1.22rem] lg:leading-8">
          A few memories from our story, with many more still waiting to be made.
        </p>
      </motion.div>

      <motion.div
        className="relative mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-3 gap-y-7 px-2 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-9 lg:max-w-5xl lg:grid-cols-4 lg:gap-x-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
      >
        {invitationData.gallery.map((image, index) => (
          <motion.button
            className={`group relative bg-[#FDF8F0] p-2 pb-7 shadow-[0_12px_22px_rgba(122,90,58,0.16)] ${photoStyles[index % photoStyles.length]}`}
            type="button"
            onClick={() => setSelected(image)}
            key={image}
            aria-label={`Open gallery photo ${index + 1}`}
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ y: -5, rotate: 0 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute left-1/2 top-0 h-4 w-14 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] bg-[#D5B892]/45" />
            <img
              className="h-52 w-full object-cover grayscale-[10%] transition-transform duration-700 group-hover:scale-[1.03] sm:h-60 lg:h-72"
              src={image}
              alt={`${invitationData.couple.displayNames} gallery moment ${index + 1}`}
              loading="lazy"
            />
            <span className="absolute inset-x-0 bottom-2 font-script text-[1.45rem] text-[#C08A5A]">
              memory {index + 1}
            </span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#3B2A1A]/90 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            <button
              ref={closeButtonRef}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>
            <motion.img
              className="max-h-[84vh] max-w-full border-[8px] border-[#FDF8F0] object-contain shadow-[0_22px_60px_rgba(0,0,0,0.35)]"
              src={selected}
              alt="Selected gallery moment"
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
