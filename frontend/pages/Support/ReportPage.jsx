import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  useTheme,
  alpha
} from "@mui/material";
import {
  Warning,
  Send
} from "@mui/icons-material";

export default function ReportPage() {
  const theme = useTheme();

  const reportTypes = [
    "Inappropriate Content",
    "Suspicious Activity",
    "Fraudulent Listing",
    "Harassment",
    "Technical Issue",
    "Other"
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Warning sx={{ fontSize: 64, color: theme.palette.warning.main, mb: 2 }} />
        <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
          Report an Issue
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Help us keep StudentMarket safe and trustworthy
        </Typography>
      </Box>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 4 }}>
            Report Details
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Type of Report</InputLabel>
              <Select label="Type of Report">
                {reportTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Listing URL (if applicable)"
              placeholder="https://studentmarket.jp/listing/123"
            />

            <TextField
              fullWidth
              label="User involved (if applicable)"
              placeholder="Username or email"
            />

            <TextField
              fullWidth
              label="Description"
              multiline
              rows={6}
              placeholder="Please provide detailed information about the issue..."
              helperText="Be as specific as possible. Include dates, times, and any relevant details."
            />

            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Your report will be reviewed within 24 hours. We take all reports seriously and will investigate promptly.
              </Typography>
              <Button variant="contained" size="large" startIcon={<Send />}>
                Submit Report
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}