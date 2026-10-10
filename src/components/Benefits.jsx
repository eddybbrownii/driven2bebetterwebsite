import { benefits } from '../data/benefits.js'
import './Benefits.css'

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit" key={benefit.title}>
              <div className="icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
