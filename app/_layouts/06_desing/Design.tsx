export default function Design() {
    const DESIGN = [
        {
            title: "Quality",
            description: "Delivery hight quality result while mantaining atention to every detail."
        },
        {
            title: "Communication",
            description: "Keepeng you updated at every step to ensure clarity and transparency."
        },
        {
            title: "Delivery",
            description: "Making sure every feature is completed on schedule."
        },

    ]


    return (
        <div className="w-full bg-[var(--layout-bg)]">
            <article className="layout flex-row justify-between gap-8">
                {
                    DESIGN.map((design) => (
                        <div key={design.title} className="flex flex-col gap-4 p-4 px-6 border rounded-lg">
                            <h2 className="title1">{design.title}</h2>
                            <p className="text-lg">{design.description}</p>
                        </div>
                    ))
                }
            </article >
        </div >
    )
}