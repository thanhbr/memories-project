import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase
} from "@mui/material"
import { 
  ThumbUpAlt, 
  Delete, 
  MoreHoriz, 
  ThumbUpAltOutlined
}  from "@mui/icons-material"
import moment from "moment"
import { useDispatch } from "react-redux"
import { useStyles } from "./styles"
import { likePost, deletePost } from "../../../../../actions/posts";
import imgBirds from "../../../../../assets/birds.jpg"
import { useNavigate } from "react-router-dom";


const Post = ({ post, setCurrentID }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("profile"))
  const navigate = useNavigate()
  const [likes, setLikes] = useState(post?.likes)
  const userId = user?.result?._id || user?.result?.sub
  const hasLinkedPost = post?.likes?.find((like) => like === userId)

  const handleLike = async _ => {
    dispatch(likePost(post._id))

    setLikes(hasLinkedPost ? post.likes.filter((id) => id !== userId ) : [...post.likes, userId])
  }

  const Likes = () => {
    if(likes?.length > 0) {
      return hasLinkedPost
              ? (<> 
                    <ThumbUpAlt fontSize="small" />
                    &nbsp;{likes?.length} {likes?.length === 1 ? 'like' : 'likes'}
                  </>)
              : (<>
                  <ThumbUpAltOutlined fontSize="small" />
                  &nbsp;{likes?.length} {likes?.length === 1 ? 'like' : 'likes'}
                </>)
    }
    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>
  }

  const openPost = () => navigate(`/posts/${post?._id}`)

  return ( 
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase 
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia 
          className={classes.media}
          image={post.selectedFile || imgBirds}
          title={post.title}
        />
        <div className={classes.overplay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        {(post.creator === user?.result?._id || post.creator === user?.result?.sub) && (
          <div className={classes.overplay2}>
            <Button 
              size="small"
              style={{ color: 'white', minWidth: '30px' }}
              onClick={() => setCurrentID(post._id) }
            >
              <MoreHoriz 
                fontSize="default"
              />
            </Button>
          </div>
        )}
        <div className={classes.details}>
          <Typography 
            variant="body2"
            color="textSecondary"
          >
            {post?.tags?.map((tag) => `#${tag}`)}
          </Typography>
        </div>
        <CardContent>
          <Typography 
              className={classes.title}
              variant="h5"
              gutterBottom
            >
              {post?.title || '---'}
          </Typography>
          <Typography 
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              {post?.message || '---'}
          </Typography>
        </CardContent>

      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button 
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={handleLike}
        >
          <Likes />
        </Button>
        {(post.creator === user?.result?._id || post.creator === user?.result?.sub) && (
          <Button 
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <Delete fontSize="small" />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
   )
}

export default Post ;