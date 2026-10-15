import { navLinks, services, footer } from '../data/content'
import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  const { brand, contact } = siteConfig
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" aria-label="ELVORA — back to top">
              <img src="/elvora-wordmark.png" alt="ELVORA" width="180" height="24" loading="lazy" />
            </a>
            <p className="footer__tag">{brand.tagline}</p>
            <p className="footer__desc">{footer.description}</p>
          </div>

          <nav aria-label="Quick links">
            <h3>Explore</h3>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3>Services</h3>
            <ul>
              {services.items.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3>Follow</h3>
            <ul>
              <li>
                <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>{footer.sign}</p>
        </div>
      </div>
    </footer>
  )
}
