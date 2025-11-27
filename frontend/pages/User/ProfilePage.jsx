import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Grid,
  Button,
  Chip,
  Rating,
  useTheme,
  alpha,
  Divider
} from "@mui/material";
import {
  Person,
  Edit,
  LocationOn,
  Email,
  Phone,
  Verified,
  Star
} from "@mui/icons-material";

export default function ProfilePage() {
  const theme = useTheme();

  const userData = {
    name: "Ken Tanaka",
    email: "ken.tanaka@example.com",
    phone: "+81 90-1234-5678",
    location: "Tokyo, Japan",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    rating: 4.8,
    reviews: 47,
    memberSince: "January 2023",
    isVerified: true
  };

  const stats = [
    { label: "Listings", value: 12 },
    { label: "Sold Items", value: 8 },
    { label: "Reviews", value: 47 },
    { label: "Response Rate", value: "98%" }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Profile Sidebar */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <Avatar
                src={userData.avatar}
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  border: `4px solid ${alpha(theme.palette.primary.main, 0.1)}`
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                <Typography variant="h5" fontWeight={700}>
                  {userData.name}
                </Typography>
                {userData.isVerified && (
                  <Verified sx={{ color: theme.palette.success.main }} />
                )}
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                <Rating value={userData.rating} readOnly size="small" />
                <Typography variant="body2" color="text.secondary">
                  ({userData.reviews})
                </Typography>
              </Box>

              <Chip 
                label="Verified Seller" 
                color="success" 
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <Button
                variant="contained"
                startIcon={<Edit />}
                fullWidth
                sx={{ mb: 3 }}
              >
                Edit Profile
              </Button>

              <Box sx={{ textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Email sx={{ color: theme.palette.primary.main }} />
                  <Typography>{userData.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Phone sx={{ color: theme.palette.primary.main }} />
                  <Typography>{userData.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <LocationOn sx={{ color: theme.palette.primary.main }} />
                  <Typography>{userData.location}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Person sx={{ color: theme.palette.primary.main }} />
                  <Typography>Member since {userData.memberSince}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, mb: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                Seller Statistics
              </Typography>
              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} sm={3} key={stat.label}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" fontWeight={800} color="primary">
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                Recent Activity
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[1, 2, 3].map((item) => (
                  <Box key={item} sx={{ p: 2, border: `1px solid ${alpha(theme.palette.divider, 0.1)}`, borderRadius: 2 }}>
                    <Typography variant="body1" fontWeight={600}>
                      New message about your MacBook Pro listing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      2 hours ago
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}