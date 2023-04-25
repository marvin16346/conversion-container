import axios from 'axios';

const defaultAxios = axios.create({
    baseURL: '',
});

defaultAxios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;    
    }
    if (refreshToken) {
        config.headers.Authorization += ` ${refreshToken}`;
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});

export default defaultAxios;