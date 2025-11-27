import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ flex: 1 }}>
        <Outlet /> {/* This renders the matched route */}
      </Box>
      <Footer />
    </Box>
  );
}
