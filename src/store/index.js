// 基础store创建流程
// import {createStore} from 'redux' 
// const store = createStore() 
// export default store


import {createStore, applyMiddleware, compose} from 'redux' 
import reducer from './reducer'
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({}):compose
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)

const store = createStore(reducer, enhancer) 

export default store
