export default function AboutMe() {

    const ABOUTME = {
        "es": ["Soy un freelance de Argentina. Estudié en la universidad y tengo un negocio de ventas por mas de 20 años y contando. Los años me han dado una serie de habilidades blandas que me permiten encarar diferentes situaciónes de mi vida. Desde el compañerismo hasta el liderazgo. Desde el aporte de ideas hasta la implementación de las mismas.", 
        "Mi pasión por la programación fue desde el comienzo, y la vida me dió la posibilidad de reinventarme y dedicarme a lo que más me apasiona. Sigo aprendiendo en este mundo tan cambiante.Y espero aportar esa pasión y conocimientos a tus nuevos proyectos."],
        "en": ["I'm a freelancer from Argentina. I studied at university and have had a sales business for over 20 years and counting. Over the years, I've developed a series of soft skills that allow me to face any situation in my life. From camaraderie to leadership, from brainstorming to implementing them.",
        "My passion for programming was there from the very beginning, and life gave me the opportunity to reinvent myself and dedicate myself to what I love most. I continue to learn in this ever-changing world. And I hope to bring that passion and knowledge to your new projects."]
    }

    const lang = "en"

    return (
        <article className="layout">
            <h2 className="text-2xl font-bold">About Me</h2>
            {
                ABOUTME[lang].map((text, index) => (
                    <p key={index} className="text-sm">{text}</p>
                ))
            }

        </article>
    )
}