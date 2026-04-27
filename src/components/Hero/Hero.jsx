import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
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
          <a href="/resume.pdf" download="Rumman_Riyaz_Resume.pdf" className="btn btn-outline">
            Download CV ↓
          </a>
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
