import React from 'react'
import Header from '../../component/Header'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RootLayout = () => {
    // const isLoggedIn = useSelector((state) => state.userAuthReducer.isLoggedIn)
    return (
        <div>
            <Header />
            {/* {
                isLoggedIn &&
                <Navigate to="/auth" />
            } */}
             <Outlet />

        </div>
    )
}

export default RootLayout