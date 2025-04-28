import { PROCESS } from "@/app/_lib/constants/process"
import { Cards } from "@/app/_components/Cards"

export default function Process() {

    const lang = "en"

    return (
        <div className="w-full bg-[var(--layout-bg)]">
            <Cards array={PROCESS[lang]} />
        </div>
    )
}

