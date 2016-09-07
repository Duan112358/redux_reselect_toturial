import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'app/reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

let sagaMiddleware = createSagaMiddleware()
let middlewares = [thunk, sagaMiddleware]

// exported by pepper
const MODE = process.env.MODE

if( MODE !== 'release') {
    // only add logger middleware except release mode 
    let createLogger = require('redux-logger')
        
    // log redux action operation using console.log
    const logger = createLogger({
        level: 'info', 
        logger: console,
        collapsed: true
    })

    middlewares = [...middlewares, logger]
}

export default (history, initialState) => {
    // add react-router history middleware in
    middlewares = [...middlewares, routerMiddleware(history)]
    // apply middlewares within store
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    // bind reducer and initState
    const store = createStoreWithMiddleware(reducer, initialState)

    // run the saga
    sagaMiddleware.run(sagas)

    return store
}
