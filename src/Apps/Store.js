import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../Features/Category/CcatgorySlice";
import ProductSlice from "../Features/Products/Products";
import shopProductSlice from "../Features/Shop/shopSlice";
import cartSlice from "../Features/Cart/cartSlice";


const store = configureStore({
    reducer: {
        Category: CategorySlice.reducer,
        Product: ProductSlice.reducer,
        ShopProduct:shopProductSlice.reducer,
        Cart:cartSlice.reducer,
    }
})
export default store;