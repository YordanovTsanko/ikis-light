import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import imagesReducer from './features/imagesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imagesReducer,
  },
});
