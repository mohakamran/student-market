import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Card,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
  useTheme,
  alpha,
  Container,
  Fade
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
  Google,
  Facebook,
  School,
  ArrowForward
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const theme = useTheme();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Login", { email, password });
      // Handle successful login here
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        }}
      >
        <Fade in={true} timeout={800}>
          <Card
            sx={{
              p: { xs: 3, sm: 5 },
              borderRadius: 4,
              boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.1)}`,
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.8)} 100%)`,
              backdropFilter: "blur(10px)",
              width: "100%",
              maxWidth: 440,
            }}
          >
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <School
                  sx={{
                    fontSize: 40,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  StudentMarket
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 1,
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: 300,
                  mx: "auto",
                }}
              >
                Sign in to your account to continue trading campus essentials
              </Typography>
            </Box>

            {/* Social Login Buttons */}
            <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Google />}
                onClick={() => handleSocialLogin("google")}
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  borderColor: alpha(theme.palette.divider, 0.5),
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.04),
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Facebook />}
                onClick={() => handleSocialLogin("facebook")}
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  borderColor: alpha(theme.palette.divider, 0.5),
                  "&:hover": {
                    borderColor: "#1877F2",
                    backgroundColor: alpha("#1877F2", 0.04),
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Facebook
              </Button>
            </Box>

            <Divider sx={{ mb: 4, color: theme.palette.text.secondary }}>
              <Typography variant="body2" sx={{ color: "text.secondary", px: 2 }}>
                or continue with email
              </Typography>
            </Divider>

            <form onSubmit={handleLogin}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Email Field */}
                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) {
                      setErrors({ ...errors, email: undefined });
                    }
                  }}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: theme.palette.text.secondary }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused": {
                        boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
                      },
                    },
                  }}
                />

                {/* Password Field */}
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) {
                      setErrors({ ...errors, password: undefined });
                    }
                  }}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: theme.palette.text.secondary }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused": {
                        boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
                      },
                    },
                  }}
                />

                {/* Forgot Password */}
                <Box sx={{ textAlign: "right" }}>
                  <Link
                    component={RouterLink}
                    to="/forgot-password"
                    sx={{
                      color: theme.palette.primary.main,
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Forgot your password?
                  </Link>
                </Box>

                {/* Login Button */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isLoading}
                  endIcon={!isLoading && <ArrowForward />}
                  sx={{
                    py: 1.8,
                    borderRadius: 3,
                    fontSize: "1rem",
                    fontWeight: 700,
                    textTransform: "none",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                    "&:disabled": {
                      background: theme.palette.action.disabled,
                      transform: "none",
                      boxShadow: "none",
                    },
                  }}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </Box>
            </form>

            {/* Register Link */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                Don't have an account?{" "}
                <Link
                  component={RouterLink}
                  to="/register"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Create account
                </Link>
              </Typography>
            </Box>

            {/* Demo Alert */}
            <Alert
              severity="info"
              sx={{
                mt: 3,
                borderRadius: 3,
                backgroundColor: alpha(theme.palette.info.main, 0.1),
                color: theme.palette.info.dark,
                "& .MuiAlert-icon": {
                  color: theme.palette.info.main,
                },
              }}
            >
              <Typography variant="caption" fontWeight={600}>
                Demo: Try any valid email and password (min 6 chars)
              </Typography>
            </Alert>
          </Card>
        </Fade>
      </Box>
    </Container>
  );
}