import React from 'react'

const Completed = ({todos, deleteTodos})=>{
	const completedTodos = todos
	.filter(todo => todo.completed === true)
	.map(todo =>(
		 <div className="card bg-primary text-white" key= {todo.id}>
    		<div className="card-body">

		<p className = 'h3'>{todo.text}<button type = 'button'  className = 'btn btn-lg btn-danger' onClick = {()=>{deleteTodos(todo.id)}}>X</button></p>
		 
		</div>
		 </div>
		))
	 
	  
	return (
		<div>
			<h1 className = 'text-center mt-3 text-success'>Completed todos</h1>
		{completedTodos}

		</div>
		)
}
export default Completed