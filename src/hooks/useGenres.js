import {useEffect, useState} from "react";
import enumsRepository from "../repository/enumsRepository.js";

const useGenres=() => {
    const [genres, setGenres]=useState([]);

    useEffect(() => {
        enumsRepository.getGenres()
            .then((response) => setGenres(response.data))
            .catch((error) => console.log(error));
    },[]);

    return genres;
};

export default useGenres;