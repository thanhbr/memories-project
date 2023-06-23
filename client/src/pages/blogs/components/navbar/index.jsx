import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import {
  AppBar, 
  Avatar, 
  Button, 
  Toolbar, 
  Typography
} from "@mui/material";
import memories from "../../../../assets/memories.png"
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import makeStyles from './styles';
import { LOGOUT } from "../../../../constants/actionTypes";

const Navbar = () => {
  const classes = makeStyles()
	const navigate = useNavigate()
  const dispatch = useDispatch()
  const profile = JSON.parse(localStorage.getItem("profile"))
	const [user, setUser] = useState(profile)
  
	const handleSignOut = (e) => {
		dispatch({type: LOGOUT})
		setUser(null)
		navigate('/')
	} 

  useEffect(() => {
    setUser(profile)
  }, [profile])

  return (  
    <AppBar className={classes.appBar} position='static' color='inherit'>
      {console.log('user', user)}
      <div>
        <Typography 
          component={Link}
          to="/"
          className={classes.heading} 
          variant='h2' 
          align='center'
        >
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt='memories' height={60} width={60} />
      </div>
      <Toolbar className={classes.toolbar}>
        {user
          ? <Account 
              user={user} 
              classes={classes} 
              handleSignOut={handleSignOut}
            />
          : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
      </Toolbar>
  </AppBar>   
  )
}

export default Navbar 

const Account = ({user, classes, handleSignOut}) => {
  return (
    <div className={classes.profile}>
      <Avatar 
        className={classes.purple}
        alt={user?.name || 'thumnail'}
        src={user?.picture}
      >
        {user?.name?.charAt(0) || '---'}
      </Avatar>
      <Typography 
        className={classes.userName}
        variant="h6"
      >
        {user?.name}
      </Typography>
      <Button
        variant="container"
        className={classes.logout}
        color="secondary"
        onClick={handleSignOut}
      >
        Logout
      </Button>
    </div>
  )
}