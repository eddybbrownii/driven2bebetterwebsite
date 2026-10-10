import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container footer-grid">
        <div>
          <strong>Driven 2 Be Better</strong>
          <p>Healthy People Go Further</p>
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="container disclaimer">
        <p>
          Driven 2 Be Better provides educational wellness, movement and
          mindfulness information and is not a substitute for medical advice,
          diagnosis or treatment. Always follow the recommendations and
          restrictions provided by your surgeon and healthcare team.
        </p>
      </div>
    </footer>
  )
}
