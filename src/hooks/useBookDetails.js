import { useEffect, useState } from "react";
import booksRepository from "../repository/booksRepository.js"

const useBookDetails = (id) => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        booksRepository
            .details(id)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return { book, loading };
};

export default useBookDetails;