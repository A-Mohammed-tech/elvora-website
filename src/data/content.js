/**
 * ELVORA — page content
 * Copy lives here so sections stay free of hard-coded text.
 */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  headline: ['Imagine.', 'Build.', 'Elevate.'],
  text: 'We transform ideas into powerful digital experiences that help businesses stand out, connect, and grow.',
}

export const about = {
  heading: 'Digital Experiences, Thoughtfully Built.',
  text: 'ELVORA helps businesses and individuals turn their ideas into meaningful digital experiences. We combine modern design, thoughtful development, and user-focused solutions to create websites that look professional and work beautifully.',
  values: [
    { n: '01', title: 'Creativity', text: 'We approach every project with fresh ideas and thoughtful design.' },
    { n: '02', title: 'Quality', text: 'We focus on detail, usability, responsiveness, and reliable implementation.' },
    { n: '03', title: 'Innovation', text: 'We explore modern technologies to create useful digital experiences.' },
  ],
}

export const founder = {
  heading: 'Meet the Founder',
  name: 'Mohammed',
  role: 'Founder, ELVORA',
  text: 'ELVORA was founded by Mohammed with a vision to transform ideas into meaningful digital experiences through modern design, creativity, and technology.',
  // Add a portrait later: put the file in /public (e.g. /public/founder.jpg)
  // and set portrait: '/founder.jpg'
  portrait: '',
}

export const services = {
  heading: 'What We Create',
  text: 'Digital solutions designed to bring ideas to life.',
  items: [
    {
      id: 'website-development',
      icon: 'code',
      title: 'Website Development',
      text: 'Modern, responsive websites built to present your brand professionally and deliver a smooth user experience.',
    },
    {
      id: 'business-websites',
      icon: 'building',
      title: 'Business Websites',
      text: 'Professional websites that help businesses showcase their services, establish credibility, and strengthen their online presence.',
    },
    {
      id: 'portfolio-websites',
      icon: 'user',
      title: 'Portfolio Websites',
      text: 'Personal websites designed to showcase skills, projects, experience, and achievements with clarity and style.',
    },
    {
      id: 'ecommerce-websites',
      icon: 'bag',
      title: 'E-Commerce Websites',
      text: 'Modern online storefronts designed to present products and support the growth of digital businesses.',
    },
    {
      id: 'landing-pages',
      icon: 'target',
      title: 'Landing Pages',
      text: 'Focused, visually compelling pages designed to communicate your message and guide visitors toward a clear action.',
    },
    {
      id: 'ai-automation',
      icon: 'spark',
      title: 'AI Automation',
      text: 'Explore technology-driven automation solutions that can simplify repetitive digital tasks and improve workflows.',
    },
  ],
}

/**
 * Selected Work
 * -----------------------------------------------------------------------------
 * These are SAMPLE concepts, clearly labelled as such on the page. They are not
 * client work. To add a real project, add an object with `sample: false`,
 * a `link`, and optionally an `image` (file placed in /public, e.g. '/work/x.jpg').
 * Remove the sample entries once real projects are available.
 */
export const work = {
  heading: 'Selected Work',
  text: 'A collection of digital experiences built with creativity and purpose.',
  items: [
    {
      title: 'Business Website Concept',
      text: 'A sample layout showing how a service business could present its offering with clarity.',
      category: 'Business Websites',
      tech: ['React', 'Vite', 'CSS'],
      image: '/work/business-concept.svg',
      link: '',
      sample: true,
      motif: 'grid',
    },
    {
      title: 'Portfolio Concept',
      text: 'A sample personal site structure for presenting projects, skills and experience.',
      category: 'Portfolio Websites',
      tech: ['React', 'CSS'],
      image: '/work/portfolio-concept.svg',
      link: '',
      sample: true,
      motif: 'stack',
    },
    {
      title: 'Storefront Concept',
      text: 'A sample product-led layout for a small online store.',
      category: 'E-Commerce Websites',
      tech: ['React', 'CSS'],
      image: '/work/storefront-concept.svg',
      link: '',
      sample: true,
      motif: 'tiles',
    },
  ],
}

export const why = {
  heading: 'Built With Purpose.',
  items: [
    { n: '01', icon: 'layers', title: 'Modern Design', text: 'Clean, contemporary visuals designed around your brand.' },
    { n: '02', icon: 'devices', title: 'Responsive Experiences', text: 'Layouts that adapt smoothly to desktop, tablet, and mobile screens.' },
    { n: '03', icon: 'detail', title: 'Attention to Detail', text: 'Thoughtful typography, spacing, interactions, and usability.' },
    { n: '04', icon: 'sliders', title: 'Tailored Solutions', text: 'Project decisions guided by your requirements and goals.' },
    { n: '05', icon: 'chat', title: 'Clear Communication', text: 'A straightforward approach to discussing requirements, progress, and delivery.' },
  ],
}

export const process = {
  heading: 'From Idea to Launch',
  steps: [
    { n: '01', title: 'Discover', text: 'We understand your requirements, audience, and project goals.' },
    { n: '02', title: 'Design', text: 'We establish the visual direction and create a thoughtful website layout.' },
    { n: '03', title: 'Develop', text: 'We turn the design into a responsive website and refine its functionality.' },
    { n: '04', title: 'Launch', text: 'We test the website, address issues, and prepare it for deployment.' },
  ],
}

export const contact = {
  heading: "Have an Idea? Let's Build It.",
  text: "Have a project in mind or looking to build your online presence? Get in touch with ELVORA and let's discuss your ideas.",
}

export const footer = {
  description:
    'ELVORA is a digital brand creating modern websites, creative digital experiences, and technology-driven solutions.',
  sign: 'Designed with purpose. Built for the future.',
}
