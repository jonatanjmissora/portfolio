"use client"

import { useEffect } from "react";

export default function ScrollIIndicator() {

  useEffect(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
  
  }, [])

  return (
    <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)] mx-auto h-full">
      <line className="timeline" x1="12" y1="0" x2="12" y2="2000" />
    </svg>
  )
}
