🚀 Zerodha Clone

Welcome to the Zerodha Clone!
An enterprise‑grade, end‑to‑end implementation of India’s top‑rated trading platform, built on the MERN stack. This project showcases a production‑ready architecture, ultra‑responsive UI, and real‑time trading simulations.

📖 Overview

Zerodha Clone replicates key functionalities of a live brokerage:

Real‑Time Market Data: Stream NIFTY, SENSEX, and user‑selected equities with sub‑second updates.

Secure User Management: Robust JWT‑powered authentication, role‑based access, and encrypted credentials.

Trade Execution Engine: Simulate market/limit orders, cancellations, and fill strategies with status websockets.

Comprehensive Portfolio Analytics: Intuitive dashboards with interactive P&L charts, heatmaps, and historical logs.

Admin Ops Suite: User administration, audit trails, performance monitoring, and system health checks.

Crafted for developers aiming to master advanced MERN patterns and real‑world trading workflows.

🔧 Tech Stack & Architecture

flowchart LR
  subgraph Client
    A[React.js SPA] -->|REST & WS| B[Express API]
  end
  subgraph Server
    B --> C[MongoDB Atlas]
    B --> D[External Stock APIs]
  end
  Admin[Admin Dashboard] --> B
  User[End User] --> A

Layer

Tech & Tools

Frontend

React.js, Redux, Chakra UI, Tailwind

Backend

Node.js, Express, Socket.IO

Database

MongoDB Atlas, Mongoose ORM

Auth & Security

JWT, Passport.js, bcrypt

Data Feeds

IEX Cloud / Alpha Vantage

Containers & CI/CD

Docker, GitHub Actions, Heroku

⚙️ Setup & Installation

Clone Repository

git clone https://github.com/Imran42810/Zerodha.git
cd Zerodha

Install Dependencies

# Backend
cd backend && npm ci
# Frontend
cd ../frontend && npm ci

Configure EnvironmentCreate backend/.env:

PORT=3000
MONGO_URI=YOUR_MONGO_URI
JWT_SECRET=STRONG_SECRET_KEY
STOCK_API_KEY=YOUR_DATA_FEED_KEY

Run Services

# Start backend (with hot reload)
cd backend && npm run dev
# Start frontend
cd ../frontend && npm start

Access the AppOpen your browser to: 👉 http://localhost:3000

🌟 Core Features

Feature

Benefit

Market Watch

Live quotes, candle‑stick charts, and watchlists

Order Lifecycle

Place, modify, cancel orders; real‑time fill status

Portfolio Hub

Asset allocation, P&L visualizations, trade history

User Security

Enforced strong passwords, token refresh, CSRF guard

Admin Control Room

User CRUD, system logs, health dashboards

Scalable Design

Micro‑service ready, containerized, horizontal scaling

🛠️ Code Quality & Standards

ESLint & Prettier for consistent code style

Jest & Supertest for backend unit/integration tests

React Testing Library for frontend component tests

Dockerfile & docker-compose for reproducible dev environments

📜 License

Distributed under the MIT License. See LICENSE for details.

Happy Trading & Happy Coding! 🎉

