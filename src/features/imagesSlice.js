import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";
import { b } from "framer-motion/client";

// Fetching simulated images - GET
export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("images/");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Грешка в зареждането на изображения"
      );
    }
  }
);

// Uploading an image - POST
export const uploadImage = createAsyncThunk(
  "images/uploadImage",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("images/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(await response.blob());
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Грешка в качването на изображение"
      );
    }
  }
);

// Searching an image - POST
export const searchImage = createAsyncThunk(
  "images/searchImage",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("images/search", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      }); 

      const blob = new Blob([response.data], { type: "image/png" });
      const imageUrl = URL.createObjectURL(blob);

      console.log("Image URL:", imageUrl); 

      return imageUrl
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Грешка в търсенето на изображение"
      );
    }
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    list: [],
    status: "idle",
    error: null,
    // Uploading
    statusUpload: "idle",
    errorUpload: null,
    uploadedImage: null,
    // Searching
    statusSearch: "idle",
    errorSearch: null,
    searchResults: null,
  },
  reducers: {
    clearUploadedImage: (state) => {
      state.uploadedImage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch images
      .addCase(fetchImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Upload image
      .addCase(uploadImage.pending, (state) => {
        state.statusUpload = "loading";
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.uploadedImage = action.payload;
        state.statusUpload = "succeeded";
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.statusUpload = "failed";
        state.errorUpload = action.payload;
      })
      // Search image
      .addCase(searchImage.pending, (state) => {
        state.statusSearch = "loading";
        state.errorSearch = null;
      })
      .addCase(searchImage.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.statusSearch = "succeeded";
      })
      .addCase(searchImage.rejected, (state, action) => {
        state.statusSearch = "failed";
        state.errorSearch = action.payload;
      });
  },
});

export const { clearUploadedImage } = imagesSlice.actions;
export default imagesSlice.reducer;
