import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isCartVisible:false
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialCartState,
    reducers:{
        toogle(state){
            state.isCartVisible=!state.isCartVisible
        }
       
    }
})

export default cartSlice.reducer
export const cartActions = cartSlice.actions;