import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import './Auth.css'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined'
import { UserDetails } from '../../models/UserDetails'
import { useNavigate } from 'react-router-dom'

import { getEvents } from '../../services/getEvents'

const Auth = () => {
  const navigate = useNavigate()

  const [isSignup, setIsSignup] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [input, setInput] = useState<UserDetails>({
    name: '',
    password: '',
    email: '',
  })

  const handleInputChange = (e: any) => {
    setInput((previousState: UserDetails) => ({
      ...previousState,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (input.email && input.password) {
      if (isSignup) {
        if (sessionStorage.getItem('userDetails')) {
          const storedArray: UserDetails[] = JSON.parse(sessionStorage?.getItem('userDetails') || '[]')
          console.log(JSON.parse(sessionStorage?.getItem('userDetails') || '[]'))
          storedArray.push(input)
          sessionStorage.setItem('userDetails', JSON.stringify(storedArray))
          console.log('here')
        } else {
          const array: UserDetails[] = []
          array.push(input)
          sessionStorage.setItem('userDetails', JSON.stringify(array))
        }
        setIsSignup(false)
      } else {
        const userDetails: UserDetails[] = JSON.parse(sessionStorage.getItem('userDetails') || '[]')
        if (userDetails.length > 0) {
          userDetails.forEach(element => {
            if (element?.email !== null && element?.password !== null) {
              if (input.email === element.email && input.password === element.password) {
                sessionStorage.setItem('logedIn', JSON.stringify(true))
                sessionStorage.setItem('userName', JSON.stringify(element.name))
                setLoggedIn(true)
                navigate('/')
                window.location.reload()
              } else {
                sessionStorage.setItem('logedIn', JSON.stringify(false))
                setLoggedIn(false)
              }
            } else {
              window.alert('User Details Not Found')
            }
          })
        } else {
          window.alert('User Details Not Found, Please signup')
          setIsSignup(true)
        }
      }
    } else {
      window.alert('Please enter details for Login/Signup')
    }
  }

  const resetState = () => {
    setIsSignup(!isSignup)
    setInput({ name: '', email: '', password: '' })
  }

  return (
    <div className='Auth'>
      <form onSubmit={handleSubmit}>
        <Box
          display='flex'
          flexDirection={'column'}
          maxWidth={400}
          alignItems='center'
          justifyContent={'center'}
          margin='auto'
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{
            ':hover': {
              boxShadow: '10px 10px 20px #ccc',
            },
          }}
        >
          <Typography variant='h2' padding={3} textAlign='center'>
            {isSignup ? 'SignUp' : 'Login'}
          </Typography>
          {isSignup && (
            <TextField
              name='name'
              value={input.name}
              onChange={handleInputChange}
              margin='normal'
              type={'text'}
              variant='outlined'
              placeholder='Name'
            />
          )}
          <TextField
            name='email'
            value={input.email}
            onChange={handleInputChange}
            margin='normal'
            type={'email'}
            variant='outlined'
            placeholder='Email'
          />
          <TextField
            name='password'
            value={input.password}
            onChange={handleInputChange}
            margin='normal'
            type={'password'}
            variant='outlined'
            placeholder='Password'
          />
          <Button
            variant='contained'
            color='warning'
            endIcon={isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />}
            type='submit'
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {isSignup ? 'SignUp' : 'Login'}
          </Button>
          <Button sx={{ marginTop: 3, borderRadius: 3 }} onClick={resetState}>
            Switch to: {isSignup ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth
