import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Provides client-side routing using the History API
import App from './App'; // Main app component wrapped in ThemeProvider, includes navbar, router, and footer

// Create root-level React DOM entry point
const root = ReactDOM.createRoot(document.getElementById('root')); // Binds React app to the root DOM node

root.render(
  // Wrap entire app in BrowserRouter to enable routing with <Link>, <Routes>, etc.
  // STRUCTURE: All routing logic and layout is contained within App
  <BrowserRouter>
    <App />
  </BrowserRouter>
);