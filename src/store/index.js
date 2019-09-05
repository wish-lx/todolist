// 基础store创建流程
// import {createStore} from 'redux' 
// const store = createStore() 
// export default store


import {createStore,applyMiddleware, compose} from 'redux' 
import reducer from './reducer'

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer) 
sagaMiddleware.run(rootSaga)
export default store
