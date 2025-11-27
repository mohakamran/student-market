import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
  Chip,
  useTheme,
  alpha,
  Container,
  Card,
  Skeleton
} from "@mui/material";
import {
  Search,
  FilterList,
  MoreVert,
  MarkChatRead,
  Block,
  Report,
  Delete,
  Person,
  Store
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Mock chat data with more details
const mockChats = [
  {
    id: 1,
    name: "Alice Johnson",
    lastMessage: "Is the MacBook Pro still available? I can pick it up today!",
    timestamp: "2 min ago",
    unreadCount: 3,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    item: "MacBook Pro 2023",
    itemPrice: "¥120,000",
    isOnline: true
  },
  {
    id: 2,
    name: "Bob Smith",
    lastMessage: "Can you do ¥8,000 for the bike? That's my final offer.",
    timestamp: "1 hour ago",
    unreadCount: 1,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    item: "Mountain Bike",
    itemPrice: "¥10,000",
    isOnline: false
  },
  {
    id: 3,
    name: "Charlie Brown",
    lastMessage: "Thanks for the quick response! See you tomorrow at 3 PM.",
    timestamp: "3 hours ago",
    unreadCount: 0,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    item: "Textbooks Bundle",
    itemPrice: "¥5,000",
    isOnline: true
  },
  {
    id: 4,
    name: "Diana Miller",
    lastMessage: "Do you have more photos of the furniture?",
    timestamp: "1 day ago",
    unreadCount: 0,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    item: "Study Desk",
    itemPrice: "¥15,000",
    isOnline: false
  }
];

export default function ChatListPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleChatClick = (id: number) => {
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      navigate(`/chat/${id}`);
      setLoading(false);
    }, 300);
  };

  const filteredChats = mockChats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            mb: 1
          }}
        >
          Messages
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Connect with buyers and sellers in real-time
        </Typography>

        {/* Search and Filter Bar */}
        <Card
          sx={{
            p: 2,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
            boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <TextField
              fullWidth
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: theme.palette.text.secondary }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 3,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                  },
                }
              }}
            />
            <IconButton
              sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.2),
                  transform: "scale(1.05)",
                },
                transition: "all 0.2s ease",
              }}
            >
              <FilterList />
            </IconButton>
          </Box>
        </Card>
      </Box>

      {/* Chat List */}
      <Card
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
          boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        {loading ? (
          // Loading Skeletons
          Array.from(new Array(4)).map((_, index) => (
            <Box key={index}>
              <ListItem sx={{ py: 2, px: 3 }}>
                <ListItemAvatar>
                  <Skeleton variant="circular" width={56} height={56} />
                </ListItemAvatar>
                <Box sx={{ flex: 1, ml: 2 }}>
                  <Skeleton variant="text" width="60%" height={24} />
                  <Skeleton variant="text" width="80%" height={20} />
                  <Skeleton variant="text" width="40%" height={16} />
                </Box>
              </ListItem>
              {index < 3 && <Divider sx={{ mx: 3 }} />}
            </Box>
          ))
        ) : filteredChats.length > 0 ? (
          <List sx={{ py: 1 }}>
            {filteredChats.map((chat, index) => (
              <React.Fragment key={chat.id}>
                <ListItem
                  button
                  onClick={() => handleChatClick(chat.id)}
                  sx={{
                    py: 2,
                    px: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.main, 0.04),
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Badge
                      color="success"
                      variant="dot"
                      invisible={!chat.isOnline}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                    >
                      <Avatar
                        src={chat.avatar}
                        sx={{
                          width: 56,
                          height: 56,
                          border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        }}
                      >
                        <Person />
                      </Avatar>
                    </Badge>
                  </ListItemAvatar>

                  <Box sx={{ flex: 1, ml: 2, minWidth: 0 }}>
                    {/* Header with name, timestamp, and menu */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 0.5 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: chat.unreadCount > 0 ? theme.palette.text.primary : theme.palette.text.secondary,
                        }}
                      >
                        {chat.name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          {chat.timestamp}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMenuOpen(e);
                          }}
                          sx={{
                            color: theme.palette.text.secondary,
                            "&:hover": {
                              color: theme.palette.primary.main,
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            },
                          }}
                        >
                          <MoreVert />
                        </IconButton>
                      </Box>
                    </Box>

                    {/* Item Info */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                      <Store sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        {chat.item}
                      </Typography>
                      <Chip
                        label={chat.itemPrice}
                        size="small"
                        variant="outlined"
                        sx={{
                          height: 20,
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          borderColor: theme.palette.success.main,
                          color: theme.palette.success.main,
                        }}
                      />
                    </Box>

                    {/* Last Message */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: chat.unreadCount > 0 ? theme.palette.text.primary : theme.palette.text.secondary,
                          fontWeight: chat.unreadCount > 0 ? 600 : 400,
                          flex: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          mr: 1,
                        }}
                      >
                        {chat.lastMessage}
                      </Typography>

                      {/* Unread Badge */}
                      {chat.unreadCount > 0 && (
                        <Badge
                          badgeContent={chat.unreadCount}
                          color="primary"
                          sx={{
                            "& .MuiBadge-badge": {
                              backgroundColor: theme.palette.primary.main,
                              color: "white",
                              fontWeight: 700,
                              minWidth: 20,
                              height: 20,
                              borderRadius: 10,
                            },
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                </ListItem>
                {index < filteredChats.length - 1 && (
                  <Divider sx={{ mx: 3, opacity: 0.5 }} />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : (
          // Empty State
          <Box sx={{ textAlign: "center", py: 8, px: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                mb: 1,
              }}
            >
              No conversations found
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              {searchQuery ? "Try adjusting your search terms" : "Start a conversation by messaging a seller!"}
            </Typography>
          </Box>
        )}
      </Card>

      {/* Quick Stats */}
      <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
        <Chip
          icon={<MarkChatRead />}
          label={`${mockChats.filter(chat => chat.unreadCount === 0).length} Read`}
          variant="outlined"
          sx={{ borderRadius: 3 }}
        />
        <Chip
          icon={<Badge color="primary" badgeContent={4} />}
          label={`${mockChats.reduce((sum, chat) => sum + chat.unreadCount, 0)} Unread`}
          variant="outlined"
          sx={{ borderRadius: 3 }}
        />
        <Chip
          icon={<Person />}
          label={`${mockChats.filter(chat => chat.isOnline).length} Online`}
          variant="outlined"
          sx={{ borderRadius: 3 }}
        />
      </Box>
    </Container>
  );
}