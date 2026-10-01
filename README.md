# Student AI Learning Platform

A modern adaptive learning platform for students, teachers, and administrators. The platform helps learners keep momentum through AI-guided recommendations, personalized curricula, analytics, and task planning.

## Features

- Student dashboard with progress tracking
- Adaptive tutor guidance
- Course catalog and course detail pages
- Teacher/admin analytics view
- Session-based auth foundation
- Prisma-ready data model for production expansion

## Stack

- Next.js 14
- Prisma + PostgreSQL
- OpenAI API
- TypeScript
- Vercel / Render deployment ready

## Setup

1. Copy `.env.example` to `.env.local`
2. Install dependencies:
   npm install
3. Generate Prisma client:
   npx prisma generate
4. Run development server:
   npm run dev

## Main routes

- `/`
- `/dashboard`
- `/courses`
- `/courses/[id]`
- `/admin`
- `/api/auth`
- `/api/tutor`
- `/api/progress`
- `/api/analytics`

## Production notes

This repository is intended as a foundation for a student learning platform that can evolve into a real, data-driven product with automated course personalization, AI recommendations, and admin oversight.
