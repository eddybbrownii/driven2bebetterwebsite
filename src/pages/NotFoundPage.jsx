import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>This road doesn't go anywhere.</h1>
        <p className="lead">
          <Link to="/">Head back to the home page →</Link>
        </p>
      </div>
    </section>
  )
}
