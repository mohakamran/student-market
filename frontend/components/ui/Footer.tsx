import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Container,
  Link,
  Divider,
  useTheme,
  alpha
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  School,
  Security,
  Favorite
} from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();

  const navSections = [
    {
      title: "Marketplace",
      links: [
        { label: "All Listings", path: "/listings" },
        { label: "Categories", path: "/categories" },
        { label: "Create Listing", path: "/listings/create" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", path: "/help" },
        { label: "Contact Us", path: "/contact" },
        { label: "Report Issue", path: "/report" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Privacy Policy", path: "/privacy" },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "#", color: "#1877F2", label: "Facebook" },
    { icon: <Twitter />, href: "#", color: "#1DA1F2", label: "Twitter" },
    { icon: <Instagram />, href: "#", color: "#E4405F", label: "Instagram" },
    { icon: <LinkedIn />, href: "#", color: "#0A66C2", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: <Email sx={{ fontSize: 18 }} />, text: "support@studentmarket.jp" },
    { icon: <Phone sx={{ fontSize: 18 }} />, text: "+81 3-1234-5678" },
    { icon: <LocationOn sx={{ fontSize: 18 }} />, text: "Tokyo, Japan" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, ${alpha(theme.palette.common.white, 0.3)} 50%, transparent 100%)`,
        }
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${alpha(theme.palette.success.main, 0.1)} 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} sx={{ py: 6 }}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <School sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      background: "linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      lineHeight: 1,
                    }}
                  >
                    StudentMarket
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha(theme.palette.common.white, 0.8),
                      fontWeight: 600,
                      letterSpacing: 1,
                    }}
                  >
                    JAPAN
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="body2" sx={{ mb: 3, color: alpha(theme.palette.common.white, 0.7), lineHeight: 1.6 }}>
                Connecting students across Japan. Buy, sell, and trade campus essentials in a safe, student-only marketplace.
              </Typography>

              {/* Contact Info */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {contactInfo.map((item, index) => (
                  <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box sx={{ color: theme.palette.secondary.main }}>
                      {item.icon}
                    </Box>
                    <Typography variant="body2" sx={{ color: alpha(theme.palette.common.white, 0.8) }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Navigation Sections */}
            {navSections.map((section) => (
              <Grid item xs={12} sm={6} md={2.5} key={section.title}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: theme.palette.secondary.main,
                  }}
                >
                  {section.title}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: alpha(theme.palette.common.white, 0.8),
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          color: theme.palette.secondary.main,
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ borderColor: alpha(theme.palette.common.white, 0.2), my: 2 }} />

          {/* Bottom Section */}
          <Box
            sx={{
              py: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* Copyright and Security */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Typography variant="body2" sx={{ color: alpha(theme.palette.common.white, 0.7) }}>
                &copy; {new Date().getFullYear()} StudentMarket JP. All rights reserved.
              </Typography>
              
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Security sx={{ fontSize: 16, color: theme.palette.success.main }} />
                <Typography variant="caption" sx={{ color: alpha(theme.palette.common.white, 0.6) }}>
                  Safe & Secure
                </Typography>
              </Box>
            </Box>

            {/* Social Links */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ color: alpha(theme.palette.common.white, 0.7), mr: 2 }}>
                Follow us:
              </Typography>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  sx={{
                    color: alpha(theme.palette.common.white, 0.8),
                    backgroundColor: alpha(theme.palette.common.white, 0.1),
                    "&:hover": {
                      backgroundColor: social.color,
                      color: "white",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>

            {/* Made with love */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="caption" sx={{ color: alpha(theme.palette.common.white, 0.6) }}>
                Made with
              </Typography>
              <Favorite sx={{ fontSize: 16, color: theme.palette.error.main }} />
              <Typography variant="caption" sx={{ color: alpha(theme.palette.common.white, 0.6) }}>
                for students
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}