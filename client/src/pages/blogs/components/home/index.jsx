import React, { useEffect, useState } from 'react'
import makeStyles from './styles.js';
import Posts from '../posts/index.jsx';
import Form from '../form/index.jsx';
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button
} from "@mui/material";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../../../actions/posts.js';
import Paginate from '../pagination';
import { useNavigate, useLocation  } from 'react-router-dom'
// import ChipInput from 'material-ui-chip-input'


function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const [currentID, setCurrentID] = useState(null)
  const dispatch = useDispatch()
  const classes = makeStyles()

  const query = useQuery()
  const navigate = useNavigate()
  const page = query.get('page') || 1
  const searchQuery = query.get('searchQuery')
  console.log('query', query);

  useEffect(() => {
    dispatch(getPosts())
  }, [currentID, dispatch])

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
            <Grid item xs={12} sm={8}>
              <Posts 
                setCurrentID={setCurrentID}
              />
            </Grid>
            <Grid item xs={12} sm={4} >
              <AppBar 
                className={classes.appBarSearch}
                position='static'
                color="inherit"
              >
                <TextField 
                  name="search" 
                  variant="outlined" 
                  label="Search Memories"
                  fullWidth
                  value="TEST"
                  onChange={() => {}}
                />
              </AppBar>
              <Form 
                currentID={currentID} 
                setCurrentID={setCurrentID}
              />
              <Paper 
                className={classes.pagination}
                elevation={6}
              >
                <Paginate />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home