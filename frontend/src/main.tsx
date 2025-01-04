import './index.css'
import { StrictMode } from 'react'
import ReactDOM, { Root } from 'react-dom/client'
import { RootNotFoundError } from './errors/RootNotFoundError.ts'
import { RootNotDivElementError } from './errors/RootNotDivElementError.ts'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContextProvider.tsx'

// Get the Root Element from the DOM
const rootElement: HTMLElement | null = document.getElementById('root')

//Check if Root Element was Found in DOM 
if (!rootElement) throw new RootNotFoundError()

//Check if Root Element is a Classic Div Element
if (!(rootElement instanceof HTMLDivElement)) throw new RootNotDivElementError()

// Create a root using the container
const root: Root = ReactDOM.createRoot(rootElement as HTMLDivElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider >
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)