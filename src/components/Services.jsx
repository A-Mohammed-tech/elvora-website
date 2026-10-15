import { services } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Services</p>
          <h2 id="services-title" className="h2">
            {services.heading}
          </h2>
          <p className="lead">{services.text}</p>
        </Reveal>

        <ul className="services__grid">
          {services.items.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 90}>
              <article id={s.id} className="card" style={{ height: '100%' }}>
                <span className="card__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="card__icon">
                  <Icon name={s.icon} />
                </span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__text">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
