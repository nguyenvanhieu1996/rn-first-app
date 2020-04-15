import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import overViewReducer from './Overview/reducers'
import covidReducer from './covidSlice';
import Thunk from 'redux-thunk';


const rootReducer = combineReducers({
    overView: overViewReducer,
    covid: covidReducer
}),

    store = createStore(
        rootReducer,
        compose(
            applyMiddleware(Thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )

export default store