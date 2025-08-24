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
git clone https://github.com/<your-username>/superheroes-app.git
cd superheroes-app
cd server
npm install
```

Registrate free account https://cloudinary.com/ and get API key, secret and cloudname
Create .env file:

```bash
DATABASE_URL="file:./dev.db"
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```

Run migrations

```bash
npm run db:migrate

npm run db:seed

npm run dev
```

Frontend Setup
cd /client
npm install
npm run dev
