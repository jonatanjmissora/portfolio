"use client"

import LinkedinSVG from "@/app/_assets/LinkedinSVG"
import MailSVG from "@/app/_assets/MailSVG"
import "./styles.css"
import ArticleTitle from "@/app/_components/ArticleTitle"
import { useIntersectionObserver } from "@/app/_lib/customHooks/intersectionObserver"
import { HackerText } from "@/app/_components/HackerText"

export default function Contact() {

    const [divRef] = useIntersectionObserver()

    return (
        <div className="w-full gradient">
            <article id="contact" className="layout px-[var(--layout-padding-y)]">
                <ArticleTitle text="Contact" className="mb-12" />
                <div className="flex w-full gap-16">

                    <div ref={divRef} className="contact-banner w-7/12 flex flex-col title-1 text-[10rem] font-bold">

                        <div className="contact-text w-full text-left">
                            <span style={{ "--i": `0` } as React.CSSProperties}>H</span>
                            <span style={{ "--i": `1` } as React.CSSProperties}>a</span>
                            <span style={{ "--i": `2` } as React.CSSProperties}>v</span>
                            <span style={{ "--i": `3` } as React.CSSProperties}>e</span>
                        </div>

                        <div className="contact-text w-full text-center p-0">
                            <span style={{ "--i": `0` } as React.CSSProperties}>a</span>
                            <span style={{ "--i": `1` } as React.CSSProperties}>n</span>
                        </div>

                        <div className="contact-text w-full text-right">
                            <span style={{ "--i": `0` } as React.CSSProperties}>i</span>
                            <span style={{ "--i": `1` } as React.CSSProperties}>d</span>
                            <span style={{ "--i": `2` } as React.CSSProperties}>e</span>
                            <span style={{ "--i": `3` } as React.CSSProperties}>a</span>
                            <span style={{ "--i": `4` } as React.CSSProperties}>?</span>
                        </div>

                    </div>

                    <div className="w-5/12 flex flex-col justify-center items-center">
                        <p className="title2">Talk about your proyect.</p>
                        <p className="title2">Let me know how can I serve you better.</p>
                        <Socials />
                    </div>
                </div>
            </article>
        </div>
    )
}

const Socials = () => {
    return (
        <div className="pt-12 flex flex-col items-center gap-4">
            <div className="flex gap-2 items-center group hover:scale-120 duration-200 cursor-pointer">
                <MailSVG className="size-9 text-[var(--color-primary)] group-hover:rotate-y-360 duration-500" />
                {/* <span className="font-bold tracking-widest text-lg text-gray-500 group-hover:text-[var(--color-primary-hover)]">jonatanjmissora@gmail.com</span> */}
                <HackerText text={"jonatanjmissora@gmail.com"} className="font-semibold text-gray-500 text-lg group-hover:text-[var(--color-primary-hover)]"/>
            </div>
            <div className="flex gap-2 items-center group hover:scale-120 duration-200 cursor-pointer">
                <LinkedinSVG className="size-10 text-[var(--color-primary)] group-hover:rotate-y-360 duration-500" />
                {/* <span className="font-bold tracking-widest text-lg text-gray-500 group-hover:text-[var(--color-primary-hover)]">Linkedin</span> */}
                <HackerText text={"Linkedin"} className="font-semibold text-gray-500 text-lg group-hover:text-[var(--color-primary-hover)]"/>
            </div>
        </div>
    )
}
