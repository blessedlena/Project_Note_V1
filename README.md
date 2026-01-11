# Project_Note_V1 (Full-Stack Notes App)

**EN:** Fullstack notes app (React + Express/MongoDB) with Upstash rate limiting.
**DE:** Fullstack Notizen-App (React + Express/MongoDB) mit Upstash Rate Limiting.  

---

## English

### Features
- CRUD: **list / create / edit / delete** notes
- UI feedback: toasts, loading states
- **Rate limit (HTTP 429):** dedicated UI in the frontend
- **Production-ready:** backend serves the built frontend (`frontend/dist`)

### Tech Stack
React, React Router, Axios, Tailwind + DaisyUI · Node.js, Express · MongoDB (Mongoose) · Upstash Redis (`@upstash/ratelimit`)

### Local setup

** Backend**
```bash
cd backend
npm install
npm run dev
```

** Frontend**
```bash
cd frontend
npm install
npm run dev
```

### API (Quick)
Base: `/api/notes`
- `GET /` · `GET /:id`
- `POST /`
- `PUT /:id`
- `DELETE /:id`

### Production
```bash
cd frontend && npm run build
cd ../backend && NODE_ENV=production npm start
```

---


## Deutsch

### Features
- CRUD: Notizen **anzeigen / erstellen / bearbeiten / löschen**
- UI Feedback: Toasts, Loading States
- **Rate Limit (HTTP 429):** eigenes UI im Frontend
- **Production-ready:** Backend servt das gebaute Frontend (`frontend/dist`)

### Tech Stack
React, React Router, Axios, Tailwind + DaisyUI · Node.js, Express · MongoDB (Mongoose) · Upstash Redis (`@upstash/ratelimit`)

### Setup (lokal)


** Backend**
```bash
cd backend
npm install
npm run dev
```

** Frontend**
```bash
cd frontend
npm install
npm run dev
```

### API (Kurz)
Base: `/api/notes`
- `GET /` · `GET /:id`
- `POST /`
- `PUT /:id`
- `DELETE /:id`

### Production
```bash
cd frontend && npm run build
cd ../backend && NODE_ENV=production npm start
```

---

