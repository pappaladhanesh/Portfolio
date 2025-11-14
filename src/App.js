import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles, Box } from '@mui/material'; // Import Box
import Navbar from './components/Navbar'; // Assuming Navbar.jsx now contains the Sidebar
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
// import Experience from './pages/Experience'; // Import the new page
// import Footer from './components/Footer';

// Define a modern DARK theme
const theme = createTheme({
  palette: {
    mode: 'dark', // Set theme mode to dark
    primary: {
      main: '#bb86fc', // Purple - Good contrast on dark
      light: '#eebcff',
      dark: '#8a56c8',
    },
    secondary: {
      main: '#03dac6', // Teal accent
      light: '#66fff9',
      dark: '#00a896',
    },
    background: {
      default: '#121212', // Standard dark background
      paper: '#1e1e1e', // Slightly lighter paper background
    },
    text: {
      primary: '#e1e1e1', // Light grey text
      secondary: '#a0a0a0', // Dimmer secondary text
    }
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 20,
        },
        containedPrimary: {
          // Ensure good contrast for primary button text in dark mode if needed
          // color: '#000000', // Example: Black text if primary.main is very light
        },
        containedSecondary: {
           color: '#000000', // Black text on secondary buttons
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          backgroundImage: 'none', // Ensure paper doesn't have unwanted background images in dark mode
        },
      },
    },
    MuiAppBar: { // Style AppBar specifically for dark mode
      styleOverrides: {
        root: {
          // Darker, slightly transparent background with blur
          background: 'rgba(18, 18, 18, 0.85)', // Corresponds to background.default
          backdropFilter: 'blur(10px)',
        }
      }
    }
  },
});

// Global styles (adjust scrollbar for dark theme)
const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      body: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary, // Set default text color
      },
      'html': {
        scrollBehavior: 'smooth',
      },
      '*::-webkit-scrollbar': {
        width: '8px',
      },
      '*::-webkit-scrollbar-track': {
        background: theme.palette.background.paper, // Dark track
      },
      '*::-webkit-scrollbar-thumb': {
        background: theme.palette.primary.dark, // Darker thumb
        borderRadius: '4px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: theme.palette.primary.main, // Brighter thumb on hover
      },
      // Add a subtle background pattern or gradient if desired
      // 'body::before': {
      //   content: '""',
      //   position: 'fixed',
      //   top: 0, left: 0, right: 0, bottom: 0,
      //   background: 'radial-gradient(circle at top left, rgba(187, 134, 252, 0.1), transparent 40%), radial-gradient(circle at bottom right, rgba(3, 218, 198, 0.1), transparent 40%)',
      //   zIndex: -1,
      //   pointerEvents: 'none',
      // }
    })}
  />
);

//const drawerWidth = 240; // Define this width consistently

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <Router>
        <Navbar /> {/* This is your sidebar, probably fixed */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            ml: { md: '240px' }, // <-- Add this line to offset main content for sidebar
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}


// <Route path="/experience" element={<Experience />} /> {/* Add Experience route */} 

export default App;
