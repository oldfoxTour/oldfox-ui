import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import {
  signup as signupService,
  login as loginService,
  getUserById as getUserByIdService,
  updateUserById as updateUserByIdService, 
  deleteUserById as deleteUserByIdService,
  getAllUsers as getAllUsersService,
  getUserCount as getUserCountService,
  getProfile as getProfileService,
  logout as logoutService,
  forgotPassword as forgotPasswordService, // Import forgot password service
  resetPassword as resetPasswordService,   // Import reset password service
} from '../services/authService';

// Thunk for signup
export const signup = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
  try {
    const response = await signupService(userData);
    return response; // Return the user data on success
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Thunk for login
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginService(credentials);
    return response; // Return user and token on success
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Add forgot password thunk
export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email, { rejectWithValue }) => {
  try {
    const response = await forgotPasswordService(email); 
    return response; // Return success message
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Add reset password thunk
export const resetPassword = createAsyncThunk('auth/resetPassword', async ({ token, newPassword }, { rejectWithValue }) => {
  try {
    const response = await resetPasswordService(token, newPassword); 
    return response; // Return success message
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Thunk for getting a user by ID
export const getUserById = createAsyncThunk('auth/getUserById', async (id, { rejectWithValue }) => {
  try {
    const response = await getUserByIdService(id);
    return response; // Return the specific user
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Thunk for updating a user by ID
export const updateUserById = createAsyncThunk('auth/updateUserById', async ({ id, userData }, { rejectWithValue }) => {
  try {
    const response = await updateUserByIdService(id, userData);
    return response; // Return the updated user data
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Thunk for deleting a user by ID
export const deleteUserById = createAsyncThunk('auth/deleteUserById', async (id, { rejectWithValue }) => {
  try {
    const response = await deleteUserByIdService(id);
    return response; // Return success status
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Thunk for getting all users
export const getAllUsers = createAsyncThunk('auth/getAllUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await getAllUsersService();
    return response; // Return all users
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Thunk for getting user count
export const getUserCount = createAsyncThunk('auth/getUserCount', async (_, { rejectWithValue }) => {
  try {
    const response = await getUserCountService();
    return response; // Return user count
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Thunk for getting the current user's profile
export const getProfile = createAsyncThunk('auth/getProfile', async (_, { rejectWithValue }) => {
  try {
    const response = await getProfileService();
    return response; // Return the current user profile
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data.message : error.message);
  }
});

// Thunk for logout
export const logout = createAsyncThunk('auth/logout', async () => {
  await logoutService();
  Cookies.remove('token'); // Clear token from cookies
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    users: [],
    userCount: 0,
    loading: false,
    error: null,
    token: Cookies.get('token') || null, // Initialize token from cookies
    passwordResetStatus: null, // Status for forgot/reset password actions
  },
  reducers: {
    clearUser(state) {
      state.user = null;
      state.token = null;
      Cookies.remove('token');
    },
  },
  extraReducers: (builder) => {
    // Handle all async actions
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        if (action.payload.token) {
          Cookies.set('token', action.payload.token, { expires: 30 });
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle forgot password
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.passwordResetStatus = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.passwordResetStatus = 'Email sent';
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.passwordResetStatus = 'Error';
      });

    // Handle reset password
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.passwordResetStatus = 'Password reset successful';
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.passwordResetStatus = 'Error';
      });

    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove('token');
    })
    builder
    .addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      console.log("Updated users state:", state.users); // Add this log
    })
    .addCase(getAllUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Export the clearUser action and the reducer
export const { clearUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
