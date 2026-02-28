import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import RegisterForm from "../components/auth/register/RegisterForm.jsx";

const RegisterPage = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(135deg, #1e2019 0%, #7d8491 20%, #a6192e 40%, #e0d68a 65%, #f9cb40 85%, #f0f7f4 100%)",
            }}
        >

            <Box
                sx={{
                    p: 5,
                    width: 420,
                    borderRadius: 4,
                    backdropFilter: "blur(10px)",
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        p: 5,
                        width: 420,
                        borderRadius: 4,
                        background: "rgb(236,231,231)",
                        backdropFilter: "blur(18px)",
                        WebkitBackdropFilter: "blur(18px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
                        color: "#f0f7f4",
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#000000" }}
                    >
                        Register
                    </Typography>

                    <Typography
                        variant="body2"
                        align="center"
                        sx={{ opacity: 0.8, mb: 3 , color: "#000000"}}
                    >
                        Create your account to get started
                    </Typography>

                    <RegisterForm />
                </Paper>
            </Box>
        </Box>
    );
};

export default RegisterPage;