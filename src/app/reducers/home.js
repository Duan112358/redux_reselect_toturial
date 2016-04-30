import { FETCH_MOVIES, FILTER_MOVIES } from 'app/constants'

const initState = {
    movies: [],
    filter: {
        sort: 'default',
        search: ''
    },
    loading: true
}

export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_MOVIES:
            // when receive movies from action
            const { movies } = action;

            return Object.assign({}, state, {
                movies,
                loading: false
            })
        case FILTER_MOVIES: 
            return Object.assign({}, state, {
                filter: { ...state.filter, ...action.filter }
            })
        default:
            return state
    }
}
