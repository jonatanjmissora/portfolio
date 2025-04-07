import React from 'react'
import LogoSVG from '../_assets/LogoSVG'

export default function KatoDev({className}: {className?: string}) {

    const spanClassName = className === "size-6" ? "text-xl" : "text-base"

  return (
    <div className='flex items-center'>
        <LogoSVG className={className} />
        <span className={`pb-1 text-[var(--foreground)] ${spanClassName}`}>atoDev</span>
    </div>
  )
}
