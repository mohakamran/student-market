// components/ui/Navbar.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Chip,
  useTheme,
  alpha,
  Container
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle,
  ShoppingBag,
  Add,
  Chat,
  Home,
  Store,
  Notifications,
  Favorite,
  Sell,
  School,
  Close,
  Logout
} from "@mui/icons-material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const [notificationsAnchor, setNotificationsAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchor(null);
  };

  const handleNotificationsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchor(event.currentTarget);
  };

  const handleNotificationsMenuClose = () => {
    setNotificationsAnchor(null);
  };

  const handleLogout = () => {
    handleProfileMenuClose();
    // Add any logout logic here (clear tokens, etc.)
    navigate('/login');
  };

  const navLinks = [
    { label: "Home", path: "/", icon: <Home sx={{ fontSize: 20 }} /> },
    { label: "Listings", path: "/listings", icon: <Store sx={{ fontSize: 20 }} /> },
    { label: "Create Listing", path: "/listings/create", icon: <Add sx={{ fontSize: 20 }} /> },
    { label: "Chat", path: "/chat", icon: <Chat sx={{ fontSize: 20 }} /> },
  ];

  const authLinks = [
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
  ];

  const profileMenuItems = [
    { label: "My Profile", path: "/profile" },
    { label: "My Listings", path: "/my-listings" },
    { label: "Favorites", path: "/favorites" },
    { label: "Settings", path: "/settings" },
  ];

  // Mock notifications
  const notifications = [
    { id: 1, text: "New message from Sarah", time: "5 min ago", unread: true },
    { id: 2, text: "Your listing was favorited", time: "1 hour ago", unread: true },
    { id: 3, text: "Price drop on similar items", time: "2 hours ago", unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const isActiveLink = (path: string) => location.pathname === path;

  // Drawer content for mobile
  const drawerContent = (
    <Box sx={{ width: 280, height: "100%", background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.9)} 100%)` }}>
      {/* Drawer Header */}
      <Box sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}` }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <School sx={{ fontSize: 32, color: theme.palette.primary.main }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1 }}>
              StudentMarket
            </Typography>
            <Chip 
              label="JP" 
              size="small" 
              color="primary" 
              sx={{ height: 20, fontSize: '0.6rem', fontWeight: 700 }} 
            />
          </Box>
        </Box>
        <IconButton onClick={toggleDrawer}>
          <Close />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List sx={{ px: 1, py: 2 }}>
        {navLinks.map((item) => (
          <ListItem
            button
            component={RouterLink}
            to={item.path}
            key={item.label}
            onClick={toggleDrawer}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              backgroundColor: isActiveLink(item.path) ? alpha(theme.palette.primary.main, 0.1) : "transparent",
              border: isActiveLink(item.path) ? `1px solid ${alpha(theme.palette.primary.main, 0.2)}` : "1px solid transparent",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: isActiveLink(item.path) ? theme.palette.primary.main : "text.secondary" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: isActiveLink(item.path) ? 600 : 400,
                color: isActiveLink(item.path) ? theme.palette.primary.main : "text.primary",
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 1 }} />

      {/* Auth Links */}
      <List sx={{ px: 1 }}>
        {authLinks.map((item) => (
          <ListItem
            button
            component={RouterLink}
            to={item.path}
            key={item.label}
            onClick={toggleDrawer}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
          >
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Logout in mobile drawer */}
      <List sx={{ px: 1, mt: 'auto', pb: 2 }}>
        <Divider sx={{ my: 1 }} />
        <ListItem
          button
          onClick={() => {
            toggleDrawer();
            navigate('/login');
          }}
          sx={{
            borderRadius: 2,
            color: theme.palette.error.main,
            "&:hover": {
              backgroundColor: alpha(theme.palette.error.main, 0.05),
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40, color: theme.palette.error.main }}>
            <Logout sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText 
            primary="Logout"
            primaryTypographyProps={{
              fontWeight: 500,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
          backdropFilter: "blur(20px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 0, sm: 2 } }}>
            {/* Logo Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <School sx={{ fontSize: 32 }} />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1,
                      background: "linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    StudentMarket
                  </Typography>
                  <Chip 
                    label="JP" 
                    size="small" 
                    sx={{ 
                      height: 20, 
                      fontSize: '0.6rem', 
                      fontWeight: 700, 
                      backgroundColor: alpha(theme.palette.common.white, 0.2),
                      color: theme.palette.common.white,
                    }} 
                  />
                </Box>
              </Box>

              {/* Desktop Navigation Links */}
              <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 0.5, ml: 3 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    component={RouterLink}
                    to={link.path}
                    startIcon={link.icon}
                    sx={{
                      textTransform: "none",
                      fontSize: 15,
                      fontWeight: isActiveLink(link.path) ? 600 : 400,
                      color: "white",
                      px: 2,
                      py: 1,
                      borderRadius: 3,
                      backgroundColor: isActiveLink(link.path) ? alpha(theme.palette.common.white, 0.15) : "transparent",
                      "&:hover": {
                        backgroundColor: alpha(theme.palette.common.white, 0.1),
                        transform: "translateY(-1px)",
                      },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Desktop Right Section */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
              {/* Create Listing Button */}
              <Button
                component={RouterLink}
                to="/listings/create"
                variant="contained"
                startIcon={<Sell />}
                sx={{
                  textTransform: "none",
                  borderRadius: 3,
                  px: 3,
                  fontWeight: 600,
                  background: `linear-gradient(45deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                  boxShadow: `0 4px 15px ${alpha(theme.palette.secondary.main, 0.3)}`,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 6px 20px ${alpha(theme.palette.secondary.main, 0.4)}`,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Sell Item
              </Button>

              {/* Notifications */}
              <IconButton
                color="inherit"
                onClick={handleNotificationsMenuOpen}
                sx={{
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.common.white, 0.1),
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <Badge badgeContent={unreadCount} color="error">
                  <Notifications />
                </Badge>
              </IconButton>

              {/* Profile Menu */}
              <IconButton
                color="inherit"
                onClick={handleProfileMenuOpen}
                sx={{
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.common.white, 0.1),
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <Avatar sx={{ width: 32, height: 32, backgroundColor: alpha(theme.palette.common.white, 0.2) }}>
                  <AccountCircle />
                </Avatar>
              </IconButton>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              edge="end"
              sx={{ 
                display: { xs: "flex", md: "none" },
                "&:hover": {
                  backgroundColor: alpha(theme.palette.common.white, 0.1),
                }
              }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationsAnchor}
        open={Boolean(notificationsAnchor)}
        onClose={handleNotificationsMenuClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 320,
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }
        }}
      >
        <MenuItem sx={{ fontWeight: 600, fontSize: 16 }}>Notifications</MenuItem>
        <Divider />
        {notifications.map((notification) => (
          <MenuItem key={notification.id} onClick={handleNotificationsMenuClose}>
            <Box>
              <Typography variant="body2" fontWeight={notification.unread ? 600 : 400}>
                {notification.text}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {notification.time}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      {/* Profile Menu */}
      <Menu
        anchorEl={profileAnchor}
        open={Boolean(profileAnchor)}
        onClose={handleProfileMenuClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }
        }}
      >
        {profileMenuItems.map((item) => (
          <MenuItem 
            key={item.label} 
            component={RouterLink}
            to={item.path}
            onClick={handleProfileMenuClose}
          >
            {item.label}
          </MenuItem>
        ))}
        <Divider />
        <MenuItem 
          onClick={handleLogout}
          sx={{ color: theme.palette.error.main }}
        >
          <Logout sx={{ fontSize: 20, mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            border: "none",
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}