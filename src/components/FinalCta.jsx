import './FinalCta.css'

const outcomes = [
  '⛰️ Stronger Body',
  '🧠 Calmer Mind',
  '🧭 Greater Confidence',
  '📍 More Freedom',
]

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-grid">
        <div className="outcomes">
          {outcomes.map((outcome) => (
            <span key={outcome}>{outcome}</span>
          ))}
        </div>

        <a href="#assessment" className="big-cta">
          LET'S GO FURTHER →
        </a>
      </div>
    </section>
  )
}
