import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BreweryProvider } from "./context/breweryContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BreweryProvider>
      <App />
    </BreweryProvider>
  </StrictMode>
)
