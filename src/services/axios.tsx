import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/", // URL base da API externa
    withCredentials: true, // Permitir envio de cookies
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
