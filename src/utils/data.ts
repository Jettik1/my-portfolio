export const projects = [
  {
    id: 1,
    name: 'Online Store(showcase)',
    description: 'Online store on Next.js with admin functionality',
    link: 'https://glass-store-crimea.vercel.app/',
    github: 'https://github.com/Jettik1/nextjs',
  },
  {
    id: 2,
    name: 'SVG to PDF Converter',
    description: 'Just a converter for SVG to PDF',
    link: 'https://svg-to-pdf-khaki.vercel.app/',
  },
  {
    id: 3,
    name: 'Just a News CRUD',
    description: 'News CRUD w/ localstorage',
    link: 'https://react-crud-rosy-rho.vercel.app/',
    github: 'https://github.com/Jettik1/react-crud',
  },
  {
    id: 4,
    name: 'Project Coming Soon??',
    description: 'A short description',
    link: 'https://jettik1-portfolio.vercel.app/',
    github: 'https://github.com/Jettik1/my-portfolio',
  },
]

export interface Project {
  id: number
  name: string
  description: string
  link: string
  github?: string
}

export type Projects = Project[]
