import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import userAuthReducer from "../features/userAuth/userAuthSlice"


const store = configureStore({
    reducer: {
        counterReducer,
        userAuthReducer
    }
})

export default store