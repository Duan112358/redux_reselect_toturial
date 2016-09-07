import { FETCH_MOVIES, FILTER_MOVIES } from 'app/constants'
import { handleActions } from 'redux-actions'

const initState = {
    movies: [],
    filter: {
        sort: 'default',
        search: ''
    },
    loading: true
}

let handler = {}

handler[FETCH_MOVIES] = (state, action) => {
    // when receive movies from action
    const { movies } = action;

    return Object.assign({}, state, {
        movies,
        loading: false
    })
}

handler[FILTER_MOVIES] = (state, action) => {
    return Object.assign({}, state, {
        filter: { ...state.filter, ...action.filter }
    })
}

export default handleActions(handler, initState)
