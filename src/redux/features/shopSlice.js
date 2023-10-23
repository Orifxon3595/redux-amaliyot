import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../data"

const initialState = {
    products: storeData,
    amount: 0,
    total: 0,
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        incrementAmount: (state, {payload}) => {
            const item = state.products.find((item) => item.name === payload.name)
            item.amount++
        },

        decrementAmount: (state, {payload}) => {
            const item = state.products.find((item) => item.name === payload.name)
            item.amount--
        },
        updateTotal: (state) => {
             let total = 0;
             let amount = 0;
             state.products.forEach((item) => {
                amount += item.amount;
                total += item.total;
             });
             
             state.total = total;
             state.amount = amount;
        } 
    },
});

export const {incrementAmount, decrementAmount, updateTotal} = shopSlice.actions
export default shopSlice.reducer