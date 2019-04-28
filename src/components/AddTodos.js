import React, { Component } from 'react'

class AddTodos extends Component {
	state = {
		text: ''

	}
	handleSubmit = (e)=>{
		e.preventDefault()
		 
			this.props.addTodos(this.state.text)
		 
		 
		this.setState({
			text: ''
		})
	}
	handleChange = (e) =>{

		this.setState({
			text: e.target.value 
		})
	}

	render(){
		return ( <div>
				  
				<form onSubmit = {this.handleSubmit}>
					<input className = 'form-control form-control-lg' 
					onChange = {this.handleChange}
					type = "text" 
					placeholder = "Add Todos..."
					value = {this.state.text} required/>
					<input type = 'submit' value = 'Submit'
					className = 'form-control form-control-lg btn-success'
					/>
 				</form>
				</div>
			)
	}
}

export default AddTodos