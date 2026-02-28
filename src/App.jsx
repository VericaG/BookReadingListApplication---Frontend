import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useAuth } from "./contexts/authContext.js";
import AuthProvider from "./providers/authProvider.jsx";
import RegisterPage from "./ui/pages/RegisterPage.jsx";
import LoginPage from "./ui/pages/LoginPage.jsx";
import HomePage from "./ui/pages/HomePage.jsx";
import AddBookPage from "./ui/pages/AddBookPage.jsx";
import BookDetailsPage from "./ui/pages/BookDetailsPage.jsx";
import Layout from "./ui/components/layout/Layout.jsx";

const LoadingScreen = () => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
    >
        <CircularProgress />
    </Box>
);

const ProtectedRoute = () => {
    const { isLoggedIn, loading } = useAuth();

    if (loading) return <LoadingScreen />;

    return isLoggedIn ? <Layout><Outlet /></Layout> : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    if (isLoggedIn) {
        return <Navigate to="/home" state={{ from: location }} replace />;
    }

    return children;
};

const App = () => (
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <RegisterPage />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />

                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/add" element={<AddBookPage />} />
                    <Route path="/books/:id" element={<BookDetailsPage />} />
                </Route>

                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);

export default App;