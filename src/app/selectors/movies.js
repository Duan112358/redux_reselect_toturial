import { createSelector } from 'reselect'

const getMovies = state => state.home.movies

const getLoading = state => state.home.loading

const getSort = state => state.home.filter.sort

const getSearch = state => state.home.filter.search

export default createSelector(
    getMovies,
    getLoading,
    getSort,
    getSearch,
    (movies, loading, sort, search) => {
        // first filter
        let _movies = search.length ?
            movies.filter(m => m.show_title.toLowerCase().indexOf(search.toLowerCase()) !== -1) :
            [...movies]

        // then sort
        _movies = sort === 'default' ?
            _movies :
            _movies.sort((m1, m2) => m1[sort] < m2[sort])

        console.log('computed', Date.now());

        // final data structure we wanted.
        return {
            sort,
            search,
            movies: _movies,
            loading,
        }
    }
)
