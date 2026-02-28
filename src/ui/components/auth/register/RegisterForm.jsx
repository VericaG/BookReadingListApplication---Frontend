import React, { useState } from "react";
import {
    TextField,
    Button,
    Alert,
    MenuItem,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useRoles from "../../../../hooks/useRoles.js";
import authRepository from "../../../../repository/userRepository.js";

const RegisterForm = () => {
    const navigate = useNavigate();
    const roles = useRoles();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        repeatPassword: "",
        name: "",
        surname: "",
        role: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        authRepository
            .register(formData)
            .then(() => navigate("/login"))
            .catch((err) => {
                setError(err.response?.data || "Registration failed.");
            });
    };

    return (
        <>
            {error && (
                <Alert
                    severity="error"
                    sx={{
                        mb: 2,
                        backgroundColor: "rgba(166, 25, 46, 0.2)",
                        color: "#FFFFFF",
                    }}
                >
                    {error}
                </Alert>
            )}

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: "#1b1b1c" } }}
                    sx={{ input: { color: "#1b1b1c" } }}
                />

                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: "#1b1b1c" } }}
                    sx={{ input: { color: "#1b1b1c" } }}
                />

                <TextField
                    fullWidth
                    label="Repeat Password"
                    type="password"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: "#1b1b1c" } }}
                    sx={{ input: { color: "#1b1b1c" } }}
                />

                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: "#1b1b1c" } }}
                    sx={{ input: { color: "#1b1b1c" } }}
                />

                <TextField
                    fullWidth
                    label="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: "#1b1b1c" } }}
                    sx={{ input: { color: "#1b1b1c" } }}
                />

                <TextField
                    select
                    fullWidth
                    label="Role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: "#1b1b1c" } }}
                    sx={{ input: { color: "#1b1b1c" } }}
                >
                    {roles.map((r) => (
                        <MenuItem key={r} value={r}>
                            {r}
                        </MenuItem>
                    ))}
                </TextField>

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: "#f9cb40",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        "&:hover": {
                            backgroundColor: "#e0b92f",
                        },
                    }}
                >
                    Create Account
                </Button>

                <Typography
                    variant="body2"
                    sx={{ mt: 2, textAlign: "center", opacity: 0.8, color: "#000000" }}
                >
                    Already have an account?{" "}
                    <Button
                        variant="text"
                        size="small"
                        sx={{ color: "#505253", fontWeight: "bold" }}
                        onClick={() => navigate("/login")}
                    >
                        Sign In
                    </Button>
                </Typography>
            </form>
        </>
    );
};

export default RegisterForm;