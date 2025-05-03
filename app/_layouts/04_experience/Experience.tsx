"use client"

import CalendarSVG from "@/app/_assets/CalendarSVG"
import { JSX, useEffect } from "react"
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

const ExperticeCards = () => {

    useEffect(() => {

        const cards = document.querySelectorAll(".expertice-card-container")
        const icons = document.querySelectorAll(".tag-icon")
        const timeline = document.querySelector(".timeline")

        const oberver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const card = entry.target.children[1]
                card.classList.toggle("active", entry.isIntersecting)

                if (entry.isIntersecting) {
                    icons.forEach(icon => { icon.classList.toggle("active", (icon as HTMLElement).dataset.cardid === card.id) });
                    (timeline as HTMLElement)?.style.setProperty('--xp-card-actual', card.id);
                }
                else {
                    icons.forEach(icon => { if ((icon as HTMLElement).dataset.cardid === card.id) icon.classList.remove("active") });
                }

            })
        }, { rootMargin: "-50%" }
        )

        cards.forEach((card) => {
            oberver.observe(card)
        })
    }, [])


    return (
        <>
            {
                EXPERTICE.map((expertice) => (
                    <div key={expertice.id} className="w-full flex gap-4 expertice-card-container">
                        <aside className="w-1/6">
                            <div className="w-full h-full flex justify-center items-center">
                                <IconList icons={expertice.tags} cardId={expertice.id} />
                            </div>
                        </aside>

                        <div className="flex-1 flex flex-col gap-2 p-4 expertice-card duration-500" id={expertice.id.toString()}>
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
        <>
            {
                icons.map((icon, index) =>
                    <i
                        key={index}
                        className="tag-icon rounded-full overflow-hidden bg-[var(--inv-foreground)]"
                        data-active="false"
                        data-cardid={cardId}
                    >
                        {icon}
                    </i>)
            }
        </>
    )
}

const ScrollIndicator = () => {
    return (
        <i className="absolute -z-0 top-0 left-0 bottom-0 w-1/6">
            <svg
                height="24"
                width="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="scroll-ind text-[var(--color-primary)] mx-auto h-full"
            >
                <path className="timeline" d="M11 0 L11 1500" />
            </svg>
        </i>
    )
}