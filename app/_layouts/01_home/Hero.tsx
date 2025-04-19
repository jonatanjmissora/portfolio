import Image from "next/image"
import Technos from "./Technos"
import KatoDev from "../../_components/KatoDev"

export default function Hero() {
  return (
    <article id="about" className="layout m-0 min-h-screen">

      <div className="flex">
        <aside className="flex flex-col gap-2 w-[50%] border ml-0">
          <p className="text-5xl font-bold tracking-wider">Jonatan Missora</p>
          <div className="w-full flex justify-center gap-6 items-center">
            <KatoDev className="text-2xl" />
            <p className="text-2xl">+3 years</p>
          </div>
          <p className="text-2xl tracking-wider">Frontend Developer</p>
          <div className="text-xl mt-4">
            <p className="">From great ideas to full stack solutions.</p>
            <p className="text-sm">Lets work together!</p>
          </div>
          <div className="w-full text-xl mt-12">
            <button className="btn btn-primary px-12">Contact Me</button>
          </div>
        </aside>

        <picture className="h-[65dvh] w-[40dvw] relative">
          <Image src="/myphoto.webp" fill alt="avatar" className="object-contain brightness" />
        </picture>
      </div>

      <Technos />

    </article>
  )
}
