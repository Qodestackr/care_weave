# CareWeave 🏥

> A modern, open-source telehealth and healthcare appointment platform for connecting patients with healthcare providers.

[![GitHub](https://img.shields.io/badge/GitHub-Open%20Source-blue)](https://github.com/Qodestackr/CareWeave)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)

## Overview

CareWeave is a comprehensive healthcare platform that enables seamless appointment booking, telehealth consultations, and in-person medical visits. Originally developed as a Kenyan healthcare solution, it's now available as an open-source project for the global community.

The platform bridges the gap between patients seeking medical care and healthcare providers, offering a user-friendly interface for managing appointments, doctor profiles, consultations, and healthcare services.

## ✨ Features

### For Patients
- 🔍 **Doctor Discovery** - Search and filter doctors by specialty, location, and availability
- 📅 **Smart Appointment Booking** - Real-time availability and flexible scheduling
- 💻 **Telehealth Visits** - Video consultations powered by Stream.io
- 🏥 **In-Person Visits** - Book physical appointments with nearby healthcare providers
- 👤 **User Profiles** - Comprehensive patient profile management
- 💊 **Prescriptions** - Access and manage digital prescriptions
- 📊 **Medical History** - Organized health records and appointment history
- 🔐 **Secure Authentication** - NextAuth integration with password encryption

### For Healthcare Providers
- 🎯 **Doctor Onboarding** - Multi-step verification and profile creation
- 📋 **Profile Management** - Detailed professional credentials, specializations, and experience
- 📅 **Availability Management** - Set weekly availability slots and manage schedules
- 💰 **Pricing Control** - Set hourly consultation rates
- 👥 **Patient Management** - View and manage patient consultations
- 📈 **Analytics Dashboard** - Track appointments, revenue, and performance metrics
- 💬 **Messaging System** - Direct communication with patients
- 🏥 **Practice Information** - Add hospital/clinic details and services offered

### Platform Features
- 🌍 **Multi-language Support** - Internationalization ready
- 🎨 **Dark Mode** - Theme switching capabilities
- 📱 **PWA Ready** - Progressive Web App support for offline access
- 🔐 **Role-Based Access** - Patient, Doctor, and Admin roles
- 💳 **Payment Integration** - Paystack integration for payments
- 📧 **Email Notifications** - Automated notifications via Resend
- 📄 **Document Management** - Upload and store medical documents
- 🗂️ **E-Triage System** - Initial patient assessment workflow

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **UI Components**: 
  - shadcn/ui (Radix UI based)
  - Headless UI
  - Flowbite
- **Styling**: Tailwind CSS with custom animations
- **Form Management**: React Hook Form + Zod validation
- **State Management**: React Context API
- **Real-time Communication**: Stream.io Video SDK
- **Rich Text**: React Quill
- **Icons**: Heroicons, Lucide, Tabler Icons
- **Utilities**: SWR, date-fns, clsx

### Backend
- **Framework**: Next.js API Routes
- **Database**: SQLite + Prisma ORM
- **Authentication**: NextAuth.js with password encryption (bcrypt)
- **Email**: Nodemailer + Resend
- **File Upload**: UploadThing
- **PDF Generation**: React PDF + jsPDF AutoTable

### Services
- **Video Calls**: Stream.io Video React SDK
- **Payments**: Paystack
- **PWA**: @ducanh2912/next-pwa

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL or SQLite database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Qodestackr/CareWeave.git
   cd CareWeave
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your configuration:
   ```env
   # Database
   DATABASE_URL="file:./dev.db"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # Stream.io
   NEXT_PUBLIC_STREAM_KEY=your_stream_key
   NEXT_PUBLIC_STREAM_API_URL=your_stream_api_url
   
   # Paystack
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_key
   PAYSTACK_SECRET_KEY=your_paystack_secret
   
   # UploadThing
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APP_ID=your_uploadthing_app_id
   
   # Email (Resend)
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                      # Next.js app directory
├── components/               # Reusable React components
├── context/                  # React Context API state management
├── lib/                      # Utility functions and helpers
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
├── styles/                   # Global styles
├── types/                    # TypeScript type definitions
├── utils/                    # Helper utilities
├── config/                   # Configuration files
├── constants/                # Application constants
└── imported/                 # Legacy/imported components
```

## 🔄 Key Workflows

### Doctor Onboarding
1. Registration with basic info (name, email, password)
2. Bio data collection (name, DOB, gender)
3. Professional profile setup (license, experience)
4. Contact information
5. Education and specialization
6. Practice details (hospital, services, rates)
7. Additional documents and accomplishments
8. Profile verification and approval

### Patient Appointment Booking
1. Browse and search doctors
2. View doctor profiles and availability
3. Select date and time slot
4. Complete appointment details
5. Process payment (if applicable)
6. Receive confirmation and join telehealth link
7. Complete consultation
8. Access prescriptions and medical notes

## 🔐 Authentication & Authorization

- **Patient Role**: Can view doctors, book appointments, access personal health info
- **Doctor Role**: Can manage profile, availability, appointments, and patient records
- **Admin Role**: Full platform access for user and content management

All passwords are securely hashed using bcrypt before storage.

## 📚 Database Schema

The application uses Prisma ORM with the following primary entities:

- **User**: Patient and provider accounts
- **DoctorProfile**: Extended doctor information
- **Appointment**: Booking records
- **Service**: Medical services offered
- **Prescription**: Digital prescriptions
- **Insurance**: Insurance provider details

## 🤝 Contributing

We welcome contributions from the community! To contribute:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write clear, descriptive commit messages
- Test your changes before submitting a PR
- Update documentation as needed

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? [Open an issue](https://github.com/Qodestackr/CareWeave/issues) with:
- Clear description of the problem/suggestion
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots (if applicable)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [https://CareWeave.vercel.app](https://CareWeave.vercel.app)
- **Repository**: [https://github.com/Qodestackr/CareWeave](https://github.com/Qodestackr/CareWeave)
- **Issues**: [https://github.com/Qodestackr/CareWeave/issues](https://github.com/Qodestackr/CareWeave/issues)

## 📞 Support

For support, open an issue on GitHub or contact the maintainers.

---

**Built with ❤️ for open-source healthcare technology**

Made by [@Qodestackr](https://github.com/Qodestackr)
