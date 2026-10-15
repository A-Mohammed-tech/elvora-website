import { about } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <Reveal>
            <p className="eyebrow">About ELVORA</p>
            <h2 id="about-title" className="h2">
              {about.heading}
            </h2>
          </Reveal>
          <Reveal className="about__aside" delay={120}>
            <p className="lead">{about.text}</p>
          </Reveal>
        </div>

        <ul className="values">
          {about.values.map((v, i) => (
            <Reveal as="li" key={v.n} className="value" delay={i * 90}>
              <span className="value__n">{v.n}</span>
              <h3 className="value__title">{v.title}</h3>
              <p className="value__text">{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
