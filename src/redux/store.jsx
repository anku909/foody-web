import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/index";
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    // Exclude SerializableStateInvariantMiddleware from middleware stack
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
