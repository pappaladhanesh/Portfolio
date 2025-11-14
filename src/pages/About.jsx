import React from "react";
import { Container, Typography, Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

// Motion-enabled MUI Box (so we can pass sx props to animated containers)
const MotionBox = motion(Box);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 14 },
  },
};

const About = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // small screens

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 10 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
      }}
    >
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ width: "100%" }}
      >
        {/* About Card */}
        <MotionBox
          variants={itemVariants}
          sx={{
            maxWidth: 1000,
            mx: "auto",
            mb: { xs: 3, md: 4 },
            p: { xs: 2, md: 3 },
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            bgcolor: "background.paper",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "primary.main",
              textAlign: "left",
              fontSize: { xs: "1.6rem", sm: "2.1rem", md: "2.5rem" },
              lineHeight: 1.1,
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "text.secondary",
              textAlign: "left",
              fontSize: { xs: "0.98rem", sm: "1.05rem", md: "1.15rem" },
            }}
          >
            I'm a passionate coding enthusiast who loves building web
            applications and experimenting with new technologies. I enjoy
            reading tech blogs in my free time and staying on top of the
            latest web development trends. I also love contributing to
            open-source and sharing my knowledge with the community.
          </Typography>
        </MotionBox>

        {/* Education Card */}
        <MotionBox
          variants={itemVariants}
          sx={{
            maxWidth: 1000,
            mx: "auto",
            p: { xs: 2, md: 3 },
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            bgcolor: "background.paper",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "primary.main",
              textAlign: "left",
              fontSize: { xs: "1.6rem", sm: "2.1rem", md: "2.5rem" },
            }}
          >
            Education
          </Typography>

          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={12} sm={8}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.98rem", sm: "1.05rem", md: "1.15rem" },
                }}
              >
                National Institute of Technology Calicut, 2022 - 2026
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.98rem", sm: "1.05rem", md: "1.15rem" },
                  fontWeight: 700,
                }}
                align={isXs ? "left" : "right"}
              >
                B.Tech ECE
              </Typography>
            </Grid>
          </Grid>
        </MotionBox>
      </MotionBox>
    </Container>
  );
};

export default About;
