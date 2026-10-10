import './RealLife.css'

export default function RealLife() {
  return (
    <section className="real-life" id="story">
      <div className="real-life-overlay"></div>

      <div className="container real-life-content">
        <div>
          <p className="eyebrow light">DRIVEN 2 BE BETTER</p>

          <h2>
            Health Has to Work
            <br />
            Where Life Actually Happens.
          </h2>

          <p className="locations">
            At home. At work. In a hotel room.
            <br />
            At a rest stop. Between flights.
            <br />
            Or after a long day behind the wheel.
          </p>

          <p>
            Driven 2 Be Better is about finding practical ways to keep moving
            forward—even when your life doesn't look like the examples in the
            brochure.
          </p>
        </div>

        <div className="travel-message">
          <span>Same Journey.</span>
          <strong>Bigger Possibilities.</strong>
        </div>
      </div>
    </section>
  )
}
