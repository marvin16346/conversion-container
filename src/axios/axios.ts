import axios from 'axios';

const defaultAxios = axios.create({
    // baseURL: '/api/',
    baseURL: 'https://52.78.218.188:5000/',
    headers: {
        "Content-Type": "application/json",
    } 
});

defaultAxios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;    
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});

export default defaultAxios;