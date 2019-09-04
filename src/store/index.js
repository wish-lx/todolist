// 基础store创建流程
// import {createStore} from 'redux' 
// const store = createStore() 
// export default store


import {createStore} from 'redux' 
import reducer from './reducer'
const store = createStore(reducer) 

export default store
