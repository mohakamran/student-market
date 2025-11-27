import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Avatar,
  Stack,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  useTheme,
  alpha,
  Container,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Divider,
  Alert,
  InputAdornment
} from "@mui/material";
import {
  PhotoCamera,
  Close,
  Add,
  Category,
  Sell,
  Description,
  LocationOn,
  LocalOffer,
  CheckCircle,
  ArrowForward,
  ArrowBack,
  Visibility
} from "@mui/icons-material";

const categories = [
  "Electronics",
  "Books & Textbooks",
  "Furniture",
  "Clothing & Fashion",
  "Sports & Outdoors",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Other"
];

const conditions = [
  "Brand New",
  "Like New",
  "Good",
  "Fair",
  "For Parts"
];

const prefectures = [
  "Tokyo", "Osaka", "Kyoto", "Fukuoka", "Hokkaido",
  "Aichi", "Kanagawa", "Saitama", "Chiba", "Hyogo"
];

export default function CreateListingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [photos, setPhotos] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();

  const steps = ['Basic Information', 'Item Details', 'Review & Publish'];

  const handlePhotoChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newPhotos = [...photos, ...filesArray];
      setPhotos(newPhotos);

      // Generate preview URLs
      const newUrls = filesArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newUrls]);
    }
  };

  const handleRemovePhoto = (index) => {
    const newPhotos = [...photos];
    const newUrls = [...previewUrls];
    newPhotos.splice(index, 1);
    newUrls.splice(index, 1);
    setPhotos(newPhotos);
    setPreviewUrls(newUrls);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log({ title, description, price, category, condition, prefecture, photos });
    alert("Listing submitted successfully! 🎉");
    
    // Reset form
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setCondition("");
    setPrefecture("");
    setPhotos([]);
    setPreviewUrls([]);
    setActiveStep(0);
    setIsSubmitting(false);
  };

  const isStepValid = () => {
    switch (activeStep) {
      case 0:
        return title.trim() && description.trim() && price.trim();
      case 1:
        return category && condition && prefecture;
      case 2:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
              Tell us about your item
            </Typography>
            
            <Grid container spacing={4}>
              {/* Title Field */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    required
                    label="Listing Title"
                    placeholder="e.g., MacBook Pro 2023 - Excellent Condition"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Sell sx={{ color: theme.palette.text.secondary }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        fontSize: "1rem",
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                          borderWidth: 2,
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, ml: 1 }}>
                    Be specific and descriptive to attract more buyers
                  </Typography>
                </FormControl>
              </Grid>

              {/* Price Field */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    required
                    type="number"
                    label="Price"
                    placeholder="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocalOffer sx={{ color: theme.palette.text.secondary }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>
                            JPY
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        fontSize: "1rem",
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                          borderWidth: 2,
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                </FormControl>
              </Grid>

              {/* Description Field */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    required
                    label="Description"
                    placeholder="Describe your item in detail... Include condition, features, specifications, and any relevant information that buyers should know."
                    multiline
                    rows={6}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                          <Description sx={{ color: theme.palette.text.secondary }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        fontSize: "1rem",
                        alignItems: 'flex-start',
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                          borderWidth: 2,
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, ml: 1 }}>
                    Detailed descriptions help buyers make informed decisions
                  </Typography>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
              Add item details and photos
            </Typography>
            
            <Grid container spacing={4}>
              {/* Category Field */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">
                        <Category sx={{ color: theme.palette.text.secondary, ml: 1 }} />
                      </InputAdornment>
                    }
                    sx={{
                      borderRadius: 2,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: alpha(theme.palette.text.primary, 0.23),
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    }}
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Condition Field */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Condition</InputLabel>
                  <Select
                    value={condition}
                    label="Condition"
                    onChange={(e) => setCondition(e.target.value)}
                    sx={{
                      borderRadius: 2,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: alpha(theme.palette.text.primary, 0.23),
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    }}
                  >
                    {conditions.map((cond) => (
                      <MenuItem key={cond} value={cond}>
                        {cond}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Location Field */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Location</InputLabel>
                  <Select
                    value={prefecture}
                    label="Location"
                    onChange={(e) => setPrefecture(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">
                        <LocationOn sx={{ color: theme.palette.text.secondary, ml: 1 }} />
                      </InputAdornment>
                    }
                    sx={{
                      borderRadius: 2,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: alpha(theme.palette.text.primary, 0.23),
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    }}
                  >
                    {prefectures.map((pref) => (
                      <MenuItem key={pref} value={pref}>
                        {pref}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Photos Section */}
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Photos ({photos.length}/8)
                  </Typography>
                  <Alert severity="info" sx={{ borderRadius: 2, mb: 3 }}>
                    Add clear photos from different angles. First photo will be the cover image.
                    Maximum 8 photos allowed.
                  </Alert>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
                    {/* Photo Upload Button */}
                    <Button
                      variant="outlined"
                      component="label"
                      disabled={photos.length >= 8}
                      sx={{
                        width: 140,
                        height: 140,
                        borderRadius: 2,
                        border: `2px dashed ${photos.length >= 8 ? theme.palette.action.disabled : alpha(theme.palette.primary.main, 0.4)}`,
                        flexDirection: "column",
                        gap: 1,
                        "&:hover": {
                          border: `2px dashed ${photos.length >= 8 ? theme.palette.action.disabled : theme.palette.primary.main}`,
                          backgroundColor: photos.length >= 8 ? 'transparent' : alpha(theme.palette.primary.main, 0.04),
                        },
                      }}
                    >
                      <PhotoCamera 
                        sx={{ 
                          fontSize: 32,
                          color: photos.length >= 8 ? theme.palette.action.disabled : theme.palette.primary.main 
                        }} 
                      />
                      <Typography 
                        variant="body2" 
                        align="center"
                        sx={{
                          color: photos.length >= 8 ? theme.palette.action.disabled : 'inherit',
                          fontWeight: 600
                        }}
                      >
                        Add Photos
                      </Typography>
                      <input
                        hidden
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoChange}
                        disabled={photos.length >= 8}
                      />
                    </Button>

                    {/* Photo Previews */}
                    {previewUrls.map((url, idx) => (
                      <Box key={idx} sx={{ position: "relative" }}>
                        <Avatar
                          variant="rounded"
                          src={url}
                          alt={`Preview ${idx}`}
                          sx={{
                            width: 140,
                            height: 140,
                            borderRadius: 2,
                            border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                          }}
                        />
                        {idx === 0 && (
                          <Chip
                            label="Cover"
                            size="small"
                            color="primary"
                            sx={{
                              position: "absolute",
                              top: 8,
                              left: 8,
                              fontSize: '0.7rem',
                              height: 22,
                              fontWeight: 700,
                            }}
                          />
                        )}
                        <IconButton
                          size="small"
                          onClick={() => handleRemovePhoto(idx)}
                          sx={{
                            position: "absolute",
                            top: -8,
                            right: -8,
                            backgroundColor: theme.palette.error.main,
                            color: "white",
                            "&:hover": {
                              backgroundColor: theme.palette.error.dark,
                            },
                          }}
                        >
                          <Close fontSize="small" />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
              Review your listing before publishing
            </Typography>
            
            <Paper
              sx={{
                p: 4,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Visibility color="primary" />
                <Typography variant="h6" fontWeight={700}>
                  Listing Preview
                </Typography>
              </Box>
              
              <Grid container spacing={4}>
                {/* Image Column */}
                <Grid item xs={12} md={5}>
                  {previewUrls.length > 0 ? (
                    <Avatar
                      variant="rounded"
                      src={previewUrls[0]}
                      sx={{
                        width: "100%",
                        height: 250,
                        borderRadius: 2,
                        boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: "100%",
                        height: 250,
                        borderRadius: 2,
                        backgroundColor: alpha(theme.palette.action.disabled, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 2,
                        border: `2px dashed ${alpha(theme.palette.action.disabled, 0.3)}`,
                      }}
                    >
                      <PhotoCamera sx={{ fontSize: 48, color: theme.palette.text.secondary }} />
                      <Typography color="text.secondary" textAlign="center">
                        No photos added
                      </Typography>
                    </Box>
                  )}
                  
                  {/* Additional Photos */}
                  {previewUrls.length > 1 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                        Additional Photos ({previewUrls.length - 1})
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {previewUrls.slice(1).map((url, idx) => (
                          <Avatar
                            key={idx}
                            variant="rounded"
                            src={url}
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: 1,
                              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  )}
                </Grid>

                {/* Details Column */}
                <Grid item xs={12} md={7}>
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                        TITLE
                      </Typography>
                      <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.4 }}>
                        {title || "No title provided"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                        PRICE
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.primary.main,
                        }}
                      >
                        {price ? `¥${Number(price).toLocaleString()}` : "Not set"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                        DETAILS
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        <Chip 
                          label={category || "No category"} 
                          color="primary" 
                          variant="outlined" 
                        />
                        <Chip 
                          label={condition || "No condition"} 
                          color="secondary" 
                          variant="outlined" 
                        />
                        <Chip 
                          label={prefecture || "No location"} 
                          color="success" 
                          variant="outlined" 
                        />
                      </Box>
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                        DESCRIPTION
                      </Typography>
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          borderRadius: 1,
                          backgroundColor: alpha(theme.palette.background.default, 0.5),
                          minHeight: 100,
                        }}
                      >
                        <Typography variant="body1" sx={{ lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                          {description || "No description provided"}
                        </Typography>
                      </Paper>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Card
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          background: theme.palette.background.paper,
          boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Create New Listing
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Sell your items to students across Japan in just a few steps
            </Typography>
          </Box>

          {/* Stepper */}
          <Stepper activeStep={activeStep} sx={{ mb: 6, px: 2 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel 
                  sx={{
                    "& .MuiStepLabel-label": {
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Form Content */}
          <Box component="form" onSubmit={handleSubmit} sx={{ minHeight: 400 }}>
            {renderStepContent(activeStep)}

            {/* Navigation Buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6, gap: 2 }}>
              <Button
                onClick={handleBack}
                disabled={activeStep === 0}
                startIcon={<ArrowBack />}
                sx={{
                  borderRadius: 2,
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  minWidth: 120,
                }}
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  endIcon={isSubmitting ? null : <CheckCircle />}
                  sx={{
                    borderRadius: 2,
                    px: 4,
                    py: 1.2,
                    fontWeight: 700,
                    fontSize: "1rem",
                    minWidth: 180,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                    "&:disabled": {
                      background: theme.palette.action.disabled,
                      transform: 'none',
                    },
                  }}
                >
                  {isSubmitting ? "Publishing..." : "Publish Listing"}
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    borderRadius: 2,
                    px: 4,
                    py: 1.2,
                    fontWeight: 600,
                    minWidth: 120,
                  }}
                >
                  Continue
                </Button>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}