import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  Skeleton,
  Pagination,
  Chip,
  Button,
  Card,
  InputAdornment,
  TextField,
  IconButton,
  Drawer,
  Badge,
  Grid
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  Search,
  FilterList,
  ViewModule,
  ViewList,
  Close
} from "@mui/icons-material";
import ListingCard from "../../components/listing/ListingCard";
import ListingFilters, { type Filters as ListingFiltersState } from "../../components/listing/ListingFilters";
import type { Listing } from "../../types";

// Sample Listings with proper typing
const sampleListings: Listing[] = [
  {
    id: 1,
    title: "MacBook Pro M2 2023",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    condition: "Like New",
    location: "Tokyo",
    category: "Electronics",
    rating: 4.8,
    isFavorite: false,
    description: "Excellent condition MacBook Pro with M2 chip",
    seller: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 4.9,
      verified: true
    },
    postedDate: "2024-01-15",
    views: 245
  },
  {
    id: 2,
    title: "Calculus Textbook",
    price: 45,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    condition: "Good",
    location: "New York",
    category: "Books",
    rating: 4.5,
    isFavorite: true,
    description: "Calculus textbook in good condition",
    seller: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 4.7,
      verified: false
    },
    postedDate: "2024-01-10",
    views: 132
  },
  {
    id: 3,
    title: "Desk Lamp",
    price: 25,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    condition: "New",
    location: "London",
    category: "Furniture",
    rating: 4.3,
    isFavorite: false,
    description: "Modern LED desk lamp",
    seller: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 4.6,
      verified: true
    },
    postedDate: "2024-01-12",
    views: 89
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 89,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    condition: "Like New",
    location: "Paris",
    category: "Electronics",
    rating: 4.7,
    isFavorite: true,
    description: "Noise-cancelling wireless headphones",
    seller: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 4.8,
      verified: true
    },
    postedDate: "2024-01-08",
    views: 198
  }
];

export default function ListingsPage() {
  const theme = useTheme();

  // State with proper types
  const [listings] = useState<Listing[]>(sampleListings);
  const [filteredListings, setFilteredListings] = useState<Listing[]>(sampleListings);
  const [loading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState<ListingFiltersState>({
    category: "",
    condition: "",
    prefecture: "",
    priceRange: [0, 100000],
  });
  const [activeFiltersCount, setActiveFiltersCount] = useState<number>(0);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate active filters count
  useEffect(() => {
    let count = 0;
    if (filters.category) count++;
    if (filters.condition) count++;
    if (filters.prefecture) count++;
    if (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 100000)) count++;
    setActiveFiltersCount(count);
  }, [filters]);

  // Filter listings based on search and filters
  useEffect(() => {
    let result = [...listings];
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }
    
    // Apply filters
    if (filters.category) {
      result = result.filter(item => item.category === filters.category);
    }
    if (filters.condition) {
      result = result.filter(item => item.condition === filters.condition);
    }
    const prefecture = filters.prefecture?.trim();
    if (prefecture) {
      result = result.filter(item => item.location.toLowerCase().includes(prefecture.toLowerCase()));
    }
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange;
      result = result.filter(item => item.price >= minPrice && item.price <= maxPrice);
    }
    
    setFilteredListings(result);
  }, [searchQuery, filters, listings]);

  // Handle filter changes
  const handleFilterChange = (newFilters: ListingFiltersState) => {
    setFilters(newFilters);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      category: "",
      condition: "",
      prefecture: "",
      priceRange: [0, 100000],
    });
    setSearchQuery("");
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListings = filteredListings.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  // Render loading state
  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {Array.from(new Array(12)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
              <Skeleton variant="text" sx={{ mt: 1 }} />
              <Skeleton variant="text" width="60%" />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 1,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          Student Marketplace
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Find everything you need from fellow students
        </Typography>

        {/* Controls */}
        <Card sx={{
          p: 2,
          borderRadius: 3,
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
          boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.06)}`,
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          mb: 3
        }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <TextField
              placeholder="Search listings..."
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{ minWidth: 300, maxWidth: 400 }}
            />
            
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <IconButton
                onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                color={viewMode === "list" ? "primary" : "default"}
              >
                <ViewList />
              </IconButton>
              <IconButton
                onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                color={viewMode === "grid" ? "primary" : "default"}
              >
                <ViewModule />
              </IconButton>
              <Button
                startIcon={<FilterList />}
                endIcon={activeFiltersCount > 0 ? <Badge badgeContent={activeFiltersCount} color="primary" /> : null}
                onClick={() => setDrawerOpen(true)}
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600
                }}
              >
                Filters
              </Button>
            </Box>
          </Box>
        </Card>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap', mb: 3 }}>
            {searchQuery && <Chip label={`Search: "${searchQuery}"`} onDelete={() => setSearchQuery("")} color="primary" />}
            {filters.category && <Chip label={`Category: ${filters.category}`} size="small" onDelete={() => setFilters({ ...filters, category: '' })} />}
            {filters.condition && <Chip label={`Condition: ${filters.condition}`} size="small" onDelete={() => setFilters({ ...filters, condition: '' })} />}
            {filters.prefecture && <Chip label={`Prefecture: ${filters.prefecture}`} size="small" onDelete={() => setFilters({ ...filters, prefecture: '' })} />}
            <Button size="small" onClick={clearAllFilters} sx={{ textTransform: 'none', fontSize: '0.75rem' }}>Clear all</Button>
          </Box>
        )}
      </Box>

      {/* Listings Grid */}
      <Grid container spacing={3}>
        {currentListings.map(listing => (
          <Grid item xs={12} sm={viewMode === "grid" ? 6 : 12} md={viewMode === "grid" ? 4 : 12} lg={viewMode === "grid" ? 3 : 12} key={listing.id}>
            <ListingCard 
              listing={{
                id: listing.id,
                title: listing.title,
                description: listing.description ?? "",
                price: `¥${listing.price}`,
                photos: [listing.image],
                seller: listing.seller ? { name: listing.seller.name, rating: listing.seller.rating } : undefined,
                location: listing.location,
                category: listing.category,
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* No Results */}
      {filteredListings.length === 0 && !loading && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No listings found
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            sx={{ mt: 2 }}
            onClick={clearAllFilters}
          >
            Clear all filters
          </Button>
        </Box>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination 
            count={totalPages} 
            page={currentPage}
            onChange={handlePageChange}
            color="primary" 
          />
        </Box>
      )}

      {/* Filters Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 320,
            p: 3
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Filters</Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        
        <ListingFilters 
          onFilterChange={handleFilterChange}
        />
        
        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button variant="outlined" onClick={clearAllFilters} fullWidth>
            Clear All
          </Button>
          <Button variant="contained" onClick={() => setDrawerOpen(false)} fullWidth>
            Apply Filters
          </Button>
        </Box>
      </Drawer>
    </Container>
  );
}