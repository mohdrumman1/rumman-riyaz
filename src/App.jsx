import { useMemo } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import WhatIDo from './components/WhatIDo/WhatIDo'
import Projects from './components/Projects/Projects'
import Timeline from './components/Timeline/Timeline'
import TechStack from './components/TechStack/TechStack'
import FormaAI from './components/FormaAI/FormaAI'
import GitHubFeed from './components/GitHubFeed/GitHubFeed'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function generateBoxShadows(n) {
  const shadows = []
  for (let i = 0; i < n; i++) {
    shadows.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`)
  }
  return shadows.join(', ')
}

function StarCanvas() {
  const shadowsSmall = useMemo(() => generateBoxShadows(700), [])
  const shadowsMedium = useMemo(() => generateBoxShadows(200), [])
  const shadowsBig = useMemo(() => generateBoxShadows(100), [])

  return (
    <>
      <div className="star-canvas-bg" />
      <div className="star-layer star-layer--sm" aria-hidden="true" style={{ boxShadow: shadowsSmall }}>
        <div className="star-layer-after" style={{ boxShadow: shadowsSmall }} />
      </div>
      <div className="star-layer star-layer--md" aria-hidden="true" style={{ boxShadow: shadowsMedium }}>
        <div className="star-layer-after" style={{ boxShadow: shadowsMedium }} />
      </div>
      <div className="star-layer star-layer--lg" aria-hidden="true" style={{ boxShadow: shadowsBig }}>
        <div className="star-layer-after" style={{ boxShadow: shadowsBig }} />
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <StarCanvas />
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Timeline />
        <TechStack />
        <FormaAI />
        <GitHubFeed />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
