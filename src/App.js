import React, { useState, useEffect } from 'react'

const projects = [
  {
    id: 1,
    name: 'Online Store(showcase)',
    description: 'Online store on Next.js with admin functionality',
    link: 'https://glass-store-crimea.vercel.app/',
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'A short description of Project Two.',
    link: 'https://github.com/username/project-two',
  },
  {
    id: 3,
    name: 'Project Three',
    description: 'A short description of Project Three.',
    link: 'https://github.com/username/project-three',
  },
]

const ProjectCard = ({ project }) => (
  <div className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
    <h2 className="text-xl font-bold">{project.name}</h2>
    <p className="text-gray-500">{project.description}</p>
    <a
      href={project.link}
      className="text-blue-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </div>
)

const ProjectsSection = () => (
  <section className="py-8">
    <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
)

const App = () => {
  const [theme, setTheme] = useState('light')

  // Сохраняем тему в localStorage для сохранения настроек пользователя
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.add(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="min-h-screen bg-background text-primary">
      <header className="p-4 bg-header flex justify-between items-center">
        <h1 className="text-xl font-bold">Мой Портфолио</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-button text-buttonText rounded"
        >
          {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a7 7 0 00-7 7c0 2.263 1.211 4.443 3.004 5.784A1.984 1.984 0 008 16v1a1 1 0 001 1h6a1 1 0 001-1v-1a1.984 1.984 0 00-.004-.216C17.789 13.443 19 11.263 19 9a7 7 0 00-7-7zm-2 17v2h4v-2h-4zm8.707-13.293l-1.414 1.414A8.964 8.964 0 0119 9a9 9 0 01-.293 2.707l1.414 1.414A10.935 10.935 0 0021 9a10.935 10.935 0 00-1.293-3.293zM5.707 4.293A10.935 10.935 0 004 9c0 1.075.152 2.108.293 3.121l1.414-1.414A8.964 8.964 0 015 9a8.964 8.964 0 011.121-4.121L5.707 4.293z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4a1 1 0 00-1 1v1a1 1 0 002 0V5a1 1 0 00-1-1zm0 14a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm10-7a1 1 0 00-1-1h-1a1 1 0 000 2h1a1 1 0 001-1zM4 11H3a1 1 0 000 2h1a1 1 0 000-2zm15.071 7.071a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM6.343 5.757a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM17.657 6.464a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM6.343 18.243a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707z" />
            </svg>
          )}
        </button>
      </header>
      <main className="container mx-auto px-4">
        <ProjectsSection />
      </main>
    </div>
  )
}

export default App
