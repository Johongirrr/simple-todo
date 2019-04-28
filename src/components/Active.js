import React from 'react'

const Active = ({completeTodo, todos})=>{
	const incompletedTodos = todos
	.filter(todo => todo.completed === false)
	.map(todo => (
		 <div className="card bg-primary text-white" key= {todo.id}>
    		<div className="card-body">
    		 		<input
					 style = {{width: '20px', height: '20px'}}
					 type = 'checkbox'
					 onChange = {()=>{completeTodo(todo.id)}}
					  />
					  <span className = 'h3 mb-2'>{todo.text}</span>
			</div>
    	</div>
		 
		
		))
 
	return (
		<div>
		<h1 className = 'text-center text-info mt-3'>Incompleted Todos </h1>
		 
		{incompletedTodos}
		</div>
		)
}

export default Active