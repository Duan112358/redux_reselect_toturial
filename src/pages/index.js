import ReactDom from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import 'whatwg-fetch'
import { connect, Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
// use this script to create an redux store, which combine reducers
import configureStore from 'app/store'

import { createHashHistory } from 'history'
import objectAssign from 'object-assign'
import Home from 'react-proxy?name=home!./home'
import About from 'react-proxy?name=about!./about'
import Movies from 'react-proxy?name=movies!./movies'
import Sagas from 'react-proxy?name=sagas!./sagas'
import Sitemap from 'react-proxy?name=sitemap!./sitemap'

Object.assign = objectAssign

import 'scss/reset'

// use hash router at current, for html5 history api require backend support
// added in history middleware
const store = configureStore(browserHistory)
// the final history with redux store merged in
const history = syncHistoryWithStore(browserHistory, store)

let routes = history => (
    <Router history={history}>
        <Route path="/" component={Home}>
            <IndexRoute component={Sitemap}/>
            <Route path="/about" component={About} />
            <Route path="/movies" component={Movies} />
            <Route path="/sagas" component={Sagas} />
        </Route>
    </Router>
)


ReactDom.render(
    <Provider store={store}>
    { routes(history) }
    </Provider>
, document.getElementById('app'))
