# Remittra - Digital Wallet & Ajo (Group Savings) Platform

A full-stack demo application built for the Remittra Stage 1 Developer Task. Demonstrates end-to-end skills in authentication, data modeling, business logic, and responsive UI.

# Remittra - Digital Wallet & Ajo (Group Savings) Platform

A full-stack demo application built for the Remittra Stage 1 Developer Task. Demonstrates end-to-end skills in authentication, data modeling, business logic, and responsive UI.

## Quick Links
- **Live Demo**: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
- **GitHub**: [Your repo link]
- **Supabase Docs**: https://supabase.com/docs

## Tech Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS v4
- **Framework**: Next.js 16 (App Router)
- **Backend/Database**: Supabase (PostgreSQL with Row Level Security)
- **Auth**: Supabase Email/Password Auth
- **State Management**: React Hooks + Client-side Supabase
- **UI Components**: shadcn/ui

## Installation Guide

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** v18.x or higher (download from [nodejs.org](https://nodejs.org))
- **npm** or **yarn** package manager
- **Git** for version control
- A **Supabase account** (free at [supabase.com](https://supabase.com))

### Step 1: Clone the Repository

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/remittra-app.git
cd remittra-app
\`\`\`

### Step 2: Install Dependencies

\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

**Note**: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between React 19 and some UI packages. This is safe and recommended.

### Step 3: Set Up Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project credentials:
   - **Project URL** - Found in Settings > API
   - **Anon Public Key** - Found in Settings > API
   - **Database Password** - Save this securely

### Step 4: Create Environment Variables

Create a `.env.local` file in the project root:

\`\`\`bash
cp .env.example .env.local  # if available, or create manually
\`\`\`

Add these variables:
\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
\`\`\`

**Where to find these values:**
- Go to your Supabase project
- Click **Settings** (bottom left) → **API**
- Copy **Project URL** and **anon public** key into your `.env.local`

### Step 5: Create Database Tables

1. **In Supabase Dashboard:**
   - Click **SQL Editor** (left sidebar)
   - Click **New Query**

2. **Copy and paste the entire contents of:**
   \`\`\`
   scripts/001_create_schema.sql
   \`\`\`

3. **Execute the query** by clicking the **Run** button (or Ctrl+Enter)

   This will create:
   - All database tables (profiles, wallets, ajo_groups, etc.)
   - Row Level Security (RLS) policies for data protection
   - Automatic triggers for user initialization

**Expected output:** No errors, all tables created successfully

### Step 6: Run Locally

\`\`\`bash
npm run dev
\`\`\`

The app will start on **http://localhost:3000**

**What to see:**
- Landing page with Sign Up / Sign In options
- No console errors about Supabase
- Responsive design on mobile/desktop

### Step 7: Create Test Account

1. Click **Sign Up**
2. Enter email and password
3. You'll be redirected to check your email
4. In Supabase, find the confirmation email and click the link
5. You'll be redirected back - now you can sign in!

---

## Deployment Guide

### Deploy to Vercel (Recommended)

#### Prerequisites:
- GitHub account with your code pushed
- Vercel account (free at [vercel.com](https://vercel.com))

#### Steps:

1. **Go to [vercel.com](https://vercel.com) and sign in**

2. **Click "Add New" → "Project"**

3. **Select your GitHub repository** (remittra-app)

4. **Configure Project:**
   - Framework: Next.js (auto-detected)
   - Root Directory: . (current)
   - Build Command: npm run build
   - Output Directory: .next

5. **Add Environment Variables:**
   - Click **Environment Variables**
   - Add all three variables from your `.env.local`:
     \`\`\`
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=https://your-vercel-url.vercel.app
     \`\`\`

6. **Click "Deploy"** and wait for completion (2-3 minutes)

7. **Get your live URL** (looks like: `https://remittra-app-xyz.vercel.app`)

#### After First Deployment:

1. **Update Redirect URL** in Vercel environment variables:
   \`\`\`
   NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=https://your-actual-vercel-url.vercel.app
   \`\`\`

2. **Redeploy:** Click the latest deployment → "Redeploy"

3. **Test the live app** - everything should work now!

### Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select GitHub and authorize
4. Choose your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables
7. Deploy!

---

## Troubleshooting

### Issue: `npm install` fails with peer dependency errors

**Solution:**
\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

### Issue: 404 Not Found on deployed app

**Solution:** Check your environment variables in Vercel/Netlify are correct:
- `NEXT_PUBLIC_SUPABASE_URL` should be your full Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` should be your anon public key
- Redeploy after adding variables

### Issue: "Multiple GoTrueClient instances" warning

**Solution:** This is just a warning. If you see it, clear browser cache (Ctrl+Shift+Delete) and refresh.

### Issue: Database tables don't exist

**Solution:** 
1. Go to Supabase SQL Editor
2. Copy entire contents of `scripts/001_create_schema.sql`
3. Paste and run in SQL Editor
4. Verify all tables appear in the left sidebar

### Issue: Can't sign up or getting auth errors

**Solution:**
1. Check email is correct in Supabase Auth settings
2. Verify `.env.local` has correct Supabase credentials
3. Check browser console for specific error messages
4. Restart dev server: `npm run dev`

---

## Features

### Authentication
- Email/password signup with profile creation
- Persistent login sessions with middleware protection
- Automatic wallet & profile initialization on signup

### Profile & KYC
- User profile management (name, phone, country)
- KYC verification workflow (unverified → pending → verified)
- Admin approval system for KYC verification

### Wallet
- NGN currency balance display
- Fund wallet (credit) functionality
- Withdraw (debit) with balance validation
- Complete transaction history with timestamps
- Prevents negative balance operations

### Ajo Groups (Rotating Savings)
- Create/join group savings circles
- Member rotation with position tracking
- Contribution cycle management
- Group pool accumulation
- Payout recipient rotation (FIFO)
- Cycle history and ledger tracking
- KYC requirement enforced for group operations

### Admin Dashboard
- Approve/reject pending KYC verifications
- Start group cycles
- Monitor pending operations

## Database Schema

All tables use Row Level Security (RLS) to ensure users can only access their own data.

**Core Tables:**
- `profiles` - User info, KYC status, admin flag
- `wallets` - NGN balance per user
- `transactions` - Debit/credit history
- `ajo_groups` - Group metadata (title, contribution, frequency)
- `ajo_members` - Member positions in groups
- `ajo_cycles` - Cycle tracking with payout recipients
- `ajo_ledger` - Contribution/payout records per cycle

## Setup & Deployment

### Prerequisites
1. Supabase project with PostgreSQL database
2. Node.js 18+

### Local Development

1. **Clone and install:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Add environment variables** in `.env.local`:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
   \`\`\`

3. **Run migrations** in Supabase:
   - Copy SQL from `scripts/001_create_schema.sql`
   - Execute in Supabase SQL Editor
   - This creates all tables, RLS policies, and triggers

4. **Start dev server:**
   \`\`\`bash
   npm run dev
   \`\`\`

### Setting Admin User

1. After a user signs up, get their UUID
2. In Supabase, run:
   \`\`\`sql
   UPDATE profiles SET is_admin = TRUE WHERE id = 'user_uuid';
   \`\`\`

### Deployment to Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables to Vercel project settings
4. Deploy - automatic on push to main

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Test Credentials

**Demo Admin:**
- Email: `admin@demo.com`
- Password: `DemoPass123!`
- Confirm email link in terminal/logs
- After signup, set `is_admin = TRUE` in database

**Test User:**
- Email: `user@demo.com`
- Password: `UserPass123!`

## Key Business Rules

1. **Wallet Protection**: Cannot withdraw more than balance
2. **KYC Requirement**: Must be verified to:
   - Create Ajo groups
   - Join groups
   - Make contributions
3. **Rotation Logic**: Members receive payout in FIFO order
4. **Balance Deduction**: Contributions immediately deduct from wallet
5. **Cycle Management**: Each cycle tracks contributions and designates payout recipient

## Project Structure

\`\`\`
app/
  ├── auth/              # Authentication pages
  │   ├── login/
  │   ├── sign-up/
  │   └── sign-up-success/
  ├── dashboard/         # Main dashboard
  ├── profile/           # Profile & KYC
  ├── wallet/            # Wallet management
  ├── ajo/               # Ajo groups
  ├── admin/             # Admin dashboard
  └── layout.tsx         # Root layout
components/
  ├── dashboard-nav.tsx  # Navigation bar
  ├── dashboard-header.tsx
  ├── ajo-group-detail.tsx
  ├── create-ajo-modal.tsx
  └── ui/                # shadcn components
lib/
  ├── supabase/
  │   ├── client.ts      # Browser client
  │   ├── server.ts      # Server client
  │   └── middleware.ts  # Auth middleware
hooks/
  ├── use-auth.tsx       # Auth hook
scripts/
  └── 001_create_schema.sql  # DB setup
\`\`\`

## Evaluation Checklist

- [x] Register/login with email/password
- [x] Edit profile and submit KYC
- [x] Verify account status updates
- [x] Fund and withdraw from wallet
- [x] View transaction history
- [x] Create and join Ajo groups
- [x] Contribute to group cycles
- [x] Track rotation and payout recipients
- [x] Prevent negative wallet balance
- [x] Enforce KYC for group features
- [x] Admin KYC verification
- [x] Group cycle management
- [x] Responsive mobile design
- [x] Error handling & loading states
- [x] RLS data security

## Notes

- Email confirmation is required before wallet/KYC operations
- Admin access controlled via `is_admin` flag in profiles table
- All sensitive operations use server-side Supabase clients
- Mock payment gateway - real implementation would use Stripe
- Cycles advance manually via admin dashboard in demo mode

---

Built with v0 for the Remittra Full-Stack Developer Stage 1 Task.


## Tech Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS v4
- **Framework**: Next.js 16 (App Router)
- **Backend/Database**: Supabase (PostgreSQL with Row Level Security)
- **Auth**: Supabase Email/Password Auth
- **State Management**: React Hooks + Client-side Supabase
- **UI Components**: shadcn/ui

## Features

### Authentication
- Email/password signup with profile creation
- Persistent login sessions with middleware protection
- Automatic wallet & profile initialization on signup

### Profile & KYC
- User profile management (name, phone, country)
- KYC verification workflow (unverified → pending → verified)
- Admin approval system for KYC verification

### Wallet
- NGN currency balance display
- Fund wallet (credit) functionality
- Withdraw (debit) with balance validation
- Complete transaction history with timestamps
- Prevents negative balance operations

### Ajo Groups (Rotating Savings)
- Create/join group savings circles
- Member rotation with position tracking
- Contribution cycle management
- Group pool accumulation
- Payout recipient rotation (FIFO)
- Cycle history and ledger tracking
- KYC requirement enforced for group operations

### Admin Dashboard
- Approve/reject pending KYC verifications
- Start group cycles
- Monitor pending operations

## Database Schema

All tables use Row Level Security (RLS) to ensure users can only access their own data.

**Core Tables:**
- `profiles` - User info, KYC status, admin flag
- `wallets` - NGN balance per user
- `transactions` - Debit/credit history
- `ajo_groups` - Group metadata (title, contribution, frequency)
- `ajo_members` - Member positions in groups
- `ajo_cycles` - Cycle tracking with payout recipients
- `ajo_ledger` - Contribution/payout records per cycle

## Setup & Deployment

### Prerequisites
1. Supabase project with PostgreSQL database
2. Node.js 18+

### Local Development

1. **Clone and install:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Add environment variables** in `.env.local`:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
   \`\`\`

3. **Run migrations** in Supabase:
   - Copy SQL from `scripts/001_create_schema.sql`
   - Execute in Supabase SQL Editor
   - This creates all tables, RLS policies, and triggers

4. **Start dev server:**
   \`\`\`bash
   npm run dev
   \`\`\`

### Setting Admin User

1. After a user signs up, get their UUID
2. In Supabase, run:
   \`\`\`sql
   UPDATE profiles SET is_admin = TRUE WHERE id = 'user_uuid';
   \`\`\`

### Deployment to Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables to Vercel project settings
4. Deploy - automatic on push to main

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Test Credentials

**Demo Admin:**
- Email: `admin@demo.com`
- Password: `DemoPass123!`
- Confirm email link in terminal/logs
- After signup, set `is_admin = TRUE` in database

**Test User:**
- Email: `user@demo.com`
- Password: `UserPass123!`

## Key Business Rules

1. **Wallet Protection**: Cannot withdraw more than balance
2. **KYC Requirement**: Must be verified to:
   - Create Ajo groups
   - Join groups
   - Make contributions
3. **Rotation Logic**: Members receive payout in FIFO order
4. **Balance Deduction**: Contributions immediately deduct from wallet
5. **Cycle Management**: Each cycle tracks contributions and designates payout recipient

## Project Structure

\`\`\`
app/
  ├── auth/              # Authentication pages
  │   ├── login/
  │   ├── sign-up/
  │   └── sign-up-success/
  ├── dashboard/         # Main dashboard
  ├── profile/           # Profile & KYC
  ├── wallet/            # Wallet management
  ├── ajo/               # Ajo groups
  ├── admin/             # Admin dashboard
  └── layout.tsx         # Root layout
components/
  ├── dashboard-nav.tsx  # Navigation bar
  ├── dashboard-header.tsx
  ├── ajo-group-detail.tsx
  ├── create-ajo-modal.tsx
  └── ui/                # shadcn components
lib/
  ├── supabase/
  │   ├── client.ts      # Browser client
  │   ├── server.ts      # Server client
  │   └── middleware.ts  # Auth middleware
hooks/
  ├── use-auth.tsx       # Auth hook
scripts/
  └── 001_create_schema.sql  # DB setup
\`\`\`

## Evaluation Checklist

- [x] Register/login with email/password
- [x] Edit profile and submit KYC
- [x] Verify account status updates
- [x] Fund and withdraw from wallet
- [x] View transaction history
- [x] Create and join Ajo groups
- [x] Contribute to group cycles
- [x] Track rotation and payout recipients
- [x] Prevent negative wallet balance
- [x] Enforce KYC for group features
- [x] Admin KYC verification
- [x] Group cycle management
- [x] Responsive mobile design
- [x] Error handling & loading states
- [x] RLS data security

## Notes

- Email confirmation is required before wallet/KYC operations
- Admin access controlled via `is_admin` flag in profiles table
- All sensitive operations use server-side Supabase clients
- Mock payment gateway - real implementation would use Stripe
- Cycles advance manually via admin dashboard in demo mode

# Remittra - Digital Wallet & Ajo (Group Savings) Platform

A full-stack demo application built for the Remittra Stage 1 Developer Task. Demonstrates end-to-end skills in authentication, data modeling, business logic, and responsive UI.

## Quick Links
- **Live Demo**: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
- **GitHub**: [Your repo link]
- **Supabase Docs**: https://supabase.com/docs

## Tech Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS v4
- **Framework**: Next.js 16 (App Router)
- **Backend/Database**: Supabase (PostgreSQL with Row Level Security)
- **Auth**: Supabase Email/Password Auth
- **State Management**: React Hooks + Client-side Supabase
- **UI Components**: shadcn/ui

## Installation Guide

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** v18.x or higher (download from [nodejs.org](https://nodejs.org))
- **npm** or **yarn** package manager
- **Git** for version control
- A **Supabase account** (free at [supabase.com](https://supabase.com))

### Step 1: Clone the Repository

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/remittra-app.git
cd remittra-app
\`\`\`

### Step 2: Install Dependencies

\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

**Note**: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between React 19 and some UI packages. This is safe and recommended.

### Step 3: Set Up Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project credentials:
   - **Project URL** - Found in Settings > API
   - **Anon Public Key** - Found in Settings > API
   - **Database Password** - Save this securely

### Step 4: Create Environment Variables

Create a `.env.local` file in the project root:

\`\`\`bash
cp .env.example .env.local  # if available, or create manually
\`\`\`

Add these variables:
\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
\`\`\`

**Where to find these values:**
- Go to your Supabase project
- Click **Settings** (bottom left) → **API**
- Copy **Project URL** and **anon public** key into your `.env.local`

### Step 5: Create Database Tables

1. **In Supabase Dashboard:**
   - Click **SQL Editor** (left sidebar)
   - Click **New Query**

2. **Copy and paste the entire contents of:**
   \`\`\`
   scripts/001_create_schema.sql
   \`\`\`

3. **Execute the query** by clicking the **Run** button (or Ctrl+Enter)

   This will create:
   - All database tables (profiles, wallets, ajo_groups, etc.)
   - Row Level Security (RLS) policies for data protection
   - Automatic triggers for user initialization

**Expected output:** No errors, all tables created successfully

### Step 6: Run Locally

\`\`\`bash
npm run dev
\`\`\`

The app will start on **http://localhost:3000**

**What to see:**
- Landing page with Sign Up / Sign In options
- No console errors about Supabase
- Responsive design on mobile/desktop

### Step 7: Create Test Account

1. Click **Sign Up**
2. Enter email and password
3. You'll be redirected to check your email
4. In Supabase, find the confirmation email and click the link
5. You'll be redirected back - now you can sign in!

---

## Deployment Guide

### Deploy to Vercel (Recommended)

#### Prerequisites:
- GitHub account with your code pushed
- Vercel account (free at [vercel.com](https://vercel.com))

#### Steps:

1. **Go to [vercel.com](https://vercel.com) and sign in**

2. **Click "Add New" → "Project"**

3. **Select your GitHub repository** (remittra-app)

4. **Configure Project:**
   - Framework: Next.js (auto-detected)
   - Root Directory: . (current)
   - Build Command: npm run build
   - Output Directory: .next

5. **Add Environment Variables:**
   - Click **Environment Variables**
   - Add all three variables from your `.env.local`:
     \`\`\`
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=https://your-vercel-url.vercel.app
     \`\`\`

6. **Click "Deploy"** and wait for completion (2-3 minutes)



#### After First Deployment:

1. **Update Redirect URL** in Vercel environment variables:
   \`\`\`
   NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=https://your-actual-vercel-url.vercel.app
   \`\`\`

2. **Redeploy:** Click the latest deployment → "Redeploy"

3. **Test the live app** - everything should work now!




## Troubleshooting

### Issue: `npm install` fails with peer dependency errors

**Solution:**
\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

### Issue: 404 Not Found on deployed app

**Solution:** Check your environment variables in Vercel/Netlify are correct:
- `NEXT_PUBLIC_SUPABASE_URL` should be your full Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` should be your anon public key
- Redeploy after adding variables

### Issue: "Multiple GoTrueClient instances" warning

**Solution:** This is just a warning. If you see it, clear browser cache (Ctrl+Shift+Delete) and refresh.

### Issue: Database tables don't exist

**Solution:** 
1. Go to Supabase SQL Editor
2. Copy entire contents of `scripts/001_create_schema.sql`
3. Paste and run in SQL Editor
4. Verify all tables appear in the left sidebar

### Issue: Can't sign up or getting auth errors

**Solution:**
1. Check email is correct in Supabase Auth settings
2. Verify `.env.local` has correct Supabase credentials
3. Check browser console for specific error messages
4. Restart dev server: `npm run dev`

---

## Features

### Authentication
- Email/password signup with profile creation
- Persistent login sessions with middleware protection
- Automatic wallet & profile initialization on signup

### Profile & KYC
- User profile management (name, phone, country)
- KYC verification workflow (unverified → pending → verified)
- Admin approval system for KYC verification

### Wallet
- NGN currency balance display
- Fund wallet (credit) functionality
- Withdraw (debit) with balance validation
- Complete transaction history with timestamps
- Prevents negative balance operations

### Ajo Groups (Rotating Savings)
- Create/join group savings circles
- Member rotation with position tracking
- Contribution cycle management
- Group pool accumulation
- Payout recipient rotation (FIFO)
- Cycle history and ledger tracking
- KYC requirement enforced for group operations

### Admin Dashboard
- Approve/reject pending KYC verifications
- Start group cycles
- Monitor pending operations

## Database Schema

All tables use Row Level Security (RLS) to ensure users can only access their own data.

**Core Tables:**
- `profiles` - User info, KYC status, admin flag
- `wallets` - NGN balance per user
- `transactions` - Debit/credit history
- `ajo_groups` - Group metadata (title, contribution, frequency)
- `ajo_members` - Member positions in groups
- `ajo_cycles` - Cycle tracking with payout recipients
- `ajo_ledger` - Contribution/payout records per cycle

## Setup & Deployment

### Prerequisites
1. Supabase project with PostgreSQL database
2. Node.js 18+

### Local Development

1. **Clone and install:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Add environment variables** in `.env.local`:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
   \`\`\`

3. **Run migrations** in Supabase:
   - Copy SQL from `scripts/001_create_schema.sql`
   - Execute in Supabase SQL Editor
   - This creates all tables, RLS policies, and triggers

4. **Start dev server:**
   \`\`\`bash
   npm run dev
   \`\`\`

### Setting Admin User

1. After a user signs up, get their UUID
2. In Supabase, run:
   \`\`\`sql
   UPDATE profiles SET is_admin = TRUE WHERE id = 'user_uuid';
   \`\`\`

### Deployment to Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables to Vercel project settings
4. Deploy - automatic on push to main

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Test Credentials

**Demo Admin:**
- Email: `admin@demo.com`
- Password: `DemoPass123!`
- Confirm email link in terminal/logs
- After signup, set `is_admin = TRUE` in database

**Test User:**
- Email: `user@demo.com`
- Password: `UserPass123!`

## Key Business Rules

1. **Wallet Protection**: Cannot withdraw more than balance
2. **KYC Requirement**: Must be verified to:
   - Create Ajo groups
   - Join groups
   - Make contributions
3. **Rotation Logic**: Members receive payout in FIFO order
4. **Balance Deduction**: Contributions immediately deduct from wallet
5. **Cycle Management**: Each cycle tracks contributions and designates payout recipient

## Project Structure

\`\`\`
app/
  ├── auth/              # Authentication pages
  │   ├── login/
  │   ├── sign-up/
  │   └── sign-up-success/
  ├── dashboard/         # Main dashboard
  ├── profile/           # Profile & KYC
  ├── wallet/            # Wallet management
  ├── ajo/               # Ajo groups
  ├── admin/             # Admin dashboard
  └── layout.tsx         # Root layout
components/
  ├── dashboard-nav.tsx  # Navigation bar
  ├── dashboard-header.tsx
  ├── ajo-group-detail.tsx
  ├── create-ajo-modal.tsx
  └── ui/                # shadcn components
lib/
  ├── supabase/
  │   ├── client.ts      # Browser client
  │   ├── server.ts      # Server client
  │   └── middleware.ts  # Auth middleware
hooks/
  ├── use-auth.tsx       # Auth hook
scripts/
  └── 001_create_schema.sql  # DB setup
\`\`\`

## Evaluation Checklist

- [x] Register/login with email/password
- [x] Edit profile and submit KYC
- [x] Verify account status updates
- [x] Fund and withdraw from wallet
- [x] View transaction history
- [x] Create and join Ajo groups
- [x] Contribute to group cycles
- [x] Track rotation and payout recipients
- [x] Prevent negative wallet balance
- [x] Enforce KYC for group features
- [x] Admin KYC verification
- [x] Group cycle management
- [x] Responsive mobile design
- [x] Error handling & loading states
- [x] RLS data security

## Notes

- Email confirmation is required before wallet/KYC operations
- Admin access controlled via `is_admin` flag in profiles table
- All sensitive operations use server-side Supabase clients
- Mock payment gateway - real implementation would use Stripe
- Cycles advance manually via admin dashboard in demo mode

---

Built with v0 for the Remittra Full-Stack Developer Stage 1 Task.

