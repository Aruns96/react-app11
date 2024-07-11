import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cartreducer'




const store = configureStore({
    reducer :{cart:CartReducer}
})


export default store;