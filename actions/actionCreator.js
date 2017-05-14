//EVERYTIME YOU DISPATCH AN ACTION EVERY SINGLE REDUCER IS GOING TO RUN

//increment a like
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}
