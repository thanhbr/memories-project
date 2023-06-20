import React, { useState } from "react"
import FileBase from "react-file-base64"
import { TextField, Button, Typography, Paper } from "@mui/material"
import {useStyles} from './styles';
import {useDispatch} from 'react-redux'
import { createPost } from "../../../../actions/posts";

const Form = () => {
  const classes = useStyles()

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createPost(postData))
  }

  const handleClear = _ => {
    setPostData({
      ...postData,
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  }

  return (  
    <Paper className={classes.paper}>
      <form 
        autoComplete="off" 
        noValidate 
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          Creating a Memory
        </Typography>

        <TextField 
          label="Creator"
          name="creator" 
          variant="outlined"
          fullWidth
          value={postData.creator}
          onChange={e => setPostData({ ...postData, creator: e.target.value || '' })}
        />

        <TextField 
          label="Title"
          name="title" 
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value || '' })}
        />

        
        <TextField 
          label="Message"
          name="message" 
          variant="outlined"
          fullWidth
          value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value || '' })}
        />

        
        <TextField 
          label="Tags"
          name="tags" 
          variant="outlined"
          fullWidth
          value={postData.tags}
          onChange={e => setPostData({ ...postData, tags: e.target.value || '' })}
        />

        <div className={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64 || ''})}
          />
        </div>

        <Button 
          className={classes.buttonSubmit}
          variant="container"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button 
          className={classes.buttonClear}
          variant="container"
          color="secondary"
          size="small"
          fullWidth
          onClick={handleClear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form 