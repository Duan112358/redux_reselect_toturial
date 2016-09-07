import { REQUEST_POSTS, RECEIVE_POSTS, SELECT_REDDIT, INVALIDATE_REDDIT } from 'app/constants'
import { createAction } from 'redux-actions'

export const selectReddit = createAction(SELECT_REDDIT)
export const requestPosts = createAction(REQUEST_POSTS)
export const receivePosts = createAction(RECEIVE_POSTS, (reddit, posts) => ({
    reddit,
    posts,
    receivedAt: Date.now()
}))

export const fetchPostsApi = reddit => {
    return fetch(`http://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => json.data.children.map(child => child.data))
}
