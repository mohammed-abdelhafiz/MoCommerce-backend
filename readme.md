# 🚀 E-Commerce API Engine

A robust, high-performance backend ecosystem built with **Node.js**, **Express 5**, and **TypeScript**. This engine powers a premium e-commerce platform with enterprise-grade features including real-time analytics, secure payment processing, and multi-layer caching.

---

## 🛠️ Tech Stack & Infrastructure

- **Runtime**: [Node.js](https://nodejs.org/) (TypeScript)
- **Web Framework**: [Express.js](https://expressjs.com/) (v5.x)
- **Primary Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Distributed Caching**: [Redis](https://redis.io/) (via Upstash)
- **Security**: JWT (Access/Refresh rotation), HttpOnly Cookies
- **Payments**: [Stripe API](https://stripe.com/)
- **Media Management**: [Cloudinary](https://cloudinary.com/)
- **Data Validation**: [Zod](https://zod.dev/)

---

## ✨ Core Features

### 🔐 Secure Authentication System
- Implements a modern authentication flow using **JWT rotation**.
- Access tokens and Refresh tokens are stored in **HttpOnly, Secure cookies** to mitigate XSS and CSRF risks.
- Refresh tokens are tracked in **Redis** for instant session revocation and enhanced security.

### 💳 Stripe & Order Integrity
- Seamless integration with **Stripe Checkout**.
- Uses **MongoDB Transactions** (Atomic Operations) to ensure that orders are only created upon successful payment confirmation, preventing duplicate entries and data inconsistency.

### 📦 Product & Inventory
- Full CRUD capabilities with automated image uploads to **Cloudinary**.
- Supported Categories: `Jeans`, `T-shirts`, `Shoes`, `Glasses`, `Jackets`, `Suits`, `Bags`, and `other`.
- **Intelligent Caching**: Featured products are cached in Redis with automatic invalidation on updates.

### 📊 Real-time Analytics
- Aggregated sales data and revenue tracking.
- Daily stats calculation for the last 7 days of platform activity.

### 📑 Advanced Data Handling
- Custom **Numeric Pagination** logic for efficient product retrieval.
- Centralized error handling and standardized API responses.

---

## 📁 Architecture Overview

```text
src/
├── modules/          # Feature-based architecture
│   ├── analytics/    # Stats & revenue aggregation
│   ├── auth/         # JWT, Cookies, & Session logic
│   ├── cart/         # Shopping cart state management
│   ├── coupons/      # Discount & dynamic pricing logic
│   ├── orders/       # Order fulfillment & history
│   ├── payment/      # Stripe integration & webhooks
│   └── products/     # Catalog, Inventory, & Caching
├── shared/           # Cross-cutting concerns
│   ├── lib/          # DB, Redis, Stripe, Cloudinary clients
│   ├── middlewares/  # Error, Auth, & Validation filters
│   └── types/        # Global TypeScript definitions
├── app.ts            # Application bootstrapping
├── routes.ts         # Centralized routing registry
└── server.ts         # Entry point (Cluster-ready)
```

---

## 🚀 Development Setup

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (Atlas or Local)
- Redis (Upstash recommended)
- Cloudinary & Stripe developer accounts

### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

MONGODB_URI=your_mongodb_connection_string
REDIS_URL=your_redis_connection_string

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 3. Quick Start
```bash
# Install dependencies
npm install

# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📜 License
Distributed under the MIT License.


