# Real-Time Collaborative Workspace

## Project Overview

This repository contains the implementation of a **Real-Time Collaborative Workspace** system, developed as part of a backend-focused assessment.

The project demonstrates the design and development of a **production-grade backend service** with secure authentication, role-based access control, real-time communication, and scalable architecture.  
A lightweight frontend client is included to **consume and validate backend functionality**.

> **Primary Focus:** Backend Architecture  
> **Secondary Component:** Frontend (integration client only)

---

## What This Project Solves

The system provides a backend platform that enables:

- Secure user authentication
- Role-based access to shared workspaces
- Real-time collaboration events
- Asynchronous background job processing
- Cloud-ready deployment

This is conceptually similar to a simplified collaborative coding or development workspace.

---

## Backend (Core of the Project)

The backend is designed with a **clean, modular, and scalable architecture**.

### Backend Capabilities

- JWT-based authentication with refresh tokens
- Role-Based Access Control (Owner, Collaborator, Viewer)
- RESTful APIs for:
  - Projects
  - Workspaces
  - Invitations and roles
- Real-time collaboration using WebSockets (Socket.IO)
- Event-driven design (Redis-ready)
- Asynchronous job processing using queues
- OpenAPI (Swagger) documentation
- Secure configuration via environment variables
- Cloud deployment readiness

### Backend Technology Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- JWT (Authentication)
- Socket.IO (Real-time communication)
- BullMQ (Background jobs)
- Redis (optional, for scaling)
- Swagger (API documentation)

 Swagger API Documentation : -  https://real-time-collaborative-backend-x37b.onrender.com/api-docs/

---

## Frontend (Supporting Client)

- Authenticate users
- Interact with backend APIs
- Establish WebSocket connections
- Demonstrate workspace-level real-time events


### Frontend Technology Stack

- React.js
- Axios
- React Router
- Context API
- Socket.IO Client
- Basic CSS

---

## High-Level System Flow

1. User registers and logs in
2. Backend issues access and refresh tokens
3. User accesses dashboard and projects
4. User enters a workspace
5. Backend enforces permissions using RBAC
6. Real-time events are broadcast to connected users
7. Background jobs are processed asynchronously

---

## Real-Time Collaboration Model

- WebSocket connections are established after authentication
- Backend acts as the single source of truth
- Events include:
  - User join / leave
  - Activity updates
  - Mocked file or cursor events
- Architecture supports horizontal scaling

---

## Running the Project Locally

### Prerequisites

- Node.js v18 or higher
- MongoDB Atlas
- (Optional) Redis

---

### Backend


cd server
npm install
npm run start



### Frontend

cd client
npm install
npm start



Deployment :- 
---------

The project is designed to be deployed on cloud platforms.
Backend can be deployed as a Node.js service (e.g., Render)
Frontend can be deployed as a static site
Environment variables are managed securely via the platform
Docker support is optional and not mandatory
Deployment links can be added here after deployment.
Design Philosophy
Backend-first development approach
Clear separation of concerns
Modular and maintainable codebase
API-first design
Real-time and async capabilities built into the core

Scope and Limitations : -
----------------------

Frontend UI is minimal by design
Avanced collaborative editors and UI enhancements are out of scope
Focus is on backend quality, scalability, and correctness

Conclusion:-
-----------

This project demonstrates the design and implementation of a real-time collaborative backend system, emphasizing secure authentication, role-based access control, real-time communication, and scalable architecture.



