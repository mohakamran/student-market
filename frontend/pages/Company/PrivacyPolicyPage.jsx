import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  useTheme,
  alpha,
  Button,
  Stack,
  Chip,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid
} from "@mui/material";
import {
  Security,
  PrivacyTip,
  Shield,
  VerifiedUser,
  VisibilityOff,
  Lock,
  Email,
  ArrowForward,
  CheckCircle,
  Group,
  Storage,
  Info,
  Update,
  Person
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function PrivacyPolicyPage() {
  const theme = useTheme();

  const sections = [
    {
      icon: <Storage sx={{ fontSize: 32 }} />,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, create a listing, or communicate with other users. This includes your name, email address, phone number, and any other information you choose to provide.",
      color: "#2196f3",
      gradient: "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)",
      points: [
        "Account information (name, email, phone)",
        "Listing details and photos",
        "Messages between users",
        "University verification data"
      ]
    },
    {
      icon: <Info sx={{ fontSize: 32 }} />,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, communicate with you about your account and listings, and ensure the safety and security of our platform.",
      color: "#4caf50",
      gradient: "linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)",
      points: [
        "Facilitate secure transactions",
        "Personalize your experience",
        "Improve platform safety",
        "Send important updates"
      ]
    },
    {
      icon: <Group sx={{ fontSize: 32 }} />,
      title: "Information Sharing",
      content: "We do not sell your personal information to third parties. We may share your information only in specific circumstances, such as to comply with legal obligations or to facilitate transactions between users.",
      color: "#ff9800",
      gradient: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)",
      points: [
        "Never sold to third parties",
        "Only shared for transactions",
        "Legal compliance requirements",
        "With your explicit consent"
      ]
    },
    {
      icon: <Shield sx={{ fontSize: 32 }} />,
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      color: "#009688",
      gradient: "linear-gradient(135deg, #009688 0%, #4db6ac 100%)",
      points: [
        "Encrypted data transmission",
        "Secure server infrastructure",
        "Regular security audits",
        "Access control measures"
      ]
    },
    {
      icon: <VerifiedUser sx={{ fontSize: 32 }} />,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You can manage your privacy settings through your account and contact us for any privacy-related concerns.",
      color: "#9c27b0",
      gradient: "linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)",
      points: [
        "Access your personal data",
        "Request data correction",
        "Delete your account",
        "Export your information"
      ]
    },
    {
      icon: <Update sx={{ fontSize: 32 }} />,
      title: "Changes to This Policy",
      content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.",
      color: "#607d8b",
      gradient: "linear-gradient(135deg, #607d8b 0%, #90a4ae 100%)",
      points: [
        "30-day notice for changes",
        "Email notifications",
        "Clear version history",
        "Easy access to previous versions"
      ]
    }
  ];

  const privacyPrinciples = [
    {
      icon: "🔒",
      title: "Transparency",
      description: "We're clear about what data we collect and why"
    },
    {
      icon: "🎯",
      title: "Purpose Limitation",
      description: "We only use data for specific, legitimate purposes"
    },
    {
      icon: "📊",
      title: "Data Minimization",
      description: "We collect only what we need to serve you"
    },
    {
      icon: "🛡️",
      title: "Security First",
      description: "Your data is protected with enterprise-grade security"
    }
  ];

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
          position: "relative",
          overflow: "hidden",
          py: { xs: 8, md: 12 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(253, 203, 88, 0.2) 0%, transparent 50%)',
          }
        }}
      >
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Chip 
                icon={<Shield />} 
                label="Your Privacy Matters" 
                sx={{ 
                  mb: 3, 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',
                  py: 2,
                  backdropFilter: 'blur(10px)'
                }} 
              />
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  lineHeight: 1.1,
                  textShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              >
                Your Privacy is Our{" "}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Priority
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: alpha(theme.palette.common.white, 0.9),
                  lineHeight: 1.6,
                  maxWidth: 800,
                  mx: 'auto',
                  fontSize: { xs: "1.1rem", md: "1.4rem" },
                }}
              >
                We believe in transparent, secure, and respectful data practices. 
                Learn how we protect your information and uphold your privacy rights.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                <Button
                  href="#policy"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    background: `linear-gradient(45deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                    boxShadow: `0 8px 25px ${alpha(theme.palette.secondary.main, 0.4)}`,
                    borderRadius: 3,
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: `0 12px 35px ${alpha(theme.palette.secondary.main, 0.6)}`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Read Privacy Policy
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  startIcon={<Email />}
                  sx={{
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    borderColor: "white",
                    color: "white",
                    borderRadius: 3,
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.common.white, 0.15),
                      borderColor: "white",
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Contact Privacy Team
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Quick Info Section */}
      <Container maxWidth="lg" sx={{ py: 8, mt: -8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Fade in={true} timeout={800}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha('#2196f3', 0.1)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                  border: `2px solid ${alpha('#2196f3', 0.2)}`,
                  boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                }}
              >
                <PrivacyTip sx={{ fontSize: 48, color: '#2196f3', mb: 2 }} />
                <Typography variant="h4" fontWeight={900} color="#2196f3" sx={{ mb: 1 }}>
                  Last Updated
                </Typography>
                <Typography variant="h6" fontWeight={600} color="text.secondary">
                  January 2024
                </Typography>
              </Card>
            </Fade>
          </Grid>
          <Grid item xs={12} md={8}>
            <Fade in={true} timeout={800} delay={200}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  height: '100%'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <Security sx={{ fontSize: 48, color: theme.palette.primary.main, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
                      Our Commitment to You
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 3 }}>
                      At StudentMarket, we take your privacy seriously. This Privacy Policy explains how we collect, 
                      use, disclose, and safeguard your information when you use our student marketplace platform.
                    </Typography>
                    <Chip 
                      icon={<CheckCircle />} 
                      label="We are committed to protecting your privacy and ensuring a safe experience for all students." 
                      color="primary"
                      variant="outlined"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                </Box>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Privacy Principles */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Our Privacy Principles
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Built on a foundation of trust, transparency, and respect for your data
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {privacyPrinciples.map((principle, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Fade in={true} timeout={800} delay={index * 100}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    height: '100%',
                    background: theme.palette.background.paper,
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 30px ${alpha(theme.palette.common.black, 0.1)}`,
                    }
                  }}
                >
                  <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                    {principle.icon}
                  </Typography>
                  <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                    {principle.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                    {principle.description}
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Main Policy Sections */}
      <Box id="policy" sx={{ background: alpha(theme.palette.primary.main, 0.02), py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Privacy Policy Details
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Understanding how we protect and handle your information
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {sections.map((section, index) => (
              <Fade in={true} timeout={800} delay={index * 100} key={index}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${alpha(section.color, 0.05)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                    border: `2px solid ${alpha(section.color, 0.2)}`,
                    boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 15px 40px ${alpha(section.color, 0.15)}`,
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 3 }}>
                      <Box sx={{ color: section.color }}>
                        {section.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h4" fontWeight={800} sx={{ mb: 2, color: section.color }}>
                          {section.title}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 3 }}>
                          {section.content}
                        </Typography>
                        
                        <List dense sx={{ mb: 2 }}>
                          {section.points.map((point, pointIndex) => (
                            <ListItem key={pointIndex} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckCircle sx={{ color: section.color, fontSize: 20 }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={point}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                  fontWeight: 500
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Card
          sx={{
            p: 6,
            textAlign: 'center',
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.1)}`,
          }}
        >
          <Lock sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 3 }} />
          <Typography variant="h2" fontWeight={900} sx={{ mb: 2 }}>
            Questions About Privacy?
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Our privacy team is here to help you understand our practices and address any concerns.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              startIcon={<Email />}
              sx={{
                px: 5,
                py: 1.5,
                fontWeight: 800,
                fontSize: '1.1rem',
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                borderRadius: 3,
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: `0 15px 35px ${alpha(theme.palette.primary.main, 0.6)}`,
                },
                transition: "all 0.3s ease",
              }}
            >
              Contact Privacy Team
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="mailto:privacy@studentmarket.jp"
              sx={{
                px: 5,
                py: 1.5,
                fontWeight: 700,
                fontSize: '1.1rem',
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.04),
                  transform: "translateY(-3px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              privacy@studentmarket.jp
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}