import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  const counterValue = useSelector((state) => state.counterReducer.value)
  return (
    <div>
      <Box sx={{
        marginTop: "5rem"
      }}>
        <h3>Contact</h3>
        This is Contact

        <h3 style={{ textAlign: "center" }}>
          {counterValue}
        </h3>

      </Box>

    </div>
  )
}

export default Contact