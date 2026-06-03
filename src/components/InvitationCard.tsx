import type { HTMLAttributes, PropsWithChildren } from 'react'

type InvitationCardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'arch' | 'plain'
  }
>

const variantStyles = {
  default: 'rounded-[1.4rem] border border-[#B8862F]/50 shadow-[0_18px_42px_rgba(122,90,58,0.12)]',
  arch: 'rounded-b-[1.4rem] rounded-t-[8rem] border border-[#B8862F]/55 shadow-[0_20px_46px_rgba(122,90,58,0.14)]',
  plain: 'border border-[#B8862F]/35 shadow-[0_12px_28px_rgba(122,90,58,0.08)]',
} satisfies Record<NonNullable<InvitationCardProps['variant']>, string>

export function InvitationCard({
  children,
  className = '',
  variant = 'default',
  ...props
}: InvitationCardProps) {
  return (
    <div
      className={`invitation-card-speckles relative mx-auto w-full max-w-xl overflow-hidden bg-[#FDF8F0] px-5 py-8 sm:px-8 sm:py-10 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-[0.42rem] border border-[#D5B892]/35" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
