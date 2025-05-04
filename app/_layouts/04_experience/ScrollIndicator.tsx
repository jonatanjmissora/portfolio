"use client"

import { useEffect, useState } from "react"

export default function ScrollIndicator() {
    const [isElemIntersecting, setIsElemIntersecting] = useState<boolean>(false)

    useEffect(() => {
        const observer2 = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setIsElemIntersecting(entry.isIntersecting)
        }, { rootMargin: "-50%" })
        const cardContainer = document.querySelector(".xp-cards-container")
        if (cardContainer) {
            observer2.observe(cardContainer)
        }

        return () => observer2.disconnect()
    }, [])

    return (

        <i className="absolute -z-1 top-0 left-0 bottom-0 w-1/6">
            <svg
                height="24"
                width="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className={`scroll-ind text-[var(--color-primary)] mx-auto ${isElemIntersecting ? "h-full" : "h-0"}`}
            >
                <path className="timeline" d="M11 0 L11 1500"
                // style={{ "--xp-card-actual": `-0.5` } as React.CSSProperties}
                />
            </svg>
        </i>

    )
}
