import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  useTheme,
  alpha,
  Button,
  Stack,
  Chip,
  Fade,
  Paper,
  Avatar,
  Divider
} from "@mui/material";
import {
  School,
  Groups,
  EmojiEvents,
  Security,
  TrendingUp,
  ConnectWithoutContact,
  Rocket,
  ArrowForward,
  Verified,
  Diversity3,
  Nature, // Replaces Eco
  LocalFlorist // Alternative eco icon
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function AboutPage() {
  const theme = useTheme();

  const features = [
    {
      icon: <School sx={{ fontSize: 48 }} />,
      title: "For Students, By Students",
      description: "Built specifically for the student community in Japan to make campus life more affordable and sustainable.",
      color: "#2196f3",
      gradient: "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
    },
    {
      icon: <Security sx={{ fontSize: 48 }} />,
      title: "Safe & Verified",
      description: "All users are verified with student emails, ensuring a trusted community for buying and selling.",
      color: "#4caf50",
      gradient: "linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)"
    },
    {
      icon: <Groups sx={{ fontSize: 48 }} />,
      title: "Community First",
      description: "We believe in building connections between students and supporting each other through sustainable commerce.",
      color: "#ff9800",
      gradient: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)"
    },
    {
      icon: <LocalFlorist sx={{ fontSize: 48 }} />, // Replaced Eco with LocalFlorist
      title: "Sustainable Impact",
      description: "Helping reduce waste and promote circular economy within student communities across Japan.",
      color: "#009688",
      gradient: "linear-gradient(135deg, #009688 0%, #4db6ac 100%)"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Students", icon: <Diversity3 />, color: "#2196f3" },
    { number: "5,000+", label: "Successful Trades", icon: <TrendingUp />, color: "#4caf50" },
    { number: "100+", label: "Campuses", icon: <School />, color: "#ff9800" },
    { number: "98%", label: "Satisfaction Rate", icon: <Verified />, color: "#9c27b0" }
  ];

  const teamValues = [
    {
      title: "Trust & Safety",
      description: "Verified student community with secure transactions and campus meetup spots",
      icon: "🛡️"
    },
    {
      title: "Sustainability",
      description: "Promoting circular economy and reducing campus waste through reuse",
      icon: "🌱"
    },
    {
      title: "Community",
      description: "Building meaningful connections between students across Japan",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Constantly improving to serve the evolving needs of students",
      icon: "💡"
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
                icon={<Rocket />} 
                label="Japan's Student Marketplace" 
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
                Building Japan's{" "}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Student Economy
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
                Connecting students across Japan to buy, sell, and trade campus essentials in a safe, 
                student-only marketplace designed to make student life more affordable and sustainable.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                <Button
                  component={RouterLink}
                  to="/listings"
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
                  Explore Marketplace
                </Button>
                <Button
                  component={RouterLink}
                  to="/listings/create"
                  variant="outlined"
                  size="large"
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
                  Start Selling
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8, mt: -8 }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Fade in={true} timeout={800} delay={index * 200}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${alpha(stat.color, 0.1)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                    border: `2px solid ${alpha(stat.color, 0.2)}`,
                    boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${alpha(stat.color, 0.15)}`,
                    }
                  }}
                >
                  <Box sx={{ color: stat.color, mb: 2 }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" fontWeight={900} color={stat.color} sx={{ mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color="text.secondary">
                    {stat.label}
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Fade in={true} timeout={1000}>
          <Paper
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 4,
              textAlign: 'center',
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.1)}`,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              }
            }}
          >
            <Nature sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 3 }} />
            <Typography variant="h2" fontWeight={900} sx={{ mb: 3 }}>
              Our Mission
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ 
                lineHeight: 1.6,
                maxWidth: 800,
                mx: 'auto',
                fontSize: { xs: "1.2rem", md: "1.5rem" }
              }}
            >
              To create a sustainable ecosystem where students can easily buy and sell items they need, 
              reducing waste and financial burden while building a stronger, more connected student community across Japan.
            </Typography>
          </Paper>
        </Fade>
      </Container>

      {/* Features Section */}
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
            Why StudentMarket?
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Designed from the ground up to serve the unique needs of students in Japan
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Fade in={true} timeout={800} delay={index * 200}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: '100%',
                    background: `linear-gradient(135deg, ${alpha(feature.color, 0.08)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                    border: `2px solid ${alpha(feature.color, 0.2)}`,
                    boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 25px 50px ${alpha(feature.color, 0.2)}`,
                      border: `2px solid ${alpha(feature.color, 0.4)}`,
                    }
                  }}
                >
                  <Box sx={{ color: feature.color, mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h4" fontWeight={800} sx={{ mb: 2, lineHeight: 1.2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Values Section */}
      <Box sx={{ background: alpha(theme.palette.primary.main, 0.02), py: 8 }}>
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
              Our Values
            </Typography>
            <Typography variant="h5" color="text.secondary">
              The principles that guide everything we do
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {teamValues.map((value, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Fade in={true} timeout={800} delay={index * 100}>
                  <Card
                    sx={{
                      p: 4,
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
                      {value.icon}
                    </Typography>
                    <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {value.description}
                    </Typography>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
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
          <ConnectWithoutContact sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 3 }} />
          <Typography variant="h2" fontWeight={900} sx={{ mb: 2 }}>
            Join Our Community
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Ready to be part of Japan's fastest-growing student marketplace?
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              size="large"
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
              Sign Up Free
            </Button>
            <Button
              component={RouterLink}
              to="/listings"
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
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
              Browse Listings
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}