import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.delectItem = this.delectItem.bind(this)
    }
    render(){
        const {content} = this.props
        return(
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
	content: PropTypes.string,
	delectItem: PropTypes.func,
	index: PropTypes.number
}
export default TodoItem 
