import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// AsyncThunk за зареждане на всички изображения
export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await fetch('/api/images'); // Заменете с реалната крайна точка
  return await response.json();
});

// AsyncThunk за качване на изображение
export const uploadImage = createAsyncThunk('images/uploadImage', async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await fetch('/api/upload', { method: 'POST', body: formData });
  return await response.json();
});

// AsyncThunk за търсене по изображение
export const searchImage = createAsyncThunk('images/searchImage', async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await fetch('/api/search', { method: 'POST', body: formData });
  return await response.json();
});

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    list: [],
    searchResults: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(searchImage.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export const { clearSearchResults } = imagesSlice.actions;
export default imagesSlice.reducer;
