import { TECHNOS } from "@/app/_assets/TechSVG";
import "./styles.css"

export default function Technos() {

    const qnt = TECHNOS.length

    return (
        <article
            className="slider h-[50px] w-3/4 overflow-hidden relative mt-12 mx-auto"
            style={{ "--width": "100px", "--height": "50px", "--qnt": `${qnt}` } as React.CSSProperties}
        >
            <div>
                {
                    TECHNOS.map((tech, index) =>
                        <div key={tech.name}
                            className="item flex justify-center items-center w-[var(--width)] h-[var(--height)] absolute"
                            style={{ "--position": `${(index + 1).toString()}` } as React.CSSProperties}
                        >
                            {tech.svg}
                            <span className="text-xl font-bold tracking-wide">{tech.name}</span>
                        </div>
                    )
                }
            </div>
        </article>
    )
}