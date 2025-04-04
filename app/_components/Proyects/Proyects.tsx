import Image from 'next/image'
import React from 'react'

export default function Proyects() {
  return (
    <article id="proyects" className='h-screen w-full overflow-hidden bg-[#070707]'>
      <div className="carousel w-full h-screen relative">
        <div className="list">

          <div className="proyect bg-red-200 absolute inset-0">
            <picture className='w-screen h-screen' >
              <Image src={'/preview-desktop.webp'} fill className='object-cover' alt={'proyect1'} />
            </picture>
            <div className="content absolute z-10 top-[20%] left-[20%] w-[10%] bg-yellow-800 p-8">
              <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sunt tempore, commodi expedita animi fugiat. Commodi, maxime quae. Itaque, ex!</p>
            </div>
          </div>

          <div className="proyect bg-green-200 absolute inset-0">
            <picture className='w-screen h-screen' >
              <Image src={'/template-preferences.webp'} fill className='object-cover' alt={'proyect1'} />
            </picture>
            <div className="content absolute z-10 top-[20%] left-[20%] w-[10%] bg-yellow-800 p-8">
              <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sunt tempore, commodi expedita animi fugiat. Commodi, maxime quae. Itaque, ex!</p>
            </div>
          </div>

          <div className="proyect bg-blue-200 absolute inset-0">
            <picture className='w-screen h-screen' >
              <Image src={'/preview-mobil.webp'} fill className='object-cover' alt={'proyect1'} />
            </picture>
            <div className="content absolute z-10 top-[20%] left-[20%] w-[10%] bg-yellow-800 p-8">
              <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sunt tempore, commodi expedita animi fugiat. Commodi, maxime quae. Itaque, ex!</p>
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}
