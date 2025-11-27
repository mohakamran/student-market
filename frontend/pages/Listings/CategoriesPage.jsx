import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
  alpha,
  Chip,
  Button
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";

export default function CategoriesPage() {
  const theme = useTheme();

  const categories = [
    {
      name: "Electronics",
      icon: "💻",
      description: "Laptops, phones, gadgets and more",
      count: 45,
      color: "#2196f3",
      gradient: "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
    },
    {
      name: "Books & Textbooks",
      icon: "📚",
      description: "Course materials and leisure reading",
      count: 89,
      color: "#4caf50",
      gradient: "linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)"
    },
    {
      name: "Furniture",
      icon: "🪑",
      description: "Desks, chairs, and dorm essentials",
      count: 32,
      color: "#ff9800",
      gradient: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)"
    },
    {
      name: "Clothing & Fashion",
      icon: "👕",
      description: "Style for campus and beyond",
      count: 67,
      color: "#e91e63",
      gradient: "linear-gradient(135deg, #e91e63 0%, #f06292 100%)"
    },
    {
      name: "Sports & Outdoors",
      icon: "⚽",
      description: "Equipment and active wear",
      count: 23,
      color: "#009688",
      gradient: "linear-gradient(135deg, #009688 0%, #4db6ac 100%)"
    },
    {
      name: "Home & Kitchen",
      icon: "🏠",
      description: "Everything for your living space",
      count: 41,
      color: "#9c27b0",
      gradient: "linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)"
    },
    {
      name: "Beauty & Personal Care",
      icon: "💄",
      description: "Health and wellness products",
      count: 28,
      color: "#ff5722",
      gradient: "linear-gradient(135deg, #ff5722 0%, #ff8a65 100%)"
    },
    {
      name: "Other",
      icon: "📦",
      description: "Everything else",
      count: 15,
      color: "#607d8b",
      gradient: "linear-gradient(135deg, #607d8b 0%, #90a4ae 100%)"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography 
          variant="h2" 
          fontWeight={800} 
          sx={{ 
            mb: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Browse Categories
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Discover amazing deals across all categories. Find exactly what you need for campus life.
        </Typography>
      </Box>

      {/* Categories Grid */}
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={category.name}>
            <Card
              component={RouterLink}
              to={`/listings?category=${category.name}`}
              sx={{
                height: '100%',
                borderRadius: 4,
                textDecoration: 'none',
                background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.08)}`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                overflow: 'visible',
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: category.gradient,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 20px 40px ${alpha(category.color, 0.25)}`,
                  border: `1px solid ${alpha(category.color, 0.3)}`,
                  '& .category-icon': {
                    transform: 'scale(1.1)',
                  },
                  '& .explore-button': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }
                },
              }}
            >
              <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Icon Container */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${alpha(category.color, 0.1)} 0%, ${alpha(category.color, 0.05)} 100%)`,
                    border: `2px solid ${alpha(category.color, 0.2)}`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: category.gradient,
                      opacity: 0.1,
                      borderRadius: 2,
                    }
                  }}
                >
                  <Typography 
                    variant="h3" 
                    className="category-icon"
                    sx={{ 
                      transition: 'transform 0.3s ease',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                    }}
                  >
                    {category.icon}
                  </Typography>
                </Box>

                {/* Category Name */}
                <Typography 
                  variant="h6" 
                  fontWeight={700} 
                  sx={{ 
                    textAlign: 'center',
                    mb: 1,
                    color: theme.palette.text.primary,
                    background: `linear-gradient(135deg, ${category.color} 0%, ${alpha(category.color, 0.8)} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {category.name}
                </Typography>

                {/* Description */}
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    textAlign: 'center',
                    mb: 2,
                    lineHeight: 1.5,
                    flexGrow: 1
                  }}
                >
                  {category.description}
                </Typography>

                {/* Items Count */}
                <Chip
                  label={`${category.count} items`}
                  size="small"
                  sx={{
                    mb: 2,
                    background: `linear-gradient(135deg, ${alpha(category.color, 0.1)} 0%, ${alpha(category.color, 0.05)} 100%)`,
                    color: category.color,
                    fontWeight: 600,
                    border: `1px solid ${alpha(category.color, 0.2)}`,
                    '& .MuiChip-label': {
                      px: 1.5,
                    }
                  }}
                />

                {/* Explore Button - Hidden by default, shows on hover */}
                <Button
                  className="explore-button"
                  variant="contained"
                  endIcon={<ArrowForward />}
                  size="small"
                  sx={{
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: 'all 0.3s ease',
                    background: category.gradient,
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: `0 4px 15px ${alpha(category.color, 0.3)}`,
                    '&:hover': {
                      boxShadow: `0 6px 20px ${alpha(category.color, 0.4)}`,
                      transform: 'translateY(-1px)',
                    }
                  }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bottom CTA */}
      <Box sx={{ textAlign: 'center', mt: 8, mb: 4 }}>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
          Can't find what you're looking for?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Try searching for specific items or create a listing request
        </Typography>
        <Button 
          variant="outlined" 
          size="large"
          sx={{ 
            borderRadius: 3,
            px: 4,
            fontWeight: 600
          }}
        >
          Search All Listings
        </Button>
      </Box>
    </Container>
  );
}