"use client"

import { useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'

export default function HeaderLink({ href, text }: { href: string, text: string }) {

  const lenis = useLenis()

  return (
    <button onClick={() => lenis?.scrollTo(href, {lerp: 0.001, duration: 0.5})} className={`btn text-xl sm:text-xs 2xl:text-xl text-[var(--foreground)] hover:text-[var(--color-primary-hover)]"}`}>{text}</button>
  )
}
