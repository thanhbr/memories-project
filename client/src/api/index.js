import axios from 'axios';

const url = 'http://localhost:5000';
const urlPost = `${url}/posts`

export const fetchPosts = () => axios.get(urlPost);
export const createPost = (newPost) => axios.post(urlPost, newPost);
export const updatePost = (id, updatePost) => axios.patch(`${urlPost}/${id}`, updatePost);