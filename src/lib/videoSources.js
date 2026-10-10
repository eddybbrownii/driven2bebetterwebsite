/*
  VIDEO SOURCES
  Each source knows how to turn a share link into something the
  player can show. To support a new host, add an entry here:

    type: 'iframe' for hosted players (YouTube, Vimeo, ...)
          'video'  for a plain video file (.mp4) you host yourself
    getSrc(link): returns the address to play, or null if the link
                  doesn't look right
*/

function parseUrl(link) {
  try {
    return new URL(link)
  } catch {
    return null
  }
}

// Handles youtu.be/ID, youtube.com/watch?v=ID, /embed/ID, /shorts/ID, /live/ID
export function getYouTubeId(link) {
  const url = parseUrl(link)
  if (!url) return null

  const host = url.hostname.replace(/^(www|m)\./, '')
  let id = null

  if (host === 'youtu.be') {
    id = url.pathname.split('/')[1]
  } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    if (url.pathname === '/watch') {
      id = url.searchParams.get('v')
    } else {
      const match = url.pathname.match(/^\/(embed|shorts|live)\/([^/]+)/)
      id = match ? match[2] : null
    }
  }

  return id && /^[\w-]{11}$/.test(id) ? id : null
}

// Handles vimeo.com/ID and unlisted links like vimeo.com/ID/HASH
export function getVimeoEmbed(link) {
  const url = parseUrl(link)
  if (!url || !url.hostname.endsWith('vimeo.com')) return null

  const match = url.pathname.match(/^\/(?:video\/)?(\d+)(?:\/([\da-f]+))?/)
  if (!match) return null

  const [, id, hash] = match
  const privateHash = hash || url.searchParams.get('h')
  return `https://player.vimeo.com/video/${id}${privateHash ? `?h=${privateHash}` : ''}`
}

export const videoSources = {
  youtube: {
    type: 'iframe',
    getSrc(link) {
      const id = getYouTubeId(link)
      return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null
    },
  },

  vimeo: {
    type: 'iframe',
    getSrc: getVimeoEmbed,
  },

  file: {
    type: 'video',
    getSrc(link) {
      return link || null
    },
  },
}
