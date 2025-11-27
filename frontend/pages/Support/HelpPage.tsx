import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  useTheme,
  alpha,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import {
  ExpandMore,
  Search,
  Help
} from "@mui/icons-material";

export default function HelpPage() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "How do I create a listing?",
      answer: "To create a listing, click on 'Sell Item' in the navigation bar, fill in the required information about your item, add photos, and set your price. Once submitted, your listing will be visible to other students."
    },
    {
      question: "Is StudentMarket free to use?",
      answer: "Yes! StudentMarket is completely free for students to buy and sell items. We believe in supporting the student community without any fees."
    },
    {
      question: "How do I contact a seller?",
      answer: "Click on the 'Contact Seller' button on any listing page to start a chat with the seller. All communications happen through our secure messaging system."
    },
    {
      question: "What safety measures are in place?",
      answer: "We verify student emails, provide secure messaging, and offer safety tips for meetups. Always meet in public places and inspect items before purchasing."
    },
    {
      question: "Can I edit my listing after posting?",
      answer: "Yes, you can edit your listings at any time from your 'My Listings' page. You can update photos, descriptions, prices, and other details."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Help sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2 }} />
        <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
          Help Center
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Find answers to frequently asked questions and get support
        </Typography>
      </Box>

      <Card sx={{ borderRadius: 3, mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <TextField
            fullWidth
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: theme.palette.text.secondary }} />
                </InputAdornment>
              ),
              sx: { borderRadius: 2 }
            }}
          />
        </CardContent>
      </Card>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
          Frequently Asked Questions
        </Typography>
        {filteredFaqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 1, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Card sx={{ borderRadius: 3, background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)` }}>
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            Still need help?
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Our support team is here to assist you with any questions or issues.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained">
              Contact Support
            </Button>
            <Button variant="outlined">
              Visit Community
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}