export const typePost = {
  FETCH_ALL: 'FETCH_ALL',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
}

export default (posts = [], action) => {
  switch (action.type) {
    case typePost.FETCH_ALL:
      return action.payload || [];

    case typePost.CREATE:
      return [...posts, action.payload];

    case typePost.UPDATE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);

    default: 
      return posts;
  }
}