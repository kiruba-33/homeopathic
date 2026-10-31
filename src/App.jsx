import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  FiArrowUpRight, FiArrowRight, FiMenu, FiX, FiPhone, FiMapPin,
  FiClock, FiPlus, FiMinus, FiHeart, FiMessageCircle, FiFeather,
  FiCalendar, FiInstagram, FiFacebook, FiMail, FiCheck, FiShield,
} from 'react-icons/fi'
import SectionHeading from './components/SectionHeading.jsx'
import AppointmentModal from './components/AppointmentModal.jsx'
import {
  clinic,
  sampleServices,
  whyChooseUsItems,
  consultationSteps,
  faqs,
} from './data/clinic.js'

const navItems = [
  ['Our Approach', '#approach'],
  ['Consultations', '#consultations'],
  ['Why Choose Us', '#why-us'],
  ['Your Visit', '#visit'],
  ['Contact', '#contact'],
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label={`${clinic.name} home`}>
      <span className="brand-symbol"><FiFeather /></span>
      <span className="brand-copy">
        <strong>{clinic.name}</strong>
        <small>PERSONALISED HOMEOPATHIC CARE</small>
      </span>
    </a>
  )
}

function Header({ onBook }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>PERSONALISED HOMEOPATHIC CONSULTATIONS</span>
          <a href="#contact"><FiPhone /> {clinic.phone}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <button className="button button-dark header-cta" onClick={onBook}>
            Book a Consultation <FiArrowUpRight />
          </button>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              aria-label="Mobile navigation"
            >
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}<FiArrowUpRight />
                </a>
              ))}
              <button
                className="button button-dark"
                onClick={() => {
                  setMenuOpen(false)
                  onBook()
                }}
              >
                Book a Consultation <FiArrowUpRight />
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

// 1. Hero Section
function Hero({ onBook }) {
  return (
    <section className="hero" id="home">
      <div className="hero-grain" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={reveal} className="eyebrow hero-eyebrow">
            <span /> PERSONALISED HOMEOPATHIC CONSULTATIONS
          </motion.div>
          <motion.h1 variants={reveal}>
            A Thoughtful Approach<br />to <em>Your Wellbeing.</em>
          </motion.h1>
          <motion.p variants={reveal} className="hero-description">
            Every person has a unique story. We believe care begins with listening, understanding your concerns, and providing thoughtful guidance at every step.
          </motion.p>
          <motion.div variants={reveal} className="hero-actions">
            <button className="button button-dark" onClick={onBook}>
              Book a Consultation <FiArrowUpRight />
            </button>
            <a href="#approach" className="text-link">
              Discover Our Approach <FiArrowRight />
            </a>
          </motion.div>
          <motion.div variants={reveal} className="hero-note">
            <span className="note-line" />
            <span>PERSON-CENTRED · UNHURRIED · CONSIDERED</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=85"
              alt="Warm, natural-toned consultation space with soft daylight"
              fetchPriority="high"
            />
            <div className="image-caption">
              <span>01 / A THOUGHTFUL APPROACH TO CARE</span>
              <FiArrowUpRight />
            </div>
          </div>
          <div className="floating-note">
            <span className="floating-icon"><FiHeart /></span>
            <span>
              <strong>Every person has a unique story.</strong>
              <small>Space for a more personal conversation.</small>
            </span>
          </div>
          <div className="hero-stamp">
            <span>CARE</span>
            <span>WITH</span>
            <span>INTENTION</span>
            <i>✳</i>
          </div>
        </motion.div>
      </div>
      <div className="hero-bottom container">
        <span>HOMEOPATHY CLINIC · PERSONALISED CARE</span>
        <a href="#approach">DISCOVER OUR APPROACH <span>↓</span></a>
      </div>
    </section>
  )
}

// 2. About Section
function About() {
  return (
    <section className="approach section-pad" id="approach">
      <div className="container approach-layout">
        <div className="approach-image-column">
          <motion.div
            className="approach-image"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
              alt="Quiet neutral clinic interior with natural materials and greenery"
              loading="lazy"
            />
          </motion.div>
          <div className="image-index">
            A SANCTUARY FOR CARE <span>— 01</span>
          </div>
        </div>
        <div className="approach-content">
          <SectionHeading
            eyebrow="OUR PHILOSOPHY"
            title={<>Care That Begins<br />With <em>Understanding.</em></>}
            description={`At ${clinic.name}, we believe every individual deserves time, attention and a thoughtful approach to healthcare. Our focus is on understanding your concerns, listening to your experiences and helping you make informed decisions about your wellbeing.`}
          />
          <div className="approach-pillars">
            <div className="approach-pillar-item">
              <span className="pillar-dot" />
              <div>
                <strong>Attentive Listening</strong>
                <p>We dedicate ample time to hear your complete story without feeling hurried.</p>
              </div>
            </div>
            <div className="approach-pillar-item">
              <span className="pillar-dot" />
              <div>
                <strong>Informed Wellbeing</strong>
                <p>Transparent discussions to help you make thoughtful choices at your own pace.</p>
              </div>
            </div>
            <div className="approach-pillar-item">
              <span className="pillar-dot" />
              <div>
                <strong>Warmth & Discretion</strong>
                <p>A welcoming, dignified environment designed for your comfort and confidentiality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 3. Consultation Section
function Consultations() {
  const icons = [<FiMessageCircle />, <FiHeart />, <FiFeather />]
  return (
    <section className="consultations section-pad" id="consultations">
      <div className="container">
        <div className="consultations-heading-row">
          <SectionHeading
            eyebrow="CONSULTATION OPTIONS"
            title={<>A More Personal<br /><em>Consultation Experience.</em></>}
            description="Every session is conducted with dedication, attentive listening, and clear communication tailored to your individual health journey."
          />
          <span className="section-aside">
            AN OPEN CONVERSATION<br />IS A GOOD PLACE TO BEGIN.
          </span>
        </div>
        <div className="service-grid">
          {sampleServices.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
            >
              <div className="service-card-top">
                <span>{service.number} / 03</span>
                <span className="service-icon">{icons[index]}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span className="service-foot">
                CONSULTATION PILLAR <FiArrowUpRight />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// 4. Why Choose Us Section
function WhyChooseUs() {
  const icons = [<FiClock />, <FiHeart />, <FiFeather />, <FiShield />]
  return (
    <section className="why-us-section section-pad" id="why-us">
      <div className="container">
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title={<>Thoughtfully Different.<br /><em>Personally Focused.</em></>}
          description="We believe meaningful care is shaped by patience, personal dedication, and an unhurried clinical environment where you are truly heard."
        />
        <div className="why-us-grid">
          {whyChooseUsItems.map((item, index) => (
            <motion.div
              className="why-us-card"
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="why-us-card-top">
                <span>{item.number} / 04</span>
                <span className="why-us-icon">{icons[index]}</span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 5. Consultation Process Section
function Visit() {
  return (
    <section className="visit-section section-pad" id="visit">
      <div className="container visit-layout">
        <div className="visit-intro">
          <SectionHeading
            eyebrow="THE CONSULTATION PROCESS"
            title={<>Your Journey Begins<br />With a <em>Conversation.</em></>}
            description="Knowing what to expect can make taking the first step feel calm and clear. Here is how your consultation experience unfolds."
          />
          <a className="text-link visit-link" href="#contact">
            View Clinic Contact Details <FiArrowRight />
          </a>
        </div>
        <div className="steps-list">
          {consultationSteps.map((step, index) => (
            <motion.div
              className="step-item"
              key={step.number}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <span className="step-number">{step.number}</span>
              <span className="step-copy">
                <strong>{step.title}</strong>
                <small>{step.description}</small>
              </span>
              <FiArrowUpRight className="step-arrow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 6. Doctor Profile Section
function Doctor() {
  return (
    <section className="doctor-section" id="doctor">
      <div className="doctor-photo">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85"
          alt="Practitioner portrait placeholder"
          loading="lazy"
        />
      </div>
      <div className="doctor-copy">
        <span className="eyebrow">MEET YOUR PRACTITIONER</span>
        <h2>Experience Meets<br /><em>Personal Attention.</em></h2>
        <p className="doctor-placeholder">
          Get to know the practitioner behind the clinic, their professional background and their approach to patient consultations.
        </p>
        <div className="doctor-signature">
          <strong>{clinic.doctorName}</strong>
          <span>{clinic.doctorCredentials}</span>
          <span style={{ marginTop: '2px', opacity: 0.85 }}>{clinic.doctorExperience}</span>
        </div>
        <span className="doctor-label">PRACTITIONER PROFILE — EDITABLE PLACEHOLDER</span>
      </div>
    </section>
  )
}

// 7. FAQ Section
function FAQ() {
  const [active, setActive] = useState(0)
  return (
    <section className="faq-section section-pad" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title={<>A Few Things<br />You <em>Should Know.</em></>}
            description="Clear answers to common questions about preparing for your visit and understanding our consultation approach."
          />
          <span className="faq-side-note">
            STILL HAVE A QUESTION?<br />
            <a href="#contact">CONTACT THE CLINIC <FiArrowUpRight /></a>
          </span>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${active === index ? 'is-open' : ''}`} key={faq.question}>
              <button
                className="faq-question"
                aria-expanded={active === index}
                onClick={() => setActive(active === index ? -1 : index)}
              >
                <span>
                  <i>0{index + 1}</i>
                  {faq.question}
                </span>
                <span className="faq-toggle">
                  {active === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 8. Final CTA Section
function Contact({ onBook }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-art">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=85"
          alt="Warm natural interior detail in a calm, welcoming space"
          loading="lazy"
        />
      </div>
      <div className="contact-panel">
        <span className="eyebrow">YOUR WELLBEING MATTERS</span>
        <h2>Begin With a<br /><em>Conversation.</em></h2>
        <p>
          Take the first step towards understanding your healthcare options with a personal consultation.
        </p>
        <button className="button button-light" onClick={onBook}>
          Book Your Appointment <FiArrowUpRight />
        </button>
        <div className="contact-details">
          <div>
            <FiPhone />
            <span>
              <small>CALL THE CLINIC</small>
              <strong>{clinic.phone}</strong>
            </span>
          </div>
          <div>
            <FiMail />
            <span>
              <small>EMAIL</small>
              <strong>{clinic.email}</strong>
            </span>
          </div>
          <div>
            <FiMapPin />
            <span>
              <small>CLINIC LOCATION</small>
              <strong>{clinic.address}</strong>
            </span>
          </div>
          <div>
            <FiClock />
            <span>
              <small>CONSULTATION HOURS</small>
              <strong>{clinic.hours}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// 9. Footer Section
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-col">
          <BrandMark />
          <p>{clinic.shortDescription}</p>
        </div>
        <div className="footer-nav-col">
          <span className="footer-label">EXPLORE</span>
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <div className="footer-nav-col">
          <span className="footer-label">CONSULTATION</span>
          <a href="#contact">Contact Details</a>
          <a href="#faq">Frequently Asked Questions</a>
          <a href="#home">Back to Top ↑</a>
        </div>
        <div className="footer-social">
          <span className="footer-label">CLINIC UPDATES</span>
          <div>
            <a href="#contact" aria-label="Instagram profile placeholder"><FiInstagram /></a>
            <a href="#contact" aria-label="Facebook profile placeholder"><FiFacebook /></a>
          </div>
          <small>Social profile channels to be connected.</small>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</span>
        <span>PERSONALISED CARE · CLINIC DETAILS PENDING VERIFICATION</span>
      </div>
      <div className="medical-note">
        <div className="container">
          <FiCheck />
          <p>
            Website information is general and does not replace professional medical advice, diagnosis or treatment. Homeopathy should not be used to delay or replace evidence-based medical care. Do not discontinue prescribed medications without consulting your qualified healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const openAppointment = () => setAppointmentOpen(true)
  const closeAppointment = () => setAppointmentOpen(false)

  return (
    <>
      <Header onBook={openAppointment} />
      <main>
        <Hero onBook={openAppointment} />
        <About />
        <Consultations />
        <WhyChooseUs />
        <Visit />
        <Doctor />
        <FAQ />
        <Contact onBook={openAppointment} />
      </main>
      <Footer />
      <AppointmentModal open={appointmentOpen} onClose={closeAppointment} />
    </>
  )
}
