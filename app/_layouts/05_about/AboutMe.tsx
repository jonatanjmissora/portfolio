"use client"

import ArticleTitle from "@/app/_components/ArticleTitle"
import { ABOUTME } from "@/app/_lib/constants/about"
import "./styles.css"
import { useEffect } from "react"

export default function AboutMe() {

    const lang = "en"

    useEffect(() => {

        const paragraphs = document.querySelectorAll(".about")
        paragraphs.forEach(paragraph => {
            const paragraphHeight = paragraph.getBoundingClientRect().height
            const paragraphWidth = paragraph.getBoundingClientRect().width
            const style = window.getComputedStyle(paragraph);
            const lineHeight = parseInt(style.getPropertyValue('line-height'), 10);
            const lines = Math.floor(paragraphHeight / lineHeight)

            for( let ind = 0; ind < lines; ind++ ) {
                const div = document.createElement("div")
                div.style.setProperty('--i', ind.toString());
                div.style.height = lineHeight + "px"
                div.style.width = paragraphWidth + 50 + "px"
                div.style.position = "absolute"
                div.style.top = (lineHeight * ind) + "px"
                div.classList.add("about-reveal")

                paragraph.appendChild(div)
            }
        })
    })

    const handleClick = () => {
        console.log("lfkjhs")
        const aboutsReveal = document.querySelectorAll(".about-reveal")
        aboutsReveal.forEach(ar => ar.classList.add("active"))
    }

    return (
        <div className="w-full bg-[var(--layout-bg)]">
            <article id="about" className="layout items-start px-[var(--layout-padding-y)]">
                <ArticleTitle text="About me" className="mb-12" />
                {
                    ABOUTME[lang].map((text, index) => (
                        <p key={index} className="relative about my-2 title3 tracking-wider font-medium w-full px-4">{text}</p>
                    ))
                }

            </article>
            <button onClick={handleClick}>active</button>
        </div>
    )
}