# Collaborative Workspace – Client (Frontend)

## Overview

This directory contains the **frontend client application** for the **Real-Time Collaborative Workspace** system.

The frontend acts as a **lightweight consumer of backend APIs and real-time services**. Its primary purpose is to validate authentication flows, workspace access, and real-time collaboration behavior implemented in the backend.

> **Important:**  
> The focus of this assessment is **backend architecture, scalability, security, and real-time communication**.  
> The frontend is intentionally kept **minimal and functional** to support backend evaluation.

---

## Objectives

The frontend is designed to:

- Consume backend REST APIs
- Handle JWT-based authentication
- Demonstrate role-based access control (RBAC)
- Establish WebSocket connections for real-time events
- Validate workspace-level collaboration behavior

---

## Features

### Authentication
- User registration
- User login
- Access token and refresh token handling
- Protected routes

### Dashboard
- Entry point after authentication
- Displays authenticated session
- Initiates project and workspace interactions

### Workspace Interaction
- Connects to workspace-specific APIs
- Subscribes to real-time collaboration events
- Displays basic activity updates

### Real-Time Communication
- Socket.IO client integration
- Listens for:
  - User join / leave events
  - Activity notifications
  - Mocked collaboration updates

---

## Technology Stack

| Layer | Technology |
|-----|-----------|
| Framework | React.js |
| Routing | React Router |
| HTTP Client | Axios |
| State Management | React Context API |
| Real-Time | Socket.IO Client |
| Styling | Basic CSS |
| Authentication | JWT-based |

---

## Project Structure

client/
│
├── src/
│ ├── api/ # Axios configuration and API wrappers
│ ├── auth/ # Login, Register, Protected routes
│ ├── context/ # Authentication context
│ ├── pages/ # Dashboard and Workspace views
│ ├── styles/ # Minimal styling
│ ├── App.js # Route configuration
│ └── index.js # Application entry point
│
├── package.json
└── README.md

yaml
Copy code

---

## Backend Integration

The frontend communicates with the backend using REST APIs and WebSockets.

### API Base URL

Configured in:

src/api/axios.js

makefile
Copy code

Example:

```js
baseURL: https://<backend-domain>/api/v1
Authorization Handling
Access tokens are attached to every request using Axios interceptors

Refresh tokens are used to renew expired access tokens

All authorization decisions are enforced by the backend

Authentication Flow
User registers via /auth/register

User logs in via /auth/login

Backend issues:

Access token

Refresh token

Frontend stores tokens securely

Access token is sent with each API request

Refresh flow is triggered automatically when required

Real-Time Communication Model
WebSocket connection is established after authentication

Backend acts as the single source of truth

Frontend subscribes to workspace-level events

Event handling is intentionally lightweight to showcase backend capabilities

Running the Client Locally
Prerequisites
Node.js (v18+)

Backend running locally or deployed

Steps
bash
Copy code
cd client
npm install
npm start
The application will be available at:

arduino
Copy code
http://localhost:3000
Testing Strategy
Manual functional testing through the UI

API behavior validated through backend Swagger documentation

Frontend focuses on integration validation, not unit testing

Limitations
UI is intentionally minimal

No advanced editor or cursor tracking UI

No offline sync or conflict resolution

These features are outside the scope of this assessment

Conclusion
This frontend serves as a supporting client for validating a production-oriented backend system designed for secure authentication, role-based access control, real-time collaboration, and scalable architecture