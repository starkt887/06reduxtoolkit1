import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoggedIn: false,
    id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    token: "",
    error: ""
}

const userAuthSlice = createSlice({
    name: "userAuthSlice",
    initialState,
    reducers: {
        login: (state, action) => {
            return state = {
                isLoggedIn: true,
                error: "",
                ...action.payload
            }
        },
        logout: (state) => {
            return state = {
                isLoggedIn: false,
                id: "",
                username: "",
                email: "",
                firstName: "",
                lastName: "",
                gender: "",
                image: "",
                token: "",
                error: ""
            }
        },
        authError: (state, action) => {
            console.log(action.payload)
            // state.error=action.payload
            return state = {
                isLoggedIn: false,
                error: action.payload
            }
        }
    }
})

export const { login, logout, authError } = userAuthSlice.actions

export default userAuthSlice.reducer