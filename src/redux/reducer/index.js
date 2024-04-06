import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../slices/CartSlice";
import dataReducer from "../slices/DataSlice";

const rootReducers = combineReducers({
  cart: cartReducer,
  data: dataReducer,
});

export default rootReducers;
