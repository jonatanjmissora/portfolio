export default function Process() {

    const PROCESS = [
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

    ]

    return (
        <article className="layout flex-row gap-8">
            {
                PROCESS.map((process) => (
                    <div key={process.title} className="flex flex-col gap-4 p-4 px-6 border rounded-lg h-full">
                        <h2 className="text-2xl font-bold">{process.title}</h2>

                        <div className="flex flex-col gap-3">

                            {
                                process.description.map((description, index) => (
                                    <p key={index} className="text-sm">{description}</p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </article>
    )
}