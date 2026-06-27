# 📦 Web Inventory Manager

A full-stack inventory management system built with **React**, **TypeScript**, **Node.js/Express**, and **PostgreSQL**. Designed for managing products, suppliers, categories, brands, and users through a clean admin dashboard with role-based access and activity logging.

---

## ✨ Features

- **Product Management** — Add, edit, and manage products with support for variants and images
- **Category & Brand Management** — Organize inventory with hierarchical categories and brand tracking
- **Supplier Management** — Track and manage supplier information
- **User Management** — Admin-controlled user accounts with role-based access
- **Activity Logs** — Audit trail of all changes and actions within the system
- **Dashboard** — Overview of key inventory metrics and recent activity
- **Authentication** — JWT-based auth with secure cookie handling

---

## 🛠️ Tech Stack

### Frontend
- **React 19** + **TypeScript**
- **Vite** (bundler)
- **Tailwind CSS v4**
- **Zustand** (state management)
- **React Router v7**
- **Zod** (schema validation)
- **Axios** (HTTP client)
- **Lucide React** (icons)
- **React Toastify** (notifications)

### Backend
- **Node.js** + **Express v5**
- **TypeScript**
- **PostgreSQL** via `pg`
- **Supabase** (storage)
- **JWT** + **bcryptjs** (auth)
- **Multer** (file uploads)
- **Zod** (input validation)

### Shared
- Shared TypeScript types/schemas via a local `@web-inventory-manager/shared` package

---

## 📁 Project Structure

```
web-inventory-manager/
├── frontend/           # React + Vite frontend
│   └── src/
│       ├── features/   # Feature-based modules (auth, products, brands, etc.)
│       ├── pages/      # Admin page components
│       ├── hooks/      # Custom React hooks
│       ├── layouts/    # Layout components
│       └── schemas/    # Zod validation schemas
├── backend/            # Express API server
│   └── src/
│       ├── modules/    # Feature modules (auth, products, users, etc.)
│       ├── middlewares/ # Auth and validation middlewares
│       ├── database/   # DB connection and queries
│       └── storage/    # File storage integration
└── shared/             # Shared types and schemas
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL database
- A Supabase project (for image/file storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/web-inventory-manager.git
   cd web-inventory-manager
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install backend dependencies
   cd backend && npm install

   # Install frontend dependencies
   cd ../frontend && npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=3000
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_jwt_secret
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   ```

4. **Seed the database** *(optional)*
   ```bash
   cd backend
   npm run db:seed
   ```

5. **Run the development servers**

   Backend:
   ```bash
   cd backend
   npm run dev
   ```

   Frontend (in a separate terminal):
   ```bash
   cd frontend
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:3000`.

---

## 📜 Available Scripts

### Backend
| Script | Description |
|---|---|
| `npm run dev` | Start the API server in watch mode |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled production build |
| `npm run db:seed` | Seed the database with initial data |

### Frontend
| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project is licensed under the ISC License.
