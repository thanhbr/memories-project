import React from "react"
import { useSelector } from "react-redux"
import { Grid, CircularProgress } from "@mui/material"

import Post from "./post/post"
import { useStyles } from "./styles"

const Posts = ({ setCurrentID }) => {
  const {posts, isLoading} = useSelector((state) => state.posts) // [] -> { isLoading, posts: [] }
  const classes = useStyles()

  if(!posts.length && !isLoading) return 'No posts'

  return ( 
    isLoading
      ? <CircularProgress />
      : (<Grid 
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {posts?.map((post, i) => (
              <Grid key={post._id + i} item xs={12} sm={12} md={6} lg={3}>
                <Post 
                  post={post}
                  setCurrentID={setCurrentID}
                />
              </Grid>
            ))}
        </Grid>)
   )
}

export default Posts