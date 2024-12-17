import './index.css'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import './App.css'

const projects = [
  {
    id: 1,
    name: 'Online Store(showcase)',
    description: 'Online store on Next.js with admin functionality',
    link: 'https://glass-store-crimea.vercel.app/',
  },
  {
    id: 2,
    name: 'SVG to PDF Converter',
    description: 'Just a converter for SVG to PDF',
    link: 'https://svg-to-pdf-khaki.vercel.app/',
  },
  {
    id: 3,
    name: 'Project Three Coming Soon',
    description: 'A short description',
    link: 'https://jettik1-portfolio.vercel.app/',
  },
]

const ProjectCard = ({ project }) => (
  <div className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
    <h2 className="text-xl font-bold">{project.name}</h2>
    <p className="text-gray-500">{project.description}</p>
    <button className="button btn-primary">
      <a
        href={project.link}
        class="inline-block text-blue-500 hover:underline px-5 py-3 bg-primary text-background rounded hover:bg-primary-hover"
      >
        View Project
      </a>
    </button>
  </div>
)

const ProjectsSection = () => (
  <section className="py-8">
    <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      className="max-w-lg mx-auto"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

const App = () => {
  const [theme, setTheme] = useState('dark')

  // Сохраняем тему в localStorage для сохранения настроек пользователя
  useEffect(() => {
    // Проверяем сохранённую тему и задаём её
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.add(savedTheme)
    setTheme(savedTheme)

    // Обновляем класс Swiper (если используется)
    const swiperEl = document.querySelector('.swiper')
    if (swiperEl) {
      swiperEl.classList.remove('light', 'dark')
      swiperEl.classList.add(savedTheme)
    }
  }, []) // Выполняется только один раз при монтировании

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="min-h-screen bg-background text-primary">
      <header className="p-4 bg-header flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
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
