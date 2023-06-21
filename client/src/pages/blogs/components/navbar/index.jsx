import React from "react";
import {Link} from "react-router-dom"
import {
  AppBar, 
  Avatar, 
  Button, 
  Toolbar, 
  Typography
} from "@mui/material";
import memories from "../../../../assets/memories.png"
import makeStyles from './styles';

const Navbar = () => {
  const classes = makeStyles()
  const user = null

  return (  
    <AppBar className={classes.appBar} position='static' color='inherit'>
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
          ? <Account user={user} classes={classes} />
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

const Account = ({user, classes}) => {
  return (
    <div className={classes.profile}>
      <Avatar 
        className={classes.purple}
        alt={user?.result?.name || 'thumnail'}
        src={user.result.imageUrl}
      >
        {user?.result?.name?.charAt(0) || '---'}
      </Avatar>
      <Typography 
        className={classes.userName}
        variant="h6"
      >
        {user?.result?.name}
      </Typography>
      <Button
        variant="container"
        className={classes.logout}
        color="secondary"
      >
        Logout
      </Button>
    </div>
  )
}