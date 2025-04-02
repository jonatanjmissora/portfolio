"use client"

import { useState } from "react"

import ThemeSwitcher from "./ThemeSwitcher"

import { usePathname } from "next/navigation"
import MenuSVG from "@/app/_assets/MenuSVG"
import { NavLinks } from "@/app/_lib/constants"
import PlusSvg from "@/app/_assets/PlusSvg"

export default function MobilMenu() {

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const pathname = usePathname()

  return (
    <>
      <div className="w-max sm:w-28 flex justify-end sm:hidden">
        <button className="p-2 sm:p-0" onClick={() => setShowMenu(prev => !prev)}>
          <MenuSVG className="size-11 sm:size-9 2xl:size-11 text-[var(--foreground)] hover:text-[var(--color-primary-hover)]" />
        </button>
      </div>
      {
        showMenu &&
        <>

          <DesktopMenu setShowMenu={setShowMenu} pathname={pathname} />

        </>
      }
    </>
  )
}

const DesktopMenu = ({setShowMenu, pathname }: { setShowMenu: (value: boolean) => void, pathname: string }) => {

  const pathnameArray = pathname.split("/")
  const currentPath = pathnameArray[pathnameArray.length - 1]
  console.log(pathnameArray)

  return (
    <div className="modal-menu-container fixed inset-0 z-10 bg-[var(--color-primary)] rounded-l-none sm:rounded-l-xl shadow-lg">
      <div className="w-full flex justify-between items-center p-4 px-10 sm:px-8 2xl:px-10 gap-6">
        <button onClick={() => setShowMenu(false)}>
          <PlusSvg className="size-11 sm:size-9 2xl:size-11 rotate-45 hover:text-[var(--color-primary-hover)]" />
        </button>
      </div>

      <nav className="flex flex-col gap-8 sm:gap-6 2xl:gap-8 text-center items-center p-10 sm:p-8 2xl:p-10 border-b border-[#ffffff10] py-20">
        {
          NavLinks.map(link =>
            <div key={link.text} className="w-full flex justify-end">
              <a className={`tracking-wider font-bold text-3xl py-2 sm:text-xl 2xl:text-2xl w-max pl-8 text-right hover:text-[var(--color-primary-hover)] ${currentPath === link.includes && "border-b border-[var(--white)]"}`} href={link.href}>{link.text}
              </a>
            </div>)
        }
      </nav>

      <div className="flex flex-col gap-8 sm:gap-6 2xl:gap-8 text-center items-end p-10 sm:p-8 2xl:p-10">
        <ThemeSwitcher setShowMenu={setShowMenu}/>
      </div>
    </div>
  )
}