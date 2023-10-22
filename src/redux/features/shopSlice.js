import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    amount: 0,
    total: 0,
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {},
});

export default shopSlice.reducer