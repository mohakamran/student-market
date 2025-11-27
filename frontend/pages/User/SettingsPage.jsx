import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Switch,
  FormControlLabel,
  Divider,
  useTheme,
  alpha,
    Grid // Add Grid to the imports
} from "@mui/material";
import {
  Notifications,
  Security,
  Language,
  Save
} from "@mui/icons-material";

export default function SettingsPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={800} sx={{ mb: 4 }}>
        Account Settings
      </Typography>

      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
            Profile Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" defaultValue="Ken" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" defaultValue="Tanaka" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" defaultValue="ken.tanaka@example.com" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Phone" defaultValue="+81 90-1234-5678" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
            Notification Preferences
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Email notifications"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Push notifications"
            />
            <FormControlLabel
              control={<Switch />}
              label="Marketing emails"
            />
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
            Privacy & Security
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Show my profile to other users"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Allow messages from other users"
            />
            <FormControlLabel
              control={<Switch />}
              label="Two-factor authentication"
            />
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" size="large" startIcon={<Save />}>
          Save Changes
        </Button>
      </Box>
    </Container>
  );
}