# GVT

Solar EPC marketing site for homes, societies, and industry across Delhi, UP, Haryana, Rajasthan, Uttarakhand, and Punjab.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set:

- `GMAIL_USER` — Gmail account that sends form emails
- `GMAIL_APP_PASSWORD` — Google App Password for that account
- `CONTACT_TO` — inbox that receives inquiries (e.g. `info@gvtworld.com`)

Optional WhatsApp Cloud API vars are documented in `.env.example`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
