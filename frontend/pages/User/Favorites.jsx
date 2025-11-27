import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  useTheme,
  alpha,
  Tabs,
  Tab,
  IconButton
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  Delete,
  Visibility,
  ShoppingBag
} from "@mui/icons-material";

export default function FavoritesPage() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "MacBook Pro M2",
      price: "¥120,000",
      status: "active",
      views: 124,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-01-15",
      isLiked: true
    },
    {
      id: 2,
      title: "Mountain Bike",
      price: "¥25,000",
      status: "active",
      views: 89,
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-01-10",
      isLiked: true
    },
    {
      id: 3,
      title: "Designer Watch",
      price: "¥45,000",
      status: "sold",
      views: 156,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-01-08",
      isLiked: true
    }
  ]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const handleToggleLike = (id) => {
    setFavorites(favorites.map(item => 
      item.id === id ? { ...item, isLiked: !item.isLiked } : item
    ));
  };

  const filteredFavorites = favorites.filter(item => {
    if (tabValue === 0) return item.status === 'active';
    if (tabValue === 1) return item.status === 'sold';
    return true;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
          My Favorites
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Items you've saved for later
        </Typography>
      </Box>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 4 }}>
        <Tab label="Active Items" />
        <Tab label="Sold Items" />
        <Tab label="All Favorites" />
      </Tabs>

      <Grid container spacing={3}>
        {filteredFavorites.map((listing) => (
          <Grid item xs={12} md={6} key={listing.id}>
            <Card sx={{ display: 'flex', borderRadius: 3, position: 'relative' }}>
              <CardMedia
                component="img"
                sx={{ width: 120 }}
                image={listing.image}
                alt={listing.title}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    {listing.title}
                  </Typography>
                  <Typography variant="h6" color="primary" fontWeight={700}>
                    {listing.price}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Chip
                      label={listing.status}
                      color={listing.status === 'active' ? 'success' : 'default'}
                      size="small"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {listing.views} views
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Button 
                    size="small" 
                    startIcon={<Visibility />}
                    variant="outlined"
                  >
                    View
                  </Button>
                  <Button 
                    size="small" 
                    startIcon={<Delete />} 
                    color="error"
                    variant="outlined"
                    onClick={() => handleRemoveFavorite(listing.id)}
                  >
                    Remove
                  </Button>
                </Box>
              </CardContent>
              
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: alpha(theme.palette.background.paper, 0.9),
                  '&:hover': {
                    backgroundColor: theme.palette.background.paper,
                  }
                }}
                onClick={() => handleToggleLike(listing.id)}
                color="error"
              >
                {listing.isLiked ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredFavorites.length === 0 && (
        <Card sx={{ textAlign: 'center', p: 6, borderRadius: 3 }}>
          <Favorite sx={{ fontSize: 64, color: theme.palette.text.secondary, mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 2 }}>
            No favorites found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {tabValue === 0 
              ? "You haven't saved any active items yet."
              : tabValue === 1
              ? "You haven't saved any sold items."
              : "You haven't saved any items to your favorites yet."
            }
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<ShoppingBag />}
            component="a"
            href="/listings"
          >
            Browse Listings
          </Button>
        </Card>
      )}

      {favorites.length > 0 && (
        <Box sx={{ mt: 4, p: 3, backgroundColor: alpha(theme.palette.primary.main, 0.05), borderRadius: 3 }}>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
            Favorites Summary
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You have {favorites.length} items in your favorites • {
              favorites.filter(item => item.status === 'active').length
            } active • {
              favorites.filter(item => item.status === 'sold').length
            } sold
          </Typography>
        </Box>
      )}
    </Container>
  );
}