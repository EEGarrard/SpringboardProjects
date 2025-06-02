import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer.js'; // Note: .js extension

const store = configureStore({
  reducer: reducer
});

export default store;