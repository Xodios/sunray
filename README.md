# SunRay – website

The SunRay association's website, in **French, English and Arabic**. Visitors choose their language from the bar at the top of every page (Français / English / العربية).
There's no build step and nothing to install: open `index.html` in a browser to see it.

## What's in the folder

| File | What it is |
| --- | --- |
| `index.html` | The French site (main page) |
| `en/index.html` | The English site |
| `ar/index.html` | The Arabic site (reads right to left) |
| `mentions-legales.html`, `en/…`, `ar/…` | The legal notice in each language |
| `assets/css/style.css` | Colours, fonts and layout, shared by all languages |
| `assets/js/main.js` | Mobile menu, the "Call / Email" bar on phones, and the contact form |
| `assets/img/` | Photos from the flyer, the SunRay logo (`logo-sunray-240` and `logo-sunray-420`, in .webp and .jpg), and the preview images shown when the link is shared (`og-sunray.jpg`, `og-sunray-en.jpg`, `og-sunray-ar.jpg`) |
| `favicon-32.png`, `favicon.ico`, `icon-192.png`, `apple-touch-icon.png` | Browser-tab and phone home-screen icons, made from the logo |
| `assets/fonts/` | Lexend, plus Readex Pro for Arabic, stored with the site (no Google Fonts, so no tracking) |

## Changing the text

Each language has its own page, so a change in French also has to be made in `en/index.html` and `ar/index.html`.
In the Arabic page, phone numbers and the email address are wrapped in `<bdi dir="ltr">…</bdi>`. Keep that wrapper, otherwise the number shows backwards.

## Updating the site on GitHub

In your repository, click **Add file → Upload files** and drag in **everything inside** the Sunray folder (including the `en` and `ar` folders). GitHub replaces the files that changed and adds the new ones. Click **Commit changes**; the site updates within a few minutes.

## Still to do

1. **Legal notice**: add the association's registration number (RNA) and the name of the publication director. The blanks are highlighted in pink.
2. **Translations**: have the English and especially the Arabic pages read by a native speaker before announcing them.
3. **Share preview**: the `og:image` line near the top of each page uses a relative path. Replace it with the full address of the image (e.g. `https://your-name.github.io/sunray/assets/img/og-sunray.jpg`) so the preview appears when the link is shared.
4. **Photos**: the images come from the flyer. To use real photos, keep the same file names in `assets/img/` (16:9 landscape for each activity).

## "Faire un don" button

For now it opens an email to the association with the subject "Je souhaite faire un don à SunRay". If you create an online donation page (HelloAsso, for example), replace that button's `mailto:` link with the page's address in `index.html`, `en/index.html` and `ar/index.html`.

## Contact form

The form doesn't need a server. When someone sends it, their email app opens with the message already written to sunraynice@gmail.com, in the language of the page, and they just press send.

## Changing the phone number or email

Search and replace in all the `.html` files and in `assets/js/main.js`:
- `06&nbsp;56&nbsp;85&nbsp;83&nbsp;34` (the number as shown)
- `+33656858334` (the number in "tap to call" links)
- `sunraynice@gmail.com`

## Old files no longer used

These came with the first version and can be deleted: `favicon.svg`, `assets/img/logo-sunray.svg`, `assets/img/logo-sunray-blanc.svg`, `assets/img/soleil.svg`.
