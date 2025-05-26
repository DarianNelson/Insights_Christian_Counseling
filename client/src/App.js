import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme'; // adjust path as needed
import AppRouter from './routes'; // or './AppRouter'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <AppRouter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;