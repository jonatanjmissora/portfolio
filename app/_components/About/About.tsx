import Image from "next/image"

export default function About() {
  return (
    <article className="flex-1 flex justify-center items-center mx-auto w-[95%] min-h-full border">
        <aside className="w-max flex flex-col gap-2 items-start">
        <p className="text-5xl font-bold tracking-wider">Jonatan Missora</p>
        <p className="text-3xl tracking-wider">Software Developer</p>
        <div className="w-full flex justify-between mt-12">
            <button className="btn btn-primary text-xl px-12">Contact Me</button>
            <button className="btn btn-primary text-xl px-6">CV</button>
        </div>
        </aside>
        <picture className="h-[70dvh] w-[40dvw] relative">
        <Image src="/myphoto.webp" fill alt="avatar" className="object-contain"/>
        </picture>
    </article>
  )
}
