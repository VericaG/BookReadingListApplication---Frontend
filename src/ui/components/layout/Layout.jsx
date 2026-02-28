import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext.js";

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    return (
        <>
            <AppBar position="static" elevation={0}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" , backgroundColor: "#A6192E" }}>
                    <Typography
                        variant="h6"
                        sx={{ cursor: "pointer", fontWeight: 600, backgroundColor: "#A6192E" }}
                        onClick={() => navigate("/home")}
                    >
                        📚 BookTracker
                    </Typography>

                    <Box>
                        <Button color="inherit" onClick={() => navigate("/home")}>
                            Home
                        </Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                backgroundColor: "#f9cb40",
                                color: "#1e2019",
                                "&:hover": { backgroundColor: "#e6b930" },
                            }}
                            onClick={() => navigate("/add")}
                        >
                            + Add Book
                        </Button>

                        <Button color="inherit" onClick={logout}>
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 4 }}>{children}</Container>
        </>
    );
};

export default Layout;