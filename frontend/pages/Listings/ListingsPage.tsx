import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  useTheme,
  alpha,
  Fade,
  Skeleton,
  Pagination,
  Chip,
  Button,
  Card,
  InputAdornment,
  TextField,
  IconButton,
  Drawer,
  Badge
} from "@mui/material";
import {
  Search,
  FilterList,
  Sort,
  ViewModule,
  ViewList,
  LocalOffer,
  Menu as MenuIcon,
  Close
} from "@mui/icons-material";
import ListingCard from "../../components/listing/ListingCard";
import ListingFilters from "../../components/listing/ListingFilters";

// Enhanced sample dummy listings
const sampleListings = [
  {
    id: 1,
    title: "MacBook Pro M2",
    price: "¥120,000",
    originalPrice: "¥150,000",
    description: "Like new condition, M2 chip, 16GB RAM, 512GB SSD",
    photos: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Ken Tanaka",
      rating: 4.8
    },
    category: "Electronics",
    condition: "like-new",
    location: "Tokyo",
    isFeatured: true,
    views: 124,
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Mountain Bike",
    price: "¥25,000",
    originalPrice: "¥35,000",
    description: "Lightweight aluminum frame, 21-speed Shimano gears",
    photos: ["https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Aiko Yamada",
      rating: 4.9
    },
    category: "Sports",
    condition: "good",
    location: "Osaka",
    isFeatured: false,
    views: 89,
    createdAt: "2024-01-10"
  },
  {
    id: 3,
    title: "Desk Chair",
    price: "¥8,000",
    originalPrice: "¥12,000",
    description: "Ergonomic office chair with lumbar support",
    photos: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Takashi Sato",
      rating: 4.7
    },
    category: "Furniture",
    condition: "like-new",
    location: "Kyoto",
    isFeatured: true,
    views: 67,
    createdAt: "2024-01-12"
  },
  {
    id: 4,
    title: "Textbook Bundle",
    price: "¥3,500",
    originalPrice: "¥6,000",
    description: "Engineering textbooks in great condition",
    photos: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Yuki Nakamura",
      rating: 4.8
    },
    category: "Books",
    condition: "good",
    location: "Tokyo",
    isFeatured: false,
    views: 45,
    createdAt: "2024-01-08"
  },
  {
    id: 5,
    title: "Gaming Monitor",
    price: "¥18,000",
    originalPrice: "¥25,000",
    description: "27inch 144Hz, perfect for gaming and design",
    photos: ["https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Riku Kobayashi",
      rating: 4.6
    },
    category: "Electronics",
    condition: "new",
    location: "Fukuoka",
    isFeatured: true,
    views: 156,
    createdAt: "2024-01-14"
  },
  {
    id: 6,
    title: "Winter Jacket",
    price: "¥4,500",
    originalPrice: "¥8,000",
    description: "Size M, worn few times, warm and stylish",
    photos: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Sakura Watanabe",
      rating: 4.9
    },
    category: "Clothing",
    condition: "like-new",
    location: "Hokkaido",
    isFeatured: false,
    views: 78,
    createdAt: "2024-01-09"
  },
  {
    id: 7,
    title: "Coffee Maker",
    price: "¥6,000",
    originalPrice: "¥9,000",
    description: "Automatic drip coffee maker with timer",
    photos: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Haruto Ishikawa",
      rating: 4.7
    },
    category: "Home",
    condition: "good",
    location: "Tokyo",
    isFeatured: false,
    views: 92,
    createdAt: "2024-01-11"
  },
  {
    id: 8,
    title: "Language Books",
    price: "¥2,500",
    originalPrice: "¥4,000",
    description: "Japanese & English learning materials",
    photos: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Maria Silva",
      rating: 4.8
    },
    category: "Books",
    condition: "like-new",
    location: "Osaka",
    isFeatured: true,
    views: 63,
    createdAt: "2024-01-13"
  },
  {
    id: 9,
    title: "Wireless Headphones",
    price: "¥15,000",
    originalPrice: "¥22,000",
    description: "Noise cancelling, like new condition",
    photos: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Kenji Yamamoto",
      rating: 4.5
    },
    category: "Electronics",
    condition: "like-new",
    location: "Tokyo",
    isFeatured: false,
    views: 112,
    createdAt: "2024-01-16"
  },
  {
    id: 10,
    title: "Study Desk",
    price: "¥12,000",
    originalPrice: "¥18,000",
    description: "Wooden study desk with storage",
    photos: ["https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Hiroshi Tanaka",
      rating: 4.8
    },
    category: "Furniture",
    condition: "good",
    location: "Kyoto",
    isFeatured: false,
    views: 54,
    createdAt: "2024-01-07"
  },
  {
    id: 11,
    title: "Smartphone",
    price: "¥45,000",
    originalPrice: "¥65,000",
    description: "Latest model, perfect condition",
    photos: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "Yumi Sato",
      rating: 4.9
    },
    category: "Electronics",
    condition: "like-new",
    location: "Osaka",
    isFeatured: true,
    views: 198,
    createdAt: "2024-01-17"
  },
  {
    id: 12,
    title: "Camera Lens",
    price: "¥28,000",
    originalPrice: "¥40,000",
    description: "Professional camera lens, rarely used",
    photos: ["https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"],
    seller: { 
      name: "David Miller",
      rating: 4.7
    },
    category: "Electronics",
    condition: "like-new",
    location: "Tokyo",
    isFeatured: false,
    views: 76,
    createdAt: "2024-01-18"
  }
];

export default function ListingsPage() {
  const [listings, setListings] = useState(sampleListings);
  const [filteredListings, setFilteredListings] = useState(sampleListings);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const theme = useTheme();

  const itemsPerPage = 12;

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle search and filtering
  useEffect(() => {
    let results = listings;

    // Apply search filter
    if (searchQuery) {
      results = results.filter(listing =>
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply other filters and count active filters
    let count = 0;
    if (filters.category) {
      results = results.filter(listing => listing.category === filters.category);
      count++;
    }
    if (filters.condition) {
      results = results.filter(listing => listing.condition === filters.condition);
      count++;
    }
    if (filters.location) {
      results = results.filter(listing => listing.location === filters.location);
      count++;
    }
    if (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 100000)) {
      results = results.filter(listing => {
        const price = parseInt(listing.price.replace(/[^0-9]/g, ''));
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      });
      count++;
    }

    setActiveFiltersCount(count);
    setFilteredListings(results);
    setCurrentPage(1);
  }, [searchQuery, filters, listings]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    if (window.innerWidth < 960) {
      setMobileFiltersOpen(false);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const clearAllFilters = () => {
    setFilters({});
    setSearchQuery("");
  };

  // Pagination
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const currentListings = filteredListings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 1,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Student Marketplace
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Find everything you need from fellow students
        </Typography>

        {/* Controls Bar - Only View Controls */}
        <Card
          sx={{
            p: 2,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
            boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.06)}`,
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            {/* Mobile Filter Button */}
            <Button
              startIcon={<FilterList />}
              endIcon={activeFiltersCount > 0 ? <Badge badgeContent={activeFiltersCount} color="primary" /> : null}
              onClick={() => setMobileFiltersOpen(true)}
              sx={{
                display: { xs: 'flex', lg: 'none' },
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Filters
            </Button>

            {/* Results Count */}
            <Typography variant="body1" sx={{ fontWeight: 600, color: "text.secondary", display: { xs: 'none', sm: 'block' } }}>
              {filteredListings.length} items found
            </Typography>

            {/* View Controls */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Button
                startIcon={<Sort />}
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Sort
              </Button>
              <Box sx={{ display: "flex", border: `1px solid ${alpha(theme.palette.divider, 0.3)}`, borderRadius: 2 }}>
                <IconButton
                  size="small"
                  onClick={() => setViewMode("grid")}
                  sx={{
                    borderRadius: 1,
                    backgroundColor: viewMode === "grid" ? alpha(theme.palette.primary.main, 0.1) : "transparent",
                    color: viewMode === "grid" ? theme.palette.primary.main : "inherit",
                  }}
                >
                  <ViewModule />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => setViewMode("list")}
                  sx={{
                    borderRadius: 1,
                    backgroundColor: viewMode === "list" ? alpha(theme.palette.primary.main, 0.1) : "transparent",
                    color: viewMode === "list" ? theme.palette.primary.main : "inherit",
                  }}
                >
                  <ViewList />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>

      <Grid container spacing={3}>
        {/* Filters Sidebar with Search */}
        <Grid item xs={12} lg={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Box sx={{ position: "sticky", top: 100 }}>
            {/* Search in Filter Section */}
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
                boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.06)}`,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                mb: 3,
              }}
            >
              <TextField
                fullWidth
                placeholder="Search listings..."
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: theme.palette.text.secondary }} />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: alpha(theme.palette.primary.main, 0.2),
                    },
                  }
                }}
              />
            </Card>

            {/* Filters Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Filters
              </Typography>
              {activeFiltersCount > 0 && (
                <Button
                  size="small"
                  onClick={clearAllFilters}
                  sx={{ textTransform: 'none', fontSize: '0.75rem' }}
                >
                  Clear all
                </Button>
              )}
            </Box>

            <ListingFilters onFilterChange={handleFilterChange} />
          </Box>
        </Grid>

        {/* Listings Grid - 4 Cards Per Row */}
        <Grid item xs={12} lg={9}>
          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap', mb: 3 }}>
              {searchQuery && (
                <Chip
                  label={`Search: "${searchQuery}"`}
                  onDelete={() => setSearchQuery("")}
                  color="primary"
                  variant="outlined"
                />
              )}
              {filters.category && (
                <Chip
                  label={`Category: ${filters.category}`}
                  size="small"
                  onDelete={() => setFilters({...filters, category: ''})}
                />
              )}
              {filters.condition && (
                <Chip
                  label={`Condition: ${filters.condition}`}
                  size="small"
                  onDelete={() => setFilters({...filters, condition: ''})}
                />
              )}
              {filters.location && (
                <Chip
                  label={`Location: ${filters.location}`}
                  size="small"
                  onDelete={() => setFilters({...filters, location: ''})}
                />
              )}
            </Box>
          )}

          {/* Listings Grid - 4 Cards Per Row */}
          {loading ? (
            <Grid container spacing={2}>
              {Array.from(new Array(12)).map((_, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
                  <Skeleton variant="text" sx={{ mt: 1 }} />
                  <Skeleton variant="text" width="60%" />
                </Grid>
              ))}
            </Grid>
          ) : currentListings.length > 0 ? (
            <Fade in={true} timeout={600}>
              <Grid container spacing={2}>
                {currentListings.map((listing) => (
                  <Grid 
                    item 
                    xs={6} 
                    sm={4} 
                    md={3} 
                    key={listing.id}
                  >
                    <ListingCard listing={listing} compact />
                  </Grid>
                ))}
              </Grid>
            </Fade>
          ) : (
            // Empty State
            <Card
              sx={{
                textAlign: "center",
                p: 6,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
              }}
            >
              <LocalOffer sx={{ fontSize: 48, color: theme.palette.text.secondary, mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                No listings found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {searchQuery 
                  ? `No results for "${searchQuery}"`
                  : "Try adjusting your filters"
                }
              </Typography>
              <Button
                variant="outlined"
                onClick={clearAllFilters}
                sx={{ borderRadius: 2 }}
              >
                Clear all filters
              </Button>
            </Card>
          )}

          {/* Pagination */}
          {filteredListings.length > itemsPerPage && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size="medium"
                sx={{
                  "& .MuiPaginationItem-root": {
                    borderRadius: 1.5,
                    fontWeight: 600,
                  },
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Mobile Filters Drawer with Search */}
      <Drawer
        anchor="left"
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 320,
            p: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Filters
          </Typography>
          <IconButton onClick={() => setMobileFiltersOpen(false)}>
            <Close />
          </IconButton>
        </Box>

        {/* Search in Mobile Drawer */}
        <TextField
          fullWidth
          placeholder="Search listings..."
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: theme.palette.text.secondary }} />
              </InputAdornment>
            ),
            sx: {
              borderRadius: 2,
            }
          }}
        />

        <ListingFilters onFilterChange={handleFilterChange} />
      </Drawer>
    </Container>
  );
}