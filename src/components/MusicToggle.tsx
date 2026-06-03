import { useEffect, useRef, useState } from 'react'
import { Music2, Pause, VolumeX } from 'lucide-react'
import { invitationData } from '../data/invitationData'

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isDetached, setIsDetached] = useState(false)
  const [isUnavailable, setIsUnavailable] = useState(false)

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.45
  }, [])

  useEffect(() => {
    const updatePosition = () => setIsDetached(window.scrollY > window.innerHeight * 0.48)
    updatePosition()
    window.addEventListener('scroll', updatePosition, { passive: true })
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  const toggleMusic = async () => {
    if (!audioRef.current || isUnavailable) return

    if (isPlaying) {
      audioRef.current.pause()
      return
    }

    try {
      await audioRef.current.play()
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={invitationData.music}
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsUnavailable(true)
          setIsPlaying(false)
        }}
      />
      <button
        className={`${isDetached ? 'fixed bottom-3 right-0 h-11 w-11 border-[3px] sm:bottom-5 sm:right-5 sm:h-16 sm:w-16 sm:border-[5px]' : 'absolute bottom-8 right-6 h-16 w-16 border-[5px]'} z-30 flex items-center justify-center rounded-full border-[#3B2A1A] bg-[repeating-radial-gradient(circle,#3B2A1A_0_3px,#57412e_4px_5px)] text-[#FDF8F0] shadow-[0_10px_26px_rgba(59,42,26,0.22)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8862F] disabled:cursor-not-allowed disabled:opacity-60`}
        type="button"
        onClick={toggleMusic}
        disabled={isUnavailable}
        aria-label={isUnavailable ? invitationData.musicFallbackLabel : isPlaying ? 'Pause background music' : 'Play background music'}
        aria-pressed={isPlaying}
        title={isUnavailable ? invitationData.musicFallbackLabel : isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying && (
          <span className="absolute inset-1 rounded-full border border-[#D5B892]/65 motion-safe:animate-spin" />
        )}
        <span className={`${isDetached ? 'h-5 w-5 sm:h-7 sm:w-7' : 'h-7 w-7'} absolute rounded-full border border-[#B8862F] bg-[#C08A5A]`} />
        <span className="relative z-10">
          {isUnavailable ? <VolumeX size={14} strokeWidth={1.7} /> : isPlaying ? <Pause size={13} strokeWidth={1.8} /> : <Music2 size={14} strokeWidth={1.7} />}
        </span>
      </button>
    </>
  )
}
