import React from 'react'
import store from './store'
import {getInputChange, getCommitChange, getdelecteChange, getinitMessageFun} from './store/actionCreations'
import TodolistUI from './todoIistUI'
class Todolist extends React.Component{
    constructor(props){
      super(props)
    //   取到store里面的数据
      this.state = store.getState()
    //   store中的数据变化则触发handleInput事件(组件订阅store，只要store中的数据发生变化，就会触发this.handleInput方法)
      store.subscribe(this.handleInput)
    //   绑定作用域
      this.inputChange = this.inputChange.bind(this)
    //   this.handleInput = this.handleInput.bind(this)
    }
   render(){
       return(
        
        <TodolistUI 
        inputValue = {this.state.inputValue}
        inputChange = {this.inputChange}
        commitInput = {this.commitInput}
        list = {this.state.list}
        delectItem = {this.delectItem}
         ></TodolistUI>
       )
   }
   handleInput=()=>{
    this.setState(store.getState())
  
  }
   inputChange(e){
    //    创建一个action
       const action = getInputChange(e.target.value)
    //    派发action
      store.dispatch(action)
   }
   
   commitInput=()=>{
       const action = getCommitChange()
       store.dispatch(action)
   }
   delectItem(index) {
       const action = getdelecteChange(index)
       store.dispatch(action)
   }
   componentDidMount(){
       const action = getinitMessageFun()
       store.dispatch(action)
   }
  
}
export default Todolist