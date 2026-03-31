import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import './FormaAI.css'

const STATS = [
  { label: 'Voice Agents', value: 'Active' },
  { label: 'Clients', value: 'Growing' },
  { label: 'Avg Response Time', value: '< 1 sec' },
  { label: 'Built for', value: 'SMBs Globally' },
]

export default function FormaAI() {
  const ref = useIntersectionObserver()

  return (
    <section id="formaai" className="formaai">
      <div className="section-container">
        <div className="formaai-inner animate-in" ref={ref}>
          <div className="formaai-left">
            <span className="formaai-label">Currently building</span>
            <h2 className="formaai-heading">Forma AI</h2>
            <p className="formaai-subheading">AI automation for small businesses</p>
            <p className="formaai-body">
              Forma AI builds voice agents, AI receptionists, and lead nurture automations that help small businesses stop losing revenue to missed calls and slow follow-up. Purpose-built for trades, services, and local businesses competing against enterprise operations.
            </p>
            <a href="https://formaai.com.au" target="_blank" rel="noopener noreferrer" className="formaai-cta">
              Visit Forma AI →
            </a>
          </div>
          <div className="formaai-right">
            <div className="formaai-stats">
              {STATS.map(stat => (
                <div key={stat.label} className="formaai-stat">
                  <span className="formaai-stat-value">{stat.value}</span>
                  <span className="formaai-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
