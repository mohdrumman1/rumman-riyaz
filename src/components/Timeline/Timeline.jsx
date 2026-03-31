import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import TimelineItem from './TimelineItem'
import { timeline } from '../../data/timeline'
import './Timeline.css'

export default function Timeline() {
  const ref = useIntersectionObserver()

  return (
    <section id="timeline" className="timeline">
      <div className="section-container">
        <div className="animate-in" ref={ref}>
          <span className="section-label">Career</span>
          <h2 className="timeline-heading">Where I've been</h2>
          <div className="timeline-list">
            {timeline.map((item, i) => (
              <TimelineItem key={item.id} item={item} isLast={i === timeline.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
