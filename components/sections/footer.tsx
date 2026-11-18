import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { portfolio } from "@/lib/portfolio"

export function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="relative flex min-h-svh scroll-mt-0 flex-col justify-between bg-[#0d0d0d] px-6 pt-36 pb-6 text-white md:px-10 md:pt-[24vh]">
      <div>
        <Reveal>
          <p className="max-w-3xl text-xs leading-relaxed tracking-[0.12em] text-white/65 uppercase">Have a project in mind, a collaboration to explore, or an opportunity to share? Let’s talk.</p>
          <a href={`mailto:${portfolio.email}`} className="group mt-8 inline-flex items-center gap-8 focus-visible:outline-2 focus-visible:outline-offset-8">
            <h2 id="contact-title" className="font-heading text-[clamp(6rem,16vw,20rem)] leading-[0.9] font-bold tracking-[0.005em] uppercase">Get in touch</h2>
            <ArrowUpRight aria-hidden="true" className="size-10 transition-transform duration-500 group-hover:-translate-y-3 group-hover:translate-x-3 motion-reduce:transform-none md:size-24" />
          </a>
        </Reveal>
        <div className="mt-16 flex flex-wrap items-start justify-between gap-8 border-t border-white/20 pt-8">
          <div>
            <a href={`mailto:${portfolio.email}`} className="text-[clamp(1.5rem,2.5vw,3rem)] font-light tracking-[-0.035em] hover:underline underline-offset-8">{portfolio.email}</a>
            <p className="mt-3 text-xs text-white/45 uppercase">Stand-in email</p>
          </div>
          <p className="text-lg font-light text-white/65 md:text-2xl">{portfolio.location}</p>
        </div>
      </div>
      <div className="mt-32 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-6 text-xs tracking-wide text-white/60 uppercase">
        <p>© {new Date().getFullYear()} {portfolio.name}</p>
        <a href="#top" className="hover:text-white">Back to top ↑</a>
        <p>Designed & developed with care</p>
      </div>
    </footer>
  )
}
