import axiosInstance from "../axios/axios.js";

const booksRepository = {
    findAll: async () => {
        return await axiosInstance.get("/books");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/books/details/${id}`);
    },
    create: async (data) => {
        return await axiosInstance.post("/books/add", data);
    },
    update: async (id, data) => {
        return await axiosInstance.put(`/books/edit/${id}`, data);
    },
    deleteById: async (id) => {
        return await axiosInstance.delete(`/books/delete/${id}`);
    },
    start: async (id) => {
        return await axiosInstance.put(`/books/startReading/${id}`);
    },
    finish: async (id) => {
        return await axiosInstance.put(`/books/finishReading/${id}`);
    },
};

export default booksRepository;
