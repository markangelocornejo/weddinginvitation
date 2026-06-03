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
import { RSVPPromptSection } from './components/RSVPPromptSection'
import { RSVPSection } from './components/RSVPSection'
import { SaveTheDateSection } from './components/SaveTheDateSection'
import { TimelineSection } from './components/TimelineSection'
import { VenueSection } from './components/VenueSection'
import { invitationData } from './data/invitationData'

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
      <AnimatePresence>
        {isIntroVisible && (
          <EnvelopeIntro
            onReveal={revealPage}
            onComplete={dismissIntro}
          />
        )}
      </AnimatePresence>
      <motion.main
        className="invitation-canvas"
        initial={{ opacity: 0, y: 120 }}
        animate={isPageRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 120 }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <SaveTheDateSection /><HeroSection /><InvitationMessage /><RSVPPromptSection /><EventDetails />
        <VenueSection /><TimelineSection /><GallerySection /><FinerDetailsSection /><GiftSection /><RSVPSection /><ClosingSection />
      </motion.main>
    </>
  )
}

export default App
