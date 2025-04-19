"use client"

import HeaderLink from './HeaderLink'
import { NAVLINKS } from '@/app/_lib/constants/navlinks'
import MobilMenu from './MobilMenu'
import DesktopThemeSwitcher from './DesktopThemeSwitcher'
import LogoSVG from '@/app/_assets/LogoSVG'
import { useEffect, useState } from 'react'

export default function Header() {

  const [scrolled, setScrolled] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {

    if (window.scrollY) setScrolled(true)

    const handleScrolled = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
        setShow(false)
      }
      else setScrolled(false)
    }

    window.addEventListener("scroll", handleScrolled)
    return () => window.removeEventListener("scroll", handleScrolled)

  }, [])

  const handleShow = () => {
    setShow(prev => !prev)
  }

  return (
    <header className={`header w-3/4 px-[var(--layout-padding-y)] flex justify-between items-center py-4 mx-auto text-[var(--white)] fixed top-0  z-10 ${scrolled ? show ? "left-1/2 -translate-x-1/2 bg-[var(--inv-foreground)]/80 backdrop-blur-sm" : "left-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"} duration-500`}>

      <button onClick={handleShow}>
        <LogoSVG className='size-7 text-[var(--color-primary)]' />
      </button>

      <nav className='sm:flex gap-4 hidden'>
        {
          NAVLINKS.map((link, i) => (
            <HeaderLink key={i} href={link.href} text={link.text} />
          ))
        }
        <DesktopThemeSwitcher />
        <MobilMenu />
      </nav>

    </header>
  )
}
