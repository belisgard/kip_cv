import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type CommonProps = {
  children: ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
    href?: undefined
  }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  const { variant = 'outline', className, children, as, ...rest } = props as any
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200'
  const variantClasses =
    variant === 'solid'
      ? 'bg-ink text-white border border-ink hover:bg-white hover:text-ink'
      : 'border border-ink text-ink hover:bg-ink hover:text-white'
  const classes = [baseClasses, variantClasses, className].filter(Boolean).join(' ')

  if (as === 'a') {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a
        href={href}
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
