type ProjectData = {
  id: number
  title: { en: string; vi: string }
  description: { en: string; vi: string }
  image_url: string
  year?: string
  role?: string
  status?: string
  tech?: string[]
  vr_support_type?: string
  website_url?: string
  github_url?: string
  unity_play_url?: string
}

// Replace these local placeholder images when your project screenshots are ready.
const projectData: ProjectData[] = [
  {
    id: 1,
    year: "To be updated",
    role: "To be updated",
    status: "To be updated",
    title: { en: "Personal Blog", vi: "Blog Cá Nhân" },
    description: {
      en: "Personal website where I share my thoughts and stories.",
      vi: "Trang web cá nhân nơi tôi chia sẻ suy nghĩ và câu chuyện của bản thân.",
    },
    image_url: "/images/projects/archive.jpg",
    website_url: "https://cachiuusaa.substack.com/profile/notes?r=4ru4xg&utm_campaign=profile&utm_medium=profile-page",
  },
  {
    id: 2,
    year: "To be updated",
    role: "To be updated",
    status: "To be updated",
    title: { en: "Multiplayer Framework for VR", vi: "Khung Đa người chơi cho VR" },
    description: {
      en: "Framework that allows easy creation of VR multiplayer games, optimized for physics interactions and low latency.",
      vi: "Framework cho phép tạo game VR multiplayer dễ dàng, tối ưu hóa cho tương tác vật lý và độ trễ thấp.",
    },
    image_url: "/images/projects/studio.jpg",
    tech: ["Unity", "C#", "Netcode for GameObjects", "XR Interaction Toolkit"],
    vr_support_type: "Meta Quest 2, 3",
    github_url: "https://github.com/ThanhAn-Hust/MultiplayerFramework4VR.git",
  },
  {
    id: 3,
    year: "To be updated",
    role: "To be updated",
    status: "To be updated",
    title: { en: "SelfMOOC", vi: "SelfMOOC" },
    description: {
      en: "MOOC system that helps students learn online.",
      vi: "Hệ thống MOOC giúp học sinh học tập trực tuyến",
    },
    image_url: "/images/projects/archive.jpg",
    tech: ["Next.js", "TypeScript", "MongoDB", "PostgreSQL"],
    github_url: "https://github.com/ThanhAn-Hust/SelfMOOC.git",
    website_url: "https://selfmooc-deploy-iota.vercel.app/classes",
  },
  {
    id: 4,
    year: "To be updated",
    role: "To be updated",
    status: "To be updated",
    title: { en: "Fox Adventure Game", vi: "Game Fox Adventure" },
    description: { en: "Fun Fox Adventure game.", vi: "Game Fox Adventure vui vẻ" },
    image_url: "/images/projects/studio.jpg",
    tech: ["Unity", "C#"],
    unity_play_url: "https://play.unity.com/en/games/df747bac-a611-4ce6-9266-6603ed1d8702/fox-adventure",
    github_url: "https://github.com/ThanhAn-Hust/Fox_Adventure.git",
  },
  {
    id: 5,
    year: "To be updated",
    role: "To be updated",
    status: "To be updated",
    title: { en: "Flight n Meteor", vi: "Flight n Meteor" },
    description: { en: "Obstacle dodging game.", vi: "Game né vật cản" },
    image_url: "/images/projects/archive.jpg",
    tech: ["Unity", "C#"],
    unity_play_url: "https://play.unity.com/en/games/ae805ebe-0f43-4f8b-ba08-a54675e56dbf/flight-and-meteor",
    github_url: "https://github.com/ThanhAn-Hust/Flight-n-Meteor.git",
  },
]

export const projects = projectData.map(project => ({
  slug: project.title.en.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  title: project.title.en,
  lines: project.title.en.match(/\S+(?:\s+\S+)?/g) ?? [project.title.en],
  category: project.tech?.join(" · ") ?? "Personal project",
  image: project.image_url,
  imageAlt: `Placeholder image for ${project.title.en}`,
  description: project.description.en,
  year: project.year ?? "To be updated",
  role: project.role ?? "To be updated",
  status: project.status ?? "To be updated",
  tags: project.tech ?? [],
  vrSupport: project.vr_support_type,
  links: [
    { label: "Visit website", href: project.website_url },
    { label: "View source", href: project.github_url },
    { label: "Play game", href: project.unity_play_url },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href)),
}))

export type PortfolioProject = (typeof projects)[number]
