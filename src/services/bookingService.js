import axios from '../axios'
import Cookies from 'js-cookie'

// create endpoint

export const createBooking = async (postId) =>{

    const token = Cookies.get("token");
    if (!token) {
      throw new Error("Token not found");
    }
    const response = await axios.post(`/booking/${postId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export const getBookingById = async (id) =>{
    const response = await axios.get(`/booking/${id}`)
    return response.data;
}

export const getBookings = async () =>{
    const response = await axios.get('/booking/')
    return response.data
}


export const updateBooking = async (id) =>{
    const response = await axios.put(`/booking/${id}`)
    return response.data
}

export const deleteBooking = async (id) =>{
    const response = await axios.delete(`/booking/${id}`)
    return response.data
}

export const cancelBooking  = async (id) => {
    const respone = await axios.patch(`/booking/${id}/cancel`)
    return respone.data
}

export const approveBooking = async (id) =>{
    const response = await axios.patch(`booking/${id}/approve`)
    return response.data
}

export const getBookingPerformanceOverview = async(performance) =>{
    const response = await axios.get("/booking/booking-performance-overview")
    return response;
}