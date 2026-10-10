import AssessmentForm from './AssessmentForm.jsx'
import './Hero.css'

import scales from '../assets/scales.jpg'
import tapeMeasure from '../assets/tape-measure.jpg'
import journal from '../assets/journal.jpg'
import tractorTrailer from '../assets/tractor-trailer.jpg'
import plane from '../assets/plane.jpg'
import cityBus from '../assets/city-bus.jpg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Decorative collage items */}
      <img src={scales} className="collage scale" alt="Bathroom scale" />
      <img src={tapeMeasure} className="collage tape" alt="Measuring tape" />
      <img src={journal} className="collage journal" alt="Journal" />
      <img
        src={tractorTrailer}
        className="collage travel-photo truck-photo"
        alt="Truck traveling on the highway"
      />
      <img
        src={plane}
        className="collage travel-photo plane-photo"
        alt="Airplane"
      />
      <img
        src={cityBus}
        className="collage travel-photo bus-photo"
        alt="Bus traveling"
      />

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">REAL PEOPLE • REAL LIFE • REAL PROGRESS</p>

          <h1>
            Your Surgery
            <br />
            Is a Tool. <span>Let's Build on It.</span>
          </h1>

          <h2>Considering weight-loss surgery—or already on the other side?</h2>

          <p className="lead">
            Take a free{' '}
            <strong>Health, Movement and Mindset Assessment</strong> designed
            to help you look beyond the scale and explore practical ways to
            support your health at home, at work, or on the road.
          </p>

          <div className="personal-story">
            <p>
              I had weight-loss surgery in <strong>August 2020</strong>. I've{' '}
              <strong>lost 180 pounds and kept it off.</strong>
            </p>

            <p>
              Now I use my experience as both a{' '}
              <strong>professional driver and yoga teacher</strong> to explore
              practical ways to move, feel and live better— wherever life takes
              us.
            </p>
          </div>

          <p className="script-line">Small steps. Big changes.</p>
        </div>

        <AssessmentForm />
      </div>
    </section>
  )
}
