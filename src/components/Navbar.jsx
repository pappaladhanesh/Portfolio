import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography,
  Divider,
  Tooltip,
  AppBar,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const drawerWidth = 260;

const navItems = [
  { name: 'Home', path: '/', icon: <HomeIcon /> },
  { name: 'About', path: '/about', icon: <PersonIcon /> },
  { name: 'Projects', path: '/projects', icon: <CodeIcon /> },
  { name: 'Contact', path: '/contact', icon: <MailIcon /> },
];

// Animation variants (unchanged)
const sidebarVariants = {
  hidden: { x: -drawerWidth, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeInOut' } },
};
const itemVariants = { hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } };
const listVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } } };

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen((s) => !s);

  const drawerContent = (
    <motion.div initial="hidden" animate="visible" variants={isMobile ? {} : listVariants} style={{ height: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ my: 1, color: 'primary.main', fontWeight: 700 }}>
          Pappala Dhanesh
        </Typography>
      </Box>

      <Divider sx={{ borderColor: 'divider' }} />

      <List sx={{ p: 2 }}>
        {navItems.map((item) => (
          <motion.div key={item.name} variants={isMobile ? {} : itemVariants}>
            <ListItem disablePadding sx={{ mb: 1 }}>
              <Tooltip title={item.name} placement="right" disableHoverListener={isMobile}>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  selected={location.pathname === item.path}
                  onClick={isMobile ? handleDrawerToggle : undefined}
                  sx={{
                    minHeight: 52,
                    px: 2,
                    borderRadius: 1.5,
                    '&.Mui-selected': { backgroundColor: theme.palette.action.selected },
                    '&:hover': { backgroundColor: theme.palette.action.hover },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: location.pathname === item.path ? 'primary.main' : 'text.secondary' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ color: 'text.primary' }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </motion.div>
        ))}
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <Divider sx={{ mb: 1 }} />
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Pappala Dhanesh
        </Typography>
      </Box>
    </motion.div>
  );

  // Compute toolbar height (use theme.mixins.toolbar if available, fallback to 56)
  const toolbarHeight = (theme.mixins && theme.mixins.toolbar && theme.mixins.toolbar.minHeight) ? theme.mixins.toolbar.minHeight : 56;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Top AppBar for mobile to host menu button */}
      {isMobile && (
        <AppBar
          position="fixed"
          color="transparent"
          elevation={0}
          sx={{
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(255,255,255,0.04)',
          }}
        >
          {/* Explicitly set Toolbar minHeight so Drawer padding can match it */}
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: { xs: 56, md: 64 } }}>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Pappala Dhanesh
            </Typography>
            <Box sx={{ width: 40 }} />
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={isMobile ? handleDrawerToggle : undefined}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: 0,
            backgroundColor: 'background.paper',
            // Use the real toolbar height instead of a fixed value to avoid extra space
            pt: isMobile ? `${toolbarHeight}px` : 2,
          },
          display: { xs: isMobile ? 'block' : 'none', md: 'block' },
        }}
      >
        {isMobile ? (
          drawerContent
        ) : (
          <motion.div variants={sidebarVariants} initial="hidden" animate="visible" style={{ height: '100%' }}>
            {drawerContent}
          </motion.div>
        )}
      </Drawer>

      {/* Add a placeholder Box that acts as the page content offset when permanent drawer is visible */}
      {!isMobile && <Box sx={{ width: `${drawerWidth}px`, flexShrink: 0 }} aria-hidden />}
    </Box>
  );
};

export default Navbar;
