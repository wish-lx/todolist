import React from 'react'
import 'antd/dist/antd.css';
import { Input , Button, List} from 'antd';
import store from './store'


class Todolist extends React.Component{
    constructor(props){
      super(props)
      this.state = store.getState()
      console.log(this.state)
    }
   render(){
       return(
          <div style={{marginLeft:30, marginTop: 30}}>
              <Input value={this.state.inputValue} placeholder="todo info"  style={{width: 300, marginRight: 10}}/>
              <Button type="primary">Primary</Button>
              <List style={{width:300,marginTop:10}}
                bordered
                dataSource={this.state.list}
                renderItem={item => (
                    <List.Item> {item}</List.Item>
                )}
                />
          </div>
       )
   }
}
export default Todolist