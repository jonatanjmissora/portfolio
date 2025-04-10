import Image from "next/image"
import Technos from "./Technos"
import KatoDev from "../../_components/KatoDev"

export default function Hero() {
  return (
    <article id="about" className="flex-1 flex flex-col justify-center items-center w-[95%] min-h-screen py-12">

      <div className="flex justify-center items-center">
        <aside className="w-max flex flex-col gap-2 items-center">
          <p className="text-5xl font-bold tracking-wider">Jonatan Missora</p>
          <div className="w-full flex justify-center gap-6 items-center">
            <KatoDev className="text-2xl" />
            <p className="text-2xl">+3 years</p>
          </div>
          <p className="text-2xl tracking-wider">Frontend Developer</p>
          <div className="text-xl mt-4">
            <p>Think. Design. Code. Deploy</p>
            <p>Lets work toguether!</p>
          </div>
          <div className="w-full text-xl flex justify-around mt-12">
            <button className="btn btn-primary px-12">Contact Me</button>
            <button className="btn btn-primary px-6">CV</button>
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
