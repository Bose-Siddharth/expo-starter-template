import { configureStore } from "@reduxjs/toolkit";
// Import your slices here
import exampleSlice from "./slices/example/exampleSlice";

export const store = configureStore({
  reducer: {
    // Add your slices here
    example: exampleSlice,
  },
});
