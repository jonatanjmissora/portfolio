import { TECHNOS } from "@/app/_assets/TechSVG";
import "./styles.css"

export default function Technos() {

    const qnt = TECHNOS.length

    return (
        // <article
        //     className="slider h-[50px] w-3/4 overflow-hidden relative mt-12 mx-auto"
        //     style={{ "--width": "100px", "--height": "50px", "--qnt": `${qnt}` } as React.CSSProperties}
        // >
        //     <div>
        //         {
        //             TECHNOS.map((tech, index) =>
        //                 <div key={tech.name}
        //                     className="item flex justify-center items-center w-[var(--width)] h-[var(--height)] absolute"
        //                     style={{ "--position": `${(index + 1).toString()}` } as React.CSSProperties}
        //                 >
        //                     {tech.svg}
        //                     <span className="text-xl font-bold tracking-wide">{tech.name}</span>
        //                 </div>
        //             )
        //         }
        //     </div>
        // </article>

        <article
            className="h-[50px] w-3/4 relative mt-12 mx-auto border"
            style={{ "--width": "100px", "--height": "50px", "--qnt": `${qnt}` } as React.CSSProperties}
        >
            <div className="slider h-full absolute left-full flex items-center justify-center">
                {
                    TECHNOS.map((tech) =>
                        <div key={tech.name}
                            className="flex justify-center items-center w-[var(--width)] h-[var(--height)]"

                        >
                            {tech.svg}
                            <span className="text-xl font-bold tracking-wide">{tech.name}</span>
                        </div>
                    )
                }
            </div>

            <div className="slider h-full absolute left-full flex items-center justify-center">
                {
                    TECHNOS.map((tech) =>
                        <div key={tech.name}
                            className="flex justify-center items-center w-[var(--width)] h-[var(--height)]"
                        >
                            {tech.svg}
                            <span className="text-xl font-bold tracking-wide">{tech.name}</span>
                        </div>
                    )
                }
            </div>
        </article>


        // <div className="slider h-12 absolute left-full flex items-center justify-center">
        // <div className="w-[200px] h-full border rounded-lg flex items-center justify-center bg-blue-500 mx-1">1</div>
        // {

        // }
        // </div>
    )
}