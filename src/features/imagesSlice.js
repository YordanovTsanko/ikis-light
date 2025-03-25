import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const simulateImages = () => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    url: `https://placehold.co/100x100`,
    title: `Image ${index + 1}`,
    description: `This is a description for image ${index + 1}.`,
  }));
};

export const fetchImages = createAsyncThunk("images/fetchImages", async () => {
  const images = simulateImages();
  return images;
});

export const searchImage = createAsyncThunk(
  "images/searchImage",
  async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch("/api/search", {
      method: "POST",
      body: formData,
    });
    return await response.json();
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    list: [],
    searchResults: [],
    status: "idle",
    error: null,
  },
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state, action) => {
        state.status = "loadingFetch";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "successFetch";
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failedFetch";
        state.error = action.payload;
      })
      .addCase(searchImage.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export const { clearSearchResults } = imagesSlice.actions;
export default imagesSlice.reducer;
