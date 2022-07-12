import axiosInstance from "../axios/axios";

const authEndPoints = {
    registartion: (data) => axiosInstance.post('/api/auth/register', data),
    login: (data) => axiosInstance.post('/api/auth/login', data),
    getProfile: (data) => axiosInstance.get("/api/auth/me", data),
    sendNameAndPhoneNumberToMail: (data) => axiosInstance.post("/api/mail/", data),
    sendPhoneNumberToMail: (data) => axiosInstance.post("/api/mail/phone", data),
}

export default authEndPoints
