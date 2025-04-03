import Image from "next/image"
import Technos from "./Technos"

export default function About() {
  return (
    <article id="about" className="flex-1 flex flex-col justify-center items-center w-[95%] min-h-screen py-12">
 
      <div className="flex justify-center items-center">
        <aside className="w-max flex flex-col gap-2 items-center">
          <p className="text-5xl font-bold tracking-wider">Jonatan Missora</p>
          <p className="text-3xl tracking-wider">Frontend Developer</p>
          <p>+3 years</p>
          <div className="w-full flex justify-around mt-12">
              <button className="btn btn-primary text-xl px-12">Contact Me</button>
              <button className="btn btn-primary text-xl px-6">CV</button>
          </div>
        </aside>
   
        <picture className="h-[65dvh] w-[40dvw] relative">
          <Image src="/myphoto.webp" fill alt="avatar" className="object-contain"/>
        </picture>
      </div>

      <Technos />

    </article>
  )
}
