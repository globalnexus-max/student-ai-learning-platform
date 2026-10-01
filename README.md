# Student AI Learning Platform

A modern adaptive learning platform for students, teachers, and administrators. The app helps learners improve through AI-guided recommendations, progress analytics, and personalized study paths.

## Project goals

- Personalized learning journeys for each student
- AI tutor that explains concepts and recommends the next task
- Course dashboard with progress and engagement metrics
- Teacher/admin visibility into student status and support requirements
- Production-ready architecture using modern web technologies

## Stack

- Frontend: Next.js 14
- Backend: Next.js API routes + FastAPI-ready structure
- Database: PostgreSQL + Prisma
- Authentication: NextAuth / Clerk-ready
- AI: OpenAI API
- Hosting: Vercel + Render / Railway

## Current phase

This repo contains the MVP foundation and the next phase introduces:

1. Authentication and user roles
2. PostgreSQL schema and Prisma models
3. AI tutor endpoint and adaptive recommendation engine
4. Progress tracking and assessment loops
5. Admin analytics dashboard
6. Deployment and production hardening

## Local development

1. Copy `.env.example` to `.env.local`
2. Install dependencies:
   npm install
3. Generate Prisma client:
   npx prisma generate
4. Run the app:
   npm run dev

## Key routes

- `/` landing page
- `/dashboard` student dashboard
- `/courses` catalog
- `/courses/[id]` course detail
- `/admin` admin overview
- `/api/ai` sample AI endpoint
- `/api/tutor` adaptive tutor endpoint
- `/api/progress` progress update logic

## Roadmap

### Phase 1: Foundation
- App shell and landing page
- Dashboard, courses, admin views
- Mock data and UI polish

### Phase 2: Learning engine
- Student profiles
- Course enrollment
- Assignment and quiz data
- Progress tracking

### Phase 3: AI coaching
- OpenAI-powered tutoring
- Personalized study plans
- Weak-topic analysis and recommendations

### Phase 4: Operations
- Notifications and reports
- Teacher/admin workflows
- Deployment and testing

## Notes

This project is intentionally structured so it can evolve from an MVP demo into a production-grade learning system without a major rewrite.
