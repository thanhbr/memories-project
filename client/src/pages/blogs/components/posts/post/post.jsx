import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
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

const Post = ({ post, setCurrentID }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("profile"))

  const Likes = () => {
    if(post?.likes?.length > 0) {
      return post?.likes?.find((like) => like === (user?.result?._id || user?.result?.sub))
              ? (<> 
                    <ThumbUpAlt fontSize="small" />
                    &nbsp;{post?.likes?.length}
                  </>)
              : (<>
                  <ThumbUpAltOutlined fontSize="small" />
                  &nbsp;{post?.likes?.length} {post?.likes?.length === 1 ? 'like' : 'likes'}
                </>)
    }
    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>
  }
  console.log('user', user);

  return ( 
    <Card className={classes.card}>
      <CardMedia 
        className={classes.media}
        image={post.selectedFile || imgBirds}
        title={post.title}
      />
      <div className={classes.overplay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
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
      <CardActions className={classes.cardActions}>
        <Button 
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        <Button 
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
   )
}

export default Post ;