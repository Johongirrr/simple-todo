import React from 'react'
 

 const getStyleBack = (completed)=>{
 	return {
 		textDecoration: completed ? 'line-through' : 'none'
 	}
 }

const All = ({text, id, completed,  deleteTodos, completeTodo})=>{
   
 
	return ( 

		<div>
		
		 <div className="card bg-primary text-white">
		 
    		 <div className="card-body">
    			<input style = {{width: '20px', height: '20px'}} type = "checkbox"  onChange = {()=>{completeTodo(id)}}/> 
				<span className = 'h4' style = {getStyleBack(completed)}>{text}</span>
				<button 
				type = 'button' 
				className = "float-right btn btn-danger btn-lg" 
				onClick = {()=>{deleteTodos(id)}}>X
				</button> 
				</div>
		 
  		</div> 
			 

	</div>
		)

}
export default All