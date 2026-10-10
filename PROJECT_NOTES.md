# Project notes

A record of where things stand, so the work can be picked up again later.
If you start a new chat about this, share this file along with the project.

## What this is

The Driven 2 Be Better website ("Healthy People Go Further"), built with React
and Vite. It started as the class offer page in `~/Driven 2 Be Better`
(`2ndofferpage.html` + `styles.css`, repo `eddybbrownii/Driven-2-Be-Better`).
That folder stays as the original and isn't changed by this project.

## Where things are

- On the Mac: `~/driven2bebetter`
- GitHub (public): https://github.com/eddybbrownii/driven2bebetterwebsite
- Hosting: Vercel, through the linked GitHub account. Every push to `main`
  should deploy.

## History

- 2026-10-08: React version built in a Claude mobile chat and downloaded
  as `driven2bebetter.zip`. The empty GitHub repo was created the same day.
- 2026-10-10: unzipped to `~/driven2bebetter`, built with no errors, and pushed.
  GitHub's starter README commit was kept in the history, not overwritten.
  Added `vercel.json` so addresses like `/videos` load when opened directly.

## To check next

- [ ] The Vercel deploy worked. If no project shows up in Vercel, it needs to
      be added once: Vercel → Add New → Project → import
      `driven2bebetterwebsite` (the Vite settings are detected).
- [ ] On the live site, open `/videos` directly and refresh it. It should
      not show a 404.

## Not built yet

- Mobile menu: under 900px wide, only the "Take the Assessment" button
  shows, so the Videos page can't be reached on phones.
- The assessment form doesn't send anywhere (`handleSubmit` in
  `src/components/AssessmentForm.jsx` shows a "coming soon" note).
- The video slots are empty. Paste share links into `url` in
  `src/data/videos.js`.
- The "Real Life" section has no background photo (see `RealLife.css`).
- The footer links (Privacy Policy, Terms, Contact) go nowhere.
