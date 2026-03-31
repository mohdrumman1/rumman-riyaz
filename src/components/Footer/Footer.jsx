import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-inner">
          <span className="footer-copy">Rumman Riyaz &copy; {new Date().getFullYear()}</span>
          <span className="footer-built">Built with React &middot; Vite</span>
          <div className="footer-links">
            <a href="https://github.com/mohdrumman1" target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rumman-riyaz/" target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
