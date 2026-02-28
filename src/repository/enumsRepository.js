import axiosInstance from "../axios/axios.js";

const enumsRepository={
    getStatuses: async () => {
        return await axiosInstance.get("/enumerations/bookStatus");
    },
    getGenres: async () => {
        return await axiosInstance.get("/enumerations/genre");
    },
    getRoles: async () => {
        return await axiosInstance.get("/enumerations/role");
    },
};

export default enumsRepository;