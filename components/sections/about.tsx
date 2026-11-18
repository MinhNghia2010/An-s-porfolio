import { Reveal } from "@/components/motion/reveal"
import { portfolio } from "@/lib/portfolio"

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mt-40 scroll-mt-32 px-6 pb-20 md:mt-56 md:px-10">
      <Reveal>
        <p className="border-b border-border pb-5 text-sm tracking-widest">(01)</p>
        <h2 id="about-title" className="mt-14 text-[clamp(3rem,6vw,7rem)] leading-none font-extrabold tracking-[-0.035em] uppercase">About</h2>
      </Reveal>
      <div className="mt-16 space-y-14 text-[clamp(1.5rem,2.4vw,2.75rem)] leading-[1.45] font-light tracking-[-0.035em] md:mt-20 md:space-y-20">
        {portfolio.about.map((paragraph, index) => (
          <Reveal key={paragraph} className={index === 1 ? "md:ml-[7%]" : ""}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
