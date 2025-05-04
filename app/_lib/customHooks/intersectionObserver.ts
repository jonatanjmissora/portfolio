import { useEffect, useRef } from "react"

export const useIntersectionObserver = () => {

    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if(entry.isIntersecting) divRef.current?.classList.add("visible")
            }, { rootMargin: "-40%" })

            if (divRef?.current) {
            observer.observe(divRef.current)
        }

        return () => observer.disconnect()
    }, [])
    

    return [divRef]
}