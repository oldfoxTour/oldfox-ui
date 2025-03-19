import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import {
    createProduct as createProductService,
    getAllProducts as getAllProductsService,
    getProductsByCategoryName as getProductsByCategoryNameService,
    updateProduct as updateProductService,
    deleteProduct as deleteProductService,
    aggregateProductsByCategory as aggregateProductsByCategoryService,
    getMostOrderedProducts as getMostOrderedProductsService,
    getRecentProducts as getRecentProductsService,
    bookProduct as bookProductService,
    getBookingsByProductId as getBookingsByProductIdService,
    cancelBooking as cancelBookingService,
    getAllBookings as getAllBookingsService,
} from '../services/productService';

// Async thunks

export const createProduct = createAsyncThunk(
    'product/createProduct',
    async (productData, { rejectWithValue }) => {
        try {
            const response = await createProductService(productData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllProductsService();
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getProductsByCategoryName = createAsyncThunk(
    'product/getProductsByCategoryName',
    async (categoryName, { rejectWithValue }) => {
        try {
            const response = await getProductsByCategoryNameService(categoryName);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (productData, { rejectWithValue }) => {
        try {
            const response = await updateProductService(productData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (productId, { rejectWithValue }) => {
        try {
            const response = await deleteProductService(productId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const aggregateProductsByCategory = createAsyncThunk(
    'product/aggregateProductsByCategory',
    async (_, { rejectWithValue }) => {
        try {
            const response = await aggregateProductsByCategoryService();
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getMostOrderedProducts = createAsyncThunk(
    'product/getMostOrderedProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getMostOrderedProductsService();
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getRecentProducts = createAsyncThunk(
    'product/getRecentProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getRecentProductsService();
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const bookProduct = createAsyncThunk(
    'product/bookProduct',
    async (bookingData, { rejectWithValue }) => {
        try {
            const response = await bookProductService(bookingData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getBookingsByProductId = createAsyncThunk(
    'product/getBookingsByProductId',
    async (productId, { rejectWithValue }) => {
        try {
            const response = await getBookingsByProductIdService(productId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const cancelBooking = createAsyncThunk(
    'product/cancelBooking',
    async (bookingId, { rejectWithValue }) => {
        try {
            const response = await cancelBookingService(bookingId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getAllBookings = createAsyncThunk(
    'product/getAllBookings',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllBookingsService();
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Slice

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        product: null,
        bookings: [],
        mostOrderedProducts: [],
        recentProducts: [],
        loading: false,
        error: null,
        success: false,
        token: cookies.get('token'),
    },
    reducers: {
        resetProduct: (state) => {
            state.product = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Create Product
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.product = action.payload;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get All Products
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get Products By Category Name
            .addCase(getProductsByCategoryName.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductsByCategoryName.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProductsByCategoryName.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Update Product
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.product = action.payload;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Delete Product
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.product = action.payload;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Aggregate Products By Category
            .addCase(aggregateProductsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(aggregateProductsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(aggregateProductsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get Most Ordered Products
            .addCase(getMostOrderedProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMostOrderedProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.mostOrderedProducts = action.payload;
            })
            .addCase(getMostOrderedProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get Recent Products
            .addCase(getRecentProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRecentProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.recentProducts = action.payload;
            })
            .addCase(getRecentProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Book Product
            .addCase(bookProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(bookProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.bookings.push(action.payload);
            })
            .addCase(bookProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get Bookings By Product ID
            .addCase(getBookingsByProductId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBookingsByProductId.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = action.payload;
            })
            .addCase(getBookingsByProductId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Cancel Booking
            .addCase(cancelBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(cancelBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.bookings = state.bookings.filter(
                    (booking) => booking.id !== action.payload.id
                );
            })
            .addCase(cancelBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get All Bookings
            .addCase(getAllBookings.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = action.payload;
            })
            .addCase(getAllBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { resetProduct } = productSlice.actions;
export default productSlice.reducer;
