"use client"

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

export const HackerText = ({ text, className }:{ text:string, className?: string }) => {

    const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      <span
        className={`hacker-text ${className}`}
        onMouseEnter={handleMouseOver}
        data-value={text}
      >
        {text}
      </span>
    )
  }