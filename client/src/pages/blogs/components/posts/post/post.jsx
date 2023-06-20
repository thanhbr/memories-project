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
  MoreHoriz 
}  from "@mui/icons-material"
import moment from "moment"
import {useStyles} from "./styles"

const Post = ({ post }) => {
  const classes = useStyles()

  return ( 
    <Card className={classes.card}>
      <CardMedia 
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overplay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overplay2}>
        <Button 
          size="small"
          style={{ color: 'white', minWidth: '30px' }}
          onClick={() => {}}
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
            {post?.message || '---'}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button 
          size="small"
          color="primary"
          onClick={() => {}}
        >
          <ThumbUpAlt fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button 
          size="small"
          color="primary"
          onClick={() => {}}
        >
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
   )
}

export default Post ;