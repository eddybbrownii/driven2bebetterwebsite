import { useState } from 'react'
import './AssessmentForm.css'

export default function AssessmentForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    // TODO: send { firstName, email } to the email / assessment service.
    // Nothing is sent anywhere yet.
    setSubmitted(true)
  }

  return (
    <aside className="assessment-card" id="assessment">
      <h2>
        Take the Free
        <br />
        Health, Movement and
        <br />
        Mindset Assessment
      </h2>

      <p>
        Discover where you are today and identify areas you may want to explore
        next.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">TAKE THE FREE ASSESSMENT →</button>
      </form>

      {submitted && (
        <p className="form-status" role="status">
          Thanks, {firstName}! The assessment isn't live yet — it's coming
          soon.
        </p>
      )}

      <small>🔒 Your information stays private. No spam.</small>

      <p className="card-script">A healthier you can take you further.</p>
    </aside>
  )
}
