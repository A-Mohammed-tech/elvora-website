import { founder } from '../data/content'
import Reveal from './Reveal'

export default function Founder() {
  return (
    <section id="founder" className="section section--alt" aria-labelledby="founder-title">
      <div className="container">
        <Reveal className="founder__card">
          <div className="founder__visual">
            {founder.portrait ? (
              <img className="founder__photo" src={founder.portrait} alt={`Portrait of ${founder.name}`} />
            ) : (
              <span className="founder__initial silver-text" aria-hidden="true">
                {founder.name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <p className="eyebrow">{founder.heading}</p>
            <h2 id="founder-title" className="founder__name">
              {founder.name}
            </h2>
            <p className="founder__role">{founder.role}</p>
            <p className="founder__text">{founder.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
