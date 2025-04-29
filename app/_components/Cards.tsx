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

        const rect = e.currentTarget.getBoundingClientRect()
        const dx = e.clientX - rect.left - rect.width / 2
        const dy = e.clientY - rect.top - rect.height / 2
        const rotateX = (dx / rect.height) * -30
        const rotateY = (dy / rect.width) * -30
        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    }

    const handleMouseLeaveEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
    }

    return (
        <article className="layout px-[var(--layout-padding-y)] flex-row justify-between h-full sm:gap-10 2xl:gap-20">
            {
                array.map((element) => (

                    <div
                        key={element.title}
                        className="card-glow group"
                        onMouseMoveCapture={handleMouseMoveEvent}
                        onMouseLeave={handleMouseLeaveEvent}
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

