type QuoteProps = {
  text: string
  author: string
  role: string
}

export function Quote({ text, author, role }: QuoteProps) {
  return (
    <figure className="border-l-2 border-black pl-6">
      <blockquote className="text-lg leading-relaxed text-black/80 sm:text-xl">{text}</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-black">
        {author}
        <span className="ml-2 font-normal text-black/60">— {role}</span>
      </figcaption>
    </figure>
  )
}
