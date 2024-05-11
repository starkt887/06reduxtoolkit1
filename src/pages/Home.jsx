import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from '../features/counter/counterSlice'

const Home = () => {

  const counterValue = useSelector((state) => state.counterReducer.value)
  const dispatch = useDispatch();

  const [inpValue, setInpValue] = useState(1)

  const incrementValue = () => {
    dispatch(increment())
  }

  const decrementValue = () => {
    dispatch(decrement())
  }

  const incrementByValue = () => {
    dispatch(incrementByAmount(inpValue))
  }
  const decrementByValue = () => {
    dispatch(decrementByAmount(inpValue))
  }


  return (
    <div>
      <Box sx={{
        marginTop: "5rem"
      }}>
        <h3>Home</h3>

        <h3 style={{ textAlign: "center" }}>
          {counterValue}
        </h3>
        <Box sx={{
          display: "flex",
          justifyContent: "center"
        }} mb={3}>
          <TextField type='text' variant='outlined' label='value'
            onChange={(e) => setInpValue(e.target.value)}
            placeholder='Enter value' />
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: "center"
        }} mb={3}>
          <Button
            variant='contained'
            sx={{ marginRight: "10px" }}
            onClick={incrementValue}>
            Increment
          </Button>
          <Button
            variant='contained'
            onClick={decrementValue}>
            Decrement
          </Button>
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Button
            variant='contained'
            sx={{ marginRight: "10px" }}
            onClick={incrementByValue}>
            Increment by Value
          </Button>
          <Button
            variant='contained'
            onClick={decrementByValue}>
            Decrement by Value
          </Button>
        </Box>




      </Box>
    </div>
  )
}

export default Home