import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Box,
  useTheme,
  alpha,
  Stack,
  Chip,
  Fade,
  Paper,
  Divider
} from "@mui/material";
import {
  Work,
  School,
  Groups,
  Rocket,
  TrendingUp,
  Diversity3,
  EmojiEvents,
  AccessTime,
  LocationOn,
  BusinessCenter,
  ArrowForward,
  Send,
  Notifications
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function CareersPage() {
  const theme = useTheme();

  const openPositions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Tokyo, Japan",
      description: "Help build the next generation of our student marketplace platform using React, TypeScript, and modern web technologies.",
      experience: "1-3 years",
      salary: "¥4M - ¥6M",
      urgent: true,
      color: "#2196f3"
    },
    {
      title: "Campus Ambassador",
      department: "Marketing",
      type: "Part-time",
      location: "Multiple Campuses",
      description: "Represent StudentMarket on your campus and help grow our community through events and social media.",
      experience: "Student",
      salary: "¥1,200/hr",
      popular: true,
      color: "#4caf50"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      type: "Full-time",
      location: "Tokyo, Japan",
      description: "Create amazing user experiences and beautiful interfaces for our student users across web and mobile.",
      experience: "2-4 years",
      salary: "¥4.5M - ¥6.5M",
      color: "#ff9800"
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "Build scalable backend systems and APIs that power our marketplace platform for thousands of students.",
      experience: "2-5 years",
      salary: "¥5M - ¥7M",
      color: "#9c27b0"
    }
  ];

  const benefits = [
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: "Student-Friendly",
      description: "Flexible hours that work around your class schedule and academic commitments",
      color: "#2196f3",
      gradient: "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
    },
    {
      icon: <Rocket sx={{ fontSize: 40 }} />,
      title: "Rapid Growth",
      description: "Join a fast-growing startup with real impact and career advancement opportunities",
      color: "#4caf50",
      gradient: "linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)"
    },
    {
      icon: <Groups sx={{ fontSize: 40 }} />,
      title: "Amazing Team",
      description: "Work with passionate students, graduates, and industry professionals",
      color: "#ff9800",
      gradient: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)"
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: "Career Development",
      description: "Mentorship programs, learning budgets, and skill development opportunities",
      color: "#9c27b0",
      gradient: "linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)"
    },
    {
      icon: <Diversity3 sx={{ fontSize: 40 }} />,
      title: "Inclusive Culture",
      description: "Diverse, inclusive workplace where every voice is heard and valued",
      color: "#009688",
      gradient: "linear-gradient(135deg, #009688 0%, #4db6ac 100%)"
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40 }} />,
      title: "Impact & Recognition",
      description: "Make real impact and get recognized for your contributions",
      color: "#e91e63",
      gradient: "linear-gradient(135deg, #e91e63 0%, #f06292 100%)"
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Groups />, color: "#2196f3" },
    { number: "15+", label: "Universities", icon: <School />, color: "#4caf50" },
    { number: "2x", label: "Growth YoY", icon: <TrendingUp />, color: "#ff9800" },
    { number: "95%", label: "Retention", icon: <EmojiEvents />, color: "#9c27b0" }
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
                label="Join Our Mission" 
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
                Build the Future of{" "}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Student Commerce
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
                Join our passionate team and help us revolutionize how students buy, sell, and connect across Japan. 
                Be part of something bigger while growing your career.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                <Button
                  href="#positions"
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
                  View Open Roles
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Send />}
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
                  Send Resume
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

      {/* Benefits Section */}
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
            Why Join StudentMarket?
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            We're building more than a company - we're building a community and a movement
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Fade in={true} timeout={800} delay={index * 100}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: '100%',
                    background: `linear-gradient(135deg, ${alpha(benefit.color, 0.08)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                    border: `2px solid ${alpha(benefit.color, 0.2)}`,
                    boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 25px 50px ${alpha(benefit.color, 0.2)}`,
                      border: `2px solid ${alpha(benefit.color, 0.4)}`,
                    }
                  }}
                >
                  <Box sx={{ color: benefit.color, mb: 3 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={800} sx={{ mb: 2, lineHeight: 1.2 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {benefit.description}
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Open Positions */}
      <Box id="positions" sx={{ background: alpha(theme.palette.primary.main, 0.02), py: 8 }}>
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
              Open Positions
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Ready to start your journey with us?
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {openPositions.map((position, index) => (
              <Grid item xs={12} key={index}>
                <Fade in={true} timeout={800} delay={index * 100}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      background: `linear-gradient(135deg, ${alpha(position.color, 0.05)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                      border: `2px solid ${alpha(position.color, 0.2)}`,
                      boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 15px 40px ${alpha(position.color, 0.15)}`,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={8}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Typography variant="h4" fontWeight={800} sx={{ color: position.color }}>
                              {position.title}
                            </Typography>
                            {position.urgent && (
                              <Chip label="Urgent" color="error" size="small" sx={{ fontWeight: 700 }} />
                            )}
                            {position.popular && (
                              <Chip label="Popular" color="warning" size="small" sx={{ fontWeight: 700 }} />
                            )}
                          </Box>
                          
                          <Stack direction="row" spacing={3} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <BusinessCenter sx={{ fontSize: 18, color: 'text.secondary' }} />
                              <Typography variant="body1" fontWeight={600} color="primary">
                                {position.department}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <AccessTime sx={{ fontSize: 18, color: 'text.secondary' }} />
                              <Typography variant="body1" color="text.secondary">
                                {position.type}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <LocationOn sx={{ fontSize: 18, color: 'text.secondary' }} />
                              <Typography variant="body1" color="text.secondary">
                                {position.location}
                              </Typography>
                            </Box>
                          </Stack>

                          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                            {position.description}
                          </Typography>

                          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
                            <Chip 
                              label={`Experience: ${position.experience}`} 
                              variant="outlined" 
                              size="small"
                              sx={{ fontWeight: 600 }}
                            />
                            <Chip 
                              label={`Salary: ${position.salary}`} 
                              variant="outlined" 
                              size="small"
                              sx={{ fontWeight: 600, color: 'success.main' }}
                            />
                          </Stack>
                        </Grid>
                        
                        <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
                          <Button 
                            variant="contained" 
                            size="large"
                            endIcon={<Send />}
                            sx={{
                              fontWeight: 700,
                              px: 4,
                              py: 1.5,
                              background: position.gradient || `linear-gradient(135deg, ${position.color} 0%, ${alpha(position.color, 0.7)} 100%)`,
                              boxShadow: `0 4px 15px ${alpha(position.color, 0.3)}`,
                              borderRadius: 2,
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: `0 8px 25px ${alpha(position.color, 0.4)}`,
                              },
                              transition: "all 0.3s ease",
                            }}
                          >
                            Apply Now
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>

          {/* No positions available */}
          {openPositions.length === 0 && (
            <Fade in={true} timeout={800}>
              <Card 
                sx={{ 
                  textAlign: 'center', 
                  p: 6, 
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Work sx={{ fontSize: 64, color: theme.palette.text.secondary, mb: 2 }} />
                <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
                  No Open Positions Right Now
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 3, maxWidth: 500, mx: 'auto' }}>
                  We're not currently hiring, but check back soon for new opportunities to join our growing team.
                </Typography>
                <Button 
                  variant="outlined" 
                  size="large"
                  startIcon={<Notifications />}
                  sx={{
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                  }}
                >
                  Get Notified
                </Button>
              </Card>
            </Fade>
          )}
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
          <Groups sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 3 }} />
          <Typography variant="h2" fontWeight={900} sx={{ mb: 2 }}>
            Ready to Make an Impact?
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Join our mission to revolutionize student commerce in Japan. Let's build something amazing together.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              href="#positions"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
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
              View All Positions
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Send />}
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
              Send General Application
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}