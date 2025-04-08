// "use client"
// import Image from "next/image"
// import { useEffect } from "react";
// import KatoDev from "../KatoDev";
// import GithubSVG from "@/app/_assets/GithubSVG";
// import LinkSVG from "@/app/_assets/LinkSVG";
// import { PROYECTS } from "@/app/_lib/constants/proyects";

// export default function Proyects() {

//   useEffect(() => {
//     let nextDom = window.document.getElementById('next');
//     let prevDom = document.getElementById('prev');

//     let carouselDom = document.querySelector('.carousel');
//     let SliderDom = carouselDom?.querySelector('.carousel .list');
//     let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
//     let thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll('.proyect') ?? [];

//     thumbnailBorderDom?.appendChild(thumbnailItemsDom[0]);


//     function showSlider(type){
//         let  SliderItemsDom = SliderDom?.querySelectorAll('.carousel .list .proyect') ?? [];
//         let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .proyect');

//         if(type === 'next'){
//             SliderDom?.appendChild(SliderItemsDom[0]);
//             thumbnailBorderDom?.appendChild(thumbnailItemsDom[0]);
//             carouselDom?.classList.add('next');
//         }else{
//             SliderDom?.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//             thumbnailBorderDom?.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//             carouselDom?.classList.add('prev');
//         }

//     }
//   }, []) 



//   return (
//     <article id="proyects" className="w-screen h-screen relative ">

//         <div className="list">

//           {
//             PROYECTS.map(proyect => 

//               <div className="w-full h-full obsolute inset-0" key={proyect.title}>

//                 <div className="h-screen w-screen">
//                   <Image src={proyect.img} fill alt={proyect.title} className="object-cover"/>
//                 </div>

//                 <div className="text-shadow absolute left-10 top-10 w-1/3 p-4 px-8 bg-[var(--inv-foreground)]/75 rounded-lg flex flex-col gap-4 shadow-xl ">
//                   <div className="flex flex-col">
//                     <div className="text-3xl font-bold tracking-widest text-[var(--color-primary)]">{proyect.title}</div>
//                     <KatoDev className="size-4"/>
//                   </div>
//                   <div className="text-sm">{proyect.desciption}</div>
//                   <div className="flex gap-8 ml-auto">
//                       {proyect.github && <a href={proyect.github}><GithubSVG className='hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6'/></a>}
//                       {proyect.link && <a href={proyect.link}><LinkSVG className='hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6'/></a>}
//                   </div>
//                 </div>
//             </div>
//             )
//           }
//         </div> 

//         <div className="absolute bottom-15 left-10 z-50 flex gap-x-5">

//           {
//             PROYECTS.map(proyect => 
//               <div className="w-[120px] h-[170px]" key={proyect.title}>
//                 <div className="h-full w-full relative rounded-xl overflow-hidden">
//                   <Image src={proyect.img} fill alt={proyect.title} className="object-cover"/>
//                 </div>
//                 <div className="text-[var(--inv-foreground)] text-center font-bold  text-xs tracking-wider mt-2">
//                   {proyect.title}
//                 </div>
//               </div>
//             )
//           }
//         </div>


//         <div className="absolute bottom-60 left-10 flex gap-x-4">
//             <button className="bg-[var(--inv-foreground)]/50 py-1 px-2 rounded-full text-xl font-bold" id="prev">{"<"}</button>
//             <button className="bg-[var(--inv-foreground)]/50 p-1 px-2 rounded-full text-xl font-bold" id="next">{">"}</button>
//         </div>

//     </article>
//   )
// }


"use client"
import Image from "next/image";
import { useState } from "react";
import KatoDev from "../KatoDev";
import GithubSVG from "@/app/_assets/GithubSVG";
import LinkSVG from "@/app/_assets/LinkSVG";

const PROYECTS = [
  {
    id: 1,
    title: "PROYECT 1",
    img: "/proyects/img5.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "sd",
    link: "sd"
  },
  {
    id: 2,
    title: "PROYECT 2",
    img: "/proyects/img2.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "sd",
    link: "sd"
  },
  {
    id: 3,
    title: "PROYECT 3",
    img: "/proyects/img3.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "sd",
    link: "sd"
  },
  {
    id: 4,
    title: "PROYECT 4",
    img: "/proyects/img4.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "sd",
    link: "sd"
  },
]

export default function Home() {

  const [actualProyect, setActualProyect] = useState<number>(1)
  const [oldProyect, setOldProyect] = useState<number>(PROYECTS.length)

  const nextProyect = actualProyect + 1 > PROYECTS.length ? 1 : actualProyect + 1
  const prevProyect = actualProyect - 1 === 0 ? PROYECTS.length : actualProyect - 1

  const handleArrow = (direction: string) => {
    const index = direction === "next" ? nextProyect : prevProyect
    setActualProyect(index)
    setOldProyect(actualProyect)
  }

  return (
    <article className="carousel w-screen h-screen bg-violet-900 relative overflow-hidden">

      {/* IMAGES */}
      {
        PROYECTS.map(proyect =>

          <div key={proyect.id} className={`proyect w-screen h-screen absolute inset-0 ${proyect.id === actualProyect && "actual"} ${proyect.id === oldProyect && "old"}`}>
            <div className="proyect-img">
              <Image src={proyect.img} alt={proyect.title} fill className="object-cover" />
            </div>
          </div>
        )
      }

      <div className="w-1/3 absolute bottom-0 left-0 m-10 flex flex-col gap-8">

        {/* CARD> */}
        {
          PROYECTS.map(proyect =>

            <div key={proyect.id} className={`card flex-1 p-6 px-8 rounded-xl shadow-xl bg-[var(--inv-foreground)]/75 text-black ${actualProyect === proyect.id && "actual"}`}>
              <div className="flex flex-col">
                <KatoDev className="size-4" />
                <div className="text-3xl font-bold tracking-widest text-[var(--color-primary)]">{proyect.title}</div>
              </div>
              <div className="text-xs py-4 text-[var(--foreground)]">{proyect.description}</div>
              <div className="flex gap-8 ml-auto">
                {proyect.github && <a href={proyect.github}><GithubSVG className='text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' /></a>}
                {proyect.link && <a href={proyect.link}><LinkSVG className='text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] size-6 sm:size-5 2xl:size-6' /></a>}
              </div>
            </div>
          )
        }

        {/* THUMBNAIL */}
        <div className={`flex-1 flex gap-x-4 items-center justify-evenly relative z-3 py-7`}>

          <button onClick={() => handleArrow("prev")} className="bg-[var(--inv-foreground)]/75 text-[var(--foreground)] font-bold text-xl p-2 px-3 rounded-full absolute -left-[5%] top-[50%] -translate-y-1/2 z-3">{"<"}</button>

          {
            PROYECTS.map(proyect =>

              <div key={proyect.id} className={`flex-1 thumbnail flex flex-col gap-2 ${proyect.id === actualProyect && "active"}`}>
                <div className="w-[100%] h-[200px] relative rounded-xl shadow-xl overflow-hidden">
                  <Image src={proyect.img} alt={`thumbnail-${proyect.title}`} fill className="object-cover" />
                </div>
                <div className="text-center absolute bottom-0 left-0 right-0">
                  {proyect.title}
                </div>
              </div>
            )
          }

          <button onClick={() => handleArrow("next")} className="bg-[var(--inv-foreground)]/75 text-[var(--foreground)] font-bold text-xl p-2 px-3 rounded-full absolute -right-[5%] top-[50%] -translate-y-1/2 z-3">{">"}</button>

        </div>
      </div>

    </article>
  );
}