# Frontend

This directory contains the client-side code for the chat application, built with React, Vite, and TypeScript. It provides the user interface for the chat application, allowing users to sign up, log in, and chat with each other in real-time.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **TypeScript:** A typed superset of JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **DaisyUI:** A component library for Tailwind CSS.
- **React Router:** For client-side routing.
- **Zustand:** A small, fast, and scalable state management solution.
- **Socket.IO Client:** For real-time communication with the backend server.
- **React Hot Toast:** For displaying notifications.
- **React Icons:** For using icons in the application.

## Project Structure

The frontend is organized into the following directories:

- **`src/`**: Contains the main source code for the application.
  - **`components/`**: Contains reusable React components, organized by feature.
  - **`context/`**: Contains React Context providers for managing global state, such as authentication and Socket.IO connections.
  - **`hooks/`**: Contains custom React hooks for handling side effects, such as fetching data from the API and managing user authentication.
  - **`pages/`**: Contains the main pages of the application, such as the home, login, and signup pages.
  - **`store/`**: Contains the Zustand store for managing the conversation state.
  - **`types/`**: Contains all the custom types and interfaces used in the project.
  - **`utils/`**: Contains utility functions used throughout the application.

## Available Scripts

In the `frontend/` directory, the following scripts are available:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run lint`**: Lints the code using ESLint.
- **`npm run preview`**: Starts a local server to preview the production build.