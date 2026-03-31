import { useState, useEffect } from 'react'
import './Nav.css'

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <>
      <div className="nav-progress" style={{ width: `${progress}%` }} />
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo" onClick={handleNavClick}>
            <span className="nav-logo-monogram">RR</span>
            <span className="nav-logo-name">Rumman Riyaz</span>
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${activeSection === link.href.slice(1) ? ' nav-link--active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="https://formaai.com.au" target="_blank" rel="noopener noreferrer" className="nav-link nav-link--pill">
                Forma AI
              </a>
            </li>
          </ul>

          <button
            className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-overlay${menuOpen ? ' nav-overlay--open' : ''}`}>
        <ul className="nav-overlay-links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="nav-overlay-link" onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://formaai.com.au" target="_blank" rel="noopener noreferrer" className="nav-overlay-link nav-overlay-link--accent" onClick={handleNavClick}>
              Forma AI
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
