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

function App() {
  return (
    <>
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
