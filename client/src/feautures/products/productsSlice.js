import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  recommendedProducts: [],
  latestProducts: [],
  loading: false,
  error: null,
};
export const getRecomendedProducts = createAsyncThunk(
  "getRecomendedProducts",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}product/recomended-products`
      );
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue("Opps found an error", err.response.data);
    }
  }
);

export const getLatestProducts = createAsyncThunk(
  "getLatestProducts",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}product/latest-products`
      );
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue("Opps found an error", err.response.data);
    }
  }
);

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecomendedProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRecomendedProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.recommendedProducts = action.payload;
    });
    builder.addCase(getRecomendedProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getLatestProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLatestProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.latestProducts = action.payload;
    });
    builder.addCase(getLatestProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default products.reducer;
