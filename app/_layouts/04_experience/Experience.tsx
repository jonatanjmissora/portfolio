import CalendarSVG from "@/app/_assets/CalendarSVG"

export default function Experience() {

    const EXPERTICE = [
        {
            date: "2025",
            title: "Full Stack Developer",
            description: [
                "Full Stack Developer from Digital House (studying).",
                "Technologies: MongoDb - Neon - Appwrite - Prisma - Drizzle - Hono"
            ]
        },
        {
            date: "2024 2nd",
            title: "Frontend and Backend",
            description: [
                "Frontend Specialist certification from Digital House.",
                "Firebase and Supabase for all my apps. Authentication and storage.",
                "Technologies:TypeScript - NodeJs - Express."
            ]
        },
        {
            date: "2024 1st",
            title: "Frontend",
            description: [
                "Clients: Landing and photographer portfolio - Hall events Landing page.",
                "Technologies: Astro - Svelte - NextJs - Shadcn - Figma."
            ]
        },
        {
            date: "2023 2nd",
            title: "Frontend",
            description: [
                "Clients: Sport club players attendance app - Beauty care products shop ecommerce.",
                "Argentina programa 4.0 certification.",
                "Technologies: React - Tailwindcss."
            ]
        },
        {
            date: "2023 1nd",
            title: "Frontend",
            description: [
                "Clients: Beauty and health center appointment app - Sport club payment shedule app.",
                "Technologies: Bootstrap - Css superprosessors."
            ]
        },
        {
            date: "2022",
            title: "Frontend",
            description: [
                "Payment dashboard platform - Frontend Mentor - Browser extensions.",
                "Technologies: HTML - CSS - JavaScript."
            ]
        },
        {
            date: "2020 - 2021",
            title: "Python",
            description: [
                "Excercises - Tkinter Calculator.",
                "Technologies: Python - Tkinter - SQLite."
            ]
        },
    ]

    return (
        <div className="w-full gradient">
            <article id="expertice" className="layout px - [var(--layout - padding - y)]">
                < div className="flex gap-12 items-center border-b w-full" >
                    <h2 className="title1">Experience</h2>
                    <button className="btn btn-primary px-4">CV</button>
                </div >
                <div className="flex gap-4 w-full pt-4">
                    <aside className="w-1/6">
                        <h3 className="text-xl font-bold tracking-wider">Timeline</h3>
                    </aside>
                    <div className="w-5/6 flex flex-col gap-4 ">
                        {
                            EXPERTICE.map((experience) => (
                                <div key={experience.date} className="flex flex-col gap-2 border rounded-lg p-4">
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
                </div>
            </article >
        </div >
    )
}