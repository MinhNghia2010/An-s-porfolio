"use client"

import { usePathname } from "next/navigation"
import { TransitionLink } from "@/components/motion/page-transition"

const navigation = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="pointer-events-none fixed top-0 left-0 z-40 flex h-40 w-full items-start justify-between px-[2.4rem] pt-8 text-white mix-blend-difference">
      <TransitionLink
        href={pathname === "/" ? "#top" : "/"}
        aria-label="Le Van Thanh An — home"
        className="font-heading pointer-events-auto inline-flex flex-col text-[2.2rem] leading-[0.84] font-bold tracking-[0.035em] uppercase"
        data-intro-logo
      >
        <span>Le Van</span>
        <span className="mt-[0.6rem] ml-[1.05rem]">Thanh An</span>
      </TransitionLink>

      <nav
        aria-label="Primary navigation"
        className="pointer-events-auto flex items-center gap-[1.3rem] pt-[2.4rem] text-[0.95rem] font-[320]"
      >
        {navigation.map((item) => (
          <TransitionLink
            key={item.href}
            href={pathname === "/" ? item.href : `/${item.href}`}
            className="relative leading-none after:absolute after:inset-x-0 after:-bottom-[0.35rem] after:h-px after:origin-right after:scale-x-0 after:bg-current after:content-[''] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100"
            data-intro-nav
          >
            {item.label}
          </TransitionLink>
        ))}
      </nav>
    </header>
  )
}
