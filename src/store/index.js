import { configureStore } from "@reduxjs/toolkit";
import trainerName from './slices/trainerName.slice.js'

const store = configureStore({
  reducer: {
    trainerName,
  }
});

export default store;