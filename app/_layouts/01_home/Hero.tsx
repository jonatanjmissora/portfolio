import Technos from "./Technos"
import "./styles.css"
import BlurryText from "./BlurryText"

export default function Hero() {
  return (
    <div className="w-full gradient">
      <article id="home" className="layout px-[var(--layout-padding-y)] items-start m-0 min-h-screen mx-auto">
        <div className="flex justify-end items-center w-full relative">

          <aside className="flex flex-col items-start justify-start gap-2 ml-0 absolute top-1/2 -translate-y-1/2 left-0">
            <div className="flex gap-2">
              <span className="my-name 2xl:text-[5rem] sm:text-[4rem]">Jonatan</span>
              <span className="my-name 2xl:text-[5rem] sm:text-[4rem]">Missora</span>
            </div>
            <div className="w-full flex gap-8 items-center h-[3rem] relative">
              <BlurryText className={"sm:text-4xl 2xl:text-4xl"} />
              <p className="sm:text-4xl 2xltext-4xl">+3 years</p>
            </div>
            <div className="title3 mt-4">
              <p className="font-medium">From great ideas to full stack solutions.</p>
              <p className="mt-2 font-medium">Lets work together!</p>
            </div>

            <a href={"/#contact"} className="btn btn-primary title2 px-12 mt-4">Contact Me</a>

          </aside>

          <div className="h-[64dvh] w-[40dvw] relative sm:mr-0 ">
            <div className="myphoto brightness"></div>
            <div id="poly1"></div>
            <div id="poly1bis"></div>
            <div id="poly2"></div>
            <div id="poly2bis"></div>
          </div>
        </div>

        <Technos />

      </article>
    </div>
  )
}
