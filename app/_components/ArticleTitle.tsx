
export default function ArticleTitle({ text, className }: { text: string, className?: string }) {

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <h2 className="sm:title2 2xl:title1">{text}</h2>
      <div className="title-under bg-[var(--foreground)]"></div>
    </div>
  )
}
