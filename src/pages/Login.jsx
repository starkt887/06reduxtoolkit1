import { Alert, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authError, login } from '../features/userAuth/userAuthSlice'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const dispatch = useDispatch()
  const error = useSelector(state => state.userAuthReducer.error)
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorStatic, setErrorStatic] = useState("")
  const loginNow = () => {
    //Apicall
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'atuny0',
        password: '9uQFF1Lh',
        expiresInMins: 30, // optional, defaults to 60
      })
    })
      .then(async (res) => {
        let data = await res.json()
        console.log(data);
        console.log(res.status);
        if (res.status == 400) {
          dispatch(authError("Wrong username or password"))
          return
        }
        if (res.status === 200) {
          dispatch(login(data))
          navigate("/auth")
        }
      })
      .catch((error) => {
        console.log(error);
        // setError("Wrong username or password!")x
        dispatch(authError("Something went wrong with request!"))
      })



  }
  const loginStatic = () => {
    let data = {
      id: 1,
      username: "atuny0",
      email: "atuny0@sohu.com",
      firstName: "Terry",
      lastName: "Medhurst",
      gender: "male",
      image: "https://robohash.org/Terry.png?set=set4",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL1RlcnJ5LnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxNjM1NTgyNSwiZXhwIjoxNzE2MzU3NjI1fQ.kDGMyJG92yk-bZhu9FWQLIJLfgWuCFmkcI-Tv1cXFCs"
    }
    setError("")
    if (username === "akshay" && password === "akshay123") {
      dispatch(login(data))
      navigate("/auth")
      return
    }
    setError("Wrong username or password!")
  }
  return (
    <div>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ height: "100vh" }}
          alignItems="center">
          <Box
            display="flex"
            flexDirection="column">
            <h3>Login page </h3>
            <TextField sx={{ marginBottom: "10px" }}
              type='text'
              id="username"
              placeholder='Enter username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField sx={{ marginBottom: "10px" }}
              type='password'
              id="password"
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant='contained' onClick={loginNow}>Login</Button>
            {error &&
              <Alert icon={<ErrorOutlineIcon />} severity='error'>{error}</Alert>
            }
            {/* {errorStatic &&
              <Alert icon={<ErrorOutlineIcon />} severity='error'>{error}</Alert>
            } */}

          </Box>
        </Box>
      </Box>

    </div>
  )
}

export default Login