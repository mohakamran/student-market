import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton,
  Paper,
  useTheme,
  alpha,
  Container,
  Card,
  Chip,
  Menu,
  MenuItem
} from "@mui/material";
import {
  Send,
  AttachFile,
  EmojiEmotions,
  MoreVert,
  Block,
  Report,
  Delete,
  Person,
  Store,
  ArrowBack,
  Verified
} from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

// Mock messages with more details
const mockMessages = [
  {
    id: 1,
    sender: "You",
    text: "Hello! Thanks for your interest in the MacBook Pro.",
    timestamp: "10:30 AM",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    isRead: true
  },
  {
    id: 2,
    sender: "Alice Johnson",
    text: "Hi! Is the MacBook Pro still available? I can pick it up today!",
    timestamp: "10:32 AM",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    isRead: true
  },
  {
    id: 3,
    sender: "You",
    text: "Yes, it's available! It's in perfect condition, only 3 months old.",
    timestamp: "10:33 AM",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    isRead: true
  },
  {
    id: 4,
    sender: "Alice Johnson",
    text: "That's great! Could you do ¥110,000? And do you have the original box and accessories?",
    timestamp: "10:35 AM",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    isRead: false
  }
];

const chatUser = {
  id: 1,
  name: "Alice Johnson",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  isOnline: true,
  rating: 4.8,
  item: "MacBook Pro 2023",
  itemPrice: "¥120,000",
  itemImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
};

export default function ChatRoomPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      isRead: false
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleViewItem = () => {
    navigate(`/listing/1`); // Navigate to the item page
    handleMenuClose();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2, height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Chat Header */}
      <Card
        sx={{
          borderRadius: 3,
          mb: 2,
          p: 2,
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
          boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.08)}`,
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={() => navigate("/chat")} sx={{ color: theme.palette.primary.main }}>
            <ArrowBack />
          </IconButton>
          
          <Avatar
            src={chatUser.avatar}
            sx={{
              width: 50,
              height: 50,
              border: `2px solid ${chatUser.isOnline ? theme.palette.success.main : theme.palette.grey[400]}`,
            }}
          >
            <Person />
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {chatUser.name}
              </Typography>
              <Verified sx={{ fontSize: 18, color: theme.palette.primary.main }} />
              <Chip
                label={chatUser.isOnline ? "Online" : "Offline"}
                size="small"
                color={chatUser.isOnline ? "success" : "default"}
                variant="outlined"
                sx={{ height: 20, fontSize: '0.7rem' }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Rating: {chatUser.rating} ⭐ • {chatUser.item}
            </Typography>
          </Box>

          <IconButton
            onClick={handleMenuOpen}
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
      </Card>

      {/* Messages Area */}
      <Card
        sx={{
          flex: 1,
          borderRadius: 3,
          mb: 2,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
          boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.08)}`,
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        {/* Item Preview */}
        <Box
          sx={{
            p: 2,
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            background: alpha(theme.palette.primary.main, 0.02),
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              src={chatUser.itemImage}
              variant="rounded"
              sx={{ width: 60, height: 60 }}
            >
              <Store />
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                {chatUser.item}
              </Typography>
              <Typography variant="h6" color="primary" fontWeight={700}>
                {chatUser.itemPrice}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              size="small"
              onClick={handleViewItem}
              sx={{ borderRadius: 2 }}
            >
              View Item
            </Button>
          </Box>
        </Box>

        {/* Messages List */}
        <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
          <List sx={{ py: 0 }}>
            {messages.map((msg, index) => (
              <React.Fragment key={msg.id}>
                <ListItem
                  sx={{
                    py: 1.5,
                    px: 0,
                    flexDirection: msg.sender === "You" ? "row-reverse" : "row",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Avatar */}
                  <ListItemAvatar sx={{ minWidth: 40, mx: 1 }}>
                    <Avatar
                      src={msg.avatar}
                      sx={{
                        width: 36,
                        height: 36,
                        border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      }}
                    >
                      <Person />
                    </Avatar>
                  </ListItemAvatar>

                  {/* Message Bubble */}
                  <Paper
                    elevation={1}
                    sx={{
                      maxWidth: "70%",
                      p: 2,
                      borderRadius: 3,
                      position: "relative",
                      background: msg.sender === "You" 
                        ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
                        : alpha(theme.palette.background.paper, 0.9),
                      color: msg.sender === "You" ? "white" : theme.palette.text.primary,
                      border: msg.sender === "You" 
                        ? "none"
                        : `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                      "&::before": msg.sender === "You" ? {
                        content: '""',
                        position: "absolute",
                        right: -8,
                        top: 12,
                        width: 0,
                        height: 0,
                        borderLeft: `8px solid ${theme.palette.primary.main}`,
                        borderTop: "8px solid transparent",
                        borderBottom: "8px solid transparent",
                      } : {
                        content: '""',
                        position: "absolute",
                        left: -8,
                        top: 12,
                        width: 0,
                        height: 0,
                        borderRight: `8px solid ${alpha(theme.palette.background.paper, 0.9)}`,
                        borderTop: "8px solid transparent",
                        borderBottom: "8px solid transparent",
                      }
                    }}
                  >
                    <Typography variant="body1" sx={{ wordBreak: "break-word", lineHeight: 1.4 }}>
                      {msg.text}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 1,
                        gap: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          opacity: 0.8,
                          fontSize: "0.7rem",
                        }}
                      >
                        {msg.timestamp}
                      </Typography>
                      {msg.sender === "You" && (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          {msg.isRead ? (
                            <Typography variant="caption" sx={{ fontSize: "0.7rem", opacity: 0.8 }}>
                              Read
                            </Typography>
                          ) : (
                            <Typography variant="caption" sx={{ fontSize: "0.7rem", opacity: 0.8 }}>
                              Sent
                            </Typography>
                          )}
                        </Box>
                      )}
                    </Box>
                  </Paper>
                </ListItem>
                
                {/* Add some spacing between messages from different senders */}
                {index < messages.length - 1 && messages[index].sender !== messages[index + 1].sender && (
                  <Box sx={{ height: 16 }} />
                )}
              </React.Fragment>
            ))}
            <div ref={messagesEndRef} />
          </List>
        </Box>
      </Card>

      {/* Message Input */}
      <Card
        sx={{
          borderRadius: 3,
          p: 2,
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
          boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.08)}`,
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end" }}>
          <IconButton
            sx={{
              color: theme.palette.text.secondary,
              "&:hover": {
                color: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            }}
          >
            <AttachFile />
          </IconButton>
          
          <IconButton
            sx={{
              color: theme.palette.text.secondary,
              "&:hover": {
                color: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            }}
          >
            <EmojiEmotions />
          </IconButton>

          <TextField
            fullWidth
            multiline
            maxRows={4}
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: alpha(theme.palette.background.paper, 0.8),
                "&:hover": {
                  backgroundColor: alpha(theme.palette.background.paper, 0.9),
                },
              },
            }}
          />

          <IconButton
            onClick={handleSend}
            disabled={!newMessage.trim()}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                transform: "scale(1.05)",
              },
              "&:disabled": {
                backgroundColor: theme.palette.action.disabled,
              },
              transition: "all 0.2s ease",
            }}
          >
            <Send />
          </IconButton>
        </Box>
      </Card>

      {/* Chat Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }
        }}
      >
        <MenuItem onClick={handleViewItem}>
          <Store sx={{ mr: 2, fontSize: 20 }} />
          View Item
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Block sx={{ mr: 2, fontSize: 20 }} />
          Block User
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Report sx={{ mr: 2, fontSize: 20 }} />
          Report
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose} sx={{ color: theme.palette.error.main }}>
          <Delete sx={{ mr: 2, fontSize: 20 }} />
          Delete Chat
        </MenuItem>
      </Menu>
    </Container>
  );
}