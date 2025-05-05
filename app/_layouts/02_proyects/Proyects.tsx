"use client"

import Image from "next/image";
import { JSX, useState } from "react";
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
import PlusSvg from "@/app/_assets/PlusSvg";

type ProyectsType = {
  id: number;
  title: string;
  img: string;
  description: string[];
  tags: JSX.Element[];
  github: string;
  link: string;
}[]

export default function Home() {

  const lang = "en"
  const [actualProyectID, setActualProyectID] = useState<number>(1)
  const [oldProyectID, setOldProyectID] = useState<number>(PROYECTS[lang].length)

  return (
    <div className="w-full bg-[var(--layout-bg)]">
      <article id="proyects" className="layout justify-start items-start px-[var(--layout-padding-y)] min-h-[110dvh]">

        <ArticleTitle text="Proyects" />

        <div className="flex-1 w-full h-[95%] relative">

          {/* IMAGES */}
          <ProyectImage proyects={PROYECTS[lang]} actualProyectID={actualProyectID} oldProyectID={oldProyectID} />

          <div className="w-full sm:w-1/3 2xl:w-1/2 absolute bottom-0 left-0 flex flex-col gap-8">

            {/* CARD> */}
            <ProyectCard proyects={PROYECTS[lang]} actualProyectID={actualProyectID} />

            {/* THUMBNAIL */}
            <ProyectThumbnail proyects={PROYECTS[lang]} actualProyectID={actualProyectID} setActualProyectID={setActualProyectID} setOldProyectID={setOldProyectID} />
          </div>
        </div>

      </article>
    </div>
  );
}

const ProyectImage = ({ proyects, actualProyectID, oldProyectID }: { proyects: ProyectsType, actualProyectID: number, oldProyectID: number }) => {
  return (
    <>
      {
        proyects.map(proyect =>

          <div key={proyect.id} className={`proyect absolute bottom-0 left-0 w-full h-full ${proyect.id === actualProyectID && "actual"} ${proyect.id === oldProyectID && "old"}`}>
            <div className="proyect-img">
              <Image src={proyect.img} alt={proyect.title} fill className="object-contain" />
            </div>
          </div>
        )
      }
    </>
  )
}

const ProyectCard = ({ proyects, actualProyectID }: { proyects: ProyectsType, actualProyectID: number }) => {

  const handleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const buttonExpanded = e.currentTarget.getAttribute("aria-expanded") === "true" ? "false" : "true"
    e.currentTarget.setAttribute("aria-expanded", buttonExpanded)
  }

  return (
    <section>
      {
        proyects.map(proyect =>

          <div key={proyect.id} className={`card sm:w-[17rem] 2xl:w-[22rem] absolute bottom-full left-0 flex-1 p-6 sm:px-2 2xl:px-8 text-[var(--foreground)] ${actualProyectID === proyect.id && "actual"}`}>

            <div className="flex flex-col items-start justify-start">

              <KatoDev className="text-sm" />

              <div
                className="card-title text-3xl sm:text-2xl 2xl:text-3xl font-bold tracking-widest text-[var(--color-primary)] flex justify-between items-center w-full cursor-pointer"
                aria-expanded="false"
                onClick={handleExpand}
              >
                {proyect.title}
                <PlusSvg className="size-5 sm:size-4 2xl:size-5 transition-transform duration-100 hover:scale-120" />

              </div>

              <div className="card-content">
                <div className="overflow-hidden">
                  <div className="text-xs py-4 text-[var(--foreground)] flex flex-col gap-1">
                    {
                      proyect.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)

                    }

                  </div>

                  <div className="flex flex-col justify-end mr-4 items-end gap-1">
                    {
                      proyect.tags.map((tag, index) =>
                        <i key={index} className="size-4">{tag}</i>
                      )
                    }
                  </div>

                  <div className="flex gap-8 ml-auto mt-12">
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

const ProyectThumbnail = ({ proyects, actualProyectID, setActualProyectID, setOldProyectID }: { proyects: ProyectsType, actualProyectID: number, setActualProyectID: React.Dispatch<React.SetStateAction<number>>, setOldProyectID: React.Dispatch<React.SetStateAction<number>> }) => {

  const nextProyect = actualProyectID + 1 > proyects.length ? 1 : actualProyectID + 1
  const prevProyect = actualProyectID - 1 === 0 ? proyects.length : actualProyectID - 1

  const handleArrow = (direction: string) => {
    const index = direction === "next" ? nextProyect : prevProyect
    setActualProyectID(index)
    setOldProyectID(actualProyectID)
  }

  const handleSelect = (index: number) => {
    setOldProyectID(actualProyectID)
    setActualProyectID(index)
  }

  return (
    <>
      <div className={`flex-1 flex gap-x-4 items-center justify-evenly relative z-3`}>

        <button onClick={() => handleArrow("prev")} className="absolute -left-5 sm:-left-8 2xl:-left-5 top-[50%] -translate-y-1/2 z-3 cursor-pointer hover:scale-120 text-[var(--color-primary)] duration-300">
          <LeftChevronSvg className="size-11" />
        </button>

        {
          proyects.map(proyect =>

            <div
              key={proyect.id}
              onClick={() => handleSelect(proyect.id)}
              className={`cursor-pointer thumbnail h-full relative rounded-xl shadow-xl flex flex-col gap-2 ${proyect.id === actualProyectID && "active"}`}
            >
              <div className="w-[120px] sm:w-[90px] 2xl:w-[120px] h-[170px] sm:h-[160px] 2xl:h-[190px] relative rounded-xl">
                <Image src={proyect.img} alt={`thumbnail-${proyect.title}`} fill className="object-cover object-right-top" />
              </div>

            </div>
          )
        }

        <button onClick={() => handleArrow("next")} className="absolute -right-5 sm:-right-8 2xl:-right-5 top-[50%] -translate-y-1/2 z-3 cursor-pointer hover:scale-120 text-[var(--color-primary)] duration-300">
          <RightChevronSvg className="size-11 text-[var(--color-primary)]/75" />
        </button>

      </div>
    </>
  )
}