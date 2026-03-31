# rummanriyaz.com — Personal Portfolio

Personal portfolio for **Rumman Riyaz** — Software Engineer, PMP-certified Technical Project Manager, and Founder of [Forma AI](https://formaai.com.au). Built to signal technical credibility to engineers and business credibility to clients and hiring managers.

## Project structure

```
rumman-riyaz/
├── public/              # Static assets (favicon, og-image, profile photo)
├── src/
│   ├── components/      # One folder per component with co-located CSS
│   ├── data/            # Static data: projects, timeline, tech stack
│   ├── hooks/           # Custom React hooks
│   ├── services/        # External API calls (GitHub)
│   └── utils/           # Tiny utilities (cn classname helper)
├── functions/api/       # Cloudflare Pages Functions
│   └── contact.js       # Contact form → Resend API
├── .env.example
├── vite.config.js
└── wrangler.toml
```

## Run locally

```bash
npm install
cp .env.example .env          # add your RESEND_API_KEY
npm run dev                   # starts Vite dev server
# optionally, to test Pages Functions locally:
npx wrangler pages dev dist --port 8788
```

## Deploy

1. Push to GitHub
2. Connect to [Cloudflare Pages](https://pages.cloudflare.com/) — build command: `npm run build`, output: `dist`
3. Add `RESEND_API_KEY` as an environment secret in the Cloudflare Pages dashboard
4. Point `rummanriyaz.com` to the Cloudflare Pages deployment via DNS

## Tech

- **React 18** + **Vite 4** — frontend
- **Plain CSS** — one file per component, no Tailwind
- **Cloudflare Pages** — hosting
- **Cloudflare Pages Functions** — serverless contact form handler
- **Resend API** — email delivery for contact form
- **GitHub REST API** — live repo feed (public, no auth)

## Contact form

The contact form POSTs to `/api/contact`, handled by `functions/api/contact.js`. The function calls the Resend API to send an email. The `RESEND_API_KEY` is stored as a Cloudflare Pages secret — it is never exposed to the client.

---

Built by [Rumman Riyaz](https://rummanriyaz.com)
