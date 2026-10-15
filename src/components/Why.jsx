import { why } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Why() {
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="container why__grid">
        <Reveal className="why__sticky">
          <p className="eyebrow">Why ELVORA</p>
          <h2 id="why-title" className="h2">
            {why.heading}
          </h2>
        </Reveal>

        <ul className="why__list">
          {why.items.map((item, i) => (
            <Reveal as="li" key={item.n} className="why__item" delay={i * 70}>
              <span className="why__icon">
                <Icon name={item.icon} />
              </span>
              <h3 className="why__title">
                {item.title}
                <small>{item.n}</small>
              </h3>
              <p className="why__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
