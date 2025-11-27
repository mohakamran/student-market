import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  Grid,
  Container,
  Chip,
  IconButton,
  Avatar,
  Divider,
  useTheme,
  alpha,
  Rating,
  Tabs,
  Tab,
  Paper,
  Fade,
  Skeleton
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  Share,
  LocationOn,
  Person,
  Email,
  ArrowBack,
  Chat,
  LocalOffer,
  Verified,
  Security,
  Store
} from "@mui/icons-material";

// Enhanced sample data
const sampleListings = [
  {
    id: "1",
    title: "MacBook Pro 2023 - M2 Chip",
    price: 120000,
    originalPrice: 150000,
    description: "Like new MacBook Pro with M2 chip, 16GB RAM, and 512GB SSD. Perfect for students! Used lightly for 3 months. Comes with original box, charger, and all accessories. No scratches or dents. Battery health 98%.",
    detailedDescription: "This MacBook Pro is in excellent condition and has been used primarily for university work. The M2 chip provides incredible performance for coding, design work, and multimedia projects. It's perfect for computer science students or anyone needing reliable computing power.\n\nSpecifications:\n• Apple M2 Chip with 8-core CPU\n• 16GB Unified Memory\n• 512GB SSD Storage\n• 13-inch Retina Display\n• Touch Bar and Touch ID\n• Two Thunderbolt/USB 4 ports\n• macOS Ventura (upgradable)\n\nIncludes:\n• Original Box\n• 67W USB-C Power Adapter\n• USB-C Charge Cable (2m)\n• Documentation",
    photos: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Ken Tanaka",
      email: "ken.tanaka@example.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      rating: 4.8,
      reviewCount: 47,
      memberSince: "2022",
      isVerified: true
    },
    location_city: "Shibuya",
    location_prefecture: "Tokyo",
    category: "Electronics",
    condition: "Like New",
    postedDate: "2024-01-15",
    views: 124,
    isFavorite: false,
    tags: ["Laptop", "Apple", "Student", "Programming", "Design"]
  },
  {
    id: "2",
    title: "Professional Mountain Bike",
    price: 25000,
    originalPrice: 35000,
    description: "Lightweight aluminum mountain bike, 21-speed Shimano gears. Excellent condition, used for 6 months. Perfect for commuting around campus or weekend trails.",
    detailedDescription: "This mountain bike is perfect for students who need reliable transportation around campus or want to explore the beautiful trails around Tokyo. The lightweight aluminum frame makes it easy to carry up stairs, and the 21-speed Shimano gears handle hills with ease.\n\nFeatures:\n• Lightweight Aluminum Frame\n• 21-Speed Shimano Gears\n• Front Suspension Fork\n• Disc Brakes for Reliable Stopping\n• Adjustable Seat Height\n• Water Bottle Holder Included\n\nCondition:\n• Used for 6 months\n• Regular maintenance done\n• No rust or major scratches\n• Tires in excellent condition\n• All gears working perfectly",
    photos: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Aiko Yamada",
      email: "aiko.yamada@example.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      reviewCount: 32,
      memberSince: "2023",
      isVerified: true
    },
    location_city: "Osaka",
    location_prefecture: "Osaka",
    category: "Sports",
    condition: "Excellent",
    postedDate: "2024-01-10",
    views: 89,
    isFavorite: false,
    tags: ["Bicycle", "Mountain Bike", "Commute", "Sports", "Outdoor"]
  }
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`listing-tabpanel-${index}`}
      aria-labelledby={`listing-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ListingDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const theme = useTheme();

  const listing = sampleListings.find((item) => item.id === id);

  if (!listing) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" color="error" sx={{ textAlign: "center" }}>
          Listing not found
        </Typography>
      </Container>
    );
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleContactSeller = () => {
    navigate(`/chat/new?listing=${listing.id}&seller=${listing.seller.name}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Back Button */}
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{
          mb: 3,
          borderRadius: 3,
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Back to Listings
      </Button>

      <Fade in={true} timeout={800}>
        <Grid container spacing={4}>
          {/* Images Section */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              }}
            >
              {/* Main Image */}
              <Box sx={{ position: "relative" }}>
                {imageLoading && (
                  <Skeleton variant="rectangular" height={500} animation="wave" />
                )}
                <CardMedia
                  component="img"
                  height="500"
                  image={listing.photos[selectedImage]}
                  alt={listing.title}
                  sx={{
                    objectFit: "cover",
                    display: imageLoading ? "none" : "block",
                  }}
                  onLoad={() => setImageLoading(false)}
                />
                
                {/* Favorite Button */}
                <IconButton
                  onClick={handleFavoriteClick}
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    backgroundColor: alpha(theme.palette.common.white, 0.9),
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      backgroundColor: theme.palette.common.white,
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {isFavorite ? (
                    <Favorite sx={{ color: theme.palette.error.main }} />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>

                {/* Share Button */}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 64,
                    backgroundColor: alpha(theme.palette.common.white, 0.9),
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      backgroundColor: theme.palette.common.white,
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  <Share />
                </IconButton>
              </Box>

              {/* Thumbnail Images */}
              {listing.photos.length > 1 && (
                <Box sx={{ p: 2, display: "flex", gap: 1, overflowX: "auto" }}>
                  {listing.photos.map((photo, index) => (
                    <Card
                      key={index}
                      sx={{
                        minWidth: 80,
                        height: 80,
                        borderRadius: 2,
                        cursor: "pointer",
                        border: selectedImage === index ? `2px solid ${theme.palette.primary.main}` : "none",
                        opacity: selectedImage === index ? 1 : 0.7,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          opacity: 1,
                          transform: "scale(1.05)",
                        },
                      }}
                      onClick={() => setSelectedImage(index)}
                    >
                      <CardMedia
                        component="img"
                        height="80"
                        image={photo}
                        alt={`${listing.title} view ${index + 1}`}
                        sx={{ objectFit: "cover" }}
                      />
                    </Card>
                  ))}
                </Box>
              )}
            </Card>
          </Grid>

          {/* Details Section */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "sticky", top: 24 }}>
              {/* Category & Condition */}
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <Chip label={listing.category} color="primary" variant="outlined" />
                <Chip label={listing.condition} color="secondary" variant="outlined" />
                <Chip 
                  icon={<LocalOffer />}
                  label={`${listing.views} views`}
                  size="small"
                  variant="outlined"
                />
              </Box>

              {/* Title */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  lineHeight: 1.2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {listing.title}
              </Typography>

              {/* Price */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: theme.palette.primary.main,
                    mb: 0.5,
                  }}
                >
                  ¥{listing.price.toLocaleString()}
                </Typography>
                {listing.originalPrice && (
                  <Typography
                    variant="h6"
                    sx={{
                      textDecoration: "line-through",
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Was ¥{listing.originalPrice.toLocaleString()}
                  </Typography>
                )}
              </Box>

              {/* Location */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                <LocationOn sx={{ color: theme.palette.text.secondary }} />
                <Typography variant="body1" color="text.secondary">
                  {listing.location_city}, {listing.location_prefecture}
                </Typography>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<Chat />}
                  onClick={handleContactSeller}
                  sx={{
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Contact Seller
                </Button>
              </Box>

              {/* Seller Info */}
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  Seller Information
                </Typography>
                
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Avatar
                    src={listing.seller.avatar}
                    sx={{ width: 60, height: 60 }}
                  >
                    <Person />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                      <Typography variant="h6" fontWeight={600}>
                        {listing.seller.name}
                      </Typography>
                      {listing.seller.isVerified && (
                        <Verified sx={{ fontSize: 20, color: theme.palette.success.main }} />
                      )}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Rating value={listing.seller.rating} readOnly size="small" />
                      <Typography variant="body2" color="text.secondary">
                        ({listing.seller.reviewCount} reviews)
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">
                    Member since {listing.seller.memberSince}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Store />}
                    sx={{ borderRadius: 2 }}
                  >
                    View Profile
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Detailed Information */}
          <Grid item xs={12}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  sx={{
                    borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    "& .MuiTab-root": {
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "1rem",
                    },
                  }}
                >
                  <Tab label="Description" />
                  <Tab label="Seller Details" />
                  <Tab label="Shipping & Returns" />
                </Tabs>

                <Box sx={{ p: 4 }}>
                  <TabPanel value={tabValue} index={0}>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        whiteSpace: "pre-line",
                        mb: 3,
                      }}
                    >
                      {listing.detailedDescription}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {listing.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          variant="outlined"
                          sx={{ borderRadius: 2 }}
                        />
                      ))}
                    </Box>
                  </TabPanel>

                  <TabPanel value={tabValue} index={1}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                          Contact Information
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                          <Email sx={{ color: theme.palette.primary.main }} />
                          <Typography>{listing.seller.email}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <LocationOn sx={{ color: theme.palette.primary.main }} />
                          <Typography>
                            {listing.location_city}, {listing.location_prefecture}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                          Seller Stats
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                          <Typography>⭐ {listing.seller.rating} Rating</Typography>
                          <Typography>📝 {listing.seller.reviewCount} Reviews</Typography>
                          <Typography>👤 Member since {listing.seller.memberSince}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </TabPanel>

                  <TabPanel value={tabValue} index={2}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}>
                      <Security sx={{ color: theme.palette.success.main, mt: 0.5 }} />
                      <Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          Safe Trading
                        </Typography>
                        <Typography variant="body1">
                          • Meet in public places for transactions<br/>
                          • Inspect items before purchasing<br/>
                          • Use secure payment methods<br/>
                          • Report any suspicious activity<br/>
                          • StudentMarket verification available
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Listed on {formatDate(listing.postedDate)}
                    </Typography>
                  </TabPanel>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
}