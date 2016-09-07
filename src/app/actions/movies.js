import { FETCH_MOVIES, FILTER_MOVIES, MOVIES_URL } from 'app/constants'

const session = sessionStorage

// fetch movies contains specified actor, such as Jason Statham 
export function fetchMovies(name = 'Jason Statham') {
    let url = `${MOVIES_URL}?actor=${name}`
    
    return (dispatch, getState) => {
        const cache = session.getItem(url)
        // check cache policy, targeted rescource will be returned directly
        if(cache) {
            dispatch(receiveMovies(JSON.parse(cache)))
        } else {
            fetch(url).
                then(resp => resp.json()).
                then(movies => {
                    dispatch(receiveMovies(movies))
                    // cache movies by fetched url into sessionStorage
                    session.setItem(url, JSON.stringify(movies))
                }) 
        }
    }
}

// return fetched movies as redux action
function receiveMovies(movies) {
    return {
        type: FETCH_MOVIES,
        movies
    }
}

export function filterMovies(filter) {
    return (dispatch, getState) => {
        dispatch({
            type: FILTER_MOVIES,
            filter
        })
    }
}
