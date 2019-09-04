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
   return state
}