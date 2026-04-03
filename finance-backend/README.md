# Finance Data Processing and Access Control Backend

A RESTful backend API for a finance dashboard system with role-based access control.

## Tech Stack
- Node.js + Express.js
- SQLite (better-sqlite3)
- JWT Authentication
- bcryptjs for password hashing

## Setup & Run

1. Install dependencies
   npm install

2. Create .env file
   PORT=5000
   JWT_SECRET=finance_secret_key_123

3. Start server
   node server.js

## Roles & Permissions

| Role    | Read Records | Analytics | Create/Edit/Delete | Manage Users |
|---------|-------------|-----------|-------------------|--------------|
| viewer  | ✅          | ❌        | ❌                | ❌           |
| analyst | ✅          | ✅        | ❌                | ❌           |
| admin   | ✅          | ✅        | ✅                | ✅           |

## API Endpoints

### Auth
| Method | Endpoint             | Access  |
|--------|----------------------|---------|
| POST   | /api/auth/register   | Public  |
| POST   | /api/auth/login      | Public  |

### Users
| Method | Endpoint             | Access  |
|--------|----------------------|---------|
| GET    | /api/users           | Admin   |
| PATCH  | /api/users/:id       | Admin   |

### Records
| Method | Endpoint             | Access             |
|--------|----------------------|--------------------|
| GET    | /api/records         | Viewer/Analyst/Admin |
| GET    | /api/records/:id     | Viewer/Analyst/Admin |
| POST   | /api/records         | Admin              |
| PUT    | /api/records/:id     | Admin              |
| DELETE | /api/records/:id     | Admin              |

### Analytics
| Method | Endpoint                  | Access         |
|--------|---------------------------|----------------|
        | GET    | /api/analytics/summary    | Analyst/Admin  |
| GET    | /api/analytics/trends     | Analyst/Admin  |

## Sample Usage

### Register
POST /api/auth/register
{
  "name": "Ayushi",
  "email": "ayushi@test.com",
  "password": "123456",
  "role": "admin"
}

### Login
POST /api/auth/login
{
  "email": "ayushi@test.com",
  "password": "123456"
}

### Use token in all protected routes
Authorization: Bearer <token>

### Create a record
POST /api/records
{
  "title": "Office Rent",
  "amount": 5000,
  "category": "Rent",
  "type": "expense",
  "date": "2026-04-01",
  "notes": "Monthly rent"
}