import { TECHNOS } from "@/app/_assets/TechSVG";
import "./styles.css"
import { JSX } from "react";

const ThecnosKeys = Object.keys(TECHNOS)

export default function Technos() {

    return (

        <article
            className="h-[50px] w-full relative mt-12 mx-auto slider-container"
            style={{ "--width": "100px", "--height": "50px", "--qnt": `${ThecnosKeys.length}` } as React.CSSProperties}
        >
            <TechnosList technosObj={TECHNOS} />

            <TechnosList technosObj={TECHNOS} />
        </article>

    )
}

type TechTypes = {
    [key: string]: {
        id: number;
        name: string;
        svg: JSX.Element;
    };
}

const TechnosList = ({ technosObj }: { technosObj: TechTypes }) => {

    return (
        <div className="slider h-full absolute left-[105%] flex items-center justify-center">
            {
                ThecnosKeys.map((tech) =>
                    <div key={technosObj[tech].name}
                        className="slider-item flex justify-center items-center w-[var(--width)] h-[var(--height)]"

                    >
                        {technosObj[tech].svg}
                        <span className="text-xl font-bold tracking-wide">{technosObj[tech].name}</span>
                    </div>
                )
            }
        </div>
    )

}