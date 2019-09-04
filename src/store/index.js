// 基础store创建流程
// import {createStore} from 'redux' 
// const store = createStore() 
// export default store


import {createStore} from 'redux' 
import reducer from './reducer'
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

export default store
