"use client"
import Image from "next/image";
import { useState } from "react";
import KatoDev from "../../_components/KatoDev";
import GithubSVG from "@/app/_assets/GithubSVG";
import LinkSVG from "@/app/_assets/LinkSVG";
import RightChevronSvg from "@/app/_assets/RightChevronSVG";
import LeftChevronSvg from "@/app/_assets/LeftChevronSVG";
import PlusSvg from "@/app/_assets/PlusSvg";

const PROYECTS = [
  {
    id: 1,
    title: "Ragazzi Board",
    img: "/proyects/ragazzi.webp",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "sd",
    link: "sd"
  },
  {
    id: 2,
    title: "RMPhoto",
    img: "/proyects/rodrigo.webp",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "sd",
    link: "sd"
  },
  {
    id: 3,
    title: "Punto Alem",
    img: "/proyects/alem.webp",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "sd",
    link: "sd"
  },
  {
    id: 4,
    title: "DHM Wallet",
    img: "/proyects/dhm.webp",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "sd",
    link: "sd"
  },
]

export default function Home() {

  const [actualProyect, setActualProyect] = useState<number>(1)
  const [oldProyect, setOldProyect] = useState<number>(PROYECTS.length)

  return (
    <article className="carousel w-screen h-screen  relative overflow-hidden">

      {/* IMAGES */}
      <ProyectImage actualProyect={actualProyect} oldProyect={oldProyect} />

      <div className="w-1/3 absolute bottom-10 left-0 m-10 flex flex-col gap-8">

        {/* CARD> */}
        <ProyectCard actualProyect={actualProyect} />

        {/* THUMBNAIL */}
        <ProyectThumbnail actualProyect={actualProyect} setActualProyect={setActualProyect} setOldProyect={setOldProyect} />
      </div>

    </article>
  );
}

const ProyectImage = ({ actualProyect, oldProyect }: { actualProyect: number, oldProyect: number }) => {
  return (
    <>
      {
        PROYECTS.map(proyect =>

          <div key={proyect.id} className={`proyect w-screen h-screen absolute inset-0 ${proyect.id === actualProyect && "actual"} ${proyect.id === oldProyect && "old"}`}>
            <div className="proyect-img">
              <Image src={proyect.img} alt={proyect.title} fill className="object-contain" />
            </div>
          </div>
        )
      }
    </>
  )
}

const ProyectCard = ({ actualProyect }: { actualProyect: number }) => {
  return (
    <>
      {
        PROYECTS.map(proyect =>

          <div key={proyect.id} className={`card flex-1 p-6 px-8 text-[var(--foreground)] ${actualProyect === proyect.id && "actual"}`}>
            <div className="flex flex-col items-start justify-start">
              <KatoDev className="text-base" />
              <div className="text-3xl font-bold tracking-widest text-[var(--color-primary)] flex justify-between items-center w-[22rem]">
                {proyect.title}
                <PlusSvg className="size-7" />
              </div>
            </div>

            <div className="hidden">
              <div className="text-xs py-4 text-[var(--foreground)]">{proyect.description}</div>
              <div className="flex gap-8 ml-auto">
                {proyect.github && <a href={proyect.github}><GithubSVG className='text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' /></a>}
                {proyect.link && <a href={proyect.link}><LinkSVG className='text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' /></a>}
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

const ProyectThumbnail = ({ actualProyect, setActualProyect, setOldProyect }: { actualProyect: number, setActualProyect: React.Dispatch<React.SetStateAction<number>>, setOldProyect: React.Dispatch<React.SetStateAction<number>> }) => {

  const nextProyect = actualProyect + 1 > PROYECTS.length ? 1 : actualProyect + 1
  const prevProyect = actualProyect - 1 === 0 ? PROYECTS.length : actualProyect - 1

  const handleArrow = (direction: string) => {
    const index = direction === "next" ? nextProyect : prevProyect
    setActualProyect(index)
    setOldProyect(actualProyect)
  }

  const handleSelect = (index: number) => {
    setOldProyect(actualProyect)
    setActualProyect(index)
  }

  return (
    <>
      <div className={`flex-1 flex gap-x-4 items-center justify-evenly relative z-3`}>

        <button onClick={() => handleArrow("prev")} className="absolute -left-5 top-[50%] -translate-y-1/2 z-3 cursor-pointer">
          <LeftChevronSvg className="size-11 text-[var(--color-primary)]/75" />
        </button>

        {
          PROYECTS.map(proyect =>

            <div
              key={proyect.id}
              onClick={() => handleSelect(proyect.id)}
              className={`thumbnail relative rounded-xl shadow-xl flex flex-col gap-2 ${proyect.id === actualProyect && "active"}`}
            >
              <div className="w-[120px] h-[170px] relative rounded-xl">
                <Image src={proyect.img} alt={`thumbnail-${proyect.title}`} fill className="object-cover object-right-top" />
              </div>

            </div>
          )
        }

        <button onClick={() => handleArrow("next")} className="absolute -right-5 top-[50%] -translate-y-1/2 z-3 cursor-pointer">
          <RightChevronSvg className="size-11 text-[var(--color-primary)]/75" />
        </button>

      </div>
    </>
  )
}