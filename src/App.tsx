import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ClosingSection } from './components/ClosingSection'
import { EnvelopeIntro } from './components/EnvelopeIntro'
import { EventDetails } from './components/EventDetails'
import { FinerDetailsSection } from './components/FinerDetailsSection'
import { GallerySection } from './components/GallerySection'
import { GiftSection } from './components/GiftSection'
import { HeroSection } from './components/HeroSection'
import { InvitationMessage } from './components/InvitationMessage'
import { MusicToggle } from './components/MusicToggle'
import { SpiritualSection } from './components/SpiritualSection'
import { RSVPPromptSection } from './components/RSVPPromptSection'
import { RSVPSection } from './components/RSVPSection'
import { SaveTheDateSection } from './components/SaveTheDateSection'
import { TimelineSection } from './components/TimelineSection'
import { VenueSection } from './components/VenueSection'
import { invitationData } from './data/invitationData'

const ease = [0.22, 1, 0.36, 1] as const

function App() {
  const [isIntroVisible, setIsIntroVisible] = useState(true)
  const [isPageRevealed, setIsPageRevealed] = useState(false)
  const revealPage = useCallback(() => setIsPageRevealed(true), [])
  const dismissIntro = useCallback(() => setIsIntroVisible(false), [])

  useEffect(() => {
    document.title = `${invitationData.couple.displayNames} | Wedding Invitation`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', `Join ${invitationData.couple.displayNames} as they celebrate their wedding day.`)
  }, [])

  return (
    <>
      {/* Envelope intro overlay */}
      <AnimatePresence>
        {isIntroVisible && (
          <EnvelopeIntro
            onReveal={revealPage}
            onComplete={dismissIntro}
          />
        )}
      </AnimatePresence>

      {/* Persistent music toggle (stays after intro closes) */}
      {!isIntroVisible && (
        <div className="fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6">
          <MusicToggle />
        </div>
      )}

      {/* Main invitation content — slides upward seamlessly */}
      <motion.main
        className="invitation-canvas"
        initial={{ opacity: 0, y: 80 }}
        animate={isPageRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 1.4, ease }}
      >
        <SaveTheDateSection />
        <HeroSection />
        <SpiritualSection />
        <InvitationMessage />
        <RSVPPromptSection />
        <EventDetails />
        <VenueSection />
        <TimelineSection />
        <GallerySection />
        <FinerDetailsSection />
        <GiftSection />
        <RSVPSection />
        <ClosingSection />
      </motion.main>
    </>
  )
}

export default App
