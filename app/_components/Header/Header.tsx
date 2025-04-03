
import Link from 'next/link'
import HeaderLink from './HeaderLink'
import { NavLinks } from '@/app/_lib/constants'
import MobilMenu from './MobilMenu'
import DesktopThemeSwitcher from './DesktopThemeSwitcher'
import LogoSVG from '@/app/_assets/LogoSVG'

export default async function Header() {

  return (
    <header className="flex justify-between items-center px-6 sm:px-12 2xl:px-24 py-8 text-[var(--white)] fixed top-0 left-0 w-full z-10">

      <Link href={"/"} className="text-xl sm:text-xs 2xl:text-xl">
        <LogoSVG className='size-7 text-[var(--color-primary)]' />
      </Link>

      <nav className='sm:flex space-x-4 hidden'>
        {
          NavLinks.map((link, i) => (
            <HeaderLink key={i} href={link.href} text={link.text} />
          ))
        }
        <DesktopThemeSwitcher />
        <MobilMenu />
      </nav>

    </header>
  )
}
