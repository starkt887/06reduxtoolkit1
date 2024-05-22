import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
    const isLoggedIn = useSelector((state) => state.userAuthReducer.isLoggedIn)
    return (
        <div>
            {
                isLoggedIn ?
                    <Box sx={{
                        marginTop: "5rem"
                    }}>
                        <Outlet />
                    </Box>
                    :
                    <Navigate to="/" />
            }

        </div>
    )
}

export default AuthLayout