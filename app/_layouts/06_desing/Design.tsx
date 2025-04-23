"use client"

import { DESIGN } from "@/app/_lib/constants/design";

export default function Design() {

    const lang = "en"

    const handleMouseEvent = (e: React.MouseEvent<HTMLDivElement>) => {

        const x = e.pageX - e.currentTarget.offsetLeft
        const y = e.pageY - e.currentTarget.offsetTop

        e.currentTarget.style.setProperty("--x", x + "px")
        e.currentTarget.style.setProperty("--y", y + "px")
    }

    return (
        <div className="w-full bg-[var(--layout-bg)]">
            <article className="layout pt-0 flex-row justify-between h-full gap-20">
                {
                    DESIGN[lang].map((design) => (

                        <div
                            key={design.title}
                            className="card-glow flex-1 flex flex-col gap-4 p-4 px-[var(--layout-padding-y)] rounded-lg h-full group"
                            onMouseMoveCapture={handleMouseEvent}
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="sm:title2 2xl:title1">{design.title}</h2>
                                {design.svg}
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-lg">{design.description}</p>
                            </div>
                        </div>

                    ))
                }
            </article>
        </div>
    )
}