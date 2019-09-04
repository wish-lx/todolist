import React from 'react'

import 'antd/dist/antd.css';
import { Input , Button, List} from 'antd';
class TodolistUI extends React.Component{
   render(){
       return (
        <div style={{marginLeft:30, marginTop: 30}}>
        <Input value={this.props.inputValue}   
        style={{width: 300, marginRight: 10}}
         onChange = {this.props.inputChange}
        />
        <Button type="primary" onClick={this.props.commitInput}>Primary</Button>
        <List style={{width:300,marginTop:10}}
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => (
              <List.Item onClick={this.props.delectItem.bind(this,index)}> {item}</List.Item>
          )}
          />
    </div>
       )
   }
}
export default TodolistUI