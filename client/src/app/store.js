import { configureStore } from "@reduxjs/toolkit";
import products from "../feautures/products/productsSlice";
export const store = configureStore({
  reducer: {
    products: products,
  },
});
