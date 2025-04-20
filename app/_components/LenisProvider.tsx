"use client"

import ReactLenis, { LenisRef } from "lenis/react"
import { useEffect, useRef } from "react"

export default function LenisProvider({
    children,
  }: {
    children: React.ReactNode
  }) {

    const lenisRef = useRef<LenisRef>(null)
  
    useEffect(() => {
      function update(time: number) {
        lenisRef.current?.lenis?.raf(time)
      }
    
      const rafId = requestAnimationFrame(update)
    
      return () => cancelAnimationFrame(rafId)
        
    }, [])

    return ( 
    <ReactLenis root options={{ lerp: 0.05, duration: 1, smoothWheel: true }} ref={lenisRef}>
      { children }
    </ReactLenis>
    )
}