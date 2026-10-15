import { contact } from '../data/content'
import { siteConfig, getPhoneLink, getPhoneDisplay, getWhatsAppLink } from '../data/siteConfig'
import Icon from './Icon'
import Reveal from './Reveal'

function Channel({ icon, label, value, note, href, cta, external }) {
  const active = Boolean(href)
  return (
    <div className="channel">
      <span className="channel__icon">
        <Icon name={icon} />
      </span>
      <p className="channel__label">{label}</p>
      <p className="channel__value">{value}</p>
      <p className="channel__note">{note}</p>
      {active ? (
        <a
          href={href}
          className="btn btn--primary"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {cta}
          <Icon name="arrow" />
        </a>
      ) : (
        <span className="btn btn--primary" role="link" aria-disabled="true">
          {cta}
        </span>
      )}
    </div>
  )
}

export default function Contact() {
  const { instagram } = siteConfig.contact
  const phoneHref = getPhoneLink()
  const waHref = getWhatsAppLink()

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact__head">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="h2">
            {contact.heading}
          </h2>
          <p className="lead">{contact.text}</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal>
            <Channel
              icon="phone"
              label="Call"
              value={phoneHref ? getPhoneDisplay() : 'Not set yet'}
              note="Speak to us directly."
              href={phoneHref}
              cta="Call Us"
            />
          </Reveal>
          <Reveal delay={90}>
            <Channel
              icon="whatsapp"
              label="WhatsApp"
              value={waHref ? getPhoneDisplay() : 'Coming soon'}
              note={waHref ? 'Message us anytime.' : 'WhatsApp number is not confirmed yet.'}
              href={waHref}
              cta="Chat on WhatsApp"
              external
            />
          </Reveal>
          <Reveal delay={180}>
            <Channel
              icon="instagram"
              label="Instagram"
              value={`@${instagram.username}`}
              note="See what we're building."
              href={instagram.url}
              cta="Follow on Instagram"
              external
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
