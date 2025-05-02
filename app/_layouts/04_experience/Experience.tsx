"use client"

import CalendarSVG from "@/app/_assets/CalendarSVG"
import { JSX, useEffect, useState } from "react"
import "./styles.css"
import { EXPERTICE } from "@/app/_lib/constants/expertice"

export default function Experience() {

    const [actualCard, setActualCard] = useState<number>(8)

    return (
        <div className="w-full gradient">
            <article id="expertice" className="layout px-[var(--layout-padding-y)]">
                {actualCard}
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

                    <ExperticeCards actualCard={actualCard} setActualCard={setActualCard} />

                    <ScrollIndicator actualCard={actualCard} />

                </div>
            </article >
        </div >
    )
}

const ExperticeCards = ({actualCard, setActualCard}) => {

    useEffect(() => {

        const cards = document.querySelectorAll(".expertice-card-container")
        const icons = document.querySelectorAll(".tag-icon")
        const xpCardsContainer = document.querySelector(".xp-cards-container")

        const oberver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if(entry.isIntersecting) {
                    entry.target.children[1].classList.add("card-zoom")
                    icons.forEach(icon => {if((icon as HTMLElement).dataset.cardid === entry.target.children[1].id) icon.classList.add("active")});
                    (xpCardsContainer as HTMLElement)?.style.setProperty('--xp-card-actual', (EXPERTICE.length - parseInt(entry.target.children[1].id, 10)).toString());
                    console.log(entry.isIntersecting)
                }
                else {
                    entry.target.children[1].classList.remove("card-zoom")
                    icons.forEach(icon => {if((icon as HTMLElement).dataset.cardid === entry.target.children[1].id) icon.classList.remove("active")});
                    console.log(entry.isIntersecting)
                    // (xpCardsContainer as HTMLElement)?.style.setProperty('--xp-card-actual', "-0.5");
                }
                // if(entry.isIntersecting && actualCard !== entry.target.id) {
                //     console.log("intersecting ", entry.target.id)
                //     setActualCard(entry.target.id)
                // } 
                // icons.forEach(icon => {
                //     if ((icon as HTMLElement).dataset.cardid === entry.target.id) {
                //         (xpCardsContainer as HTMLElement)?.style.setProperty('--xp-card-actual', EXPERTICE.length - entry.target.id);
                //         (icon as HTMLElement).dataset.active = "true"
                //     }
                //     else {
                //         (icon as HTMLElement).dataset.active = "false"
                //     }
                // })
                // entry.target.classList.toggle("card-zoom", entry.isIntersecting)
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

const ScrollIndicator = ({actualCard}) => {
    return (
        <i className="absolute -z-2 top-0 left-0 bottom-0 w-1/6">
            <svg 
                width={24} 
                height={24} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={3} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="scroll-ind text-[var(--color-primary)] mx-auto"
                // style={{ "--xp-card-actual": `${EXPERTICE.length}` } as React.CSSProperties}
            >
                <line className="timeline" x1="12" y1="0" x2="12" y2="2000" />
            </svg>
        </i>
    )
}