import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Box,
  useTheme,
  alpha,
  Stack,
  Chip,
  Fade,
  Alert,
  InputAdornment
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Send,
  Person,
  Subject,
  Message,
  Rocket,
  SupportAgent,
  Chat
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: "Email Support",
      description: "Get detailed assistance via email with 24-hour response time",
      contact: "support@studentmarket.jp",
      action: "Send Email",
      color: "#2196f3",
      gradient: "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
    },
    {
      icon: <Chat sx={{ fontSize: 40 }} />,
      title: "Live Chat",
      description: "Instant help during business hours (9 AM - 6 PM JST)",
      contact: "Available Now",
      action: "Start Chat",
      color: "#4caf50",
      gradient: "linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)"
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: "Phone Support",
      description: "Speak directly with our dedicated support team",
      contact: "+81 3-1234-5678",
      action: "Call Now",
      color: "#ff9800",
      gradient: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)"
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: "Visit Our Office",
      description: "Meet us in person at our Tokyo headquarters",
      contact: "Shibuya, Tokyo, Japan",
      action: "Get Directions",
      color: "#9c27b0",
      gradient: "linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)"
    }
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Go to Settings > Security > Reset Password, or contact support for immediate assistance."
    },
    {
      question: "What should I do if I encounter a scam?",
      answer: "Immediately report the user through their profile and contact our safety team at safety@studentmarket.jp"
    },
    {
      question: "How long does support take to respond?",
      answer: "We typically respond within 2 hours during business days, and within 24 hours maximum."
    }
  ];

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
                icon={<SupportAgent />} 
                label="We're Here to Help" 
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
                Get in{" "}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Touch
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
                Have questions, feedback, or need assistance? Our dedicated support team is here to help 
                you get the most out of StudentMarket. We're just a message away!
              </Typography>
              <Button
                href="#contact-form"
                variant="contained"
                size="large"
                endIcon={<Send />}
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
                Send us a Message
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Contact Methods - 2 cards per row, centered */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
            How Can We Help You?
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Choose your preferred way to get in touch with us
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {contactMethods.map((method, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Fade in={true} timeout={800} delay={index * 100}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 3,
                    width: '100%',
                    maxWidth: 400,
                    minHeight: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: `linear-gradient(135deg, ${alpha(method.color, 0.08)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                    border: `2px solid ${alpha(method.color, 0.2)}`,
                    boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${alpha(method.color, 0.15)}`,
                    }
                  }}
                >
                  <Box>
                    <Box sx={{ color: method.color, mb: 3 }}>
                      {method.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
                      {method.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.5 }}>
                      {method.description}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" fontWeight={700} sx={{ mb: 2, color: method.color }}>
                      {method.contact}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: method.color,
                        color: method.color,
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: alpha(method.color, 0.08),
                          borderColor: method.color,
                        }
                      }}
                    >
                      {method.action}
                    </Button>
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Form & FAQ */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form - Full width vertical layout */}
          <Grid item xs={12} md={8}>
            <Fade in={true} timeout={800}>
              <Card
                id="contact-form"
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
                  boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.1)}`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                    <Send sx={{ fontSize: 32, color: theme.palette.primary.main }} />
                    <Typography variant="h3" fontWeight={800}>
                      Send us a Message
                    </Typography>
                  </Box>

                  <Alert severity="info" sx={{ mb: 4, borderRadius: 2 }}>
                    We typically respond within 2 hours during business hours (9 AM - 6 PM JST)
                  </Alert>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      {/* Name and Email in row for larger screens */}
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            required
                            label="Your Name"
                            value={formData.name}
                            onChange={handleInputChange('name')}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Person sx={{ color: theme.palette.text.secondary }} />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                              }
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            required
                            type="email"
                            label="Email Address"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Email sx={{ color: theme.palette.text.secondary }} />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                              }
                            }}
                          />
                        </Grid>
                      </Grid>

                      {/* Subject - Full width */}
                      <TextField
                        fullWidth
                        required
                        label="Subject"
                        value={formData.subject}
                        onChange={handleInputChange('subject')}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Subject sx={{ color: theme.palette.text.secondary }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          }
                        }}
                      />

                      {/* Message - Full width */}
                      <TextField
                        fullWidth
                        required
                        label="Your Message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange('message')}
                        placeholder="Tell us how we can help you... Please include relevant details like listing IDs, usernames, or transaction references if applicable."
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                              <Message sx={{ color: theme.palette.text.secondary }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            alignItems: 'flex-start'
                          }
                        }}
                      />

                      {/* Submit Button - Centered */}
                      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          sx={{
                            px: 6,
                            py: 1.5,
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            minWidth: 200,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                            borderRadius: 2,
                            "&:hover": {
                              transform: "translateY(-2px)",
                              boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          Send Message
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* FAQ Section - Centered vertical layout */}
          <Grid item xs={12} md={4}>
            <Fade in={true} timeout={800} delay={200}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" fontWeight={800} sx={{ mb: 3, textAlign: 'center' }}>
                  Quick Help
                </Typography>
                
                <Stack spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
                  {faqs.map((faq, index) => (
                    <Card
                      key={index}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        textAlign: 'center',
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: theme.palette.primary.main }}>
                        {faq.question}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {faq.answer}
                      </Typography>
                    </Card>
                  ))}
                </Stack>

                {/* Additional Help Card */}
                <Card
                  sx={{
                    mt: 3,
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: 400,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.08)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                  }}
                >
                  <Rocket sx={{ fontSize: 40, color: theme.palette.secondary.main, mb: 2 }} />
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                    Need Immediate Help?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Check our comprehensive help center for instant answers to common questions.
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/help"
                    variant="outlined"
                    size="small"
                    sx={{
                      fontWeight: 600,
                      borderColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.main,
                    }}
                  >
                    Visit Help Center
                  </Button>
                </Card>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}