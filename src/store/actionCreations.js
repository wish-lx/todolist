import {INPUT_CHANGE, COMMIT_VALUE, DELECT_ITEM, INIT_MESSAGE} from './actionTypes'

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