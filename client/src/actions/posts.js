import * as api from '../api';
import { typePost } from '../reducers/posts';

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()

    dispatch({ type: typePost.FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)

    dispatch({ type: typePost.CREATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}