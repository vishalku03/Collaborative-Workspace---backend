# 🚀 Real-Time Collaborative Workspace – Backend

A **production-grade backend service** built using the **MERN stack (MongoDB, Express, Node.js)** that powers a **real-time collaborative workspace for developers**, similar to a simplified collaborative coding platform.

This backend focuses on **API design, security, scalability, real-time communication, and clean architecture**, rather than UI complexity.

---

## 📌 Project Overview

The backend enables multiple users to securely collaborate in shared workspaces in real time.  
It supports authentication, project and workspace management, role-based access control, real-time events, and asynchronous background processing.

### Core Capabilities
- Secure authentication using JWT + Refresh Tokens
- Role-Based Access Control (Owner, Collaborator, Viewer)
- Project & workspace management
- Real-time collaboration via WebSockets
- Asynchronous background job processing
- API-first design with Swagger documentation
- Cloud-ready, scalable architecture

---

## 🧠 High-Level Architecture


Client (React)
↓ REST / WebSocket
Express API (Node.js)
├── Authentication & RBAC
├── Project APIs
├── Workspace APIs
├── Job Processing APIs
├── Swagger (OpenAPI)
↓
MongoDB Atlas (Primary Database)
Redis (Cache, Pub/Sub, Job Queues)



---

## 🧩 Technology Stack

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – REST API framework
- **JWT** – Authentication & authorization
- **Socket.IO** – Real-time communication
- **BullMQ** – Background job processing

### Databases
- **MongoDB Atlas** – Primary persistent datastore
- **Redis** – Caching, Pub/Sub, rate limiting, job queues

### Tooling & DevOps
- **Swagger (OpenAPI 3.0)** – API documentation
- **Docker** – Containerization
- **dotenv** – Environment variable management
- **Morgan** – HTTP request logging

---

## 🔐 Authentication & Authorization

### Authentication
- JWT-based authentication
- Short-lived **Access Tokens**
- Long-lived **Refresh Tokens**
- Token rotation support

### Authorization (RBAC)
Each workspace supports role-based permissions:
- **OWNER** – Full access
- **COLLABORATOR** – Edit & collaborate
- **VIEWER** – Read-only access

RBAC is enforced using middleware at the API level.

---

## 🧩 Why Workspaces Exist

Projects act as **logical containers**, while **workspaces represent active collaboration environments**.

All real-time features (user join/leave, file changes, cursor updates, activity tracking) occur inside workspaces.

### Benefits
- Clean isolation of real-time sessions
- Fine-grained role control per workspace
- Easier horizontal scaling
- Better maintainability

---

## 🔄 Real-Time Collaboration

- Implemented using **Socket.IO**
- Supports:
  - User join / leave events
  - File change events (mocked payloads)
  - Activity & cursor updates
- **Redis Pub/Sub** enables event distribution across multiple backend instances

---

## ⚙️ Asynchronous Job Processing

The backend simulates long-running or compute-heavy tasks such as code execution.

### Job Flow


API Request → Redis Queue → Worker → MongoDB


### Features
- Background workers
- Retry logic with backoff
- Failure handling
- Idempotent job processing
- Persistent job status storage

---

## 🗄️ Data Storage Strategy

### MongoDB Atlas (Primary)
Used to store:
- Users
- Projects
- Workspaces
- Roles & permissions
- Job metadata

**Why MongoDB Atlas?**
- Flexible schema for collaboration data
- Cloud-native and horizontally scalable
- Ideal for real-time systems

### Redis (Secondary)
Used for:
- Real-time Pub/Sub
- API rate limiting
- Caching
- Background job queues

This multi-database approach ensures **high performance and scalability**.

---

## 📄 API Documentation (Swagger)

The backend follows an **API-first design**.

Swagger UI is available at:  http://localhost:5000/api-docs


### Swagger Features
- OpenAPI 3.0 compliant
- Interactive API testing
- JWT Bearer authentication support
- Clear request & response definitions

Swagger eliminates the need for Postman in this project.

---

## 📁 Backend Folder Structure

server/
├── src/
│ ├── config/
│ │ ├── db.js
│ │ └── swagger.js
│ │
│ ├── modules/
│ │ ├── auth/
│ │ ├── project/
│ │ ├── workspace/
│ │ ├── job/
│ │ └── realtime/
│ │
│ ├── middlewares/
│ │ ├── auth.middleware.js
│ │ ├── rbac.middleware.js
│ │ └── rateLimit.middleware.js
│ │
│ ├── utils/
│ │ └── jwt.js
│ │
│ ├── app.js
│ └── server.js
│
├── .env
├── Dockerfile
└── package.json



The project follows **Clean Architecture / Domain-Driven Design (DDD)** principles.

---

## 🔐 Security Practices

- Environment variables for secrets
- No hardcoded credentials
- Input validation
- NoSQL injection protection
- CORS configuration
- API rate limiting
- JWT-based authorization middleware

---

## 🐳 Docker Support

- Backend is fully containerized
- Redis runs as a Docker service
- MongoDB Atlas used as managed cloud database

This ensures **consistent behavior across environments**.

---

Local Setup

1️⃣ Install dependencies
```bash
cd server
npm install

2️⃣ Configure environment variables

Create server/.env:
PORT=5000
MONGO_URI=<MongoDB Atlas URI>
JWT_SECRET=<your_secret>
REDIS_URL=redis://localhost:6379

3️⃣ Start the server
npm run dev

4. NOTE : 

1. Production-grade architecture
2. Secure authentication with refresh tokens
3. Real-time scalability using Redis
4. Clean modular structure
5. API-first development with Swagger
6. Cloud-ready and Dockerized


Conclusion

This backend demonstrates real-world backend engineering practices, including secure API design, real-time systems, scalable data handling, and clean architecture.
 