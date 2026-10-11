# Community Co-op Hub

A responsive, accessible website for a community co-op. Visitors can browse upcoming events and sign up as volunteers.

**Live site:** https://coop-hub-six.vercel.app
**Code:** https://github.com/ArpitaBhattacharjee/coop-hub

## Tech stack
- Next.js (App Router) and TypeScript
- Supabase (PostgreSQL)
- REST API routes (Next.js route handlers)
- CSS (mobile-first, responsive)
- Deployed on Vercel

## Features
- Events page loaded from the database through `GET /api/events`
- Volunteer sign-up form that saves to the database through `POST /api/volunteers`
- Server-side validation (name required, valid email)
- Accessible design: semantic HTML, labelled form fields, skip link, visible focus styles, live status messages
- SEO basics: page title and description

## Run locally
1. `npm install`
2. Create `.env.local` with `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`
3. `npm run dev`
4. Open http://localhost:3000

## Database tables
- `events` (title, event_date, location, description)
- `volunteers` (name, email, message, created_at)