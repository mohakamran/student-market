import { useState } from "react";
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
  useTheme,
  alpha,
  Container,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Alert,
  InputAdornment
} from "@mui/material";
import {
  PhotoCamera,
  Close,
  CheckCircle,
  ArrowForward,
  ArrowBack,
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
  const [activeStep, setActiveStep] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [prefecture, setPrefecture] = useState<string>("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const theme = useTheme();

  const steps = ['Basic Information', 'Item Details', 'Review & Publish'];

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newPhotos = [...photos, ...filesArray];
      setPhotos(newPhotos);

      // Generate preview URLs
      const newUrls = filesArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls(prev => [...prev, ...newUrls]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...photos];
    const newUrls = [...previewUrls];
    newPhotos.splice(index, 1);
    newUrls.splice(index, 1);
    setPhotos(newPhotos);
    setPreviewUrls(newUrls);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or navigate
      setActiveStep(0);
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setCondition("");
      setPrefecture("");
      setPhotos([]);
      setPreviewUrls([]);
    }, 2000);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Price (¥)"
                type="number"
                value={price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
                required
                InputProps={{
                  startAdornment: <InputAdornment position="start">¥</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category"
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Condition</InputLabel>
                <Select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  label="Condition"
                >
                  {conditions.map((cond) => (
                    <MenuItem key={cond} value={cond}>
                      {cond}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Location (Prefecture)</InputLabel>
                <Select
                  value={prefecture}
                  onChange={(e) => setPrefecture(e.target.value)}
                  label="Location (Prefecture)"
                >
                  {prefectures.map((pref) => (
                    <MenuItem key={pref} value={pref}>
                      {pref}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Photos
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                {previewUrls.map((url, index) => (
                  <Box key={index} sx={{ position: 'relative' }}>
                    <Avatar
                      src={url}
                      variant="rounded"
                      sx={{ width: 100, height: 100 }}
                    />
                    <IconButton
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: -8,
                        right: -8,
                        bgcolor: 'background.paper',
                        boxShadow: 1
                      }}
                      onClick={() => handleRemovePhoto(index)}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
                {previewUrls.length < 5 && (
                  <Button
                    variant="outlined"
                    component="label"
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <PhotoCamera sx={{ mb: 1 }} />
                    Add Photo
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      multiple
                      onChange={handlePhotoChange}
                    />
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Review Your Listing
            </Typography>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {description}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Chip label={`¥${price}`} color="primary" />
                <Chip label={category} />
                <Chip label={condition} />
                <Chip label={prefecture} />
              </Stack>
            </Paper>
            <Alert severity="info">
              Your listing will be visible to all students in your area. Make sure all information is accurate before publishing.
            </Alert>
          </Box>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
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