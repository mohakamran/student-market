import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  useTheme,
  alpha
} from "@mui/material";
import {
  Home,
  ArrowBack,
  Search
} from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: '8rem',
          fontWeight: 800,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          mb: 2
        }}
      >
        404
      </Typography>
      
      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 400, mx: 'auto' }}>
        Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered an incorrect URL.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<Home />}
          component={RouterLink}
          to="/"
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.2,
            fontWeight: 600
          }}
        >
          Go Home
        </Button>
        
        <Button
          variant="outlined"
          size="large"
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.2,
            fontWeight: 600
          }}
        >
          Go Back
        </Button>
        
        <Button
          variant="outlined"
          size="large"
          startIcon={<Search />}
          component={RouterLink}
          to="/listings"
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.2,
            fontWeight: 600
          }}
        >
          Browse Listings
        </Button>
      </Box>
    </Container>
  );
}