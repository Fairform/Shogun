import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1779ba',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#000000',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1200px',
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          background: 'transparent',
        },
      },
    },
  },
});

export default theme;