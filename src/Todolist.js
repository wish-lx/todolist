import React,{Fragment} from 'react'
import TodoItem from './todoItem'
import './style.css'
class Todolist extends React.Component{

    constructor(props){
       super(props)
       this.state = {
           inputValue: '',
           list:[
           ]
       }
    }
    handleChange=(e)=>{
        const value = e.target.value
        this.setState(()=>({
            inputValue: value
        }));
    }
    handleClick=()=>{
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }
    delectItem=(index)=>{
        this.setState((prevState)=>{
            let list = [...prevState.list]
            list.splice(index,1)
            return {
                list
            }
        })
    }
    // 逻辑拆分
    gettodoItem(){
        return (
            this.state.list.map((item, index) => {
                return (
                    <div>
                      <TodoItem content = {item} index={index}
                      delectItem = {this.delectItem}
                      ></TodoItem>
                         
                    </div>
                )
               
            })
        )
    }
    render(){
        return(
            <Fragment>
                <div>
                    {/* 注释的添加 */}
                    <label htmlFor="inserArea">请输入</label>
                    <input id='inserArea' className='input'
                    value={this.state.inputValue}
                    onChange = {this.handleChange}
                    />
                    <button onClick = {this.handleClick}>提交</button>
                </div>
                <ul >
                   {
                      this.gettodoItem()
                   }
                </ul>
            </Fragment>
        )
    }
}
export default Todolist