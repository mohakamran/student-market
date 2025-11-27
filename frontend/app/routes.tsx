import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ListingsPage from "../pages/Listings/ListingsPage";
import ListingDetailPage from "../pages/Listings/ListingDetailPage";
import CreateListingPage from "../pages/Listings/CreateListingPage";
import ChatListPage from "../pages/Chat/ChatListPage";
import ChatRoomPage from "../pages/Chat/ChatRoomPage";
import CategoriesPage from "../pages/Listings/CategoriesPage";
import HelpPage from "../pages/Support/HelpPage";
import AboutPage from "../pages/Company/AboutPage";
import ContactPage from "../pages/Support/ContactPage";
import ReportPage from "../pages/Support/ReportPage";
import CareersPage from "../pages/Company/CareersPage";
import PrivacyPolicyPage from "../pages/Company/PrivacyPolicyPage";
import ProfilePage from "../pages/User/ProfilePage";
import MyListingsPage from "../pages/User/MyListingsPage";
import SettingsPage from "../pages/User/SettingsPage";
import FavoritesPage from "../pages/User/Favorites"; // Add this import



// Simple placeholder for any missing pages
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>{title}</h1>
    <p>This page is under construction.</p>
  </div>
);

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/listings", element: <ListingsPage /> },
      { path: "/listing/:id", element: <ListingDetailPage /> },
      { path: "/listings/create", element: <CreateListingPage /> },
      { path: "/chat", element: <ChatListPage /> },
      { path: "/chat/:id", element: <ChatRoomPage /> },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/help", element: <HelpPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/report", element: <ReportPage /> },
      { path: "/careers", element: <CareersPage /> },
      { path: "/privacy", element: <PrivacyPolicyPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/my-listings", element: <MyListingsPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/favorites", element: <FavoritesPage /> }, // Add this route
    ],
  },
]);