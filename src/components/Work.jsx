import { work } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

const stroke = 'rgba(192,192,192,0.45)'
const fill = 'rgba(192,192,192,0.12)'

/** Abstract placeholder thumbnails, used only when a project has no image. */
function Motif({ type }) {
  return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="220" fill="#0c0c0c" />
      {type === 'grid' && (
        <g fill={fill} stroke={stroke}>
          <rect x="30" y="30" width="260" height="28" rx="4" />
          <rect x="30" y="76" width="150" height="110" rx="4" />
          <rect x="196" y="76" width="94" height="50" rx="4" />
          <rect x="196" y="136" width="94" height="50" rx="4" />
        </g>
      )}
      {type === 'stack' && (
        <g fill={fill} stroke={stroke}>
          <circle cx="70" cy="70" r="28" />
          <rect x="116" y="50" width="150" height="12" rx="3" />
          <rect x="116" y="74" width="100" height="12" rx="3" />
          <rect x="30" y="122" width="76" height="68" rx="4" />
          <rect x="122" y="122" width="76" height="68" rx="4" />
          <rect x="214" y="122" width="76" height="68" rx="4" />
        </g>
      )}
      {type === 'tiles' && (
        <g fill={fill} stroke={stroke}>
          <rect x="30" y="30" width="80" height="100" rx="4" />
          <rect x="120" y="30" width="80" height="100" rx="4" />
          <rect x="210" y="30" width="80" height="100" rx="4" />
          <rect x="30" y="142" width="80" height="12" rx="3" />
          <rect x="120" y="142" width="80" height="12" rx="3" />
          <rect x="210" y="142" width="80" height="12" rx="3" />
          <rect x="30" y="164" width="40" height="12" rx="3" />
          <rect x="120" y="164" width="40" height="12" rx="3" />
          <rect x="210" y="164" width="40" height="12" rx="3" />
        </g>
      )}
    </svg>
  )
}

function Project({ p }) {
  return (
    <article className="project" style={{ height: '100%' }}>
      <div className="project__thumb">
        {p.image ? <img src={p.image} alt={`${p.title} preview`} loading="lazy" /> : <Motif type={p.motif} />}
        {p.sample && <span className="project__badge">Sample concept</span>}
      </div>
      <div className="project__body">
        <p className="project__cat">{p.category}</p>
        <h3 className="project__title">{p.title}</h3>
        <p className="project__text">{p.text}</p>
        {p.tech?.length > 0 && (
          <ul className="tags" aria-label="Technologies">
            {p.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <div className="project__foot">
          {p.link ? (
            <a href={p.link} className="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">
              View Project
              <Icon name="arrow" />
            </a>
          ) : (
            <span className="btn btn--ghost btn--sm" role="link" aria-disabled="true">
              View Project
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className="section section--alt" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Our Work</p>
          <h2 id="work-title" className="h2">
            {work.heading}
          </h2>
          <p className="lead">{work.text}</p>
        </Reveal>

        <ul className="work__grid">
          {work.items.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 3) * 90}>
              <Project p={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
