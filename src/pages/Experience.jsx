import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';

// Page animation
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const experienceData = [
  {
    years: 'Jun 2024 - Present',
    title: 'Software Engineer I',
    company: 'Cyware Labs',
    description:
      'At Cyware Labs, I focused on building scalable and efficient backend systems that directly improved platform performance and reliability. I redesigned the CSV ingestion pipeline using Redis, Kafka, and S3, increasing capacity from 500 to over 50,000 rows while cutting processing time by more than 80%. I also integrated Salesforce CRM into our License Management System, automating license provisioning and reducing manual workflows. To support large-scale data needs, I developed a high-performance threat intel export system capable of handling over 500,000 records with optimized Elasticsearch queries. Beyond engineering, I took ownership of backend feature architecture, system documentation, and led on-call operations, consistently resolving incidents within SLA and ensuring zero customer escalations.',
    icon: <WorkIcon />,
    color: 'primary',
    techStack: ['Django', 'Redis', 'Kafka', 'PostgreSQL']
  },
  {
    years: 'Dec 2023 - Jun 2024',
    title: 'Software Engineer Intern',
    company: 'Cyware Labs',
    description:
      'During my internship at Cyware Labs, I worked on enhancing the threat intelligence platform by building scalable and high-impact backend solutions. I implemented a validation pipeline that reduced critical data misses by over 95%, ensuring higher data reliability. I designed and integrated an AI-powered summarization service that boosted analyst productivity by automatically generating concise summaries from raw threat intel. Additionally, I optimized the file-processing pipeline using multithreading, reducing average processing time by 60%. I also contributed to code quality by developing comprehensive unit tests across key microservices, increasing overall code coverage to over 90%. For these contributions, I was recognized with the Early Champion Award.',
    icon: <WorkIcon />,
    color: 'secondary',
    techStack: ['Django', 'Redis', 'Kafka', 'PostgreSQL']
  },
  {
    years: 'Feb 2022 - Apr 2023',
    title: 'Backend Engineer Intern',
    company: 'Apna Konnect',
    description:
      'At Apna Konnect, I designed and implemented a secure authentication system using JWT, significantly improving session management and access control. I built scalable APIs enabling role-based access control for admin, sub-admin, and multi-admin functionality. Additionally, I optimized backend queries and reduced feeds page response time from 1.8s to 400ms, greatly enhancing user experience.',
    icon: <WorkIcon />,
    color: 'secondary',
    techStack: ['NodeJS', 'Redis', 'MongoDB']
  },
];

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <motion.div variants={pageVariants} initial="hidden" animate="visible">
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          component="h1"
          gutterBottom
          align="center"
          sx={{ fontWeight: 'bold', mb: 6, color: 'primary.main' }}
        >
          Work Experience
        </Typography>

        {/* Responsive Timeline */}
        <Timeline position={isMobile ? 'right' : 'alternate'}>
          {experienceData.map((item, index) => (
            <TimelineItem key={index}>
              {!isMobile && (
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align={index % 2 === 0 ? 'right' : 'left'}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.years}
                </TimelineOppositeContent>
              )}

              <TimelineSeparator>
                {!isMobile && <TimelineConnector />}
                <TimelineDot color={item.color || 'grey'}>
                  {item.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: '12px', px: { xs: 1, sm: 2 } }}>
                {/* Show years above card on mobile */}
                {isMobile && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {item.years}
                  </Typography>
                )}

                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" component="span">
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {item.company}
                  </Typography>

                  <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                    {item.description}
                  </Typography>

                  {/* Tech Stack */}
                  <Box
                    sx={{
                      mt: 2,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {item.techStack.map((tech, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          p: 1,
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 1,
                          fontSize: { xs: '0.75rem', sm: '0.85rem' },
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </Container>
  );
};

export default Experience;