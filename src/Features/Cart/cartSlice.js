import { createSlice } from "@reduxjs/toolkit";

const initialState = { arrCart: [] };

const cartSlice = createSlice({
    name: "Cart",
    initialState: initialState,
    reducers: {
        addtoCart: (state, action) => {
            let cartObject = action.payload;
            let obj = state.arrCart.find(e => e.product.id == cartObject.product.id);
            if (obj) {
                obj.quantity++;
            }
            else {
                state.arrCart.push(cartObject);
            }
        },
        removefromCart: (state, action) => {
            const cartObject = action.payload;
            let index = state.arrCart.findIndex(e => e.product.id == cartObject.product.id);
            if (index != -1) {
                state.arrCart.splice(index, 1)
            }
        },
        increaseQuantity: (state, action) => {
            let cartObject = action.payload;
            let obj = state.arrCart.find(e => e.product.id == cartObject.product.id);
            if (obj) {
                obj.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            let cartObject = action.payload;
            let obj = state.arrCart.find(e => e.product.id == cartObject.product.id);
            let index = state.arrCart.findIndex(e => e.product.id == cartObject.product.id);
            if(obj){
                if(obj.quantity>1){
                    obj.quantity--;
                }
                else{
                    state.arrCart.splice(index,1)
                }
            }
        },
    }
})
export default cartSlice;