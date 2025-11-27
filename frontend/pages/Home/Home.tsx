import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Chip,
  IconButton,
  useTheme,
  alpha,
  Fade,
  Avatar,
  Rating,
  Stack,
  Paper,
  Divider
} from "@mui/material";
import {
  TrendingUp,
  Favorite,
  Share,
  LocationOn,
  School,
  Store,
  Chat,
  Add,
  ArrowForward,
  Verified,
  LocalOffer,
  FlashOn,
  People,
  Security,
  Rocket,
  Star,
  TrendingFlat,
  AutoAwesome,
  ShoppingBag,
  Groups,
  Savings
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const sampleListings = [
  {
    id: 1,
    title: "MacBook Pro M2 2023",
    price: "¥120,000",
    originalPrice: "¥150,000",
    discount: "20% OFF",
    description: "Like new, 16GB RAM, perfect for coding and design",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
    location: "Tokyo University",
    isFeatured: true,
    rating: 4.8,
    reviews: 24,
    seller: "Ken",
    isTrending: true,
    timeLeft: "2 days left"
  },
  {
    id: 2,
    title: "Professional Mountain Bike",
    price: "¥25,000",
    originalPrice: "¥35,000",
    discount: "29% OFF",
    description: "Lightweight, 21-speed, excellent condition for campus",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Sports",
    location: "Osaka Campus",
    isFeatured: false,
    rating: 4.5,
    reviews: 18,
    seller: "Aiko",
    isTrending: true,
    timeLeft: "1 day left"
  },
  {
    id: 3,
    title: "Ergonomic Desk Chair",
    price: "¥8,000",
    originalPrice: "¥12,000",
    discount: "33% OFF",
    description: "Perfect for long study sessions, lumbar support",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Furniture",
    location: "Kyoto University",
    isFeatured: true,
    rating: 4.9,
    reviews: 32,
    seller: "Takashi",
    timeLeft: "3 days left"
  },
  {
    id: 4,
    title: "Engineering Textbook Bundle",
    price: "¥3,500",
    originalPrice: "¥6,000",
    discount: "42% OFF",
    description: "Complete set for engineering students, like new",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Books",
    location: "Tokyo Tech",
    isFeatured: false,
    rating: 4.7,
    reviews: 15,
    seller: "Yuki",
    timeLeft: "5 days left"
  }
];

const categories = [
  { 
    name: "Electronics", 
    icon: "💻", 
    count: 156, 
    color: "#2196f3",
    gradient: "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
  },
  { 
    name: "Books & Textbooks", 
    icon: "📚", 
    count: 289, 
    color: "#4caf50",
    gradient: "linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)"
  },
  { 
    name: "Furniture", 
    icon: "🪑", 
    count: 132, 
    color: "#ff9800",
    gradient: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)"
  },
  { 
    name: "Fashion", 
    icon: "👕", 
    count: 267, 
    color: "#e91e63",
    gradient: "linear-gradient(135deg, #e91e63 0%, #f06292 100%)"
  },
  { 
    name: "Sports", 
    icon: "⚽", 
    count: 123, 
    color: "#009688",
    gradient: "linear-gradient(135deg, #009688 0%, #4db6ac 100%)"
  },
  { 
    name: "Home Essentials", 
    icon: "🏠", 
    count: 241, 
    color: "#9c27b0",
    gradient: "linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)"
  },
];

const features = [
  {
    icon: <Savings sx={{ fontSize: 40 }} />,
    title: "Save Money",
    description: "Get up to 70% off on textbooks, electronics, and more from fellow students"
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: "Safe & Secure",
    description: "Verified student community with secure payments and meetup spots"
  },
  {
    icon: <Groups sx={{ fontSize: 40 }} />,
    title: "Campus Community",
    description: "Connect with students from your university and nearby campuses"
  },
  {
    icon: <AutoAwesome sx={{ fontSize: 40 }} />,
    title: "Easy to Use",
    description: "Simple listing process and intuitive search to find what you need"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "International Student - Tokyo University",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    text: "Saved over ¥50,000 on textbooks and found everything I needed for my dorm!",
    rating: 5
  },
  {
    name: "Kenji Tanaka",
    role: "Engineering Student - Osaka University",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    text: "Sold my old laptop in 2 days and made new friends in the process. Amazing platform!",
    rating: 5
  },
  {
    name: "Maria Silva",
    role: "Exchange Student - Kyoto University",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    text: "The perfect solution for students - affordable, safe, and so convenient!",
    rating: 5
  }
];

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      {/* Hero Section with Modern Design */}
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
            background: 'radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(253, 203, 88, 0.2) 0%, transparent 50%)',
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1000}>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Chip 
                    icon={<AutoAwesome />} 
                    label="Japan's #1 Student Marketplace" 
                    sx={{ 
                      mb: 3, 
                      background: 'rgba(255,255,255,0.2)', 
                      color: 'white',
                      fontWeight: 600,
                      backdropFilter: 'blur(10px)'
                    }} 
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 900,
                      mb: 2,
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      lineHeight: 1.1,
                      textShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    }}
                  >
                    Buy & Sell Within Your{" "}
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      Campus Community
                    </Box>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 4,
                      fontSize: "1.2rem",
                      color: alpha(theme.palette.common.white, 0.9),
                      lineHeight: 1.6,
                      maxWidth: 500,
                    }}
                  >
                    Join thousands of Japanese students buying, selling, and trading textbooks, electronics, furniture, and more. Save money, reduce waste, and build connections.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
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
                      Explore Deals
                    </Button>
                    <Button
                      component={RouterLink}
                      to="/listings/create"
                      variant="outlined"
                      size="large"
                      startIcon={<Add />}
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
                      Sell Item
                    </Button>
                  </Stack>
                  <Stack direction="row" spacing={4} sx={{ color: alpha(theme.palette.common.white, 0.8) }}>
                    <Box>
                      <Typography variant="h5" fontWeight={800}>10K+</Typography>
                      <Typography variant="body2">Students</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight={800}>5K+</Typography>
                      <Typography variant="body2">Listings</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight={800}>98%</Typography>
                      <Typography variant="body2">Satisfaction</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1000} delay={300}>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: `0 25px 50px ${alpha(theme.palette.common.black, 0.25)}`,
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="400"
                      image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Students trading items"
                      sx={{ objectFit: 'cover' }}
                    />
                  </Card>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Why Choose StudentMarket?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Designed specifically for students in Japan - safe, affordable, and convenient
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
                    background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.12)}`,
                    }
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Trending Deals Section */}
      <Box sx={{ background: alpha(theme.palette.primary.main, 0.02), py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FlashOn sx={{ fontSize: 40, color: theme.palette.warning.main }} />
              <Box>
                <Typography variant="h3" fontWeight={800}>
                  Hot Deals 🔥
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Don't miss these trending items
                </Typography>
              </Box>
            </Box>
            <Button
              component={RouterLink}
              to="/listings"
              endIcon={<ArrowForward />}
              sx={{
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1.1rem',
                color: theme.palette.primary.main,
              }}
            >
              View All
            </Button>
          </Box>

          <Grid container spacing={3}>
            {sampleListings.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Fade in={true} timeout={800} delay={index * 100}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.8)} 100%)`,
                      boxShadow: `0 8px 25px ${alpha(theme.palette.common.black, 0.08)}`,
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: `0 25px 50px ${alpha(theme.palette.common.black, 0.15)}`,
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={item.image}
                        alt={item.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <Box sx={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {item.isTrending && (
                          <Chip
                            label="TRENDING"
                            size="small"
                            color="warning"
                            sx={{ fontWeight: 800, fontSize: '0.7rem' }}
                          />
                        )}
                        <Chip
                          label={item.discount}
                          size="small"
                          color="error"
                          sx={{ fontWeight: 800, fontSize: '0.7rem' }}
                        />
                      </Box>
                      <Box sx={{ position: 'absolute', bottom: 12, left: 12 }}>
                        <Chip
                          label={item.timeLeft}
                          size="small"
                          sx={{ 
                            background: 'rgba(0,0,0,0.8)', 
                            color: 'white',
                            fontWeight: 600 
                          }}
                        />
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 2.5 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          mb: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          lineHeight: 1.3,
                          fontSize: '1rem',
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 900,
                            color: theme.palette.primary.main,
                          }}
                        >
                          {item.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            textDecoration: 'line-through',
                            color: theme.palette.text.secondary,
                          }}
                        >
                          {item.originalPrice}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Rating value={item.rating} size="small" readOnly />
                        <Typography variant="caption" color="text.secondary">
                          ({item.reviews})
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Chip
                          label={item.category}
                          size="small"
                          variant="outlined"
                          sx={{ fontWeight: 600 }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LocationOn sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
                          <Typography variant="caption" fontWeight={600}>
                            {item.location}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

{/* Categories Section */}
<Container maxWidth="lg" sx={{ py: 8 }}>
  <Box sx={{ textAlign: 'center', mb: 6 }}>
    <Typography
      variant="h3"
      sx={{
        fontWeight: 800,
        mb: 2,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}
    >
      Shop by Category
    </Typography>
    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
      Find exactly what you need across all student essentials
    </Typography>
  </Box>

  <Grid container spacing={3}>
    {categories.map((category, index) => (
      <Grid item xs={6} sm={4} md={2} key={category.name}>
        <Fade in={true} timeout={800} delay={index * 100}>
          <Card
            component={RouterLink}
            to={`/listings?category=${category.name}`}
            sx={{
              p: 3,
              textAlign: 'center',
              borderRadius: 4,
              textDecoration: 'none',
              background: `linear-gradient(135deg, ${alpha(category.color, 0.08)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
              border: `2px solid ${alpha(category.color, 0.1)}`,
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 160,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '&:hover': {
                transform: 'translateY(-8px)',
                border: `2px solid ${alpha(category.color, 0.3)}`,
                boxShadow: `0 15px 35px ${alpha(category.color, 0.2)}`,
                '& .category-icon': {
                  transform: 'scale(1.2)',
                },
                '& .category-count': {
                  transform: 'scale(1.1)',
                }
              },
            }}
          >
            {/* Icon */}
            <Box
              className="category-icon"
              sx={{
                transition: 'transform 0.3s ease',
                mb: 2,
              }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: '2.5rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}
              >
                {category.icon}
              </Typography>
            </Box>

            {/* Category Name */}
            <Typography 
              variant="subtitle1" 
              fontWeight={800} 
              sx={{ 
                mb: 1, 
                color: category.color,
                fontSize: '0.9rem',
                lineHeight: 1.2,
                minHeight: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {category.name}
            </Typography>

            {/* Item Count */}
            <Chip
              className="category-count"
              label={`${category.count}+`}
              size="small"
              sx={{
                background: category.gradient,
                color: 'white',
                fontWeight: 700,
                fontSize: '0.75rem',
                height: 24,
                transition: 'transform 0.3s ease',
              }}
            />
          </Card>
        </Fade>
      </Grid>
    ))}
  </Grid>

  {/* View All Categories Button */}
  <Box sx={{ textAlign: 'center', mt: 6 }}>
    <Button
      component={RouterLink}
      to="/categories"
      variant="outlined"
      size="large"
      endIcon={<ArrowForward />}
      sx={{
        px: 4,
        py: 1.5,
        fontWeight: 600,
        borderRadius: 3,
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease',
      }}
    >
      View All Categories
    </Button>
  </Box>
</Container>

      {/* Testimonials Section */}
      <Box sx={{ background: alpha(theme.palette.primary.main, 0.02), py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Loved by Students Across Japan
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Join thousands of satisfied students who've saved money and made connections
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={testimonial.name}>
                <Fade in={true} timeout={800} delay={index * 200}>
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      height: '100%',
                      background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: `0 15px 40px ${alpha(theme.palette.common.black, 0.12)}`,
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Avatar 
                        src={testimonial.avatar} 
                        sx={{ 
                          width: 60, 
                          height: 60,
                          border: `3px solid ${alpha(theme.palette.primary.main, 0.1)}`
                        }} 
                      />
                      <Box>
                        <Typography variant="h6" fontWeight={800}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2, color: theme.palette.warning.main }} />
                    <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.7, color: theme.palette.text.primary }}>
                      "{testimonial.text}"
                    </Typography>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Card
          sx={{
            p: 6,
            textAlign: 'center',
            borderRadius: 4,
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
          <Rocket sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 3 }} />
          <Typography variant="h2" fontWeight={900} sx={{ mb: 2 }}>
            Ready to Join?
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Start buying and selling with students across Japan today. It's free, safe, and designed just for you!
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={RouterLink}
              to="/listings/create"
              variant="contained"
              size="large"
              startIcon={<Add />}
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
              Start Selling Now
            </Button>
            <Button
              component={RouterLink}
              to="/listings"
              variant="outlined"
              size="large"
              endIcon={<ShoppingBag />}
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