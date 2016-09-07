import { SELECT_REDDIT, REQUEST_POSTS, RECEIVE_POSTS } from 'app/constants'
import { handleActions } from 'redux-actions'

const initState = {
    selectedReddit: 'reactjs',
    postsByReddit: {},
}

let handler = {}

handler[SELECT_REDDIT] = (state, action) => {
    return {
        ...state,
        selectedReddit: action.payload,
    }
}

handler[REQUEST_POSTS] = (state, action) => {
    let { postsByReddit } = state
    if(postsByReddit[action.payload]) {
        return {
            ...state,
            ...postsByReddit[action.payload]
        }
    }
    return { 
        ...state,
        isFetching: true
    }
}

handler[RECEIVE_POSTS] = (state, action) => {
    let { postsByReddit } = state
    let { posts, reddit, receivedAt } = action.payload
    postsByReddit[reddit] = { ...action.payload }
    return {
        ...state,
        postsByReddit, 
        isFetching: false,
        lastUpdated: receivedAt,
    }
}

export default handleActions(handler, initState)
