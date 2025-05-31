// Import MUI's theming utility
import { createTheme } from '@mui/material/styles';

// Define and export the custom theme object
const theme = createTheme({
  // ==============================
  // COLOR PALETTE CONFIGURATION
  // ==============================
  palette: {
    primary: {
      main: '#3F7C78', // Ocean Teal – used for headers, links, accents
      contrastText: '#FAF9F7', // Light text for contrast
    },
    secondary: {
      main: '#E89072', // Soft Coral – used for CTA buttons and highlights
      contrastText: '#fff',
    },
    background: {
      default: '#F5EFE6', // Sandy Beige – page background
      paper: '#FAF9F7',   // Warm Cream – card backgrounds
    },
    text: {
      primary: '#3A3A3A', // Deep Charcoal – main body text
      secondary: '#D38775', // Dusty Rose – used sparingly for accents
    },
    accent: {
      main: '#D38775', // Dusty Rose (custom accent role for flexibility) !! CUSTOM PALETTE EXTENSION
    },
    divider: '#D3E3DC', // Seafoam Mist – used for visual separators
    muted: {
      main: '#BFDAD5', // Pale Aqua - muted accent tone (e.g. cards and backgrounds) !! CUSTOM PALETTE EXTENSION
    },
  },

  // ==============================
  // TYPOGRAPHY SETTINGS
  // ==============================
  typography: {
    fontFamily: `'DM Sans', 'Poppins', 'sans-serif'`, // Custom brand fonts

    h1: {
      fontWeight: 700,
      color: '#FAF9F7', // Hero title – light text on dark image
      fontSize: '3rem', 
    },
    h2: {
      fontWeight: 600,
      color: '#3F7C78',
      fontSize: '1.5rem',
    },
    h3: {
      fontWeight: 500,
      color: '#FAF9F7', // Often used in hero/subtitles
      fontSize: '1.5rem',
      lineHeight: 1.75,
    },
    h4: {
      fontWeight: 500,
      color: '#3F7C78', // Used for section or card headers
      fontSize: '1.125rem',
    },
    h5: {
      fontWeight: 500,
      color: '#3A3A3A', // Subheadings or labeled sections
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1.125rem', // Slightly larger than MUI default (for better readability)
      color: '#3A3A3A',
    },
    body2: {
      fontSize: '0.9rem',
      color: '#3A3A3A',
    },
    button: {
      textTransform: 'none', // Maintain case consistency
      fontWeight: 500,
    },
  },

  // ==============================
  // COMPONENT STYLE OVERRIDES
  // ==============================
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Rounded button appearance (pill-like)
          padding: '8px 16px',
          border: 1, // Optional border (could be themed dynamically)
        },
        containedSecondary: {
          backgroundColor: '#E89072', // Soft Coral
          color: '#FAF9F7',           // Light text
          '&:hover': {
            backgroundColor: '#d57760', // Darker coral on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Rounded cards for soft visual styling
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', // Subtle elevation
        },
      },
    },
  },
});

export default theme;