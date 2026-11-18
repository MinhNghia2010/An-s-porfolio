"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { usePageReady } from "@/components/motion/page-transition"

export function ProjectTitle({ title }: { title: string }) {
  const pageReady = usePageReady()
  const root = useRef<HTMLHeadingElement>(null)
  useLayoutEffect(() => {
    if (!pageReady) return
    const media = gsap.matchMedia()
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(root.current!.querySelectorAll("[data-letter]"), {
        yPercent: 110, rotate: 3, duration: 1.05, stagger: 0.018,
        delay: 0.5,
        ease: "power4.out",
      })
    }, root)
    return () => media.revert()
  }, [title, pageReady])

  return (
    <h1 ref={root} aria-label={title} className="font-heading text-[clamp(5rem,13vw,15rem)] leading-[0.9] font-bold tracking-[0.005em] uppercase">
      <span aria-hidden="true" className="flex flex-wrap gap-x-[0.18em]">
        {title.split(" ").map((word, index) => <span key={index} className="inline-flex overflow-hidden pb-[0.08em]">{Array.from(word).map((letter, i) => <span key={i} data-letter className="inline-block">{letter}</span>)}</span>)}
      </span>
    </h1>
  )
}
