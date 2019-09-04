import React from 'react'
import 'antd/dist/antd.css';
import { Input , Button, List} from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
class Todolist extends React.Component{
   render(){
       return(
          <div style={{marginLeft:30, marginTop: 30}}>
              <Input placeholder="todo info"  style={{width: 300, marginRight: 10}}/>
              <Button type="primary">Primary</Button>
              <List style={{width:300,marginTop:10}}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item> {item}</List.Item>
                )}
                />
          </div>
       )
   }
}
export default Todolist