import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3F7C78', // Ocean Teal
      contrastText: '#FAF9F7',
    },
    secondary: {
      main: '#E89072', // Soft Coral
      contrastText: '#fff',
    },
    background: {
      default: '#F5EFE6', // Sandy Beige
      paper: '#FAF9F7',   // Warm Cream
    },
    text: {
      primary: '#3A3A3A', // Deep Charcoal
      secondary: '#D38775', // Dusty Rose
    },
    accent: {
      main: '#D38775', // Dusty Rose
    },
    divider: '#D3E3DC', // Seafoam Mist
    muted: {
      main: '#BFDAD5', // Additional muted tone
    }
  },
  typography: {
    fontFamily: `'DM Sans', 'Poppins', 'sans-serif'`,
    h1: {// HERO SECTION TITLE
      fontWeight: 700,
      color: '#FAF9F7', // Warm Cream
      fontSize: '3 rem', // 48pt font size
    },
    h2: {
      fontWeight: 600,
      color: '#3F7C78',
      fontSize: '1.5rem', // 24pt font size
    },
    h3: { // HERO SECTION TEXT
      fontWeight: 500,
      color: '#FAF9F7', // Warm Cream
      fontSize: '1.5rem', // 20pt font size
      lineHeight: 1.75,
    },
    h4: {
      fontWeight: 500,
      color: '#3F7C78', // Ocean Teal
      fontSize: '1.125rem', // 18pt font size
    },
    h5: {
      fontWeight: 500,
      color: '#3A3A3A', // Deep Charcoal
      fontSize: '1rem', // 16pt font size
    },
    body1: {// 16 is standard but i think 18 is better
      fontSize: '1.125rem', // 18pt font size
      color: '#3A3A3A',
    },
    body2: {
      fontSize: '0.9rem',
      color: '#3A3A3A',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '8px 16px',
          border: 1
        },
        containedSecondary: {
          backgroundColor: '#E89072', // Soft Coral
          color: '#FAF9F7', // Warm Cream
          '&:hover': {
            backgroundColor: '#d57760', // Darker Soft Coral
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;