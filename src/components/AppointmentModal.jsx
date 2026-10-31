import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FiX, FiCalendar, FiCheckCircle } from 'react-icons/fi'

export default function AppointmentModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) setSubmitted(false)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.div
            className="appointment-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close consultation booking form"><FiX /></button>
            {submitted ? (
              <div className="form-success">
                <span className="success-icon"><FiCheckCircle /></span>
                <span className="eyebrow">CONSULTATION ENQUIRY</span>
                <h2>Thank You for Connecting.</h2>
                <p>This is a front-end demo. In a live environment, your enquiry will be sent directly to the clinic team to confirm your consultation schedule.</p>
                <button className="button button-dark" onClick={onClose}>Close</button>
              </div>
            ) : (
              <>
                <span className="eyebrow">PERSONAL CONSULTATION</span>
                <h2 id="appointment-title">Book a Consultation</h2>
                <p className="modal-intro">Share your details to request an appointment. Our team will contact you to coordinate a convenient consultation time.</p>
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="appointment-form">
                  <label>Full name<input required name="name" placeholder="Your full name" autoComplete="name" /></label>
                  <label>Phone number<input required name="phone" type="tel" placeholder="Your contact number" autoComplete="tel" /></label>
                  <label>Preferred date<input name="date" type="date" /></label>
                  <label>What would you like to discuss?<textarea name="message" rows="3" placeholder="Brief notes or health concerns (optional)" /></label>
                  <button className="button button-dark button-full" type="submit"><FiCalendar /> Book a Consultation</button>
                  <small>Interactive demonstration — connect verified clinic phone or scheduling system prior to publishing.</small>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
