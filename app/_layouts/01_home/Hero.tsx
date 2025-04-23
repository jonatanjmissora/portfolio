import Image from "next/image"
import Technos from "./Technos"
import "./styles.css"

export default function Hero() {
  return (
    <div className="w-full gradient">
      <article id="home" className="layout px-[var(--layout-padding-y)] items-start m-0 min-h-screen mx-auto">
        <div className="flex justify-end items-center w-full relative">
          <aside className="flex flex-col items-start justify-start gap-2 ml-0 absolute top-1/2 -translate-y-1/2 left-0">
            <div className="flex gap-2">
              <span className="my-name">Jonatan</span>
              <span className="my-name">Missora</span>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="text-4xl py-2">Frontend Developer</p>
              <p className="text-4xl">+3 years</p>
            </div>
            <div className="title3 mt-4">
              <p className="font-medium">From great ideas to full stack solutions.</p>
              <p className="mt-2 font-medium">Lets work together!</p>
            </div>

            <button className="btn btn-primary title2 px-12 mt-4">Contact Me</button>

          </aside>

          <picture className="h-[65dvh] w-[40dvw] relative mr-[5dvw]">
            <Image src="/myphoto.webp" fill alt="avatar" className="object-contain brightness" />
          </picture>
        </div>

        <Technos />

      </article>
    </div>
  )
}
