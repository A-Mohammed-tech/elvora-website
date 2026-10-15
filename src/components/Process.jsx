import { process } from '../data/content'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="process" className="section section--alt" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Our Process</p>
          <h2 id="process-title" className="h2">
            {process.heading}
          </h2>
        </Reveal>

        <Reveal as="ol" className="steps" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {process.steps.map((s) => (
            <li key={s.n} className="step">
              <span className="step__num">{s.n}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
