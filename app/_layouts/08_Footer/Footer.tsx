import GithubSVG from '@/app/_assets/GithubSVG'
import LinkedinSVG from '@/app/_assets/LinkedinSVG'
import KatoDev from '@/app/_components/KatoDev'
import { NAVLINKS } from '@/app/_lib/constants/navlinks'
import React from 'react'

export default function Footer() {
  return (
    <div className="w-full bg-[var(--layout-bg)]">
      <article className='layout py-4 px-[var(--layout-padding-y)] pb-0'>
        <div className='flex w-full'>
          <div className='w-1/2 flex flex-col'>
            <h3 className='title2 border-b w-full'>Roadmap</h3>
            <nav className='flex flex-col gap-2 title3 pl-4 py-6 pb-12'>
              {
                NAVLINKS.map(link => <a key={link.text} href={link.href} className='hover:text-[var(--color-primary-hover)]'>{link.text}</a>)
              }
            </nav>
          </div>
          <div className='w-1/2 flex justify-center items-center'>
            <KatoDev className='text-8xl font-bold tracking-widest pt-10' />
          </div>
        </div>
        <div className="flex flex-row justify-between pb-12 pt-4 border-t w-full">
          <p className='text-xs 2xl:text-base'>KatoDev © {new Date().getFullYear()} </p>
          <nav className="flex gap-4">

            <a>
              <LinkedinSVG className='hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' />
            </a>
            <a>
              <GithubSVG className='hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' />
            </a>

          </nav>
        </div>
      </article>
    </div>
  )
}
