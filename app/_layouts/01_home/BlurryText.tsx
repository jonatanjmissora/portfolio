"use client"

import { useEffect } from "react"
import "./styles.css"

const TEXTS = [
  "frontend dev",
  "freelancer",
  "designer",
];

export default function BlurryText({ className }: {
  className: string
}) {

  useEffect(() => {

    const elts = {
      text1: document.getElementById("blurry-text1"),
      text2: document.getElementById("blurry-text2"),
      text3: document.getElementById("text3")
    };

    // Controls the speed of morphing.
    const morphTime = 1;
    const cooldownTime = 3;

    let textIndex = TEXTS.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    if (elts.text1) elts.text1.textContent = TEXTS[textIndex % TEXTS.length];
    if (elts.text2) elts.text2.textContent = TEXTS[(textIndex + 1) % TEXTS.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    // A lot of the magic happens here, this is what applies the blur filter to the text.
    function setMorph(fraction: number) {
      // fraction = Math.cos(fraction * Math.PI) / -2 + .5;
      if (elts.text3) {
        elts.text3.style.opacity = "0%";
      }

      if (elts.text1 && elts.text2 && elts.text3) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        elts.text1.textContent = TEXTS[textIndex % TEXTS.length];
        elts.text2.textContent = TEXTS[(textIndex + 1) % TEXTS.length];
        elts.text3.textContent = TEXTS[(textIndex + 1) % TEXTS.length];
      }
    }

    function doCooldown() {
      morph = 0;

      if (elts.text1 && elts.text2 && elts.text3) {

        elts.text2.style.filter = "";
        elts.text2.style.opacity = "0%";
        elts.text3.style.opacity = "100%";

        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
      }
    }

    // Animation loop, which is called every frame.
    function animate() {
      requestAnimationFrame(animate);

      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    // Start the animation.
    animate();
  }, [])

  return (
    <div className="">
      <span id="text3" className={className} >frontend dev</span>
      <div id="blurry-text-container" className="h-full top-0">
        <span id="blurry-text1" className={className}></span>
        <span id="blurry-text2" className={className}></span>
      </div>

      <svg id="filters" className="h-[0px]">
        <defs>
          <filter id="threshold">
            <feColorMatrix in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -110" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
