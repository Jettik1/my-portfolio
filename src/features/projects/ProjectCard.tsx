import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { VscLinkExternal } from 'react-icons/vsc'

const ProjectCard = ({ project }) => (
  <div className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
    <h2 className="text-xl font-bold">{project.name}</h2>
    <p className="text-gray-500">{project.description}</p>
    <div className="flex gap-4 mt-4 justify-between items-center">
      {/* Button for Vercel project link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 bg-primary text-background rounded hover:bg-primary-hover transition-colors"
      >
        <VscLinkExternal className="text-lg" />
        View Project
      </a>

      {/* Button for GitHub link */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors ml-auto"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>
      )}
    </div>
  </div>
)

export default ProjectCard
