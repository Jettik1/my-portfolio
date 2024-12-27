import React from 'react'
import './App.css'
import Header from './components/Header.tsx'
import ProjectsSection from './features/projects/ProjectSection.tsx'
import { projects } from './utils/data.ts'

const App = () => {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Header />
      <main className="container mx-auto px-4">
        <ProjectsSection projects={projects} />
      </main>
    </div>
  )
}

export default App
