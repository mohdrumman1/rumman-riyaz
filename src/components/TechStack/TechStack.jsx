import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import StackTag from './StackTag'
import { stack } from '../../data/stack'
import './TechStack.css'

export default function TechStack() {
  const ref = useIntersectionObserver()

  return (
    <section id="stack" className="techstack">
      <div className="section-container">
        <div className="animate-in" ref={ref}>
          <span className="section-label">Tech Stack</span>
          <h2 className="techstack-heading">Tools of the trade</h2>
          <div className="techstack-groups">
            {stack.map(group => (
              <div key={group.category} className="techstack-group">
                <h3 className="techstack-category">{group.category}</h3>
                <div className="techstack-tags">
                  {group.tags.map(tag => (
                    <StackTag key={tag} label={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
