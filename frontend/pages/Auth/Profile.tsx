import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile Updated:", { name, email, avatar });
    // Here you would call your API to update the profile
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 10,
        p: 4,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, textAlign: "center" }}>
        My Profile
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 4,
          mb: 4,
        }}
      >
        <Avatar
          src={avatar || undefined}
          sx={{ width: 100, height: 100, bgcolor: "secondary.main" }}
        />
        <label htmlFor="avatar-upload">
          <input
            accept="image/*"
            id="avatar-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleAvatarChange}
          />
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </Box>

      <form onSubmit={handleSave}>
        <TextField
          label="Full Name"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 3 }}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 3 }}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ py: 1.5 }}>
          Save Changes
        </Button>
      </form>
    </Box>
  );
}
