import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Avatar,
  styled,
  keyframes,
  useTheme,
  useMediaQuery,
  Toolbar, // <- added
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import avatarImage from '../assets/dhanesh.jpeg';

// Motion-enabled Box
const MotionBox = motion(Box);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 60, damping: 14 },
  },
};

// Gradient text
const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.light} 30%, ${theme.palette.secondary.light} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
}));

// Pulse keyframes
const pulse = keyframes`
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.03); }
`;

// Rotating keyframes for hover border
const rotateBorder = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Animated wrapper for buttons
const AnimatedButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  borderRadius: '50px',
  padding: 4,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -20,
    left: -20,
    width: '140%',
    height: '140%',
    borderRadius: 'inherit',
    background: `conic-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0,
    zIndex: 1,
    pointerEvents: 'none',
    transition: 'opacity 250ms ease',
  },
  '&:hover::before': {
    opacity: 0.9,
    animation: `${rotateBorder} 4s linear infinite`,
  },
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  borderRadius: '50px',
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.25),
  paddingBottom: theme.spacing(1.25),
  fontSize: '1rem',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  border: `2px solid ${theme.palette.background.paper}`,
  minWidth: 0,
  width: 'auto',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
  transition: 'transform 180ms ease, color 160ms ease',
  animation: `${pulse} 2.4s ease-in-out`,
  '&:hover': {
    transform: 'translateY(-3px)',
    color: theme.palette.primary.light,
    boxShadow: 'none',
  },
}));

const Home = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: { xs: 4, md: 8 },
        overflow: 'hidden',
        position: 'relative',
        mx: 'auto',
      }}
    >
      {/* Toolbar spacer to avoid AppBar overlap */}
      <Toolbar />

      <MotionBox variants={containerVariants} initial="hidden" animate="visible" style={{ zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MotionBox variants={itemVariants}>
            <Avatar
              alt="Pappala Dhanesh"
              src={avatarImage}
              sx={{
                width: { xs: 88, sm: 120, md: 140 },
                height: { xs: 88, sm: 120, md: 140 },
                mb: 3,
                border: '4px solid',
                borderColor: 'primary.main',
                boxShadow: (theme) => `0 0 24px ${theme.palette.primary.light}33`,
              }}
            />
          </MotionBox>

          {/* --- Heading split into two lines for better mobile layout --- */}
          <MotionBox variants={itemVariants} sx={{ mb: 1 }}>
            {/* First line: "Hi there," - force single line on small screens */}
            <Typography
              variant={isXs ? 'h5' : isSm ? 'h4' : 'h3'}
              component="div"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                whiteSpace: 'nowrap', // keep "Hi there," on one line
                mb: { xs: 0.5, sm: 1 },
              }}
            >
              Hi there,
            </Typography>

            {/* Second line: "I'm Pappala Dhanesh" */}
            <GradientText
              variant={isXs ? 'h5' : isSm ? 'h4' : 'h3'}
              component="div"
              sx={{ fontWeight: 700, mt: 0 }}
            >
              I'm&nbsp;Pappala Dhanesh
            </GradientText>
          </MotionBox>
        </Box>

        <MotionBox variants={itemVariants}>
          <Typography
            variant={isXs ? 'body1' : 'h6'}
            color="text.secondary"
            paragraph
            sx={{ mb: 4, maxWidth: { xs: '92%', sm: '560px' }, mx: 'auto', fontSize: { xs: '0.95rem', sm: '1rem' } }}
          >
            I’m an aspiring full-stack developer focused on building clean, user-friendly web applications. With a strong base in C++, DSA, OOP, DBMS, and SQL, I’m currently expanding my skills into full-stack development to create real-world, scalable projects.
          </Typography>
        </MotionBox>

        <MotionBox variants={itemVariants} sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center' }}>
          <AnimatedButtonWrapper>
            <AnimatedButton component={RouterLink} to="/projects" size={isXs ? 'small' : 'large'} endIcon={<ArrowForwardIcon />} aria-label="Explore my work">
              Explore My Work
            </AnimatedButton>
          </AnimatedButtonWrapper>

          <AnimatedButtonWrapper>
            <AnimatedButton component={RouterLink} to="/contact" size={isXs ? 'small' : 'large'} endIcon={<ArrowForwardIcon />} aria-label="Contact me">
              Contact Me
            </AnimatedButton>
          </AnimatedButtonWrapper>
        </MotionBox>
      </MotionBox>
    </Container>
  );
};

export default Home;
