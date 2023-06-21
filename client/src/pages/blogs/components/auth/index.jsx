import React, { useState } from 'react'
import { 
  Avatar, 
  Paper, 
  Grid, 
  Typography, 
  Container,
  Button
} from "@mui/material"

import { LockOutlined } from "@mui/icons-material"

import makeStyles from "./styles"
import Input from '../../../../components/input'

const Auth = () => {
  const classes = makeStyles()
  const isSignup = false
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = _ => setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleSubmit = _ => {

  }

  const handleChange = _ => {

  }

  return (
    <Container 
      component={"main"}
      maxWidth="xs"
    >
      <Paper 
        className={classes.paper}
        elevation={3}
      >
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography 
          variant='h5'
        >
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form 
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid 
            container 
            spacing={2}
          >
            {
              isSignup && (
                <>
                  <Input 
                    name='firstName'
                    label='First Name'
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input 
                    name='lastName'
                    label='Last Name'
                    handleChange={handleChange}
                  />
                </>
              )
            }
            <Input 
              name="email" 
              label="Email Address"
              type="email"
              handleChange={handleChange}
            />
            <Input 
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && 
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
             }
          </Grid>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth