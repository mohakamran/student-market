import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Button,
  Chip,
  IconButton,
  Card,
  useTheme,
  alpha,
  Divider,
  Collapse
} from "@mui/material";
import {
  FilterList,
  ClearAll,
  ExpandMore,
  ExpandLess,
  LocalOffer,
  Category,
  Place,
  Build
} from "@mui/icons-material";

type Props = {
  onFilterChange?: (filters: Filters) => void;
};

export type Filters = {
  category?: string;
  condition?: string;
  prefecture?: string;
  priceRange?: number[];
};

const categories = ["Electronics", "Books", "Furniture", "Clothes", "Others"];
const conditions = ["new", "like-new", "good", "used", "for-parts"];
const prefectures = ["Tokyo", "Osaka", "Kyoto", "Fukuoka", "Hokkaido"];

// Condition icons mapping
const conditionIcons = {
  "new": "🆕",
  "like-new": "✨",
  "good": "👍",
  "used": "🔧",
  "for-parts": "⚙️"
};

const conditionLabels = {
  "new": "Brand New",
  "like-new": "Like New",
  "good": "Good",
  "used": "Used",
  "for-parts": "For Parts"
};

export default function ListingFilters({ onFilterChange }: Props) {
  const [filters, setFilters] = useState<Filters>({
    category: "",
    condition: "",
    prefecture: "",
    priceRange: [0, 100000],
  });

  const [expanded, setExpanded] = useState(true);
  const theme = useTheme();

  const handleChange = (key: keyof Filters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  const handleClearAll = () => {
    const clearedFilters = {
      category: "",
      condition: "",
      prefecture: "",
      priceRange: [0, 100000],
    };
    setFilters(clearedFilters);
    if (onFilterChange) onFilterChange(clearedFilters);
  };

  const hasActiveFilters = filters.category || filters.condition || filters.prefecture || 
    (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 100000));

  const formatPrice = (price: number) => {
    return `¥${price.toLocaleString()}`;
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
        boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        overflow: "hidden",
        mb: 4,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2.5,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FilterList 
            sx={{ 
              color: theme.palette.primary.main,
              fontSize: 28 
            }} 
          />
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Filter Listings
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Refine your search results
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {hasActiveFilters && (
            <Chip
              label="Active"
              size="small"
              color="primary"
              variant="outlined"
            />
          )}
          <IconButton size="small">
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
      </Box>

      <Collapse in={expanded}>
        <Box sx={{ p: 3 }}>
          {/* Active Filters Display */}
          {hasActiveFilters && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: "text.secondary" }}>
                Active Filters:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {filters.category && (
                  <Chip
                    icon={<Category sx={{ fontSize: 16 }} />}
                    label={filters.category}
                    size="small"
                    onDelete={() => handleChange("category", "")}
                    color="primary"
                    variant="outlined"
                  />
                )}
                {filters.condition && (
                  <Chip
                    icon={<Build sx={{ fontSize: 16 }} />}
                    label={conditionLabels[filters.condition as keyof typeof conditionLabels]}
                    size="small"
                    onDelete={() => handleChange("condition", "")}
                    color="secondary"
                    variant="outlined"
                  />
                )}
                {filters.prefecture && (
                  <Chip
                    icon={<Place sx={{ fontSize: 16 }} />}
                    label={filters.prefecture}
                    size="small"
                    onDelete={() => handleChange("prefecture", "")}
                    color="success"
                    variant="outlined"
                  />
                )}
                {filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 100000) && (
                  <Chip
                    icon={<LocalOffer sx={{ fontSize: 16 }} />}
                    label={`${formatPrice(filters.priceRange[0])} - ${formatPrice(filters.priceRange[1])}`}
                    size="small"
                    onDelete={() => handleChange("priceRange", [0, 100000])}
                    color="warning"
                    variant="outlined"
                  />
                )}
              </Box>
            </Box>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

            {/* Category */}
            <FormControl fullWidth>
              <InputLabel sx={{ fontWeight: 600 }}>Category</InputLabel>
              <Select
                value={filters.category}
                label="Category"
                onChange={(e) => handleChange("category", e.target.value)}
                sx={{
                  borderRadius: 3,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: alpha(theme.palette.primary.main, 0.4),
                  },
                }}
              >
                <MenuItem value="">All Categories</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat} sx={{ py: 1.5 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Category sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                      <Typography>{cat}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Divider sx={{ my: 1 }} />

            {/* Condition */}
            <FormControl fullWidth>
              <InputLabel sx={{ fontWeight: 600 }}>Condition</InputLabel>
              <Select
                value={filters.condition}
                label="Condition"
                onChange={(e) => handleChange("condition", e.target.value)}
                sx={{
                  borderRadius: 3,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: alpha(theme.palette.secondary.main, 0.2),
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: alpha(theme.palette.secondary.main, 0.4),
                  },
                }}
              >
                <MenuItem value="">All Conditions</MenuItem>
                {conditions.map((cond) => (
                  <MenuItem key={cond} value={cond} sx={{ py: 1.5 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Typography sx={{ fontSize: 18 }}>
                        {conditionIcons[cond as keyof typeof conditionIcons]}
                      </Typography>
                      <Typography>
                        {conditionLabels[cond as keyof typeof conditionLabels]}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Divider sx={{ my: 1 }} />

            {/* Prefecture */}
            <FormControl fullWidth>
              <InputLabel sx={{ fontWeight: 600 }}>Prefecture</InputLabel>
              <Select
                value={filters.prefecture}
                label="Prefecture"
                onChange={(e) => handleChange("prefecture", e.target.value)}
                sx={{
                  borderRadius: 3,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: alpha(theme.palette.success.main, 0.2),
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: alpha(theme.palette.success.main, 0.4),
                  },
                }}
              >
                <MenuItem value="">All Prefectures</MenuItem>
                {prefectures.map((pref) => (
                  <MenuItem key={pref} value={pref} sx={{ py: 1.5 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Place sx={{ color: theme.palette.success.main, fontSize: 20 }} />
                      <Typography>{pref}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Divider sx={{ my: 1 }} />

            {/* Price Range */}
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, display: "flex", alignItems: "center", gap: 1 }}>
                <LocalOffer sx={{ color: theme.palette.warning.main, fontSize: 20 }} />
                Price Range
              </Typography>
              <Slider
                value={filters.priceRange}
                onChange={(e, value) => handleChange("priceRange", value)}
                valueLabelDisplay="auto"
                valueLabelFormat={formatPrice}
                min={0}
                max={100000}
                step={1000}
                sx={{
                  color: theme.palette.warning.main,
                  height: 6,
                  "& .MuiSlider-thumb": {
                    width: 20,
                    height: 20,
                    backgroundColor: theme.palette.common.white,
                    border: `2px solid ${theme.palette.warning.main}`,
                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: `0 0 0 8px ${alpha(theme.palette.warning.main, 0.16)}`,
                    },
                  },
                  "& .MuiSlider-track": {
                    background: `linear-gradient(90deg, ${alpha(theme.palette.warning.main, 0.3)}, ${theme.palette.warning.main})`,
                  },
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  {formatPrice(filters.priceRange?.[0] || 0)}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {formatPrice(filters.priceRange?.[1] || 100000)}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              variant="outlined"
              startIcon={<ClearAll />}
              onClick={handleClearAll}
              disabled={!hasActiveFilters}
              fullWidth
              sx={{
                borderRadius: 3,
                py: 1.2,
                fontWeight: 600,
                textTransform: "none",
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Clear All
            </Button>
            <Button
              variant="contained"
              startIcon={<FilterList />}
              onClick={() => onFilterChange?.(filters)}
              fullWidth
              sx={{
                borderRadius: 3,
                py: 1.2,
                fontWeight: 600,
                textTransform: "none",
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                },
              }}
            >
              Apply Filters
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
}