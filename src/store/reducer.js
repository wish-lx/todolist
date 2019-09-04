const defaultState = {
    inputValue: '234',
    list: [1,2]
}
export default (state = defaultState, action)=>{
    console.log(state,action)
    if(action.type === 'INPUT_CHANGE'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.inputValue
        return newState
    }
    if(action.type === 'COMMIT_VALUE'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        console.log(newState.list)
        return newState
    }
    if(action.type === 'DELECT_ITEM'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
   return state
}