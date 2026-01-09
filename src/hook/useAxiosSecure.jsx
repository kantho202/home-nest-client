import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
<<<<<<< HEAD
    baseURL:'https://online-ticket-booking-server.vercel.app'
=======
    baseURL:'http://localhost:3000'
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;