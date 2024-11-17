// Theme.js
import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d9ff', // Light blue color
    },
    secondary: {
      main: '#2ec5d3', // Light teal
    },
    background: {
      default: '#000000', // Black background
      paper: '#121212', // Dark gray for cards or paper components
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#b3b3b3', // Light gray for less important text
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      color: '#00d9ff',
    },
    body1: {
      fontSize: '1.25rem',
      color: '#b3b3b3',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 500,
    },
  },
});
