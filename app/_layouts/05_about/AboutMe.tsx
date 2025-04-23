import ArticleTitle from "@/app/_components/ArticleTitle"
import { ABOUTME } from "@/app/_lib/constants/about"

export default function AboutMe() {

    const lang = "en"

    return (
        <div className="w-full bg-[var(--layout-bg)]">
            <article id="about" className="layout items-start px-[var(--layout-padding-y)]">
                <ArticleTitle text="About me" className="mb-12" />
                {
                    ABOUTME[lang].map((text, index) => (
                        <p key={index} className="my-2 title3 font-medium w-full px-4">{text}</p>
                    ))
                }

            </article>
        </div>
    )
}