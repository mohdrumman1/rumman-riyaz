import { useMemo } from 'react'
import './Hero.css'

function generateBoxShadows(n) {
  const shadows = []
  for (let i = 0; i < n; i++) {
    shadows.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`)
  }
  return shadows.join(', ')
}

export default function Hero() {
  const shadowsSmall = useMemo(() => generateBoxShadows(700), [])
  const shadowsMedium = useMemo(() => generateBoxShadows(200), [])
  const shadowsBig = useMemo(() => generateBoxShadows(100), [])

  return (
    <section className="hero" id="hero">
      <div className="hero-space-bg" aria-hidden="true" />

      <div className="hero-stars hero-stars--sm" aria-hidden="true" style={{ boxShadow: shadowsSmall }}>
        <div className="hero-stars-after" style={{ boxShadow: shadowsSmall }} />
      </div>
      <div className="hero-stars hero-stars--md" aria-hidden="true" style={{ boxShadow: shadowsMedium }}>
        <div className="hero-stars-after" style={{ boxShadow: shadowsMedium }} />
      </div>
      <div className="hero-stars hero-stars--lg" aria-hidden="true" style={{ boxShadow: shadowsBig }}>
        <div className="hero-stars-after" style={{ boxShadow: shadowsBig }} />
      </div>

      <div className="hero-content">
        <span className="hero-label">Software Engineer · Technical PM · AI Founder</span>
        <h1 className="hero-heading">
          I build software<br />
          and ship AI products.
        </h1>
        <p className="hero-subtext">
          PMP-certified engineer at Service Stream. Founder of Forma AI,<br />
          an AI automation agency for small businesses.<br />
          Based in Newcastle, NSW.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">See my work ↓</a>
          <a href="https://formaai.com.au" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Forma AI →
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
