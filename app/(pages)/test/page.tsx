"use client"

import "./styles.css"

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Page() {

  const handleMouseOver = (e: React.MouseEvent<HTMLParagraphElement>) => {
    let iteration = 0;
    const interval = setInterval(() => {
      const target = e.target as HTMLParagraphElement;
      target.textContent = target.innerText
        .split("")
        .map((letter: string, index: number) => {
          if (index < iteration) {
            return target.dataset.value?.[index] ?? letter;
          }

          return LETTERS[Math.floor(Math.random() * 26)]
        })
        .join("");

      if (iteration >= (target.dataset.value || "").length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 40);

  }

  return (
    <div className="layout">
      <p
        onMouseOver={handleMouseOver}
        data-value="HYPERPLEXED"
        className="hacker-text"
      >
        HYPERPLEXED
      </p>
    </div>
  )
}
