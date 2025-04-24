"use client"

import { PROCESS } from "@/app/_lib/constants/process"
import "./styles.css"

export default function Process() {

    const lang = "en"

    const handleMouseEvent = (e: React.MouseEvent<HTMLDivElement>) => {

        const x = e.pageX - e.currentTarget.offsetLeft
        const y = e.pageY - e.currentTarget.offsetTop

        e.currentTarget.style.setProperty("--x", x + "px")
        e.currentTarget.style.setProperty("--y", y + "px")

    }

    return (
        <div className="w-full bg-[var(--layout-bg)]">
            <article className="layout flex-row justify-between h-full sm:gap-102xl:gap-20">
                {
                    PROCESS[lang].map((process) => (

                        <div
                            key={process.title}
                            className="card-glow flex-1 flex flex-col gap-4 p-4 px-[var(--layout-padding-y)] rounded-lg h-full group"
                            onMouseMoveCapture={handleMouseEvent}
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="title1">{process.title}</h2>
                                {process.svg}
                            </div>

                            <div className="flex flex-col gap-3">

                                {
                                    process.description.map((description, index) => (
                                        <p key={index} className="text-lg">{description}</p>
                                    ))
                                }
                            </div>
                        </div>

                    ))
                }
            </article>
        </div>
    )
}