import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isCartVisible:false,
    items:[],
    totalQuantity:0,
    notification:null
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialCartState,
    reducers:{
        showNotification(state,action){
               state.notification={ status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
               }
        },
        toogle(state){
            state.isCartVisible=!state.isCartVisible
        },
        addItemToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(i=>i.id===newItem.id)
            state.totalQuantity++
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    title:newItem.title
                    
                })
            }else{
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice+newItem.price
            }
        },
        removeItemFromCart(state,action){
            const id = action.payload;
            state.totalQuantity--
            const existingItem = state.items.find(i=>i.id===id);
            if(existingItem.quantity ===1){
              state.items=state.items.filter(i=>i.id!==id)
            }else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice-existingItem.price
            }

        }

       
    }
})

export default cartSlice.reducer
export const cartActions = cartSlice.actions;