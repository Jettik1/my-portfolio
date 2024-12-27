import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import ProjectCard from './ProjectCard.tsx'
import { Projects } from '../../utils/data'

const ProjectsSection = ({ projects }: { projects: Projects }) => (
  <section className="py-8">
    <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
    {projects?.length > 0 ? (
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
    ) : (
      <p className="text-center">No projects to display</p>
    )}
  </section>
)

export default ProjectsSection
