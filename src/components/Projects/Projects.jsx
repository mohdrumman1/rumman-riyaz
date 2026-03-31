import { useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import FilterBar from './FilterBar'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'
import './Projects.css'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const ref = useIntersectionObserver()

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="animate-in" ref={ref}>
          <span className="section-label">Projects</span>
          <h2 className="projects-heading">Things I've built</h2>
          <FilterBar active={filter} onChange={setFilter} />
          <div className="projects-grid">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
