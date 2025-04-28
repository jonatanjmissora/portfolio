"use client"

import CalendarSVG from "@/app/_assets/CalendarSVG"
import { useEffect } from "react"
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
                <div className="flex gap-4 w-full pt-4">
                    <aside className="w-1/6">
                        <div className="w-1/3 h-full mx-auto ">
                            <svg width={24} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)] mx-auto h-1/2">
                                <line className="timeline" x1="12" y1="0" x2="12" y2="200" />
                            </svg>
                        </div>
                    </aside>

                    <ExperticeCards />

                </div>
            </article >
        </div >
    )
}

const ExperticeCards = () => {

    useEffect(() => {

        const cards = document.querySelectorAll(".expertice-card")

        const oberver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("card-zoom", entry.isIntersecting)
            })
        }, { rootMargin: "-50%" }
        )

        cards.forEach((card) => {
            oberver.observe(card)
        })
    }, [])


    return (
        <div className="w-5/6 flex flex-col gap-4">
            {
                EXPERTICE.map((experience) => (
                    <div key={experience.date} className="flex flex-col gap-2 p-4 expertice-card duration-500">
                        <h3 className="title3">{experience.title}</h3>
                        <div className="flex items-center gap-2 px-1">
                            <CalendarSVG className="size-4 text-gray-500" />
                            <h4 className="text-xs font-bold tracking-wider text-gray-500">{experience.date}</h4>
                        </div>
                        <ul className="flex flex-col gap-2 pt-2">
                            {
                                experience.description.map((description) => (
                                    <li key={description} className="text list-disc list-inside px-4">{description}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}