"use client"

import "./styles.css"
import { EXPERTICE } from "@/app/_lib/constants/expertice"
import ScrollIndicator from "./ScrollIndicator"
import ExperticeCards from "./ExperticeCard"

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

