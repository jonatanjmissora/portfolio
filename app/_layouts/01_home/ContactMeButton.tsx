"use client"

export default function ContactMeButton() {

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {

    const rect = e.currentTarget.getBoundingClientRect()
    console.log(window.scrollY)
    const x = e.pageX - rect.left - rect.width / 2
    const dx = x * 0.3
    const y = e.pageY - rect.top - rect.height / 2 - window.scrollY
    const dy = y * 0.5
    e.currentTarget.style.transform = `translateX(${dx}px) translateY(${dy}px)`

  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = `translateX(0px) translateY(0px)`
  }

  return (
    <a
      href={"/#contact"}
      className="btn btn-circle title2 px-12 mt-4 contact-btn"
      onMouseMoveCapture={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      Contact Me
    </a>
  )
}
