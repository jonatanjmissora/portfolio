import React from 'react'
import LinkedinSVG from '../_assets/LinkedinSVG'
import GithubSVG from '../_assets/GithubSVG'

export default function Footer() {
  return (
    <footer className="flex flex-row text-sm gap-4 justify-between items-center p-6 sm:px-12 2xl:px-6 fixed z-100 bottom-0 left-0 w-full">
      <p className='text-xs 2xl:text-base'>KatoDev © {new Date().getFullYear()} </p>
      <nav className="flex gap-4">

        <a>
          <LinkedinSVG className='hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' />
        </a>
        <a>
          <GithubSVG className='hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' />
        </a>

      </nav>
    </footer>
  )
}
