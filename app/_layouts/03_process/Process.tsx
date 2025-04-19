export default function Process() {

    const PROCESS = {
        "es": [
            {
                title: "Diseño",
                description: [
                    "Traduciendo a diseño la idea de tu proyectio.",
                    "Trabajando juntos para aplicar la tecnología que mejor se adapte."
                ]
            },
            {
                title: "Código",
                description: [
                    "Aplicando los mejores recursos para programar de la forma más eficáz.",
                    "Cumpliendo los plazos establecidos con los resultados más pulidos."
                ]
            },
            {
                title: "Despliegue",
                description: [
                    "Subiendo tu proyecto a la plataforma más óptima.",
                    "Integrando nuevas implementaciones y requerimientos."
                ]
            },

        ],
        "en": [
            {
                title: "Design",
                description: [
                    "Translating your project idea into design.",
                    "Working together to implement the technology that best suits."
                ]
            },
            {
                title: "Code",
                description: [
                    "Applying the best resources to program in the most effective way.",
                    "Meeting established deadlines with the most polished results."
                ]
            },
            {
                title: "Deploy",
                description: [
                    "Uploading your project to the most optimal platform.",
                    "Integrating new implementations and requirements."
                ]
            },

        ],
    }

    const lang = "en"

    return (
        <div className="w-full bg-[var(--layout-bg)]">
            <article className="layout flex-row justify-between h-full gap-8">
                {
                    PROCESS[lang].map((process) => (
                        <div key={process.title} className="flex flex-col gap-4 p-4 px-[var(--layout-padding-y)] border rounded-lg h-full">
                            <h2 className="title1">{process.title}</h2>

                            <div className="flex flex-col gap-3">

                                {
                                    process.description.map((description, index) => (
                                        <p key={index} className="text-lg">{description}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </article>
        </div>
    )
}