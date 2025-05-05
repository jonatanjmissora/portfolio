"use client"

import ArticleTitle from "@/app/_components/ArticleTitle"
import { ABOUTME } from "@/app/_lib/constants/about"
import { useEffect } from "react"
import { useIntersectionObserver } from "@/app/_lib/customHooks/intersectionObserver"
import "./styles.css"

export default function AboutMe() {

    const lang = "en"

    useEffect(() => {

        const paragraphs = document.querySelectorAll(".about")
        let linesNumber = 0;
        paragraphs.forEach(paragraph => {

            const paragraphHeight = paragraph.getBoundingClientRect().height
            const paragraphWidth = paragraph.getBoundingClientRect().width
            const style = window.getComputedStyle(paragraph);
            const lineHeight = parseInt(style.getPropertyValue('line-height'), 10);
            const lines = Math.floor(paragraphHeight / lineHeight)

            for (let ind = 0; ind < lines; ind++) {
                const div = document.createElement("div")
                div.style.setProperty('--i', (ind + linesNumber).toString());
                div.style.height = lineHeight + "px"
                div.style.width = paragraphWidth + 60 + "px"
                div.style.position = "absolute"
                div.style.top = (lineHeight * ind) + "px"
                div.classList.add("about-reveal")

                paragraph.appendChild(div)
            }

            linesNumber += lines
        })

    })

    const [divRef] = useIntersectionObserver()

    return (
        <div className="w-full bg-[var(--layout-bg)]">
            <article ref={divRef} id="about" className="about-container layout items-start px-[var(--layout-padding-y)]">
                <ArticleTitle text="About me" className="mb-12" />

                <div className="tracking-widest">
                    {
                        ABOUTME[lang].map((text, index) => (
                            <p key={index} className="relative about my-4 title3 tracking-widest font-medium w-full px-4">{text}</p>
                        ))
                    }
                </div>

            </article>
        </div>
    )
}