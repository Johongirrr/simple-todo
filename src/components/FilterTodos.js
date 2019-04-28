import React, { Component }from 'react'
import TodoContainer from './TodoContainer'

class FilterTodos extends Component {
	 state = {
	 	searchText: ''
	 }

	 handleFilter = (e) =>{
	 	this.setState({
	 		[e.target.name]: e.target.value
	 	})
	 }
	 
	render(){
		 
		const { filterTodos } = this.props
		const {searchText: filterText} = this.state


		const todos = filterTodos.filter(todo =>{
			return todo.text.toLowerCase().includes(filterText.toLowerCase())
		})
		  
 
	return (
		 
			<div>
				<input 
			    className = "form-control form-control-lg mb-5" 
				type = "text"
				placeholder = "Filter todos..." 
				onChange = {this.handleFilter}
				name = "searchText"
				/>
			 
				 
				<TodoContainer 
				deleteTodos = {this.props.deleteTodos}
				completeTodo = {this.props.completeTodo}
				todos = {todos}/>
				 
				   
			</div>
		 
		)

 }
}
 

 export default FilterTodos