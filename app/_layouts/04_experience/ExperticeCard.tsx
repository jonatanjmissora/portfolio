"use client"

import CalendarSVG from "@/app/_assets/CalendarSVG";
import { EXPERTICE } from "@/app/_lib/constants/expertice";
import { JSX, useEffect } from "react";

export default function ExperticeCards() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const timeline = document.querySelector(".timeline")
            entries.forEach((entry) => {
                entry.target.classList.toggle("xp-card-active", entry.isIntersecting);
                if (entry.isIntersecting) {
                    (timeline as HTMLElement)?.style.setProperty('--xp-card-actual', entry.target.id);
                }
            })
        }, { rootMargin: "-50%" })

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