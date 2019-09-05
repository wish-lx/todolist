import {INPUT_CHANGE, COMMIT_VALUE, DELECT_ITEM, INIT_MESSAGE} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action)=>{
    // console.log(state,action)
    if(action.type === INPUT_CHANGE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.inputValue
        return newState
    }
    if(action.type === COMMIT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELECT_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if(action.type === INIT_MESSAGE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
   return state
}