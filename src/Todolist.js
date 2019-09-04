import React from 'react'
import 'antd/dist/antd.css';
import { Input , Button, List} from 'antd';
import store from './store'
import {getInputChange, getCommitChange, getdelecteChange} from './store/actionCreations'
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
          <div style={{marginLeft:30, marginTop: 30}}>
              <Input value={this.state.inputValue}   
              style={{width: 300, marginRight: 10}}
               onChange = {this.inputChange}
              />
              <Button type="primary" onClick={this.commitInput}>Primary</Button>
              <List style={{width:300,marginTop:10}}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (
                    <List.Item onClick={this.delectItem.bind(this,index)}> {item}</List.Item>
                )}
                />
          </div>
       )
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

   handleInput=()=>{
    this.setState(store.getState())

}
}
export default Todolist