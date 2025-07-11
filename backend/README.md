# Backend

This directory contains the server-side code for the chat application, built with Node.js, Express, and TypeScript. It handles user authentication, real-time messaging, and data storage.

## Technologies Used

- **Node.js:** JavaScript runtime environment.
- **Express:** Web framework for Node.js.
- **TypeScript:** Typed superset of JavaScript.
- **MongoDB:** NoSQL database for storing user and message data.
- **Mongoose:** ODM library for MongoDB.
- **Socket.IO:** Library for real-time, bidirectional communication.
- **JWT (JSON Web Tokens):** For securing the application and authenticating users.
- **bcryptjs:** For password hashing.
- **Zod:** For data validation.

## Project Structure

The backend is organized into the following directories:

- **`controllers/`**: Contains the logic for handling incoming requests, separated by routes.
- **`cryptography/`**: Includes functions for password hashing and comparison.
- **`errors/`**: Defines custom error classes for more specific error handling.
- **`models/`**: Contains the Mongoose data models for users, messages, and conversations.
- **`routes/`**: Defines the API endpoints.
- **`schemas/`**: Contains the Zod schemas for data validation.
- **`socket/`**: Handles the Socket.IO server setup and event handling.
- **`types/`**: Contains all the custom types and interfaces used in the project.
- **`utils/`**: Includes utility functions used throughout the application.

## Available Scripts

In the root `package.json` file, the following scripts are available for the backend:

- **`npm run dev`**: Starts the backend server in development mode with hot-reloading.
- **`npm run start`**: Compiles the TypeScript code and starts the server in production mode.
- **`npm run clean`**: Removes the `build` directory.

## Environment Variables

This project uses environment variables to configure the application. You will need to create a `.env` file in the `backend` directory with the following variables:

```
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

You can generate a secure `JWT_SECRET` by running `npm run randomToken`.

## Error Handling

The application uses a centralized error handling middleware. Custom error classes are defined in the `errors/` directory to handle specific error scenarios, providing more detailed and informative error messages.
