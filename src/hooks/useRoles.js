import {useEffect, useState} from "react";
import enumsRepository from "../repository/enumsRepository.js";

const useRoles=() => {
    const [roles, setRoles]=useState([]);

    useEffect(() => {
        enumsRepository.getRoles()
            .then((response) => {
                console.log("Roles response:", response.data);
                setRoles(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch roles:", error);
            });
    }, []);


    return roles;
};

export default useRoles;