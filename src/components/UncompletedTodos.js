import React from 'react'
import { withRouter } from 'react-router-dom'
const UncompletedTodos = ({todos, history})=>{
	const incompletedTodos = todos.filter(todo => todo.completed === false)
	 let completedTodoss = (  
	<div className="alert alert-success alert-dismissible fade show">
    	<button type="button" className="close " style = {{width: '20px', height: '20px'}} data-dismiss="alert">&times;</button>
    	<strong>You successfullly completed all of your tasks!!!</strong>  
  	</div>)

	return (
			<h1 
			 
			> 
			{incompletedTodos.length > 0 ?
			 `You have ${incompletedTodos.length} todos left` : completedTodoss }
			 </h1>
		)
}

export default withRouter(UncompletedTodos)