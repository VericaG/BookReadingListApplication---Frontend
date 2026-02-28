import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import LoginForm from "../components/auth/login/LoginForm.jsx";

const LoginPage = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                background: "linear-gradient(135deg, #1e2019 0%, #7d8491 20%, #a6192e 40%, #e0d68a 65%, #f9cb40 85%, #f0f7f4 100%)",       }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    flexDirection: "column",
                    p: 6,
                }}
            >
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    Welcome to your personal BookTracker
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, }}>
                    Follow your reading journey.<br />
                    Stay organized. Stay inspired.
                </Typography>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                }}
            >
                <Paper
                    elevation={10}
                    sx={{
                        p: 5,
                        width: 420,
                        borderRadius: 4,
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
                        Login
                    </Typography>

                    <Typography
                        variant="body2"
                        align="center"
                        color="text.secondary"
                        gutterBottom
                    >
                        Enter your Username and Password
                    </Typography>

                    <LoginForm />
                </Paper>
            </Box>
        </Box>
    );
};

export default LoginPage;
