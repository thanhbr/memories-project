import React from "react"
import { useSelector } from "react-redux"
import { Grid, CircularProgress } from "@mui/material"

import Post from "./post/post"
import { useStyles } from "./styles"

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()

  console.log('posts', posts)

  return ( 
    !posts?.length 
      ? <CircularProgress />
      : (<Grid 
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {posts?.map((post, i) => (
              <Grid key={post._id + i} item xs={12} sm={4}>
                <Post post={post}/>
              </Grid>
            ))}
        </Grid>)
   )
}

export default Posts