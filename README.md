# Chat App Concept

This project is a full-stack chat application built with the MERN stack (MongoDB, Express, React, Node.js) and TypeScript. It features a separate backend and frontend, which work together to provide a real-time chat experience.

## Overview

The application is divided into two main parts:

- **Backend**: A Node.js and Express server that handles user authentication, real-time messaging via WebSockets, and data storage in a MongoDB database.
- **Frontend**: A React application built with Vite that provides the user interface for logging in, signing up, and chatting with other users.

## Backend

The backend is a Node.js application built with Express and TypeScript. It uses MongoDB for data storage, Mongoose as an ODM, and Socket.IO for real-time communication. User authentication is handled with JSON Web Tokens (JWT).

For more details, see the [backend/README.md](backend/README.md) file.

## Frontend

The frontend is a single-page application built with React, Vite, and TypeScript. It uses Tailwind CSS and DaisyUI for styling, Zustand for state management, and Socket.IO Client to connect to the backend.

For more details, see the [frontend/README.md](frontend/README.md) file.

## Getting Started

To run the application, you will need to install the dependencies for both the backend and the frontend and set up the environment variables as described in the respective README files.

Once everything is set up, you can start the development servers for both the backend and the frontend to run the application locally.
