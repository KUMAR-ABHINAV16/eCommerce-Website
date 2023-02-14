import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const productObj = action.payload;

            const product = state.find(
                (stateObj) => productObj.id === stateObj.id
            );

            if (product) {
                product.qty++;
            } else {
                const obj = { ...productObj, qty: 1 };
                state.push(obj);
            }
        },
        incrementItem: () => {

        },
        decrementItem: () => {
            
        }
    }
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
