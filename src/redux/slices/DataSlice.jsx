import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "fetchAllData",
  async (url = "https://proxy-server-alpha-eosin.vercel.app/api/v1") => {
    try {
      const json = await axios.get(url);
      console.log(json.data);
      return json.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

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
