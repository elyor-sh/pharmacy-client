import axios, {AxiosRequestConfig} from 'axios'
import {toast} from "react-toastify";

const isServer = typeof window === 'undefined'

// export const baseURL = process.env.REACT_APP_ENVIRONMENT === 'development'
//     ?
//     process.env.REACT_APP_DEV_API_URL
//     :
//     process.env.REACT_APP_PROD_API_URL

export const baseURL = 'http://localhost:8080/api'

export const pharmApiInstance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});


export const pharmApiInstanceAuth = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});

export const pharmApiInstanceUpload = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        Authorization: `Bearer ${!isServer ? localStorage.getItem('token') : ''}`,
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
    },
});

export const pharmApiInstanceDownloadFiles = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        Authorization: `Bearer ${!isServer ? localStorage.getItem('token') : ''}`,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    responseType: 'blob'
});

pharmApiInstanceAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
        //     toastId: 'AuthResReqError'
        // })
        return Promise.reject(error);
    },
);


// Request interceptor for API UPLOAD calls
pharmApiInstanceUpload.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        // const token = !isServer ? localStorage.getItem('token') : ''
        // if (config.headers) {
        //     config.headers['Authorization'] = 'Bearer ' + token;
        // }
        return config;
    },
    (error) => {
        // toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
        //     toastId: 'UploadReqError'
        // })
        return Promise.reject(error);
    },
);

// Response interceptor for API UPLOAD calls
pharmApiInstanceUpload.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // localStorage.removeItem('token');
        // toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
        //     toastId: 'UploadError'
        // })
        return Promise.reject(error);
    },
);

// Request interceptor for API UploadFiles calls
pharmApiInstanceDownloadFiles.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        // const token = !isServer ? localStorage.getItem('token') : ''
        // if (config.headers) {
        //     config.headers['Authorization'] = 'Bearer ' + token;
        // }
        return config;
    },
    (error) => {
        // toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
        //     toastId: 'DownloadError'
        // })
        return Promise.reject(error);
    },
);

// Response interceptor for API UploadFiles calls
pharmApiInstanceDownloadFiles.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
        //     toastId: 'DownloadResError'
        // })
        return Promise.reject(error);
    },
);

// Request interceptor for API calls
pharmApiInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        // const token = !isServer ? localStorage.getItem('token') : ''
        // if (config.headers) {
        //     config.headers['Authorization'] = 'Bearer ' + token;
        // }
         return config;
    },
    (error) => {
        // toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
        //     toastId: 'ReqError'
        // })
        return Promise.reject(error);
    },
);

// Response interceptor for API calls
pharmApiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        // const originalRequest = error.config;
        // if ((error.response.status === 401 || error.response.status === 403) && (typeof originalRequest._retry === 'undefined' || !originalRequest._retry)) {
        //     localStorage.clear()
        //     window.location.replace('/')
        // }
        //
        // toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
        //     toastId: 'ResError'
        // })
        return Promise.reject(error.response);
    },
)