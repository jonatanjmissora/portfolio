const TECHNOS = [
    {name: "Nextjs", img: ""},
    {name: "Astro", img: ""},
    {name: "Sveltkit", img: ""},
    {name: "Python", img: ""},
    {name: "Neon", img: ""},
    {name: "MongoDB", img: ""},
    {name: "Supabase", img: ""},
    {name: "Firebase", img: ""},
    {name: "Drizzle", img: ""},
    {name: "Git", img: ""},
    {name: "Hono", img: ""},
    {name: "Kinde", img: ""},
]

export default function Technos() {
    return (
        <article className="flex gap-3">
            {
                TECHNOS.map(tech => 
                    <span key={tech.name}>{tech.name}</span>
                )
            }
        </article>
    )
}