type DecorationProps = {
  className?: string
}

type EventIllustrationProps = DecorationProps & {
  type: 'chapel' | 'reception'
}

export function FloralArtwork({ className = '' }: DecorationProps) {
  return (
    <img
      className={`pointer-events-none select-none object-contain ${className}`}
      src="/images/boho-floral-cluster.webp"
      alt=""
      aria-hidden="true"
    />
  )
}

export function FloralCluster({ className = '' }: DecorationProps) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 220 250"
      fill="none"
      aria-hidden="true"
    >
      <path d="M20 238C78 186 120 121 151 19" stroke="#B8862F" strokeWidth="1.3" opacity=".62" />
      <path d="M52 242C102 193 143 153 199 105" stroke="#C08A5A" strokeWidth="1.1" opacity=".5" />
      <path d="M69 214C55 178 45 145 43 108" stroke="#B8862F" strokeWidth="1" opacity=".45" />
      <g fill="#D5B892" opacity=".72">
        <ellipse cx="157" cy="29" rx="11" ry="29" transform="rotate(19 157 29)" />
        <ellipse cx="146" cy="59" rx="10" ry="26" transform="rotate(16 146 59)" />
        <ellipse cx="136" cy="88" rx="9" ry="24" transform="rotate(13 136 88)" />
        <ellipse cx="195" cy="107" rx="8" ry="22" transform="rotate(50 195 107)" />
        <ellipse cx="174" cy="126" rx="8" ry="20" transform="rotate(48 174 126)" />
      </g>
      <g stroke="#C08A5A" strokeWidth="1.1" opacity=".62">
        <path d="M42 116c31 12 52 37 65 76" />
        <path d="M62 131c-12 13-22 21-36 24" />
        <path d="M79 151c-12 14-23 22-37 25" />
        <path d="M94 176c-10 12-20 19-33 23" />
      </g>
      <g fill="#FDF8F0" stroke="#D5B892" strokeWidth="1.2">
        <circle cx="67" cy="199" r="25" />
        <circle cx="45" cy="202" r="15" />
        <circle cx="73" cy="178" r="16" />
        <circle cx="89" cy="202" r="15" />
        <circle cx="65" cy="202" r="11" fill="#F5EBDD" />
      </g>
      <g fill="#FDF8F0" stroke="#D5B892" strokeWidth="1">
        <circle cx="115" cy="173" r="17" />
        <circle cx="102" cy="176" r="10" />
        <circle cx="120" cy="159" r="10" />
        <circle cx="128" cy="176" r="9" />
        <circle cx="115" cy="173" r="7" fill="#F5EBDD" />
      </g>
    </svg>
  )
}

export function EventIllustration({ className = '', type }: EventIllustrationProps) {
  if (type === 'reception') {
    return (
      <svg className={`text-[#B8862F] ${className}`} viewBox="0 0 160 100" fill="none" aria-hidden="true">
        <path d="M24 77h112M35 77l9-34h72l9 34M48 43V29m64 14V29M80 43V20" stroke="currentColor" strokeWidth="1.4" />
        <path d="M68 77V51h24v26M45 54h70M57 54v23m46-23v23" stroke="#C08A5A" strokeWidth="1.1" />
        <path d="M72 20c0-8 16-8 16 0M41 29c0-7 14-7 14 0m50 0c0-7 14-7 14 0" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="80" cy="19" r="3" fill="#D5B892" />
        <circle cx="48" cy="28" r="3" fill="#D5B892" />
        <circle cx="112" cy="28" r="3" fill="#D5B892" />
      </svg>
    )
  }

  return (
    <svg className={`text-[#B8862F] ${className}`} viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <path d="M27 91h106M40 91V52h80v39M57 91V62h46v29M68 91V72h24v19" stroke="currentColor" strokeWidth="1.4" />
      <path d="M35 52h90L80 16 35 52ZM80 16V4m-7 6h14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M49 63h7v9h-7zm55 0h7v9h-7z" stroke="#C08A5A" strokeWidth="1" />
      <path d="M74 91V78c0-7 12-7 12 0v13" stroke="#C08A5A" strokeWidth="1.1" />
      <circle cx="80" cy="42" r="6" stroke="#D5B892" strokeWidth="1.2" />
    </svg>
  )
}

export function ParchmentDivider({ className = '' }: DecorationProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-[#B8862F]/55" />
      <span className="h-2 w-2 rotate-45 border border-[#B8862F]/75" />
      <span className="h-px w-12 bg-[#B8862F]/55" />
    </div>
  )
}
