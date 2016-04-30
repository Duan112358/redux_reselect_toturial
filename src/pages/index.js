import ReactDom from 'react-dom'
import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router'
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

Object.assign = objectAssign

// use hash router at current, for html5 history api require backend support
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
// added in history middleware
const store = configureStore(appHistory)
// the final history with redux store merged in
const history = syncHistoryWithStore(appHistory, store)

let routes = history => (
    <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={Movies} />
    </Router>
)

ReactDom.render(
    <Provider store={store}>
    { routes(history) }
    </Provider>
, document.getElementById('app'))
