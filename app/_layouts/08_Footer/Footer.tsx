"use client"

import GithubSVG from '@/app/_assets/GithubSVG'
import LinkedinSVG from '@/app/_assets/LinkedinSVG'
import ArticleTitle from '@/app/_components/ArticleTitle'
import KatoDev from '@/app/_components/KatoDev'
import { NAVLINKS } from '@/app/_lib/constants/navlinks'
import { useLenis } from 'lenis/react'
import { HackerText } from '@/app/_components/HackerText'

export default function Footer() {

  const lenis = useLenis()

  return (
    <div className="w-full bg-[var(--layout-bg)]">
      <article className='layout py-4 px-[var(--layout-padding-y)]'>
        <div className='flex w-full'>
          <div className='w-1/2 flex flex-col'>
            <ArticleTitle text="Roadmap" />
            <nav className='flex flex-col gap-2 title3 pl-4 py-6 pb-12'>
              {
                NAVLINKS.map(link =>
                  <button
                    key={link.text}
                    onClick={() => lenis?.scrollTo(link.href, { lerp: 0.001, duration: 0.5 })}
                    className='w-max'
                    >
                    <HackerText text={link.text} className="title3" />
                  </button>)
              }
            </nav>
          </div>
          <div className='w-1/2 flex items-center'>
            <KatoDev className='text-8xl font-bold pt-10' />
          </div>
        </div>
        <div className="flex flex-row justify-between pb-12 pt-4 border-t w-full">
          <p className='text-xs 2xl:text-base'>KatoDev © {new Date().getFullYear()} </p>
          <nav className="flex gap-4">

            <a>
              <LinkedinSVG className='text-[var(--color-primary)] hover:text-[var(--foreground)] hover:scale-110 cursor-pointer duration-200 size-6 sm:size-5 2xl:size-6' />
            </a>
            <a>
              <GithubSVG className='text-[var(--color-primary)] hover:text-[var(--foreground)] hover:scale-110 cursor-pointer duration-200 size-6 sm:size-5 2xl:size-6' />
            </a>

          </nav>
        </div>
      </article>
    </div>
  )
}
