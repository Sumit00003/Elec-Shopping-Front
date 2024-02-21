import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/UserSlice'
import productReducer from '../features/product/productSlice';
import blogsReducer from '../features/blogs/blogsSlice';
import contactReducer from '../features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer,
    blog:blogsReducer,
    contact:contactReducer,
  },
});
