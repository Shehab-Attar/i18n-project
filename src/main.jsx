// Main entry point for the React application
// Imports the main App component and necessary styles
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n.js'
createRoot(document.getElementById('root')).render(
  // Sets up React Suspense for lazy loading and BrowserRouter for routing
    <React.Suspense fallback= "Loading...">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
)
