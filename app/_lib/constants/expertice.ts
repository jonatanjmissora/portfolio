import { TAGS } from "@/app/_assets/Tags"
import { TECHNOS } from "@/app/_assets/TechSVG"


const EXPERTICERAW = [
  {
    id: 1,
    date: "2020 - 2021",
    title: "Python",
    description: [
      "Excercises - Tkinter Calculator.",
      "Technologies: Python - Tkinter - SQLite."
    ],
    tags: [TECHNOS["python"].svg]
  },
  {
    id: 2,
    date: "2022",
    title: "Frontend",
    description: [
      "Payment dashboard platform - Frontend Mentor - Browser extensions.",
      "Technologies: HTML - CSS - JavaScript."
    ],
    tags: [TAGS["html5"].svg, TAGS["css"].svg, TAGS["javascript"].svg, TECHNOS["firebase"].svg]
  },
  {
    id: 3,
    date: "2023 1nd",
    title: "Frontend",
    description: [
      "Clients: Beauty and health center appointment app - Sport club payment shedule app.",
      "Technologies: Bootstrap - Css superprosessors."
    ],
    tags: [TAGS["bootstrap"].svg, TAGS["sass"].svg, TECHNOS["supabase"].svg]
  },
  {
    id: 4,
    date: "2023 2nd",
    title: "Frontend",
    description: [
      "Clients: Sport club players attendance app - Beauty care products shop ecommerce.",
      "Argentina programa 4.0 certification.",
      "Technologies: React - Tailwindcss - Figma."
    ],
    tags: [TAGS["react"].svg, TECHNOS["tailwind"].svg, TECHNOS["figma"].svg]
  },
  {
    id: 5,
    date: "2024 1st",
    title: "Frontend",
    description: [
      "Clients: Landing and photographer portfolio - Hall events Landing page.",
      "Technologies: Astro - Svelte - NextJs."
    ],
    tags: [TECHNOS["astro"].svg, TECHNOS["svelte"].svg, TECHNOS["nextjs"].svg]
  },
  {
    id: 6,
    date: "2024 2nd",
    title: "Frontend and Backend",
    description: [
      "Frontend Specialist certification from Digital House.",
      "Firebase and Supabase for all my apps. Authentication and storage.",
      "Technologies: TypeScript - NodeJs - Express - Hono."
    ],
    tags: [TECHNOS["tailwind"].svg, TECHNOS["nodejs"].svg, TAGS["express"].svg, TECHNOS["hono"].svg]
  },
  {
    id: 7,
    date: "2025",
    title: "Full Stack Developer",
    description: [
      "Full Stack Developer from Digital House (studying).",
      "Technologies: MongoDb - Neon - Appwrite - Prisma - Drizzle"
    ],
    tags: [TECHNOS["mongodb"].svg, TECHNOS["neon"].svg, TAGS["appwrite"].svg, TECHNOS["prisma"].svg, TECHNOS["drizzle"].svg]
  },
]

export const EXPERTICE = EXPERTICERAW.reverse()