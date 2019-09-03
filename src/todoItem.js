import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.delectItem = this.delectItem.bind(this)
    }
    render(){
        const {content, text} = this.props
        return(
					// jsx->reactElement->js对象(虚拟dom)-> 真实dom
					// React.reactElement['div',{id:'abc'},item]
            <div onClick={this.delectItem}>
               {text}- {content}
            </div>
        )
    }
    delectItem(){
        const {delectItem, index} = this.props
        delectItem(index)
        // console.log(this.props.index)
		} 
		
}
TodoItem.propTypes = {
	text: PropTypes.string.isRequired,
	content: PropTypes.string,
	delectItem: PropTypes.func,
	index: PropTypes.number
}
TodoItem.defaultProps = {
   text: 'hello'
}
export default TodoItem 
