import React, { useState, useEffect } from "react"
import FileBase from "react-file-base64"
import { TextField, Button, Typography, Paper } from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import {useStyles} from './styles';
import { createPost, updatePost } from "../../../../actions/posts";

const Form = ({ currentID, setCurrentID }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const post = useSelector(state => currentID ? state?.posts?.find((p) => p._id === currentID) : null)
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if(post) setPostData(post)
  }, [post])

  const handleSubmit = e => {
    e.preventDefault()

    currentID 
      ? dispatch(updatePost(currentID, {...postData, name: user?.result?.name}))
      : dispatch(createPost({...postData, name: user?.result?.name}))
      
    handleClear()
    setCurrentID(null)
  }

  const handleClear = _ => {
    setPostData({
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  }

  if(!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    )
  }

  return (  
    <Paper 
      className={classes.paper}
      elevation={6}
    >
      <form 
        autoComplete="off" 
        noValidate 
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentID ? 'Editing' : 'Creating'} a Memory
        </Typography>
          
        
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
          onChange={e => setPostData({ ...postData, tags: e?.target?.value?.split(',') || '' })}
        />
        {/* <div className={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64 || ''})}
          />
        </div> */}
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