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
import { getPosts, getPostsBySearch } from '../../../../actions/posts.js';
import Paginate from '../pagination';
import { useNavigate, useLocation  } from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'


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
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])


  const searchPost = () => {
    if(search.trim() || tags) {
      // dispatch -> fetch search post
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }))
      navigate(`/posts/search?searchQuery=${search || ''}&tags=${tags.join(',')}`)
    } else {
      navigate('/')
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      // search post
      searchPost()
    }
  }

  const handleAdd = tag => setTags([...tags, tag])

  const handleDelete = tag => setTags(tags.filter(item => item !== tag))

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
            <Grid item xs={12} sm={9}>
              <Posts 
                setCurrentID={setCurrentID}
              />
            </Grid>
            <Grid item xs={12} sm={3} >
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <ChipInput 
                  style={{ margin: '10px 0' }}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label="Search Tags"
                  variant='outlined'
                />
                <Button
                  onClick={searchPost}
                  className={classes.searchButton}
                  variant='contained'
                  color='primary'
                >
                  Search
                </Button>
              </AppBar>
              <Form 
                currentID={currentID} 
                setCurrentID={setCurrentID}
              />
              {(!searchQuery && !tags.length) && (
                <Paper 
                  className={classes.pagination}
                  elevation={6}
                >
                  <Paginate page={page} />
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home