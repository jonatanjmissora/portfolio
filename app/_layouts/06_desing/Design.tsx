import { Cards } from "@/app/_components/Cards";
import { DESIGN } from "@/app/_lib/constants/design";

export default function Design() {

    const lang = "en"

    return (
        <div className="w-full bg-[var(--layout-bg)]">
            <Cards array={DESIGN[lang]} />
        </div>
    )
}