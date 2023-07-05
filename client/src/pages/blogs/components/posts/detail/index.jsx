import React, { useEffect } from 'react'
import { 
  Paper, 
  Typography, 
  CircularProgress, 
  Divider 
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useStyles } from './styles'
import { getPost, getPostsBySearch } from '../../../../../actions/posts'
import imgBirds from "../../../../../assets/birds.jpg"
import Comment from './comment'

const PostDetail = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts)
  const dispath = useDispatch()
  const navigate = useNavigate()
  const classes = useStyles()
  const { id } = useParams()

  useEffect(() => {
    dispath(getPost(id))
  }, [id])
  
  useEffect(() => {
    if(post) {
      dispath(getPostsBySearch({ search: '', tags: post?.tags?.join(',') }))
    }
  }, [post])

  if(!post) return null
  if(isLoading) {
    return <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size={'7rem'} />
    </Paper>
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id)

  const openPost = id => navigate(`/posts/${id}`)

  return (
    <Paper
      elevation={6} 
      style={{ padding: '20px', borderRadius: '15px' }}
    >
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">
            {post?.tags?.map((tag) => (
              <Link key={tag} to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                {` #${tag} `}
              </Link>
            ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Typography variant="h6">
            Created by:
            <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${post.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Comment post={post} />
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || imgBirds} alt={post.title} />
        </div>
      </div>
      {recommendedPosts?.length && (
        <div className={classes.section}>
          <Typography
          >
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts?.map((item) => (
              <div 
                key={item._id} 
                style={{ margin: '20px', cursor: 'pointer' }}
                onClick={() => openPost(item?._id)}
              >
                <Typography gutterBottom variant="h6">{item?.title}</Typography>
                <Typography gutterBottom variant="subtitle2">{item?.name}</Typography>
                <Typography gutterBottom variant="subtitle2">{item?.message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {item?.likes?.length || 0}</Typography>
                <img src={item?.selectedFile || imgBirds} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  )
}

export default PostDetail