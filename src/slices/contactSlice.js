import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { contact as contactService } from "../services/contact";

export const contactMessage = createAsyncThunk(
  "contact/",
  async (message, { rejectWithValue }) => {
    try {
      const response = await contactService(message);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contact: null,
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearContact(state) {
      state.contact = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(contactMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload.contact;
      })
      .addCase(contactMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearContact } = contactSlice.actions;
export const selectContact = (state) => state.contacts.contact;
export default contactSlice.reducer;
