import { Link } from 'react-router'
import './Header.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#story' },
  { label: 'Videos', to: '/videos' },
  { label: 'Contact', to: '#contact' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand">
          <span className="brand-name">Driven 2 Be Better</span>
          <span className="brand-tagline">HEALTHY PEOPLE GO FURTHER</span>
        </Link>

        <nav>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
          <Link to="/#assessment" className="nav-cta">
            Take the Assessment
          </Link>
        </nav>
      </div>
    </header>
  )
}
