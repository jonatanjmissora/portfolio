import Image from "next/image"
import Technos from "./Technos"
import KatoDev from "../../_components/KatoDev"
import "./styles.css"

export default function Hero() {
  return (
    <div className="w-full gradient">
      <article id="home" className="layout px-[var(--layout-padding-y)] items-start m-0 min-h-screen mx-auto">
        <div className="flex justify-center items-center">
          <aside className="flex flex-col items-start justify-center gap-2 ml-0">
            <p className="text-5xl font-bold tracking-wider">Jonatan Missora</p>
            <div className="w-full flex justify-center gap-6 items-center">
              <KatoDev className="text-2xl" />
              <p className="text-2xl">+3 years</p>
            </div>
            <p className="text-2xl tracking-wider w-full text-center">Frontend Developer</p>
            <div className="text-xl mt-4">
              <p className="">From great ideas to full stack solutions.</p>
              <p className="">Lets work together!</p>
            </div>

            <button className="btn btn-primary px-12 mt-4">Contact Me</button>

          </aside>

          <picture className="h-[65dvh] w-[40dvw] relative">
            <Image src="/myphoto.webp" fill alt="avatar" className="object-contain brightness" />
          </picture>
        </div>

        <Technos />

      </article>
    </div>
  )
}
