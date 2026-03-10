#  NOTIFY

A full-stack web application where you can upload, view, edit and delete warranty receipts.

## Live Demo
https://notify.roshanbansie.nl

## Features
- JWT User authentication
- Upload, view, edit and delete PDFs of warranty receipts
- Analytics about how many warranties are uploaded per category
- Sends email when warranties are about to expire
- Table where you can view all uploaded warranties and sort them by date 
and category
- Responsive UI for mobile and desktop

## Tech Stack

### Frontend
- React
- Typescript
- CSS

### Backend
- Node.js
- Express
- PostgreSQL
- pgMyAdmin

### Infrastructure
- Render (backend-hosting)
- Hostinger (frontend-hosting)
- Supabase (database)
- Resend (email sending)

## Architecture
The application follows a client-server architecture

Frontend communicates with the backend through REST APIs.
Authentication is handled using JWT tokens stored in HTTP-only cookies.
Protected routes are enforced using a cookie parser middleware that checks the presence of a JWT token in the incoming request.

Main components:

Client (React)
    ↓
Cookie parser and CORS middleware
    ↓
API Server (Node.js / Express)
    ↓
Database (Supabase) / Resend

## Database Schema

### Entities

Users:
id: INT PRIMARY
created_at: TIMESTAMPTZ
full_name: TEXT
email: TEXT UNIQUE
password: TEXT UNIQUE
is_blocked: BOOL
login_attempts: NUMERIC
blocked_at: TIMESTAMPTZ
recv_notifications: BOOL

Posts:
id: INT PRIMARY
created_at: TIMESTAMPTZ
user_id: INT FOREIGN KEY (Users.id)
name: TEXT
category: TEXT
exp_date: DATE
file_path: TEXT UNIQUE
last_email: TIMESTAMPZ

Reviews:
id: INT PRIMARY
created_at: TIMESTAMPTZ
user_id: INT FOREIGN KEY (Users.id)
title: TEXT
rating: INT
text: TEXT

Last_changed:
user_id: INT FOREIGN KEY (Users.id)
name: TIMESTAMPTZ
email: TIMESTAMPTZ
password: TIMESTAMPTZ
notifications: TIMESTAMPTZ

### Relations
User -> Posts (1:n)
User -> Reviews (1:n)
User -> Last_changed(1:1)

## API Endpoints
| Method | Endpoint | Description |
| POST | /api/auth/login | User login |
| POST | /api/auth/logout | User logout |
| POST | /api/auth/signup | User signup |
| POST | /api/auth/email-verify | Send email verification mail prior user sign up |
| POST | /api/auth/password-reset | Send password reset email |
| POST | /api/auth/finalize-password-reset | Checks token from password reset email and update password in DB |

| GET | /api/user/get | Retrieve user meta-data |
| GET | /api/user/status | Get user login status |
| PATCH | /api/user/change-name | Change User's name |
| PATCH | /api/user/change-email | Change User's email |
| PATCH | /api/user/change-notifications | Change User's permission to receive email notifications |
| PATCH | /api/user/change-password | Sends password reset email to user |
| DELETE | /api/user/delete-acc | Delete User's account and all his warranties |

| POST | /api/contact/contactform | Sends email from contact form |
| POST | /api/contact/notifications | Sends an email notification about warranties that are about to expire |

| GET | /api/dashboard/docs | Fetches all user's documents |
| POST | /api/dashboard/upload | Uploads a warranty PDF to the user's storage |
| DELETE | /api/dashboard/delete | Deletes a warranty PDF from the user's storage |
| PUT | /api/dashboard/edit | Edits the metadata of a warranty PDF |

| POST | /api/feedback/upload | Uploads review to DB |
| GET | /api/feedback/fetch | Fetches all reviews from DB |

## Getting started

### Install dependencies
npm install

### Run the app
npm run dev

### Compile and compress code
npm run build

### Run frontend only
cd ./client
npm run dev

### Compile and compress frontend
cd ./client
npm run dev

### Run backend only
cd ./server
npm run dev

### Compile and compress backend
cd ./server
npm run dev

## Environment variables

### Frontend variables
| Variable | Description |
| VITE_NODE_ENV | State variable defining current setup (development or prodcution) |
| VITE_APP_NAME | Name of the application |
| VITE_SERVER_URL | URL to which REST APIs are send (during dev mode it is on localhost) |
| VITE_MAX_FILE_SIZE_Bytes | Max file upload size in bytes |

### Backend variables
| Variable | Description |
| NODE_ENV | State variable defining current setup (development or production) |
| DOMAIN | DOMAIN on which frontend is hosted |
| MY_EMAIL | Email address that receives emails from this app |
| EMAIL_HOST | Verified domain that handles email sending via Resend |
| RESEND_KEY | Resend API key |
| SERVER_PORT | Port on which the server is being openend |
| ALLOWED_ORIGIN | URL of allowed origin for REST API requests (is localhost during dev mode) |
| DATABASE_URL | URL to database |
| SUPABASE_URL | URL of Supabase client |
| SUPABASE_SERVICE_ROLE_KEY | Key to gain access rights to DB |
| CRYPTO_KEY | Key to sign encryption of data |
| JWT_KEY | Key to sign JWT-tokens
| COOKIE_EXP | Expiration time of cookie in milliseconds


## Learnings

### Problem
Authentication cookies were dropped in every request from client -> server.
This resulted in a failure of the authentication system and access to all protected routes.

### Solution
The server was hosted on Render's domain which made the authentication cookies
be seen as third-party cookies by the browser. Due to the browser's nature,
third-party cookies don't always stay in requests. I solved this problem by
creating a subdomain specifically for Notify's server. This subdomain is
under the same root domain of the subdomain where the frontend is hosted.
Then, I created a CNAME record which redirects every incoming request
of the Notify's server subdomain to the domain of Render where the request
will be handled.

## Future improvements
- Add RLS in Supabase
- Use Cron jobs to schedule email notifications
