import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import WhatIDoCard from './WhatIDoCard'
import './WhatIDo.css'

const CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Software Engineering',
    body: '.NET, C#, Python, React. AWS Lambda, RDS, API Gateway, CloudFormation. Building enterprise utility portals used by thousands of field technicians.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    ),
    title: 'Technical PM & Delivery',
    body: 'PMP certified. Run Agile ceremonies, manage backlogs, scope features, write TRPs. Bridge the gap between what the business wants and what engineering ships.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="6" r="2" />
        <circle cx="20" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
        <line x1="6" y1="6" x2="9.5" y2="10.5" />
        <line x1="18" y1="6" x2="14.5" y2="10.5" />
        <line x1="6" y1="18" x2="9.5" y2="13.5" />
        <line x1="18" y1="18" x2="14.5" y2="13.5" />
      </svg>
    ),
    title: 'AI Automation (Forma AI)',
    body: 'Claude API, n8n, ElevenLabs, Deepgram. Voice agents that answer, qualify, and follow up leads 24/7 — no human in the loop. Deployed for trades businesses, clinics, and service providers worldwide.',
  },
]

export default function WhatIDo() {
  const ref = useIntersectionObserver()

  return (
    <section id="whatido" className="whatido">
      <div className="section-container">
        <div className="animate-in" ref={ref}>
          <span className="section-label">What I do</span>
          <h2 className="whatido-heading">What I do well</h2>
          <div className="whatido-cards">
            {CARDS.map(card => (
              <WhatIDoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
