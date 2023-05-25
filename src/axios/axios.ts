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
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;    
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});

defaultAxios.interceptors.response.use((response) => {
    return response;
}, (err) => {
    console.log(err)
    if (err.response && err.response.status === 401) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");
        /* 로그인 화면으로 이동 */
        window.location.href = "/";
        return;
    }
    return err;
})

export default defaultAxios;