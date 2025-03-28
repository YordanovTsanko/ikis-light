import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// Fetching simulated images
export const fetchImages = createAsyncThunk("images/fetchImages", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("images/");
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error("Image upload failed:", error);
    return rejectWithValue(
      error.response?.data?.message || "Грешка в зареждането на изображения"
    );
  }
});

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

      return response.data;
    } catch (error) {
      console.error("Image upload failed:", error);
      return rejectWithValue(
        error.response?.data?.message || "Грешка в качването на изображение"
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
    //uploading
    statusUpload: "idle",
    errorUpload: null,
    uploadedImage: null,
  },
  reducers: {
    clearUploadedImage: (state) => {
      state.uploadedImage = null;
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const { clearUploadedImage } = imagesSlice.actions;
export default imagesSlice.reducer;
