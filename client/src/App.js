import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme'; 
import AppRouter from './routes'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import './styles/App.css'; 

function App() {
  return (
    // Wrap the entire app in MUI ThemeProvider to apply the custom theme across all components
    <ThemeProvider theme={theme}>
      {/* CssBaseline resets default browser styles for consistency across devices */}
      <CssBaseline />
      
      {/* Navbar appears on all pages, contains responsive nav and logo */}
      <Navbar />

      {/* AppRouter determines which page component to render based on the current route */}
      {/* Includes <Routes> and individual <Route> declarations */}
      <AppRouter />

      {/* Footer is also global across pages and includes site-wide links and disclaimers */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;