import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
  Rating,
  Skeleton,
  useTheme,
  alpha
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  Visibility,
  LocationOn,
  Verified,
  Share
} from "@mui/icons-material";

interface ListingCardProps {
  listing: {
    id: string | number;
    title: string;
    description: string;
    price: string;
    photos: string[]; // array of image URLs
    seller?: { name?: string; rating?: number };
    location?: string;
    category?: string;
    isFeatured?: boolean;
  };
}

export default function ListingCard({ listing }: ListingCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();

  const imageUrl = listing.photos && listing.photos.length > 0 
    ? listing.photos[0] 
    : "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.8)} 100%)`,
        boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.08)}`,
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.15)}`,
          borderColor: alpha(theme.palette.primary.main, 0.3),
        },
      }}
    >
      {/* Image Section with Overlays */}
      <Box sx={{ position: "relative" }}>
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            height={200}
            animation="wave"
          />
        )}
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={listing.title}
          sx={{
            objectFit: "cover",
            display: imageLoaded ? "block" : "none",
            transition: "transform 0.3s ease",
            ".MuiCard-root:hover &": {
              transform: "scale(1.05)",
            }
          }}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Top Overlay - Badges */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            right: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            {listing.isFeatured && (
              <Chip
                label="Featured"
                size="small"
                color="primary"
                sx={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.95),
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  backdropFilter: "blur(10px)",
                }}
              />
            )}
            {listing.category && (
              <Chip
                label={listing.category}
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: alpha(theme.palette.common.white, 0.9),
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  fontSize: "0.7rem",
                  mt: 0.5,
                  backdropFilter: "blur(10px)",
                }}
              />
            )}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton
              size="small"
              onClick={handleFavoriteClick}
              sx={{
                backgroundColor: alpha(theme.palette.common.white, 0.9),
                backdropFilter: "blur(10px)",
                "&:hover": {
                  backgroundColor: alpha(theme.palette.common.white, 1),
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease",
              }}
            >
              {isFavorite ? (
                <Favorite sx={{ color: theme.palette.error.main, fontSize: 20 }} />
              ) : (
                <FavoriteBorder sx={{ fontSize: 20 }} />
              )}
            </IconButton>
            <IconButton
              size="small"
              sx={{
                backgroundColor: alpha(theme.palette.common.white, 0.9),
                backdropFilter: "blur(10px)",
                "&:hover": {
                  backgroundColor: alpha(theme.palette.common.white, 1),
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease",
              }}
            >
              <Share sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Bottom Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: `linear-gradient(to top, ${alpha(theme.palette.common.black, 0.7)} 0%, transparent 100%)`,
          }}
        />
      </Box>

      {/* Content Section */}
      <CardContent 
        sx={{ 
          flexGrow: 1, 
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          gap: 1.5
        }}
      >
        {/* Price - Prominent */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "1.5rem",
            lineHeight: 1.2,
          }}
        >
          {listing.price || "Price on request"}
        </Typography>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {listing.title || "No Title"}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: 1.4,
          }}
        >
          {listing.description || "No description available"}
        </Typography>

        {/* Location */}
        {listing.location && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <LocationOn sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
            <Typography variant="caption" color="text.secondary">
              {listing.location}
            </Typography>
          </Box>
        )}

        {/* Seller Info */}
        {listing.seller?.name && (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Verified sx={{ fontSize: 16, color: theme.palette.success.main }} />
              <Typography variant="caption" fontWeight={500}>
                {listing.seller.name}
              </Typography>
            </Box>
            {listing.seller.rating && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Rating
                  size="small"
                  value={listing.seller.rating}
                  readOnly
                  sx={{ fontSize: 14 }}
                />
                <Typography variant="caption" color="text.secondary">
                  ({listing.seller.rating})
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </CardContent>

      {/* Action Button */}
      <Box sx={{ p: 2.5, pt: 0 }}>
        <Button
          href={`/listing/${listing.id}`}
          variant="contained"
          fullWidth
          startIcon={<Visibility />}
          sx={{
            borderRadius: 3,
            py: 1.2,
            fontSize: "0.9rem",
            fontWeight: 600,
            textTransform: "none",
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
              background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
            },
          }}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
}