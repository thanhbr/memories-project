export const typePost = {
  FETCH_ALL: 'FETCH_ALL',
  CREATE: 'CREATE'
}

export default (posts = [], action) => {
  switch (action.type) {
    case typePost.FETCH_ALL:
      return action.payload || [];

    case typePost.CREATE:
      return [...posts, action.payload];

    default: 
      return posts;
  }
}