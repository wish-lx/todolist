import React from 'react'

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.delectItem = this.delectItem.bind(this)
    }
    render(){
        return(
            <div onClick={this.delectItem}>
                {this.props.content}
            </div>
        )
    }
    delectItem(){
        this.props.delectItem(this.props.index)
        // console.log(this.props.index)
    }
}
export default TodoItem
