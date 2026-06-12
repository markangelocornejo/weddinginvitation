import { useCallback, useEffect, useRef, useState } from 'react'
import { Music2, Pause, VolumeX } from 'lucide-react'
import { invitationData } from '../data/invitationData'

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const toastTimerRef = useRef<number | null>(null)
  const trackIndexRef = useRef(0)
  const isSwitchingTrackRef = useRef(false)
  const failedTrackIndexesRef = useRef<Set<number>>(new Set())
  const [trackIndex, setTrackIndex] = useState(0)
  const [toastTrackIndex, setToastTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [failedTrackCount, setFailedTrackCount] = useState(0)
  const [isToastVisible, setIsToastVisible] = useState(false)
  const currentTrack = invitationData.musicPlaylist[trackIndex] ?? invitationData.musicPlaylist[0]
  const toastTrack = invitationData.musicPlaylist[toastTrackIndex] ?? currentTrack
  const isUnavailable = failedTrackCount >= invitationData.musicPlaylist.length

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.45
  }, [])

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)
    }
  }, [])

  const showNowPlaying = useCallback((visibleTrackIndex: number) => {
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)

    setToastTrackIndex(visibleTrackIndex)
    setIsToastVisible(true)
    toastTimerRef.current = window.setTimeout(() => {
      setIsToastVisible(false)
    }, 5000)
  }, [])

  const getPlayableTrackIndex = useCallback((requestedTrackIndex: number) => {
    const playlistLength = invitationData.musicPlaylist.length
    if (!playlistLength) return -1

    for (let offset = 0; offset < playlistLength; offset += 1) {
      const candidateIndex = ((requestedTrackIndex + offset) % playlistLength + playlistLength) % playlistLength
      if (!failedTrackIndexesRef.current.has(candidateIndex)) return candidateIndex
    }

    return -1
  }, [])

  const markTrackUnavailable = useCallback((failedTrackIndex: number) => {
    failedTrackIndexesRef.current.add(failedTrackIndex)
    const nextFailedTrackCount = failedTrackIndexesRef.current.size
    setFailedTrackCount(nextFailedTrackCount)
    return nextFailedTrackCount
  }, [])

  const playTrack = useCallback(async (requestedTrackIndex: number) => {
    if (!audioRef.current || isUnavailable) return

    const nextTrackIndex = getPlayableTrackIndex(requestedTrackIndex)
    if (nextTrackIndex < 0) {
      setFailedTrackCount(invitationData.musicPlaylist.length)
      setIsPlaying(false)
      return
    }

    const nextTrack = invitationData.musicPlaylist[nextTrackIndex] ?? invitationData.musicPlaylist[0]

    isSwitchingTrackRef.current = true
    trackIndexRef.current = nextTrackIndex
    setTrackIndex(nextTrackIndex)

    audioRef.current.src = nextTrack.src
    audioRef.current.currentTime = 0
    audioRef.current.load()

    try {
      await audioRef.current.play()
      showNowPlaying(nextTrackIndex)
    } catch {
      setIsPlaying(false)
    } finally {
      isSwitchingTrackRef.current = false
    }
  }, [getPlayableTrackIndex, isUnavailable, showNowPlaying])

  const playMusic = useCallback(async () => {
    if (!audioRef.current || isUnavailable) return

    if (failedTrackIndexesRef.current.has(trackIndexRef.current)) {
      const nextTrackIndex = getPlayableTrackIndex(trackIndexRef.current + 1)
      if (nextTrackIndex >= 0) {
        await playTrack(nextTrackIndex)
      }
      return
    }

    try {
      await audioRef.current.play()
      showNowPlaying(trackIndexRef.current)
    } catch {
      setIsPlaying(false)
    }
  }, [getPlayableTrackIndex, isUnavailable, playTrack, showNowPlaying])

  useEffect(() => {
    const playAfterInvitationOpen = () => {
      void playMusic()
    }

    window.addEventListener('wedding-invitation:opened', playAfterInvitationOpen)
    return () => window.removeEventListener('wedding-invitation:opened', playAfterInvitationOpen)
  }, [playMusic])

  const toggleMusic = async () => {
    if (!audioRef.current || isUnavailable) return

    if (isPlaying) {
      audioRef.current.pause()
      return
    }

    await playMusic()
  }

  const playNextTrack = useCallback(async () => {
    await playTrack(trackIndexRef.current + 1)
  }, [playTrack])

  return (
    <div className="relative flex flex-col items-end">
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          setIsPlaying(false)
          if (!isSwitchingTrackRef.current) setIsToastVisible(false)
        }}
        onEnded={() => {
          void playNextTrack()
        }}
        onError={() => {
          const nextFailedTrackCount = markTrackUnavailable(trackIndexRef.current)
          setIsPlaying(false)
          if (nextFailedTrackCount < invitationData.musicPlaylist.length) {
            void playNextTrack()
          }
        }}
      />
      {isToastVisible && !isUnavailable && (
        <div
          className="absolute bottom-full right-0 mb-2.5 w-[min(14.25rem,calc(100vw-2rem))] rounded-[0.8rem] border border-[#D5B892]/75 bg-[#FDF8F0]/96 px-3.5 py-2.5 text-center text-[#3B2A1A] shadow-[0_12px_28px_rgba(59,42,26,0.17)] backdrop-blur-sm"
          role="status"
        >
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#7A5A3A]">Now playing</p>
          <div className="mt-1.5 flex items-center justify-between gap-2.5">
            <div className="min-w-0 flex-1">
              <p className="break-words font-serif text-[0.9rem] font-bold leading-snug text-[#3B2A1A]">
                {toastTrack.title}
              </p>
              <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.12em] text-[#7A5A3A]">
                Song {toastTrackIndex + 1} of {invitationData.musicPlaylist.length}
              </p>
            </div>
            <button
              className="shrink-0 rounded-full border border-[#D5B892] bg-[#F5EBDD] px-2.5 py-1.5 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#6E4C35] transition-colors hover:bg-[#EADBC5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8862F]"
              type="button"
              onClick={() => {
                void playNextTrack()
              }}
            >
              Next song
            </button>
          </div>
        </div>
      )}
      <button
        className="relative z-30 flex h-14 w-14 items-center justify-center rounded-full border-[4px] border-[#3B2A1A] bg-[repeating-radial-gradient(circle,#3B2A1A_0_3px,#57412e_4px_5px)] text-[#FDF8F0] shadow-[0_10px_26px_rgba(59,42,26,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(59,42,26,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8862F] disabled:cursor-not-allowed disabled:opacity-60 sm:h-16 sm:w-16 sm:border-[5px]"
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
        <span className="absolute h-6 w-6 rounded-full border border-[#B8862F] bg-[#C08A5A] sm:h-7 sm:w-7" />
        <span className="relative z-10">
          {isUnavailable ? <VolumeX size={14} strokeWidth={1.7} /> : isPlaying ? <Pause size={13} strokeWidth={1.8} /> : <Music2 size={14} strokeWidth={1.7} />}
        </span>
      </button>
    </div>
  )
}
