import { videoSources } from '../lib/videoSources.js'
import './VideoPlayer.css'

export default function VideoPlayer({ video }) {
  const source = videoSources[video.source]
  const src = video.url && source ? source.getSrc(video.url) : null

  if (!src) {
    if (video.url) {
      console.warn(`Video "${video.id}": can't play this ${video.source} link:`, video.url)
    }

    return (
      <div className="video-frame video-placeholder">
        <span className="play-icon" aria-hidden="true">▶</span>
        <span className="placeholder-text">
          {video.url ? 'Video unavailable' : 'Coming soon'}
        </span>
      </div>
    )
  }

  if (source.type === 'video') {
    return (
      <div className="video-frame">
        <video src={src} controls preload="metadata" />
      </div>
    )
  }

  return (
    <div className="video-frame">
      <iframe
        src={src}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}
