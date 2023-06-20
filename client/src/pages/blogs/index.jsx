import React, { useEffect, useState } from 'react';
import { 
  Container, 
  AppBar, 
  Typography,
  Grow,
  Grid
} from "@mui/material";
import memories from "../../assets/memories.png"
import Posts from './components/posts';
import Form from './components/form';
import { useStyles } from './styles.js';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts'

const Blogs = () => {
  const [currentID, setCurrentID] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentID, dispatch])

  return (
    <Container maxWidth='xl'>     
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt='memories' height={60} width={60} />
      </AppBar>   

      <Grow in>
        <Container maxWidth='xl'>
          <Grid container justify="space-between" alignItems="stretch" spacing={3} >
            <Grid item xs={12} sm={8} >
              <Posts 
                setCurrentID={setCurrentID}
              />
            </Grid>
            <Grid item xs={12} sm={4} >
              <Form 
                currentID={currentID} 
                setCurrentID={setCurrentID}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>  
  )
}

export default Blogs
