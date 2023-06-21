import React, { useEffect, useState } from 'react'
import makeStyles from './styles.js';
import Posts from '../posts/index.jsx';
import Form from '../form/index.jsx';
import {
  Container,
  Grow,
  Grid
} from "@mui/material";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../../../actions/posts.js';

const Home = () => {
  const [currentID, setCurrentID] = useState(null)
  const dispatch = useDispatch()
  const classes = makeStyles()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Grow in>
        <Container maxWidth='xl'>
          <Grid 
            className={classes.mainContainer}
            container
            justify="space-between" 
            alignItems="stretch" 
            spacing={3} 
          >
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
  )
}

export default Home