import {useState} from "react";
import axios from "axios";

export default function useAuth(){

    const getToken = () =>{
        const tokenString = localStorage.getItem('accessToken');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const [token, setToken] = useState(getToken());


    const saveToken = (token) => {
        localStorage.setItem('accessToken', JSON.stringify(token));

        setToken(token);
    }

    const fetchData = axios.create({
        baseURL:"https://api.staging.batchlearn.com/api/v1/",
        headers: {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    });

    return {
        saveToken,
        token,
        getToken,
        fetchData
    }


}