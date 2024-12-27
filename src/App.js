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
    document.documentElement.setAttribute('data-theme', savedTheme)
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
        <label className="swap swap-rotate">
          {/* Управление состоянием */}
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />

          {/* Иконка солнца */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* Иконка луны */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </header>
      <main className="container mx-auto px-4">
        <ProjectsSection />
      </main>
    </div>
  )
}

export default App
