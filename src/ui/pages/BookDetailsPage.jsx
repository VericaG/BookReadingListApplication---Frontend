// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Typography, Button } from "@mui/material";
// import useBooks from "../../hooks/useBooks.js";
//
// const BookDetailsPage = () => {
//     const { id } = useParams();
//     const { onStart, onFinish, onDelete } = useBooks();
//     const [book, setBook] = useState(null);
//
//     useEffect(() => {
//         axios.get(`/api/books/${id}`).then(res => setBook(res.data));
//     }, [id]);
//
//     if (!book) return <p>Се вчитува...</p>;
//
//     return (
//         <div>
//             <Typography variant="h4">{book.title}</Typography>
//             <Typography variant="subtitle1">Автор: {book.author}</Typography>
//             <Typography variant="body1">Жанр: {book.genre}</Typography>
//             <Typography variant="body1">Статус: {book.status}</Typography>
//             <Button onClick={() => onStart(book.id)}>Во тек</Button>
//             <Button onClick={() => onFinish(book.id)}>Прочитана</Button>
//             <Button color="error" onClick={() => onDelete(book.id)}>Избриши</Button>
//         </div>
//     );
// };
//
// export default BookDetailsPage;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Paper,
} from "@mui/material";
import useBooks from "../../hooks/useBooks.js";
import booksRepository from "../../repository/booksRepository.js";

const BookDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { onStart, onFinish, onDelete } = useBooks();
    const [book, setBook] = useState(null);

    useEffect(() => {
        booksRepository.findById(id)
            .then(res => setBook(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!book) return <Typography align="center">Loading...</Typography>;

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(135deg, #1e2019 0%, #7d8491 20%, #a6192e 40%, #e0d68a 65%, #f9cb40 85%, #f0f7f4 100%)",
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    maxWidth: 600,
                    width: "100%",
                    p: 4,
                    borderRadius: 4,
                    background: "rgb(236,231,231)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    color: "#f0f7f4",
                }}
            >
                <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 600, color: "#505253" }}>
                    {book.title}
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom sx={{ color: "#505253"}}>
                    Author: {book.author}
                </Typography>

                <Box mt={3}>
                    <Typography sx={{ color: "#505253"}} variant="body1" gutterBottom>
                        <strong>Genre:</strong> {book.genre}
                    </Typography>
                    <Typography  sx={{ color: "#505253"}} variant="body1" gutterBottom>
                        <strong>Status:</strong> {book.status}
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mt={4}>
                    <Button sx={{
                        backgroundColor: "#f9cb40",
                        color: "#1e2019",
                        "&:hover": { backgroundColor: "#e6b930" },
                    }}
                            variant="contained" color="primary" onClick={() => onStart(book.id)}>
                        In progress
                    </Button>
                    <Button sx={{
                        backgroundColor: "#f9cb40",
                        color: "#1e2019",
                        "&:hover": { backgroundColor: "#e6b930" },
                    }}
                            variant="contained" color="success" onClick={() => onFinish(book.id)}>
                        Finished
                    </Button>
                    <Button sx={{
                        backgroundColor: "#f9cb40",
                        color: "#1e2019",
                        "&:hover": { backgroundColor: "#e6b930" },
                    }} variant="contained" color="error" onClick={() => onDelete(book.id)}>
                        Delete
                    </Button>
                    <Button sx={{
                        backgroundColor: "#f9cb40",
                        color: "#1e2019",
                        "&:hover": { backgroundColor: "#e6b930" },
                    }} variant="outlined" onClick={() => navigate("/home")}>
                        Go Back to List
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default BookDetailsPage;
