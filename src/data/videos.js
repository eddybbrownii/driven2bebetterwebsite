/*
  VIDEO LIBRARY
  This is the only file you need to edit to add or move videos.

  - To add a video: paste its share link into `url`.
    (YouTube "Share" links work, including unlisted videos.)
  - Leave `url` empty ('') to show a "Coming soon" slot.
    `title` and `description` can stay empty ('') until you have them.
  - To move a video to a different host later, change `source` and `url`.
    Supported sources are listed in src/lib/videoSources.js
    ('youtube', 'vimeo', or 'file' for a video file you host yourself).
  - `category` must match one of the category ids below.
*/

export const categories = [
  { id: 'seated', title: 'Seated Movement' },
  { id: 'road', title: 'On the Road' },
  { id: 'mindfulness', title: 'Mindfulness' },
]

export const videos = [
  {
    id: 'seated-shoulder-mobility',
    title: 'Seated Shoulder Mobility',
    description: 'A 20-minute seated class for your shoulders and upper back.',
    category: 'seated',
    source: 'youtube',
    url: '',
  },
  {
    id: 'road-1',
    title: '',
    description: '',
    category: 'road',
    source: 'youtube',
    url: '',
  },
  {
    id: 'mindfulness-1',
    title: '',
    description: '',
    category: 'mindfulness',
    source: 'youtube',
    url: '',
  },
]
