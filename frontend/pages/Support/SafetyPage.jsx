import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  useTheme,
  alpha
} from "@mui/material";
import {
  Security,
  MeetingRoom,
  Payment,
  VerifiedUser
} from "@mui/icons-material";

export default function SafetyPage() {
  const theme = useTheme();

  const safetyTips = [
    {
      icon: <MeetingRoom sx={{ fontSize: 40 }} />,
      title: "Meet in Public Places",
      description: "Always meet in well-lit, public areas like campus cafeterias, libraries, or student centers. Avoid isolated locations."
    },
    {
      icon: <Payment sx={{ fontSize: 40 }} />,
      title: "Inspect Before Paying",
      description: "Thoroughly check the item before making any payment. Test electronics, inspect for damages, and ensure everything works as described."
    },
    {
      icon: <VerifiedUser sx={{ fontSize: 40 }} />,
      title: "Verify Student Status",
      description: "Only trade with verified student accounts. Look for the verification badge and student email confirmation."
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: "Trust Your Instincts",
      description: "If something feels wrong or too good to be true, trust your instincts. Report any suspicious activity immediately."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Security sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2 }} />
        <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
          Safety Tips
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your safety is our priority. Follow these guidelines for secure trading.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {safetyTips.map((tip, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box sx={{ color: theme.palette.primary.main, mb: 3 }}>
                {tip.icon}
              </Box>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                {tip.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {tip.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ borderRadius: 3, mt: 6, background: alpha(theme.palette.warning.main, 0.05) }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: theme.palette.warning.dark }}>
            ⚠️ Important Reminder
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            StudentMarket is a platform for students to connect. While we verify student status, 
            we cannot guarantee the condition of items or the behavior of individuals. 
            Always exercise caution and common sense when meeting strangers.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}