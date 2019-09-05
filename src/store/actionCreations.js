import {INPUT_CHANGE, COMMIT_VALUE, DELECT_ITEM, INIT_MESSAGE} from './actionTypes'
// import axios from 'axios'

export const getInputChange = (val)=>({
    type: INPUT_CHANGE,
    inputValue: val
})
export const getCommitChange = ()=>({
    type: COMMIT_VALUE
})
export const getdelecteChange = (val)=>({
    type:  DELECT_ITEM,
    inputValue: val
})
export const getinitMessage = (data)=>({
    type:  INIT_MESSAGE,
    data
})

// 原始actionCreator返回的是一个对象，使用redux-thunk之后可以返回一个函数了
// 使用redux-thunk
// export const getinitMessageFun = () => {
//     return (dispatch)=>{
//         axios.get('api/detail.json').then((res)=>{
//             const data = res
//             const action = getinitMessage(data)
//             dispatch(action)
//           })
//     }
// }