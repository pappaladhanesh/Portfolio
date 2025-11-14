import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  useTheme,
  useMediaQuery,
  Toolbar, // <-- added
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projectData = [
  {
    title: 'Full-Stack Social Media Application',
    description:
      'Developed a full-stack social media application using React.js, Tailwind CSS, Express.js, Node.js, and MySQL. Implemented secure JWT authentication, user profile management, and a robust RESTful API to handle posts, comments, likes/dislikes, and follow/unfollow functionality. Designed a responsive UI and optimized client-server communication with React Query.',
    imageUrl: './social-logo.png',
    tags: ['React', 'Tailwind', 'Express', 'Node', 'MySQL'],
    githubUrl: 'https://github.com/pappaladhanesh/Full-Stack-Social-Media-Application',
  },
  {
    title: 'Full-Stack Blog Project',
    description:
      'Developed a blogging web application using JavaScript, Node.js, MySQL, EJS and CSS. Implemented CRUD features for posts with author and timestamp metadata, and designed a responsive interface for easy content management.',
    imageUrl: './MyBlog.png',
    tags: ['JavaScript', 'Node', 'MySQL', 'EJS', 'CSS'],
    githubUrl: 'https://github.com/pappaladhanesh/Full-Stack-Blog-Project',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 70, damping: 16 },
  },
};

const MotionGrid = motion(Grid);

const Projects = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  //const isSm = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, md: 8 },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {/* Toolbar spacer pushes content below any fixed AppBar */}
      <Toolbar />

      <Box sx={{ width: '100%', maxWidth: 1100, mx: 'auto' }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Typography
              variant={isXs ? 'h4' : 'h2'}
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 'bold', mb: 6, color: 'primary.main' }}
            >
              My Projects
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {projectData.map((project, index) => (
              <MotionGrid
                item
                xs={12}
                sm={6}
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -6 }}
                sx={{ display: 'flex' }}
              >
                <Card
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    transition: 'transform 220ms ease, box-shadow 220ms ease',
                  }}
                  elevation={2}
                >
                  <CardMedia
                    component="img"
                    image={project.imageUrl}
                    alt={project.title}
                    sx={{
                      height: { xs: 160, sm: 200, md: 260 },
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant={isXs ? 'h6' : 'h5'} component="div" sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: { xs: '0.9rem', sm: '0.95rem' } }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size={isXs ? 'small' : 'medium'} variant="outlined" />
                      ))}
                    </Box>
                  </CardContent>

                  <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: { xs: 'center', sm: 'flex-start' }, flexWrap: 'wrap', gap: 1 }}>
                    <Button
                      size={isXs ? 'small' : 'medium'}
                      startIcon={<GitHubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                    >
                      View Code
                    </Button>

                    {project.liveUrl && (
                      <Button
                        size={isXs ? 'small' : 'medium'}
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="secondary"
                      >
                        Live Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </MotionGrid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects;
