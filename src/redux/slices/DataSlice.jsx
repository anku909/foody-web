import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchAllData", async (url) => {
  try {
    const json = await axios.get(url);
    return json.data;
  } catch (error) {
    console.log(error.message);
  }
});

const DataSlice = createSlice({
  name: "allApiData",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      (state.isLoading = false), (state.data = action.payload);
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default DataSlice.reducer;
