import { motion } from 'motion/react'

export default function SectionHeading({ eyebrow, title, description, centered = false, light = false }) {
  return (
    <motion.div
      className={`section-heading ${centered ? 'is-centered' : ''} ${light ? 'is-light' : ''}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
