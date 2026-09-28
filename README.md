# CareWeave

Open-source telehealth and appointment platform connecting patients with healthcare providers. Originally built for the Kenyan market.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)

**Live demo:** https://CareWeave.vercel.app

## Features

**Patients**
- Search doctors by specialty, location, and availability
- Real-time appointment booking (telehealth or in-person)
- Video consultations via Stream.io
- Digital prescriptions, medical history, and document uploads
- E-triage for initial assessment

**Providers**
- Multi-step onboarding with verification
- Profile, credentials, and practice details
- Weekly availability and hourly rate management
- Patient consultation management and messaging
- Analytics dashboard for appointments and revenue

**Platform**
- Role-based access: Patient, Doctor, Admin
- Paystack payments, Resend email notifications
- PWA support, dark mode, i18n-ready

## Tech Stack

| Layer | Tools |
|---|---|
| Frontend | Next.js 14, React 18, TypeScript, Tailwind CSS, shadcn/ui, React Hook Form + Zod, SWR |
| Backend | Next.js API routes, Prisma, SQLite, NextAuth.js (bcrypt) |
| Services | Stream.io (video), Paystack (payments), Resend/Nodemailer (email), UploadThing (files) |

## Getting Started

**Prerequisites:** Node.js 18+, npm or yarn

```bash
git clone https://github.com/Qodestackr/CareWeave.git
cd CareWeave
npm install
cp .env.example .env.local
```

Configure `.env.local`:

```env
DATABASE_URL="file:./dev.db"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

NEXT_PUBLIC_STREAM_KEY=
NEXT_PUBLIC_STREAM_API_URL=

NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
PAYSTACK_SECRET_KEY=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

RESEND_API_KEY=
```

Set up the database and run:

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

Open http://localhost:3000.

## Project Structure

```
app/          Next.js app directory
components/   Reusable React components
context/      React Context providers
lib/          Utilities and helpers
prisma/       Schema and migrations
public/       Static assets
styles/       Global styles
types/        TypeScript types
utils/        Helper utilities
config/       Configuration
constants/    App constants
imported/     Legacy components
```

## Workflows

**Doctor onboarding:** register, bio data, professional profile, contact info, education/specialization, practice details and rates, supporting documents, admin verification.

**Patient booking:** search doctors, view profile and availability, pick a slot, enter details, pay, receive confirmation and telehealth link, consult, access prescriptions and notes.

## Data Model

Core Prisma entities: `User`, `DoctorProfile`, `Appointment`, `Service`, `Prescription`, `Insurance`.

## Contributing

1. Fork the repo and create a branch: `git checkout -b feature/your-feature`
2. Make your changes, following TypeScript best practices and running ESLint/Prettier
3. Commit with a clear message and push
4. Open a pull request

Maintained by [@Qodestackr](https://github.com/Qodestackr)
