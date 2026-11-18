import { Reveal } from "@/components/motion/reveal"
import type { PortfolioProject } from "@/lib/projects"

export function ProjectInfo({ project }: { project: PortfolioProject }) {
  const details = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Status", value: project.status },
  ]

  return (
    <Reveal className="grid items-start gap-10 py-10 md:grid-cols-2 md:gap-20 md:py-12">
      <dl className="grid grid-cols-[0.8fr_1.5fr_1fr] gap-5 text-base font-light md:max-w-[34rem] md:gap-10">
        {details.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-[0.8rem] tracking-[0.16em] uppercase">{label}</dt>
            <dd className="mt-3 leading-relaxed">{value}</dd>
          </div>
        ))}
      </dl>
      <div>
        <h2 className="sr-only">About the project</h2>
        <p className="text-base leading-[1.75] font-light tracking-[-0.02em] text-foreground/80 md:text-[1.05rem]">{project.description}</p>
        {project.vrSupport && <p className="mt-4 text-base leading-relaxed font-light text-foreground/65">Supported devices: {project.vrSupport}</p>}
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
          {project.links.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.1em] uppercase underline underline-offset-4 transition-colors hover:text-primary/60 focus-visible:outline-2 focus-visible:outline-offset-4">
              {link.label === "Visit website" ? "See project" : link.label}
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
