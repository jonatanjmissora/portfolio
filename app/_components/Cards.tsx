"use client"

import { JSX } from "react"

type ArrayTypes = {
    title: string;
    svg: JSX.Element;
    description: string[];
}[]


export const Cards = ({ array }: { array: ArrayTypes }) => {

    const handleMouseMoveEvent = (e: React.MouseEvent<HTMLDivElement>) => {

        const x = e.pageX - e.currentTarget.offsetLeft
        const y = e.pageY - e.currentTarget.offsetTop

        e.currentTarget.style.setProperty("--x", x + "px")
        e.currentTarget.style.setProperty("--y", y + "px")

    }

    return (
        <article className="layout px-[var(--layout-padding-y)] flex-row justify-between h-full sm:gap-10 2xl:gap-20">
            {
                array.map((element) => (

                    <div
                        key={element.title}
                        className="card-glow group"
                        onMouseMoveCapture={handleMouseMoveEvent}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="title2">{element.title}</h2>
                            {element.svg}
                        </div>

                        <div className="flex flex-col gap-3">

                            {
                                element.description.map((description, index) => (
                                    <p key={index} className="text-sm">{description}</p>
                                ))
                            }
                        </div>
                    </div>

                ))
            }
        </article>
    )
}

