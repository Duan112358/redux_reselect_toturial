import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import home from './home'
import sagas from './sagas'

/* 
* combine all reducers into one root reducers, which store all app state
* redux only has one sotre, so only one state tree is necessary
*/
const rootReducer = combineReducers({
    home,
    sagas,
    // react-router require this config
    routing: routerReducer,
})

export default rootReducer
