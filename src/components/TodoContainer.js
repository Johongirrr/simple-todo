import React from 'react'
import All from './All'

const TodosContainer = ({todos, deleteTodos, completeTodo})=>{
	 	 
 
	return <div> {
		todos.map(todo => (

			<All
			key = {todo.id}
			id = {todo.id}
			deleteTodos = {deleteTodos}
			completeTodo = {completeTodo}
			text = {todo.text}
			completed = {todo.completed}


			 />
		 
			))
	}  
	</div>
}
export default TodosContainer