import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axios from '../axios';

// Thunk for creating a booking
export const createBooking = createAsyncThunk(
    'booking/createBooking',
    async (bookingData, { rejectWithValue }) => {
        try {
            const { postId, ...restData } = bookingData;

            if (!postId || typeof postId !== 'string') {
                throw new Error("Invalid or missing postId.");
            }

            const token = Cookies.get("token");
            if (!token) {
                throw new Error("Token not found.");
            }

            const response = await axios.post(`/booking/${postId}`, restData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Thunk for getting a booking by ID
export const getBookingById = createAsyncThunk('booking/getBookingById', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`/booking/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// Thunk for getting all bookings
export const getBookings = createAsyncThunk('booking/getBookings', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('/booking/');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// Thunk for updating a booking
export const updateBooking = createAsyncThunk('booking/updateBooking', async ({ id, data }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`/booking/${id}`, data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// Thunk for deleting a booking
export const deleteBooking = createAsyncThunk('booking/deleteBooking', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`/booking/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// Thunk for canceling a booking
export const cancelBooking = createAsyncThunk('booking/cancelBooking', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.patch(`/booking/${id}/cancel`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// Thunk for approving a booking
export const approveBooking = createAsyncThunk('booking/approveBooking', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.patch(`/booking/${id}/approve`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

// Slice for booking
const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        bookings: [],
        loading: false,
        error: null,
        token: Cookies.get('token') || null,
    },
    reducers: {
        resetBooking: (state) => {
            state.bookings = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings.push(action.payload);
            })
            .addCase(createBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getBookingById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBookingById.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = [action.payload];
            })
            .addCase(getBookingById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getBookings.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = action.payload;
            })
            .addCase(getBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = state.bookings.map((booking) =>
                    booking.id === action.payload.id ? action.payload : booking
                );
            })
            .addCase(updateBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = state.bookings.filter((booking) => booking.id !== action.payload.id);
            })
            .addCase(deleteBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(cancelBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(cancelBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = state.bookings.map((booking) =>
                    booking.id === action.payload.id ? action.payload : booking
                );
            })
            .addCase(cancelBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(approveBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(approveBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = state.bookings.map((booking) =>
                    booking.id === action.payload.id ? action.payload : booking
                );
            })
            .addCase(approveBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
