"use client"
import Image from "next/image";
import { useState } from "react";
import KatoDev from "../../_components/KatoDev";
import GithubSVG from "@/app/_assets/GithubSVG";
import LinkSVG from "@/app/_assets/LinkSVG";
import RightChevronSvg from "@/app/_assets/RightChevronSVG";
import LeftChevronSvg from "@/app/_assets/LeftChevronSVG";
import ArrowSVG from "@/app/_assets/ArrowSVG";
import { TECHNOS } from "@/app/_assets/TechSVG";
import "./styles.css"
import { PROYECTS } from "@/app/_lib/constants/proyects";
import ArticleTitle from "@/app/_components/ArticleTitle";

export default function Home() {

  const [actualProyect, setActualProyect] = useState<number>(1)
  const [oldProyect, setOldProyect] = useState<number>(PROYECTS.length)

  return (
    <div className="w-full bg-[var(--layout-bg)]">
      <article id="proyects" className="layout justify-start items-start px-[var(--layout-padding-y)] min-h-[110dvh]">

        <ArticleTitle text="Proyects" />

        <div className="flex-1 w-full h-[95%] relative">

          {/* IMAGES */}
          <ProyectImage actualProyect={actualProyect} oldProyect={oldProyect} />

          <div className="w-full sm:w-1/3 2xl:w-1/2 absolute bottom-0 left-0 flex flex-col gap-8">

            {/* CARD> */}
            <ProyectCard actualProyect={actualProyect} />

            {/* THUMBNAIL */}
            <ProyectThumbnail actualProyect={actualProyect} setActualProyect={setActualProyect} setOldProyect={setOldProyect} />
          </div>
        </div>

      </article>
    </div>
  );
}

const ProyectImage = ({ actualProyect, oldProyect }: { actualProyect: number, oldProyect: number }) => {
  return (
    <>
      {
        PROYECTS.map(proyect =>

          <div key={proyect.id} className={`proyect absolute bottom-0 left-0 w-full h-full ${proyect.id === actualProyect && "actual"} ${proyect.id === oldProyect && "old"}`}>
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

  const handleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const buttonExpanded = e.currentTarget.getAttribute("aria-expanded") === "true" ? "false" : "true"
    e.currentTarget.setAttribute("aria-expanded", buttonExpanded)
  }

  return (
    <section>
      {
        PROYECTS.map(proyect =>

          <div key={proyect.id} className={`card sm:w-[17rem] 2xl:w-[22rem] absolute bottom-full left-0 flex-1 p-6 sm:px-2 2xl:px-8 text-[var(--foreground)] ${actualProyect === proyect.id && "actual"}`}>

            <div className="flex flex-col items-start justify-start">

              <KatoDev className="text-sm" />

              <div
                className="card-title text-3xl sm:text-2xl 2xl:text-3xl font-bold tracking-widest text-[var(--color-primary)] flex justify-between items-center w-full cursor-pointer"
                aria-expanded="false"
                onClick={handleExpand}
              >
                {proyect.title}
                <ArrowSVG className="size-7 sm:size-6 2xl:size-7 transition-transform duration-300" />
              </div>

              <div className="card-content">
                <div className="overflow-hidden">
                  <div className="text-xs py-4 text-[var(--foreground)] ">{proyect.description}</div>

                  <div className="flex flex-col justify-end items-end gap-1">
                    <div className="size-8">{TECHNOS[0].svg}</div>
                    <div className="size-8">{TECHNOS[1].svg}</div>
                    <div className="size-8">{TECHNOS[2].svg}</div>
                  </div>

                  <div className="flex gap-8 ml-auto">
                    {proyect.github && <a href={proyect.github}><GithubSVG className='text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' /></a>}
                    {proyect.link && <a href={proyect.link}><LinkSVG className='text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' /></a>}
                  </div>

                </div>
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
    </section>
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

        <button onClick={() => handleArrow("prev")} className="absolute -left-5 sm:-left-8 2xl:-left-5 top-[50%] -translate-y-1/2 z-3 cursor-pointer">
          <LeftChevronSvg className="size-11 text-[var(--color-primary)]/75" />
        </button>

        {
          PROYECTS.map(proyect =>

            <div
              key={proyect.id}
              onClick={() => handleSelect(proyect.id)}
              className={`thumbnail h-full relative rounded-xl shadow-xl flex flex-col gap-2 ${proyect.id === actualProyect && "active"}`}
            >
              <div className="w-[120px] sm:w-[90px] 2xl:w-[120px] h-[170px] sm:h-[160px] 2xl:h-[190px] relative rounded-xl">
                <Image src={proyect.img} alt={`thumbnail-${proyect.title}`} fill className="object-cover object-right-top" />
              </div>

            </div>
          )
        }

        <button onClick={() => handleArrow("next")} className="absolute -right-5 sm:-right-8 2xl:-right-5 top-[50%] -translate-y-1/2 z-3 cursor-pointer">
          <RightChevronSvg className="size-11 text-[var(--color-primary)]/75" />
        </button>

      </div>
    </>
  )
}