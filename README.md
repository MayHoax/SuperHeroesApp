# Superheroes App

A simple CRUD application for managing superheroes, built with React, TailwindCSS, and a Node.js + Express + Prisma backend.

## Features

- List, create, edit, and delete superheroes
- Upload images via file or URL
- View individual superhero details
- Pagination for superhero list
- Spinner and error messages for better UX
- Unique nickname validation

## Assumptions

- Cloudinary account for image uploads to cloud
- Database: PostgreSQL but can be changed
- Environment variables are stored in `.env` files

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MayHoax/SuperHeroesApp.git
```

## Backend Setup

```bash
cd SuperHeroesApp
cd server
npm install --legacy-peer-deps
npx prisma generate

```

Registrate free account https://cloudinary.com/ and get API key, secret and cloudname

### 1. Create .env file:

```bash
DATABASE_URL="file:./dev.db" # or simple PosrgreSQL connection string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```

### 2. Run database migrations and seed data:

```bash
npm run db:migrate

npm run db:seed

npm run dev
```

## Frontend Setup

### 1. Create .env file:

```bash
VITE_SUPERHERO_API_URL=http://localhost:3000
```

### 2.

```bash
cd /client
npm install
npm run dev
```
