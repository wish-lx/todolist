import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.delectItem = this.delectItem.bind(this)
		}
		shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
					return true
				} else {
					return false
				}
		}
    render(){
        const {content} = this.props
        return(
					// jsx->reactElement->js对象(虚拟dom)-> 真实dom
					// React.reactElement['div',{id:'abc'},item]
            <div onClick={this.delectItem}>
               {content}
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
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	delectItem: PropTypes.func,
	index: PropTypes.number
}

export default TodoItem 
