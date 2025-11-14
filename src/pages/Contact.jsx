import React from 'react';
import {
  Container,
  Typography,
  Box,
  IconButton,
  Link,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Contact = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="sm">
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 14 }}
          sx={{ textAlign: 'center' }}
        >
          <Typography
            variant={isXs ? 'h4' : 'h2'}
            component="h1"
            gutterBottom
            sx={{ fontWeight: '700', color: 'primary.main' }}
          >
            Contact Me
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Feel free to reach out via email or connect with me on GitHub and LinkedIn!
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 2, sm: 4 },
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
            }}
          >
            <Tooltip title="Email" arrow>
              <IconButton
                component={Link}
                href="mailto:dhaneshpappala@gmail.com"
                color="primary"
                aria-label="Email"
                size={isXs ? 'medium' : 'large'}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  '&:hover': { transform: 'translateY(-4px)' },
                  transition: 'transform 150ms ease',
                }}
              >
                <EmailIcon fontSize={isXs ? 'medium' : 'large'} />
              </IconButton>
            </Tooltip>

            <Tooltip title="GitHub" arrow>
              <IconButton
                component={Link}
                href="https://github.com/pappaladhanesh"
                color="primary"
                aria-label="GitHub"
                target="_blank"
                rel="noopener"
                size={isXs ? 'medium' : 'large'}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  '&:hover': { transform: 'translateY(-4px)' },
                  transition: 'transform 150ms ease',
                }}
              >
                <GitHubIcon fontSize={isXs ? 'medium' : 'large'} />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn" arrow>
              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/dhanesh-pappala-4b02ab315"
                color="primary"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener"
                size={isXs ? 'medium' : 'large'}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  '&:hover': { transform: 'translateY(-4px)' },
                  transition: 'transform 150ms ease',
                }}
              >
                <LinkedInIcon fontSize={isXs ? 'medium' : 'large'} />
              </IconButton>
            </Tooltip>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Contact;
