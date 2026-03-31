import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import './About.css'

const QUICK_FACTS = [
  { icon: '📍', label: 'Location', value: 'Newcastle, NSW' },
  { icon: '💼', label: 'Role', value: 'Software Engineer & PM' },
  { icon: '🏅', label: 'Certified', value: 'PMP' },
  { icon: '✅', label: 'Availability', value: 'Open to opportunities' },
]

const CLIENTS = ['Service Stream', 'South East Water', 'Hunter Water', 'Greater Western Water', 'NBN']

export default function About() {
  const ref = useIntersectionObserver()

  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about-grid animate-in" ref={ref}>
          <div className="about-left">
            <span className="section-label">About</span>
            <h2 className="about-heading">Engineer by trade.<br />Builder by habit.</h2>
            <div className="about-bio">
              <p>
                I joined Service Stream in early 2022 as a junior developer and grew quickly into a Technical PM role, writing TRPs, running Agile ceremonies, and bridging the gap between what the business wants and what engineering can actually ship.
              </p>
              <p>
                I got PMP certified while working full-time, which pushed me to apply proper delivery frameworks to the projects I was already managing. It changed how I scope, plan, and communicate risk.
              </p>
              <p>
                Forma AI started because I kept watching small business owners lose leads to missed calls and slow follow-up. I built the tools I wished existed: voice agents, AI receptionists, automated lead nurture, and started selling them to small businesses around the world.
              </p>
              <p>
                I work fully remote from Newcastle. Outside of work you'll find me on a soccer pitch two or three times a week.
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="about-photo-wrap">
              <img
                src="/profile.jpg"
                alt="Rumman Riyaz"
                className="about-photo"
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            <div className="about-facts">
              {QUICK_FACTS.map(fact => (
                <div key={fact.label} className="about-fact">
                  <span className="about-fact-icon" aria-hidden="true">{fact.icon}</span>
                  <div>
                    <span className="about-fact-label">{fact.label}</span>
                    <span className="about-fact-value">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-clients">
              {CLIENTS.map(c => (
                <span key={c} className="about-client-badge">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
