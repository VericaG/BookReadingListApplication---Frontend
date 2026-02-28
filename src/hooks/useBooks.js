import { useCallback, useEffect, useState } from "react";
import booksRepository from "../repository/booksRepository.js";

const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalElements, setTotalElements] = useState(0);

    const fetchBooks = useCallback(() => {
        setLoading(true);
        booksRepository.findAll()
            .then((response) => {
                console.log("Books response:", response.data);
                setBooks(response.data); // директно листа
                setTotalElements(response.data.length); // број на книги
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);


    const onAdd = useCallback((data) => {
        booksRepository.create(data)
            .then(() => fetchBooks())
            .catch((error) => console.log(error));
    }, [fetchBooks]);


    const onEdit = useCallback((id, data) => {
        booksRepository.update(id, data)
            .then((res) => {
                setBooks((prev) =>
                    prev.map((b) => (b.id === id ? res.data : b))
                );
            })
            .catch((error) => console.log(error));
    }, []);


    const onDelete = useCallback((id) => {
        booksRepository.deleteById(id)
            .then(() => fetchBooks())
            .catch((error) => console.log(error));
    }, [fetchBooks]);

    const onStart = useCallback((id) => {
        booksRepository.start(id)
            .then(() => fetchBooks())
            .catch((error) => console.log(error));
    }, [fetchBooks]);

    const onFinish = useCallback((id) => {
        booksRepository.finish(id)
            .then(() => fetchBooks())
            .catch((error) => console.log(error));
    }, [fetchBooks]);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return {
        books,
        loading,
        onAdd,
        onEdit,
        onDelete,
        onStart,
        onFinish,
        totalElements,
    };
};

export default useBooks;
