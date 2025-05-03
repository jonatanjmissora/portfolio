"use client"

import CalendarSVG from "@/app/_assets/CalendarSVG"
import { JSX, useEffect, useState } from "react"
import "./styles.css"
import { EXPERTICE } from "@/app/_lib/constants/expertice"

export default function Experience() {

    return (
        <div className="w-full gradient">
            <article id="expertice" className="layout px-[var(--layout-padding-y)]">
                <div className="flex flex-col gap-2 w-full mb-16">
                    <div className="flex items-center gap-12">
                        <h2 className="title1 w-max">Experience</h2>
                        <button className="btn btn-primary px-4">CV</button>
                    </div>
                    <div className="title-under bg-[var(--foreground)]"></div>
                </div>
                <div
                    className="flex flex-col w-full relative z-10 xp-cards-container"
                    style={{ "--xp-cards-qnt": `${EXPERTICE.length}` } as React.CSSProperties}
                >

                    <ExperticeCards />

                    <ScrollIndicator />

                </div>
            </article >
        </div >
    )
}

const observer = new IntersectionObserver((entries) => {
    const timeline = document.querySelector(".timeline")
    entries.forEach((entry) => {
        entry.target.classList.toggle("xp-card-active", entry.isIntersecting);
        if (entry.isIntersecting) {
            (timeline as HTMLElement)?.style.setProperty('--xp-card-actual', entry.target.id);
        }
    })
}, { rootMargin: "-50%" })

const ExperticeCards = () => {

    useEffect(() => {

        const cards = document.querySelectorAll(".xp-card-container")
        cards.forEach((card) => {
            observer.observe(card)
        })

        return () => observer.disconnect()

    }, [])


    return (
        <>
            {
                EXPERTICE.map((expertice) => (
                    <div key={expertice.id} id={expertice.id.toString()} className="w-full flex gap-4 xp-card-container">
                        <aside className="w-1/6">

                            <IconList icons={expertice.tags} cardId={expertice.id} />

                        </aside>

                        <div className="flex-1 flex flex-col gap-2 p-4 xp-card duration-500" id={expertice.id.toString()}>
                            <h3 className="title3">{expertice.title}</h3>
                            <div className="flex items-center gap-2 px-1">
                                <CalendarSVG className="size-4 text-gray-500" />
                                <h4 className="text-xs font-bold tracking-wider text-gray-500">{expertice.date}</h4>
                            </div>
                            <ul className="flex flex-col gap-2 pt-2">
                                {
                                    expertice.description.map((description) => (
                                        <li key={description} className="text list-disc list-inside px-4">{description}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

const IconList = ({ icons, cardId }: { icons: JSX.Element[], cardId: number }) => {
    return (
        <div className="xp-icons w-full h-full flex justify-center items-center">
            {
                icons.map((icon, index) =>
                    <i
                        key={index}
                        className="rounded-full overflow-hidden bg-[var(--inv-foreground)]"
                        data-active="false"
                        data-cardid={cardId}
                    >
                        {icon}
                    </i>)
            }
        </div>
    )
}


const ScrollIndicator = () => {

    const [isElemIntersecting, setIsElemIntersecting] = useState<boolean>(false)

    useEffect(() => {
        const observer2 = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setIsElemIntersecting(entry.isIntersecting)
        }, { rootMargin: "-50%" })
        const cardContainer = document.querySelector(".xp-cards-container")
        if (cardContainer) {
            observer2.observe(cardContainer)
        }

        return () => observer2.disconnect()
    }, [])

    return (

        <i className="absolute -z-1 top-0 left-0 bottom-0 w-1/6">
            <svg
                height="24"
                width="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className={`scroll-ind text-[var(--color-primary)] mx-auto ${isElemIntersecting ? "h-full" : "h-0"}`}
            >
                <path className="timeline" d="M11 0 L11 1500"
                // style={{ "--xp-card-actual": `-0.5` } as React.CSSProperties}
                />
            </svg>
        </i>

    )
}