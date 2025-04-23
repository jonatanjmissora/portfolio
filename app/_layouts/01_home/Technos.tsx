import { TECHNOS } from "@/app/_assets/TechSVG";
import "./styles.css"

export default function Technos() {

    const qnt = TECHNOS.length

    return (

        <article
            className="h-[50px] w-full relative mt-12 mx-auto slider-container"
            style={{ "--width": "100px", "--height": "50px", "--qnt": `${qnt}` } as React.CSSProperties}
        >
            <div className="slider h-full absolute left-[105%] flex items-center justify-center">
                {
                    TECHNOS.map((tech) =>
                        <div key={tech.name}
                            className="slider-item flex justify-center items-center w-[var(--width)] h-[var(--height)]"

                        >
                            {tech.svg}
                            <span className="text-xl font-bold tracking-wide">{tech.name}</span>
                        </div>
                    )
                }
            </div>

            <div className="slider h-full absolute left-[105%] flex items-center justify-center">
                {
                    TECHNOS.map((tech) =>
                        <div key={tech.name}
                            className="slider-item flex justify-center items-center w-[var(--width)] h-[var(--height)]"
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