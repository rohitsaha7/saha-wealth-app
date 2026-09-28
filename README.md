# SAHATRA

**plan protect grow**

Official website and lead-management system for SAHATRA (formerly Prime Wealth), a financial-solutions business based in Lumding & Guwahati, Assam. It covers investment, insurance, loans and financial planning.

Live site: [your Vercel URL]

## Features

- Responsive public website (no login needed for customers)
- Enquiry form: Investment / Insurance / Loans / All Above
- Enquiries saved to MongoDB
- [Planned] Simple admin/CRM view for follow-ups
- [Planned] Insurance expiry reminders

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS, React Router, Lucide icons
**Backend:** Node.js, Express.js
**Database:** MongoDB with Mongoose
**Deployment:** Vercel (frontend), Render (backend)

## Project Structure

```
sahatra/
├── frontend/     # React + Vite app
└── backend/      # Express API
```

## Getting Started

### Prerequisites
- Node.js 18+
- A MongoDB connection string (MongoDB Atlas free tier works)

### 1. Clone the repo
```bash
git clone [your repo URL]
cd sahatra
```

### 2. Backend
```bash
cd backend
npm install
```
Create a `.env` file (see `.env.example`):
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```
Run:
```bash
npm run dev
```

### 3. Frontend
```bash
cd frontend
npm install
```
Create a `.env` file:
```
VITE_API_URL=http://localhost:5000
```
Run:
```bash
npm run dev
```

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/leads | Submit a new enquiry |
| GET | /api/leads | List enquiries (admin only) |

## Deployment

- Frontend: deployed on Vercel, with `VITE_API_URL` set to the backend URL
- Backend: deployed on Render, with `MONGO_URI` and `FRONTEND_URL` set as environment variables

## Contact

Phone / WhatsApp: 8638499045
Email: wealthgate6@gmail.com

## License

All rights reserved. © SAHATRA