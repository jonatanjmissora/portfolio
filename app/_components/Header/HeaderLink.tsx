"use client"

import { useLenis } from 'lenis/react'

export default function HeaderLink({ href, text }: { href: string, text: string }) {

  const lenis = useLenis()

  return (
    <button onClick={() => lenis?.scrollTo(href, { lerp: 0.001, duration: 0.5 })} className={`btn font-normal text-base sm:text-xs 2xl:text-base text-[var(--foreground)] hover:text-[var(--color-primary-hover)]"}`}>{text}</button>
  )
}
