# Driven 2 Be Better

Healthy People Go Further.

The Driven 2 Be Better website, built with React and Vite. It started as a
single HTML offer page (`2ndofferpage.html` + `styles.css`) and was converted
into components so it can grow one piece at a time.

## Run it

You need [Node.js](https://nodejs.org) 20.19 or newer.

```bash
npm install     # first time only
npm run dev     # start the site at http://localhost:5173
```

Other commands:

```bash
npm run build   # make the production version in dist/
npm run preview # look at the production version locally
```

## Adding videos

Open `src/data/videos.js`, paste a video's share link into its `url`, and
save. YouTube links work as-is, including unlisted videos. Empty `url`s show
as "Coming soon" slots.

To move a video somewhere else later, change its `source` and `url`. Supported
sources (`youtube`, `vimeo`, `file`) live in `src/lib/videoSources.js`;
adding a new host means adding one entry there.

## How it's organized

```
index.html                 page shell (title, fonts) - React mounts into #root
src/
  main.jsx                 starts React and the router
  App.jsx                  header, footer, and which page shows at which address
  index.css                colors, resets and shared classes
  assets/                  photos (web-sized copies)
  data/
    benefits.js            the five benefit cards
    videos.js              the video list and categories
  lib/
    videoSources.js        turns YouTube/Vimeo/file links into playable addresses
  pages/
    HomePage.jsx           /        the original offer page
    VideosPage.jsx         /videos  the video library
    NotFoundPage.jsx       any other address
  components/
    Header.jsx             brand + navigation
    Hero.jsx               headline, story and photo collage
    AssessmentForm.jsx     the sign-up card
    Benefits.jsx           benefit cards
    RealLife.jsx           "Health Has to Work Where Life Actually Happens"
    FinalCta.jsx           outcomes + "Let's Go Further" button
    Footer.jsx             footer links + disclaimer
    VideoPlayer.jsx        plays one video, or shows a placeholder
    ScrollManager.jsx      scrolls to the top (or to a #section) on page change
```

Each component and page has a `.css` file with the same name next to it.

## Hosting note

The site uses real addresses like `/videos`. When you put it online, the host
needs to send every address to `index.html` (often called a "single-page app"
or "rewrite" setting). Netlify and Vercel handle this with a one-line setting;
GitHub Pages needs a workaround.

## Not built yet

- On phones (under 900px wide) the menu shows only the "Take the Assessment"
  button, so the Videos page can't be reached from the menu on mobile.
  A mobile menu is the next piece to build.
- The assessment form doesn't send anywhere. `handleSubmit` in
  `AssessmentForm.jsx` just shows a "coming soon" note.
- The "Real Life" section has no background photo (see the note in
  `RealLife.css`).
- The footer links (Privacy Policy, Terms, Contact) don't go anywhere.
