/**
 * ELVORA — central site configuration
 * -----------------------------------------------------------------------------
 * Every contact detail and social link lives here. Edit this file only;
 * the Contact section and Footer read from it automatically.
 *
 * - Leave a value as an empty string ("") to keep that channel switched off.
 *   A switched-off channel is shown as unavailable and its link is NOT active.
 * - Phone numbers: digits only, country code kept separate (no "+" or spaces).
 */

export const siteConfig = {
  brand: {
    name: 'ELVORA',
    tagline: 'Imagine. Build. Elevate.',
    founder: 'Mohammed',
  },

  contact: {
    // Used by the "Call Us" button  ->  tel:+<countryCode><number>
    phone: {
      countryCode: '91', // ASSUMED India (+91). Change if this is not correct.
      number: '9025020735',
    },

    // Used by the "Chat on WhatsApp" button  ->  https://wa.me/<countryCode><number>
    // WhatsApp uses the same confirmed mobile number as the Call button.
    whatsapp: {
      countryCode: '91',
      number: '9025020735',
      // Optional pre-filled first message
      message: "Hi ELVORA, I'd like to discuss a project.",
    },

    instagram: {
      username: 'elvora_digitals',
      url: 'https://www.instagram.com/elvora_digitals/',
    },
  },
}

/* ---------- helpers (no need to edit) ---------- */

const digits = (v) => String(v || '').replace(/\D/g, '')

export function getPhoneLink() {
  const { countryCode, number } = siteConfig.contact.phone
  const n = digits(number)
  return n ? `tel:+${digits(countryCode)}${n}` : ''
}

export function getPhoneDisplay() {
  const { countryCode, number } = siteConfig.contact.phone
  const n = digits(number)
  if (!n) return ''
  return n.length === 10
    ? `+${digits(countryCode)} ${n.slice(0, 5)} ${n.slice(5)}`
    : `+${digits(countryCode)} ${n}`
}

export function getWhatsAppLink() {
  const { countryCode, number, message } = siteConfig.contact.whatsapp
  const n = digits(number)
  if (!n) return ''
  const base = `https://wa.me/${digits(countryCode)}${n}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
