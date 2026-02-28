import React, { useState, useEffect } from "react";
import {
    TextField,
    Button,
    Select,
    MenuItem,
    Box,
    Typography,
    Paper,
} from "@mui/material";
import useBooks from "../../hooks/useBooks.js";
import enumsRepository from "../../repository/enumsRepository.js";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
    const { onAdd } = useBooks();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        status: "",
    });

    const [genres, setGenres] = useState([]);
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        enumsRepository.getGenres().then((res) => setGenres(res.data));
        enumsRepository.getStatuses().then((res) => setStatuses(res.data));
    }, []);

    const handleSubmit = () => {
        onAdd(formData);
        navigate("/home");
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
           }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: 5,
                    width: 500,
                    borderRadius: 4,
                    background: "rgb(236,231,231)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    color: "#f0f7f4",
                }}
            >
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, color: "#F9CB40" }}>
                    + Add new Book to your List
                </Typography>


                <TextField
                    fullWidth
                    label="Title"
                    margin="normal"
                    value={formData.title}
                    onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                    }
                />

                <TextField
                    fullWidth
                    label="Author"
                    margin="normal"
                    value={formData.author}
                    onChange={(e) =>
                        setFormData({ ...formData, author: e.target.value })
                    }
                />

                <Select
                    fullWidth
                    displayEmpty
                    value={formData.genre}
                    sx={{ mt: 2 }}
                    onChange={(e) =>
                        setFormData({ ...formData, genre: e.target.value })
                    }
                >
                    <MenuItem value="" disabled>
                        Choose Genre
                    </MenuItem>
                    {genres.map((g) => (
                        <MenuItem key={g} value={g}>
                            {g}
                        </MenuItem>
                    ))}
                </Select>

                <Select
                    fullWidth
                    displayEmpty
                    value={formData.status}
                    sx={{ mt: 2 }}
                    onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                    }
                >
                    <MenuItem value="" disabled>
                        Choose Status
                    </MenuItem>
                    {statuses.map((s) => (
                        <MenuItem key={s} value={s}>
                            {s}
                        </MenuItem>
                    ))}
                </Select>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,
                        fontWeight: 600,
                        backgroundColor: "#f9cb40",
                        color: "#505253",
                        "&:hover": {
                            backgroundColor: "#e6b930",
                        },
                    }}
                    onClick={handleSubmit}
                >
                    Save Book
                </Button>
            </Paper>
        </Box>
    );
};

export default AddBookPage;