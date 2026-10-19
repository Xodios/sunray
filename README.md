# SunRay – website

A one-page website in French for the SunRay association, built from the flyer and the association's objectives.
It has no build step and no outside dependencies: open `index.html` in a browser to see it.

## What's in the folder

| File | What it is |
| --- | --- |
| `index.html` | The site: welcome, who it's for, the six activities, how it works, the association and its values, partners, contact |
| `mentions-legales.html` | Legal notice page. **Fill this in before going live** (see below) |
| `assets/css/style.css` | Colours, fonts and layout. The brand colours are at the top of the file |
| `assets/js/main.js` | Mobile menu, the "Appeler / Écrire" bar on phones, and the contact form |
| `assets/img/` | Photos taken from the flyer (enlarged for the web), the SunRay logo as SVG (navy and white versions), the sun on its own, and the image shown when the link is shared |
| `assets/fonts/` | The Lexend font, stored with the site (no Google Fonts, so no tracking) |
| `favicon.*`, `apple-touch-icon.png` | Browser tab and home-screen icons |

## Before going live

1. **Fill in `mentions-legales.html`**: head-office address, RNA number, the name of the person responsible for publication, and the web host. The parts to fill in are highlighted in pink.
2. **Check the text that isn't on the flyer.** These parts came from the association's objectives or were written for the site:
   - the three steps under "Comment ça se passe ?"
   - "Et aussi : des ateliers d'échange et de porte-parole…"
   - the line about preventing delinquency in "Agir avec nous"
3. **Once you have a web address**, replace `assets/img/og-sunray.jpg` in the `og:image` line near the top of `index.html` with the full address (for example `https://www.your-site.fr/assets/img/og-sunray.jpg`) so the preview image appears when the link is shared.
4. **Photos**: the current images come from the flyer. To use real photos, keep the same file names in `assets/img/` (a 16:9 landscape image for each activity) or change the paths in `index.html`.

## Contact form

The form doesn't need a server. When someone sends it, their email app opens with the message already written to sunraynice@gmail.com, and they just press send. If you later want messages delivered automatically, a service like Formspree or Netlify Forms can be plugged in.

## Changing the phone number or email

They appear in several places. Search and replace in `index.html`, `mentions-legales.html` and `assets/js/main.js`:
- `06&nbsp;56&nbsp;85&nbsp;83&nbsp;34` (the number as shown)
- `+33656858334` (the number in "tap to call" links)
- `sunraynice@gmail.com`

## Putting it online

This is a static site, so any web host works:
- **Netlify**: drag the whole `Sunray` folder onto Netlify Drop. It's free and gives you an address straight away; you can connect your own domain later.
- **GitHub Pages**: put the files in a repository and turn on Pages.
- **Classic host (OVH, o2switch…)**: upload the folder's contents to the `www` folder by FTP.
