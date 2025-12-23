import type { ReactNode } from 'react'

type TagProps = {
  children: ReactNode
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-black/70">
      {children}
    </span>
  )
}
