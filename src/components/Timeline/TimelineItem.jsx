import './Timeline.css'

export default function TimelineItem({ item, isLast }) {
  return (
    <div className={`timeline-item${isLast ? ' timeline-item--last' : ''}`}>
      <div className="timeline-left">
        <span className="timeline-period">{item.period}</span>
      </div>
      <div className="timeline-connector">
        <div className={`timeline-dot${item.current ? ' timeline-dot--current' : ''}`} />
        {!isLast && <div className="timeline-line" />}
      </div>
      <div className="timeline-right">
        <h3 className="timeline-role">{item.role}</h3>
        <span className="timeline-company">{item.company}</span>
        <p className="timeline-desc">{item.description}</p>
        <div className="timeline-tags">
          {item.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
