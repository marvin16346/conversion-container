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
    if (err.response.status === 401) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");
        /* AuthProvider에 저장된 정보 제거 */
        // setAccessToken("");
        // setRefreshToken("");
        // setUsername("");
        /* 로그인 화면으로 이동 */
        window.location.href = "/";
    }
})

export default defaultAxios;