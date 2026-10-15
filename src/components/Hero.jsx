import { hero } from '../data/content'
import Icon from './Icon'

/** Three slanted bars echoing the E of the ELVORA mark. */
function HeroMark() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Abstract geometric mark of three stacked silver bars">
      <defs>
        <linearGradient id="barA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#c0c0c0" />
          <stop offset="1" stopColor="#6f6f6f" />
        </linearGradient>
        <linearGradient id="barB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8e8e8" />
          <stop offset="0.6" stopColor="#a9a9a9" />
          <stop offset="1" stopColor="#555555" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="360" height="360" rx="6" fill="none" stroke="rgba(192,192,192,0.14)" />
      <g className="bar">
        <polygon points="110,70 340,70 296,130 66,130" fill="url(#barA)" />
      </g>
      <g className="bar bar--2">
        <polygon points="96,165 296,165 252,225 52,225" fill="url(#barB)" />
      </g>
      <g className="bar bar--3">
        <polygon points="124,260 330,260 286,320 80,320" fill="url(#barA)" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div>
          <h1 id="hero-title" className="hero__title">
            {hero.headline.map((word, i) => (
              <span key={word} className="hero-in silver-text" style={{ "--d": `${150 + i * 140}ms` }}>
                {word}
              </span>
            ))}
          </h1>
          <p className="hero__text hero-in" style={{ '--d': '650ms' }}>
            {hero.text}
          </p>
          <div className="hero__actions hero-in" style={{ '--d': '800ms' }}>
            <a href="#services" className="btn btn--primary">
              Explore Our Services
              <Icon name="arrow" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let&apos;s Talk
            </a>
          </div>
        </div>
        <div className="hero__visual hero-in" style={{ '--d': '400ms' }}>
          <HeroMark />
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        Scroll
        <i />
      </div>
    </section>
  )
}
