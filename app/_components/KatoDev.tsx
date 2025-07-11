import React from 'react'
import LogoSVG from '../_assets/LogoSVG'

const spanSizes: Record<string, string> = {
  "text-sm": "size-4",
  "text-base": "size-5",
  "text-lg": "size-6",
  "text-xl": "size-7",
  "text-2xl": "size-8",
  "text-3xl": "size-9",
  "text-8xl": "size-32"
}

export default function KatoDev({ className }: { className: string }) {

  return (
    <div className='flex justify-center items-center relative'>
      <LogoSVG className={spanSizes[className]} />
      <span className={`text-[var(--foreground)] ${className} absolute left-[90%]`}>atoDev</span>
    </div >
  )
}
