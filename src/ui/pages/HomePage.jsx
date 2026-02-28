// import React from "react";
// import {
//     Grid,
//     Card,
//     CardContent,
//     Typography,
//     Button,
//     CardActions,
//     Chip,
//     Box,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import useBooks from "../../hooks/useBooks.js";
//
// const HomePage = () => {
//     const { books, loading, onDelete, onStart, onFinish } = useBooks();
//     const navigate = useNavigate();
//
//     if (loading) return <p>Loading...</p>;
//
//     const getStatusColor = (status) => {
//         if (status === "READING") return "warning";
//         if (status === "FINISHED") return "success";
//         return "default";
//     };
//
//     return (
//         <Box sx={{ p: 5, minHeight: "100vh" }}>
//             <Typography variant="h4" gutterBottom>
//                 My Book Collection
//             </Typography>
//
//             <Grid container spacing={3}>
//                 {books?.length > 0 ? (
//                     books.map((book) => (
//                         <Grid item xs={12} sm={6} md={4} key={book.id}>
//                             <Card
//                                 sx={{
//                                     transition: "0.3s",
//                                     boxShadow: 3,
//                                     "&:hover": { boxShadow: 8, transform: "translateY(-4px)" },
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography variant="h6">
//                                         {book.title}
//                                     </Typography>
//
//                                     <Typography color="text.secondary">
//                                         {book.author}
//                                     </Typography>
//
//                                     <Typography sx={{ mt: 1 }}>
//                                         Genre: {book.genre}
//                                     </Typography>
//
//                                     <Box sx={{ mt: 2 }}>
//                                         <Chip
//                                             label={book.status}
//                                             color={getStatusColor(book.status)}
//                                         />
//                                     </Box>
//                                 </CardContent>
//
//                                 <CardActions
//                                     sx={{
//                                         display: "flex",
//                                         justifyContent: "space-between",
//                                         px: 2,
//                                     }}
//                                 >
//                                     <Button
//                                         size="small"
//                                         onClick={() => navigate(`/books/${book.id}`)}
//                                     >
//                                         Details
//                                     </Button>
//
//                                     <Box>
//                                         <Button
//                                             size="small"
//                                             variant="outlined"
//                                             color="warning"
//                                             sx={{ mr: 1 }}
//                                             onClick={() => onStart(book.id)}
//                                         >
//                                             Reading
//                                         </Button>
//
//                                         <Button
//                                             size="small"
//                                             variant="contained"
//                                             color="success"
//                                             onClick={() => onFinish(book.id)}
//                                         >
//                                             Finished
//                                         </Button>
//                                     </Box>
//                                 </CardActions>
//
//                                 <Box sx={{ px: 2, pb: 2 }}>
//                                     <Button
//                                         fullWidth
//                                         variant="text"
//                                         color="error"
//                                         onClick={() => onDelete(book.id)}
//                                     >
//                                         Delete
//                                     </Button>
//                                 </Box>
//                             </Card>
//                         </Grid>
//                     ))
//                 ) : (
//                     <Typography>No books added yet.</Typography>
//                 )}
//             </Grid>
//         </Box>
//     );
// };
//
// export default HomePage;

import React from "react";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    CardActions,
    Chip,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useBooks from "../../hooks/useBooks.js";

const HomePage = () => {
    const { books, loading, onDelete, onStart, onFinish } = useBooks();
    const navigate = useNavigate();

    if (loading) return <Typography align="center">Се вчитува...</Typography>;

    const getStatusColor = (status) => {
        if (status === "READING") return "warning";
        if (status === "FINISHED") return "success";
        return "default";
    };

    return (
        <Box
            sx={{
                p: 5,
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, #1e2019 0%, #7d8491 20%, #a6192e 40%, #e0d68a 65%, #f9cb40 85%, #f0f7f4 100%)",
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                align="center"
                sx={{ fontWeight: 600, color: "#FFFFFF" }}
            >
                📚 My Book collection
            </Typography>

            <Button
                variant="contained"
                color="primary"
                sx={{ mb: 4, display: "block", mx: "auto",  backgroundColor: "#f9cb40",
                    color: "#1e2019",
                    "&:hover": { backgroundColor: "#e6b930" }, }}
                onClick={() => navigate("/add")}
            >
                ➕ Add Book
            </Button>

            <Grid container spacing={3}>
                {books?.length > 0 ? (
                    books.map((book) => (
                        <Grid item xs={12} sm={6} md={4} key={book.id}>
                            <Card
                                sx={{
                                    height: "100%",
                                    background: "rgba(236,231,231,0.84)",
                                    backdropFilter: "blur(18px)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    color: "#505253",
                                    transition: "0.3s",
                                    "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                                },

                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {book.title}
                                    </Typography>
                                    <Typography color="text.secondary">{book.author}</Typography>
                                    <Typography sx={{ mt: 1 }}>Genre: {book.genre}</Typography>

                                    <Box sx={{ mt: 2 }}>
                                        <Chip
                                            label={book.status}
                                            color={getStatusColor(book.status)}
                                            sx={{ fontWeight: 600 }}
                                        />
                                    </Box>
                                </CardContent>

                                <CardActions
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        px: 2,
                                    }}
                                >
                                    <Button
                                        size="small"
                                        onClick={() => navigate(`/books/${book.id}`)}
                                    >
                                        Details
                                    </Button>

                                    <Box>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="warning"
                                            sx={{ mr: 1 }}
                                            onClick={() => onStart(book.id)}
                                        >
                                            In progress
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="success"
                                            onClick={() => onFinish(book.id)}
                                        >
                                            Finish
                                        </Button>
                                    </Box>
                                </CardActions>

                                <Box sx={{ px: 2, pb: 2 }}>
                                    <Button
                                        fullWidth
                                        variant="text"
                                        color="error"
                                        onClick={() => onDelete(book.id)}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography align="center" sx={{ width: "100%", mt: 4 }}>
                        Your reading list is empty. Add new book.
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};

export default HomePage;
