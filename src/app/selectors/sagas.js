import { createSelector } from 'reselect'

const getSelectedReddit = state => state.sagas.selectedReddit
const getPosts = state => {
    let { selectedReddit, postsByReddit } = state.sagas
    const cache = postsByReddit[selectedReddit]
    return cache ? cache.posts : []
}
const getIsFetching = state => state.sagas.isFetching
const getLastUpdated = state => state.sagas.lastUpdated

export default createSelector(
    getSelectedReddit,
    getPosts,
    getIsFetching,
    getLastUpdated,
    (selectedReddit, posts, isFetching, lastUpdated) => {

        return {
            selectedReddit,
            posts,
            isFetching,
            lastUpdated,
        }
    }
)
