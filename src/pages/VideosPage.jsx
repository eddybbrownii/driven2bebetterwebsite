import { categories, videos } from '../data/videos.js'
import VideoPlayer from '../components/VideoPlayer.jsx'
import './VideosPage.css'

export default function VideosPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">DRIVEN 2 BE BETTER • VIDEOS</p>
          <h1>
            Move With Me. <span>Wherever You Are.</span>
          </h1>
          <p className="lead">
            Short classes and practical ideas you can use at home, at work, or
            on the road.
          </p>
        </div>
      </section>

      <section className="video-library">
        <div className="container">
          {categories.map((category) => {
            const categoryVideos = videos.filter(
              (video) => video.category === category.id,
            )

            if (categoryVideos.length === 0) return null

            return (
              <div className="video-category" key={category.id}>
                <h2>{category.title}</h2>

                <div className="video-grid">
                  {categoryVideos.map((video) => (
                    <article className="video-card" key={video.id}>
                      <VideoPlayer video={video} />
                      {video.title && <h3>{video.title}</h3>}
                      {video.description && <p>{video.description}</p>}
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
