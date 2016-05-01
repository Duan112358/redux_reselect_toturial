import styles from './movies';
// import { component_name } from 'wepiao'
import connect from 'utils/connect'
import MoviesSelector from 'app/selectors/movies'

@connect(MoviesSelector)
export default class Movies extends React.Component {

    componentWillMount() {
        // use cached resource at necessary
        this.props.loading && this.props.actions.fetchMovies() // use default actor name
    }

    componentDidMount() {
        let { sort, search } = this.props
        this.refs.input.value = search
        this.refs.select.value = sort
    }

    onChangeSort(e) {
        console.log(e.target.value);
        this.props.actions.filterMovies({ sort: e.target.value })
    }

    onChangeSearch(e) {
        console.log(e.target.value)
        this.props.actions.filterMovies({ search: e.target.value })
    }

    // filterAndSortMovies(movies) {
    //     let { sort, search } = this.props.home.filter
    //     console.log(sort, search);
    //     let _movies = search.length ? 
    //         movies.filter(m => m.show_title.toLowerCase().indexOf(search.toLowerCase()) !== -1) :
    //         movies
    //     if(sort === 'default') {
    //         return _movies
    //     } else {
    //         return _movies.sort((m1, m2) => m1[sort] < m2[sort])
    //     }
    // }

    render() {
        let { loading, movies } = this.props
       
        // movies = this.filterAndSortMovies(movies)

        return (
            <div className='Movies'>
                <div className="Movies__Header">
                    <select onChange={this.onChangeSort.bind(this)} className="Movies__Header__Select" ref="select">
                        <option value="default">default</option>
                        <option value="show_title">Title</option>
                        <option value="rating">Rating</option>
                        <option value="release_year">Release year</option>
                    </select>
                    <input className="Movies__Header__Input"
                        onChange={this.onChangeSearch.bind(this)}
                        ref="input"
                        placeholder="按名称筛选"/>
                </div>
                <div className="Movies__List">
                {
                    loading ? 'Loading...' :
                    movies.map(movie => (
                        <div key={movie.show_id} className="Movies__Item">
                            <img className="Movies__Item__Poster" src={movie.poster}/>
                            <div className="Movies__Item__Details">
                                <span className="Movies__Item__Name">
                                { movie.show_title }
                                </span>
                                <span className="Movies__Item__Rating">
                                { movie.rating } 分
                                </span>
                                <span className="Movies__Item__Year">
                                上映年份： { movie.release_year } 年
                                </span>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

/*
 *  after export the page, edit ../index.js, add the following code
 *
 *  import Movies from 'react-proxy?name=movies!./movies'
 *
 *  ...
 *  <Router history={history}>
 *      ...
 *      <Route path="/movies" component={Movies} />
 *  </Router>
 *
 */
