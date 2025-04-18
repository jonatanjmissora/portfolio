import LinkedinSVG from "@/app/_assets/LinkedinSVG"
import MailSVG from "@/app/_assets/MailSVG"

export default function Contact() {
    return (
        <div className="w-full gradient">
            <article id="home" className="layout px-[var(--layout-padding-y)]">
                <h2 className="title1 border-b w-full">Contact</h2>
                <div className="flex w-full gap-48 py-12">

                    <div className="w-7/12 flex flex-col title-1 text-9xl font-bold">
                        <p className="w-full text-left">Have an</p>
                        <p className="w-full text-right"> idea ?</p>
                    </div>

                    <div className="w-5/12 flex flex-col justify-center">
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
        <div className="pt-12 flex flex-col gap-4">
            <div className="flex gap-2 items-center group">
                <LinkedinSVG className="size-12 group-hover:text-[var(--color-primary-hover)]" />
                <span className="font-bold tracking-widest text-lg text-gray-500 group-hover:text-[var(--color-primary-hover)]">Linkedin</span>
            </div>
            <div className="flex gap-2 items-center group">
                <MailSVG className="size-12 group-hover:text-[var(--color-primary-hover)]" />
                <span className="font-bold tracking-widest text-lg text-gray-500 group-hover:text-[var(--color-primary-hover)]">jonatanjmissora@gmail.com</span>
            </div>
        </div>
    )
}