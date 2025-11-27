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
  Tab
} from "@mui/material";
import {
  Edit,
  Delete,
  Visibility,
  Store
} from "@mui/icons-material";

interface Listing {
  id: number;
  title: string;
  price: string;
  status: string;
  views: number;
  image: string;
  date: string;
}

export default function MyListingsPage() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const myListings: Listing[] = [
    {
      id: 1,
      title: "MacBook Pro M2",
      price: "¥120,000",
      status: "active",
      views: 124,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Mountain Bike",
      price: "¥25,000",
      status: "sold",
      views: 89,
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-01-10"
    }
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
          My Listings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your active and sold listings
        </Typography>
      </Box>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 4 }}>
        <Tab label="Active Listings" />
        <Tab label="Sold Items" />
        <Tab label="Drafts" />
      </Tabs>

      <Grid container spacing={3}>
        {myListings.map((listing) => (
          <Grid item xs={12} md={6} key={listing.id}>
            <Card sx={{ display: 'flex', borderRadius: 3 }}>
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
                  <Button size="small" startIcon={<Edit />}>
                    Edit
                  </Button>
                  <Button size="small" startIcon={<Visibility />}>
                    View
                  </Button>
                  <Button size="small" startIcon={<Delete />} color="error">
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {myListings.length === 0 && (
        <Card sx={{ textAlign: 'center', p: 6, borderRadius: 3 }}>
          <Store sx={{ fontSize: 64, color: theme.palette.text.secondary, mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 2 }}>
            No listings found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            You haven't created any listings yet.
          </Typography>
          <Button variant="contained">
            Create Your First Listing
          </Button>
        </Card>
      )}
    </Container>
  );
}