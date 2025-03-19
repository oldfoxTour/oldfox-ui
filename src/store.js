import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import postReducer from "./slices/postSlice"
import bookingReducer from "./slices/bookingSlice"
import productReducer from "./slices/productSlice"


const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    booking: bookingReducer,
    product: productReducer,
  },
});

export default store;
