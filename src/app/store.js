import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import basketReducer from '../features/basketSlice';


//Global Store setup
export default configureStore({
  reducer: {
    user : userReducer, 
    basket: basketReducer
  },
});
