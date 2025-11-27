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
  Fade,
  Stepper,
  Step,
  StepLabel
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
  ArrowForward,
  CheckCircle,
  Badge
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const steps = ['Account Details', 'Profile Setup', 'Complete'];

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must contain uppercase, lowercase, and number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Register", formData);
      setActiveStep(2); // Move to completion step
      // Handle successful registration here
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Register with ${provider}`);
    // Implement social registration logic
  };

  const passwordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, color: theme.palette.grey[400], label: "" };
    if (password.length < 8) return { strength: 25, color: theme.palette.error.main, label: "Weak" };
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return { strength: 50, color: theme.palette.warning.main, label: "Fair" };
    return { strength: 100, color: theme.palette.success.main, label: "Strong" };
  };

  const strength = passwordStrength(formData.password);

  if (activeStep === 2) {
    return (
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 8,
            background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
          }}
        >
          <Fade in={true} timeout={800}>
            <Card
              sx={{
                p: 5,
                borderRadius: 4,
                boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.1)}`,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.8)} 100%)`,
                backdropFilter: "blur(10px)",
                textAlign: "center",
                maxWidth: 440,
              }}
            >
              <CheckCircle
                sx={{
                  fontSize: 80,
                  color: theme.palette.success.main,
                  mb: 3,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.success.main,
                  mb: 2,
                }}
              >
                Welcome!
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  mb: 2,
                }}
              >
                Your account has been created
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                }}
              >
                We've sent a confirmation email to {formData.email}. Please verify your email to start using StudentMarket.
              </Typography>
              <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.8,
                  borderRadius: 3,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                  mb: 2,
                }}
              >
                Continue to Login
              </Button>
            </Card>
          </Fade>
        </Box>
      </Container>
    );
  }

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
              maxWidth: 480,
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
                Join Our Community
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: 300,
                  mx: "auto",
                }}
              >
                Create your account and start trading campus essentials today
              </Typography>
            </Box>

            {/* Progress Stepper */}
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* Social Register Buttons */}
            <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Google />}
                onClick={() => handleSocialRegister("google")}
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
                onClick={() => handleSocialRegister("facebook")}
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
                or sign up with email
              </Typography>
            </Divider>

            <form onSubmit={handleRegister}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Name Field */}
                <TextField
                  label="Full Name"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange('name')}
                  error={!!errors.name}
                  helperText={errors.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: theme.palette.text.secondary }} />
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

                {/* Email Field */}
                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange('email')}
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
                <Box>
                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    required
                    value={formData.password}
                    onChange={handleChange('password')}
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
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <Box sx={{ mt: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" color="text.secondary">
                          Password strength
                        </Typography>
                        <Typography variant="caption" sx={{ color: strength.color, fontWeight: 600 }}>
                          {strength.label}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: 4,
                          borderRadius: 2,
                          backgroundColor: theme.palette.grey[300],
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          sx={{
                            height: '100%',
                            width: `${strength.strength}%`,
                            backgroundColor: strength.color,
                            transition: 'all 0.3s ease',
                          }}
                        />
                      </Box>
                    </Box>
                  )}
                </Box>

                {/* Confirm Password Field */}
                <TextField
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  fullWidth
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: theme.palette.text.secondary }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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

                {/* Terms Agreement */}
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                  }}
                >
                  By creating an account, you agree to our{' '}
                  <Link href="/terms" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    Privacy Policy
                  </Link>
                </Typography>

                {/* Register Button */}
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
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </Box>
            </form>

            {/* Login Link */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                Already have an account?{" "}
                <Link
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Sign in
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
                Demo: Fill in the form to test registration (password: 8+ chars with uppercase, lowercase, number)
              </Typography>
            </Alert>
          </Card>
        </Fade>
      </Box>
    </Container>
  );
}