import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += parseInt(action.payload)
        },
        decrementByAmount: (state, action) => {
            state.value -= parseInt(action.payload)
        }
    }
})


export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer

